#!/bin/bash

# Efficiver Website Deploy Script - Production Environment
# Uploads built website files to the production server

set -e  # Exit on any error

# Configuration
SOURCE_DIR="./dist"
REMOTE_HOST="app03.digidhamu.com"
REMOTE_PORT="2222"
REMOTE_USER="dhamukrish"
REMOTE_PATH="/home/dhamukrish/digidhamu/efficiver.com/www"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED_BG='\033[0;41m'
NC='\033[0m' # No Color

echo -e "${RED_BG}🚀 Starting Efficiver website deployment to PRODUCTION...${NC}"

# Check if source directory exists
if [ ! -d "$SOURCE_DIR" ]; then
    echo -e "${RED}❌ Error: Source directory '$SOURCE_DIR' does not exist!${NC}"
    echo -e "${YELLOW}💡 Make sure to run 'npm run build' first${NC}"
    exit 1
fi

# Check if source directory has files
if [ -z "$(ls -A $SOURCE_DIR)" ]; then
    echo -e "${RED}❌ Error: Source directory '$SOURCE_DIR' is empty!${NC}"
    echo -e "${YELLOW}💡 Make sure to run 'npm run build' first${NC}"
    exit 1
fi

echo -e "${YELLOW}📁 Source directory: $SOURCE_DIR${NC}"
echo -e "${YELLOW}🌐 Target server: $REMOTE_HOST${NC}"
echo -e "${YELLOW}📍 Remote path: $REMOTE_PATH${NC}"
echo -e "${RED_BG}🏷️  Environment: PRODUCTION${NC}"

# Create a temporary batch file for SFTP
BATCH_FILE=$(mktemp)

# Create SFTP batch commands
cat > "$BATCH_FILE" << EOF
cd $REMOTE_PATH
lcd $SOURCE_DIR
sudo put -r *
bye
EOF

echo -e "${YELLOW}🧹 Cleaning server directory...${NC}"

# Clean the server directory first
ssh -p "$REMOTE_PORT" "$REMOTE_USER@$REMOTE_HOST" "sudo rm -rf $REMOTE_PATH/*"

echo -e "${YELLOW}🧽 Removing unwanted files from source...${NC}"

# Remove unwanted files from local directory before upload
find "$SOURCE_DIR" -name '.DS_Store' -delete
find "$SOURCE_DIR" -name 'Thumbs.db' -delete
find "$SOURCE_DIR" -name '*.log' -delete

echo -e "${YELLOW}🔄 Uploading files via rsync with sudo...${NC}"

# Use rsync with sudo for upload (without --delete since we already cleaned)
if rsync -avz -e "ssh -p $REMOTE_PORT" --exclude='.DS_Store' --exclude='Thumbs.db' --exclude='*.log' --rsync-path="sudo rsync" "$SOURCE_DIR/" "$REMOTE_USER@$REMOTE_HOST:$REMOTE_PATH/"; then
    echo -e "${GREEN}✅ Deployment to PRODUCTION completed successfully!${NC}"
    echo -e "${GREEN}🌐 Production site available at: https://efficiver.com${NC}"
else
    echo -e "${RED}❌ Deployment failed!${NC}"
    echo -e "${YELLOW}💡 Check your SSH keys or server permissions${NC}"
    exit 1
fi

echo -e "${GREEN}🧹 Cleanup completed${NC}"
echo -e "${GREEN}🎉 PRODUCTION deployment complete!${NC}"