import { writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

writeFileSync(resolve('docs', '.nojekyll'), '')
