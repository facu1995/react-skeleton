import { Actions, PlopGeneratorConfig } from 'node-plop'
import * as path from 'path'
import * as utils from '../utils'
import { PromptNames, Answers } from './entities'

const reducerGeneratorPath = path.join(utils.baseGeneratorPath, 'src', 'components')
const reducerTemplatePath = path.join(utils.baseTemplatesPath, 'reducers')

export const reducerGenerator: PlopGeneratorConfig = {
  description: 'add an reducer',
  prompts: [
    {
      type: 'input',
      name: PromptNames.reducerName,
      message: 'What should it be name reducer called?',
      default: 'counter'
    }
  ],
  actions: (data) => {
    const answers = data as Answers

    const reducerPath = path.join(reducerGeneratorPath, `${utils.toTitleCase(answers.reducerName)}Reducer`)
    const actionsPath = path.join(reducerPath, 'actions')
    const statePath = path.join(reducerPath, 'state')
    const stylePath = path.join(reducerPath, 'style')
    const interfacesPath = path.join(reducerPath, 'interfaces')

    if (utils.pathExists(reducerPath)) {
      throw new Error(`reducer name '${answers.reducerName}' exists in '${reducerPath}' `)
    }

    utils.pathMake(reducerPath)
    utils.pathMake(actionsPath)
    utils.pathMake(statePath)
    utils.pathMake(stylePath)
    utils.pathMake(interfacesPath)

    const actions: Actions = []

    actions.push({
      type: 'add',
      templateFile: `${reducerTemplatePath}/reducer.add.hbs`,
      path: `${reducerPath}/${utils.toTitleCase(answers.reducerName)}ReducerComponent.tsx`,
      abortOnFail: false
    })

    actions.push({
      type: 'add',
      templateFile: `${reducerTemplatePath}/state.add.hbs`,
      path: `${statePath}/${utils.toLowerCase(answers.reducerName)}Reducer.ts`,
      abortOnFail: true
    })

    actions.push({
      type: 'add',
      templateFile: `${reducerTemplatePath}/style.add.hbs`,
      path: `${stylePath}/style.css`,
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
