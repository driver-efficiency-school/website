import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Read package.json
const packagePath = join(__dirname, '..', 'package.json')
const packageJson = JSON.parse(readFileSync(packagePath, 'utf-8'))

// Allow deliberate releases (e.g. v1.1.0) to deploy without the patch
// auto-incrementing. Set SKIP_VERSION_BUMP=1 in the build env to skip
// the package.json bump. The build-number suffix in Footer.vue still
// updates so each rebuild is identifiable.
const skipVersionBump = process.env.SKIP_VERSION_BUMP === '1'

let newVersion = packageJson.version
if (!skipVersionBump) {
  const [major, minor, patch] = packageJson.version.split('.').map(Number)
  newVersion = `${major}.${minor}.${patch + 1}`
  packageJson.version = newVersion
  writeFileSync(packagePath, JSON.stringify(packageJson, null, 2) + '\n')
}

// Generate build date in YYMMDD format
const now = new Date()
const datePrefix = `${String(now.getFullYear()).slice(2)}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`

// Read current Footer.vue to get existing build number
const footerPath = join(__dirname, '..', 'src', 'components', 'Footer.vue')
let footerContent = readFileSync(footerPath, 'utf-8')

// Extract current build number and check if same day
const currentBuildMatch = footerContent.match(/const version = 'v[\d.]+\s*\((\d{6})(\d{2})\)'/)
let buildNumber = 1

if (currentBuildMatch) {
  const currentDatePrefix = currentBuildMatch[1]
  const currentBuildNum = parseInt(currentBuildMatch[2], 10)

  // If same day, increment build number; otherwise reset to 01
  if (currentDatePrefix === datePrefix) {
    buildNumber = currentBuildNum + 1
  }
}

const buildString = `${datePrefix}${String(buildNumber).padStart(2, '0')}`

// Replace version string
const versionRegex = /const version = 'v[\d.]+\s*\(\d+\)'/
const newVersionString = `const version = 'v${newVersion} (${buildString})'`
footerContent = footerContent.replace(versionRegex, newVersionString)

writeFileSync(footerPath, footerContent)

console.log(`✅ Version bumped to v${newVersion} (${buildString})`)
