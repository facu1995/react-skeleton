import * as path from 'path'
import fs from 'fs'

export const baseGeneratorPath = path.join(__dirname, '../../../../')
export const baseTemplatesPath = path.join(__dirname, '../templates')

export const hyphenate = (text: string): string => {
  return text.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase()
}

export function toTitleCase(str: string) {
  return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase())
}

export function toLowerCase(str: string) {
  return str.replace(' ', '').toLowerCase()
}

export function pathExists(path: string) {
  return fs.existsSync(path)
}

export function pathMake(path: string) {
  return fs.mkdirSync(path)
}
