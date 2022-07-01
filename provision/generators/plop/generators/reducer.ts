import { Actions, PlopGeneratorConfig } from 'node-plop'
import * as path from 'path'
import { pathExists, baseGeneratorPath, baseTemplatesPath, pathMake } from '../utils'
import { ReducerPromptNames, Answers } from './entities'

const reducerGeneratorPath = path.join(baseGeneratorPath, 'src', 'components')
const reducerTemplatePath = path.join(baseTemplatesPath, 'reducer')

export const reducerGenerator: PlopGeneratorConfig = {
  description: 'add an reducer',
  prompts: [
    {
      type: 'input',
      name: ReducerPromptNames.reducerName,
      message: 'What should it be name reducer called?',
      default: 'counter'
    }
  ],
  actions: (data) => {
    const answers = data as Answers

    const reducerPath = path.join(reducerGeneratorPath, `${answers.reducerName}Reducer`)
    const actionsPath = path.join(reducerPath, 'actions')
    const statePath = path.join(reducerPath, 'state')
    const interfacesPath = path.join(reducerPath, 'interfaces')

    if (pathExists(reducerPath)) {
      throw new Error(`reducer name '${answers.reducerName}' exists in '${reducerPath}' `)
    }

    pathMake(actionsPath)
    pathMake(statePath)
    pathMake(interfacesPath)

    const actions: Actions = []

    actions.push({
      type: 'add',
      templateFile: `${reducerTemplatePath}/reducer.add.hbs`,
      path: `${reducerPath}/${answers.reducerName}ReducerComponent.ts`,
      abortOnFail: false
    })

    actions.push({
      type: 'add',
      templateFile: `${reducerTemplatePath}/state.add.hbs`,
      path: `${statePath}/${answers.reducerName}Reducer.ts`,
      abortOnFail: true
    })

    actions.push({
      type: 'add',
      templateFile: `${reducerTemplatePath}/interface.add.hbs`,
      path: `${interfacesPath}/interfaces.ts`,
      abortOnFail: true
    })

    actions.push({
      type: 'add',
      templateFile: `${reducerTemplatePath}/action.add.hbs`,
      path: `${actionsPath}/actions.ts`,
      abortOnFail: true
    })

    return actions
  }
}
