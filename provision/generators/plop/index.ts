import { NodePlopAPI } from 'node-plop'
import helpers from 'handlebars-helpers'
import { reducerGenerator, componentGenerator } from './generators'
import shell from 'shelljs'

interface PrettifyCustomActionData {
  path: string
}
export default function plop(plop: NodePlopAPI) {
  plop.setHelper('eq', helpers().eq)
  plop.setGenerator('component', componentGenerator)
//  plop.setGenerator('reducer', reducerGenerator)
  plop.setActionType('prettify', (_, config) => {
    const data = config?.data as PrettifyCustomActionData
    shell.exec(`yarn prettier:fix -- "${data.path}"`, { silent: true })
    return ''
  })
}
