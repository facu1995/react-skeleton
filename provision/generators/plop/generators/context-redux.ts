 import { Actions, PlopGeneratorConfig } from 'node-plop'
import * as path from 'path'
import * as utils from '../utils'
import { PromptNames, Answers } from './entities'

const contextReduxGeneratorPath = path.join(utils.baseGeneratorPath, 'src', 'components')
const componentTemplatePath = path.join(utils.baseTemplatesPath, 'context-redux')

export const contextReduxGenerator: PlopGeneratorConfig = {
  description: 'add an context-redux',
  prompts: [
    {
      type: 'input',
      name: PromptNames.componentName,
      message: 'What should it be name component called?',
      default: 'notas'
    }
  ],
  actions: (data) => {
    const answers = data as Answers
    const componentPath = path.join(contextReduxGeneratorPath, `${utils.toTitleCase(answers.componentName)}`)
    const stylePath = path.join(componentPath, 'style')
    const interfacesPath = path.join(componentPath, 'interfaces')
    const testPath = path.join(componentPath, 'test')
    const presentationalPath = path.join(componentPath, 'presentational')
    const actionsPath = path.join(componentPath, 'actions')
    const statePath = path.join(componentPath, 'state')


    if (utils.pathExists(componentPath)) {
      throw new Error(`component name '${answers.componentName}' exists in '${componentPath}' `)
    }

    utils.pathMake(componentPath)
    utils.pathMake(stylePath)
    utils.pathMake(interfacesPath)
    utils.pathMake(testPath)
    utils.pathMake(presentationalPath)
    utils.pathMake(actionsPath)
    utils.pathMake(statePath)

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
    actions.push({
      type: 'add',
      templateFile: `${componentTemplatePath}/state.add.hbs`,
      path: `${statePath}/${utils.toLowerCase(answers.componentName)}Reducer.ts`,
      abortOnFail: true
    })
    actions.push({
      type: 'add',
      templateFile: `${componentTemplatePath}/action.add.hbs`,
      path: `${actionsPath}/actions.ts`,
      abortOnFail: true
    })

    //

    actions.push({
      type: 'add',
      templateFile: `${componentTemplatePath}/add.add.hbs`,
      path: `${presentationalPath}/${utils.toTitleCase(answers.componentName)}Add.tsx`,
      abortOnFail: true
    })
    actions.push({
      type: 'add',
      templateFile: `${componentTemplatePath}/item.add.hbs`,
      path: `${presentationalPath}/${utils.toTitleCase(answers.componentName)}Item.tsx`,
      abortOnFail: true
    })
    actions.push({
      type: 'add',
      templateFile: `${componentTemplatePath}/list.add.hbs`,
      path: `${presentationalPath}/${utils.toTitleCase(answers.componentName)}List.tsx`,
      abortOnFail: true
    })
    actions.push({
      type: 'add',
      templateFile: `${componentTemplatePath}/title.add.hbs`,
      path: `${presentationalPath}/${utils.toTitleCase(answers.componentName)}Title.tsx`,
      abortOnFail: true
    }) 

    return actions
  }
}
