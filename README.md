# Efficiver Landing Page Template

## <a href="https://www.shadcn-vue.com/" target="_blank">Shadcn-Vue</a> + <a href="https://vuejs.org/" target="_blank">Vue.js</a> + <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a> + <a href="https://tailwindcss.com/" target="_blank">Tailwind</a>.

Live demo is now available: <a href="https://shadcn-vue-landing-page.vercel.app" target="_blank">Live Demo</a>

## Sections

- [x] Navbar
- [x] Sidebar(mobile)
- [x] Hero
- [x] Sponsors
- [x] Benefits
- [x] Features
- [x] Services
- [x] HowItWorks
- [x] Testimonials
- [x] Pricing
- [x] Frequently Asked Questions(FAQ)
- [x] Team
- [x] Community
- [x] Contact
- [x] Footer

## Features

- [x] Fully Responsive Design
- [x] User Friendly Navigation
- [x] Dark Mode
- [x] Meta tags
- [x] Contact Form Integration (email-fullstack API)
- [x] Newsletter Subscription (email-fullstack API)

## API Integration

This website integrates with the Efficiency School email backend API for:

### Contact Form

- **Endpoint**: `POST https://email.efficiency.school/api/v1/contact`
- **Features**: Full contact form with validation, email notifications
- **Source**: Automatically set to "efficiver.com"

### Newsletter Subscription

- **Endpoint**: `POST https://email.efficiency.school/api/v1/subscribers/subscribe`
- **Features**: Email subscription with preferences, duplicate handling
- **Source**: Automatically set to "efficiver.com"

## Testing API Integration

### Test Contact Form

```bash
curl -X POST https://email.efficiency.school/api/v1/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "subject": "API Test",
    "message": "Testing contact form integration",
    "source": "efficiver.com"
  }'
```

### Test Newsletter Subscription

```bash
curl -X POST https://email.efficiency.school/api/v1/subscribers/subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "subscriber@example.com",
    "name": "Test Subscriber",
    "preferences": ["technology", "business"],
    "source": "efficiver.com"
  }'
```

## Deployment

### Building for Production

```bash
npm run build
```

This will create a `dist/` directory with optimized production files.

### Uploading to Server

Use the provided deployment scripts to deploy to the appropriate environment:

**Development Deployment:**

```bash
./deploy-dev.sh
```

**Production Deployment:**

```bash
./deploy-prod.sh
```

**What the scripts do:**

- Builds the project (if needed)
- Cleans unwanted files locally and remotely
- Uploads all files to the respective environment
- Uses SSH key authentication for secure transfer
- Provides clear feedback on deployment status

**Server Details:**

- **Host**: `app01.digidhamu.com`
- **User**: `dhamukrish`
- **Dev Path**: `/home/dhamukrish/digidhamu/efficiver.com/www-dev`
- **Prod Path**: `/home/dhamukrish/digidhamu/efficiver.com/www`
- **Protocol**: rsync over SSH with sudo

**Prerequisites:**

- SSH key configured for passwordless authentication
- Access to the server via SSH with sudo privileges

## How to install

1. Clone this repositoy:

```bash
git clone https://github.com/leoMirandaa/shadcn-vue-landing-page.git
```

2. Go into project

```bash
cd shadcn-vue-landing-page
```

3. Install dependencies

```bash
npm install
```

4. Run project

```bash
npm run dev
```
