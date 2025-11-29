import sharp from 'sharp'
import { readdir } from 'fs/promises'
import { join, parse } from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const publicDir = join(__dirname, '..', 'public')

async function convertToWebP() {
  const files = await readdir(publicDir)

  for (const file of files) {
    const ext = parse(file).ext.toLowerCase()
    const name = parse(file).name

    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
      const inputPath = join(publicDir, file)
      const outputPath = join(publicDir, `${name}.webp`)

      try {
        await sharp(inputPath).webp({ quality: 85 }).toFile(outputPath)

        console.log(`✅ Converted: ${file} → ${name}.webp`)
      } catch (err) {
        console.error(`❌ Failed to convert ${file}:`, err.message)
      }
    }
  }

  console.log('\n🎉 WebP conversion complete!')
}

convertToWebP()
