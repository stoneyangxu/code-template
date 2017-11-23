
const path = require('path')
const fs = require('fs')
const chalk = require('chalk');

const templateFile = path.resolve(__dirname, '../../boilerplates', '.editorconfig')

export default function(destPath = '.') {
  const absolutePath = path.resolve(destPath)

  if (!fs.existsSync(absolutePath)) {
    console.log(chalk.red(`target path not exist: ${absolutePath}`))
    return
  }

  if (!fs.existsSync(templateFile)) {
    console.log(chalk.red(`template file not exist: ${templateFile}`))
  }

  console.log(chalk.green(`generate .editorconfig at ${absolutePath}`))

  fs.copyFileSync(templateFile, path.resolve(absolutePath, '.editorconfig'))
}
