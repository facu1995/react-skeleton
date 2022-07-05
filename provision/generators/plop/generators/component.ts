import { Actions, PlopGeneratorConfig } from 'node-plop'
import * as path from 'path'
import * as utils from '../utils'
import { PromptNames, Answers } from './entities'

const componentGeneratorPath = path.join(utils.baseGeneratorPath, 'src', 'components')
const componentTemplatePath = path.join(utils.baseTemplatesPath, 'components')

export const componentGenerator: PlopGeneratorConfig = {
  description: 'add an component',
  prompts: [
    {
      type: 'input',
      name: PromptNames.componentName,
      message: 'What should it be name component called?',
      default: 'counter'
    }
  ],
  actions: (data) => {
    const answers = data as Answers
    const componentPath = path.join(componentGeneratorPath, `${utils.toTitleCase(answers.componentName)}`)
    const stylePath = path.join(componentPath, 'style')
    const interfacesPath = path.join(componentPath, 'interfaces')
    const testPath = path.join(componentPath, 'test')


    if (utils.pathExists(componentPath)) {
      throw new Error(`component name '${answers.componentName}' exists in '${componentPath}' `)
    }

    utils.pathMake(componentPath)
    utils.pathMake(stylePath)
    utils.pathMake(interfacesPath)
    utils.pathMake(testPath)

    const actions: Actions = []

    actions.push({
      type: 'add',
      templateFile: `${componentTemplatePath}/component.add.hbs`,
      path: `${componentPath}/${utils.toTitleCase(answers.componentName)}.tsx`,
      abortOnFail: false
    })

    actions.push({
      type: 'add',
      templateFile: `${componentTemplatePath}/style.add.hbs`,
      path: `${stylePath}/style.css`,
      abortOnFail: true
    })

    actions.push({
      type: 'add',
      templateFile: `${componentTemplatePath}/interface.add.hbs`,
      path: `${interfacesPath}/interfaces.ts`,
      abortOnFail: true
    })
    
    actions.push({
      type: 'add',
      templateFile: `${componentTemplatePath}/test.add.hbs`,
      path: `${testPath}/test.tsx`,
      abortOnFail: true
    })

    return actions
  }
}
