import { NodePlopAPI } from 'node-plop'
import helpers from 'handlebars-helpers'
import { reducerGenerator } from './generators'
import shell from 'shelljs'
interface PrettifyCustomActionData {
  path: string
}

export default function plop(plop: NodePlopAPI) {
  plop.setHelper('eq', helpers().eq)
  plop.setGenerator('reducer', reducerGenerator)
  plop.setActionType('prettify', (_, config) => {
    const data = config.data as PrettifyCustomActionData
    shell.exec(`yarn prettier:fix -- "${data.path}"`, { silent: true })
    return ''
  })
}
