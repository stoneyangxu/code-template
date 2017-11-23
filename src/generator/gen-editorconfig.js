
const path = require('path')
const fs = require('fs')
const chalk = require('chalk');

const templateFile = path.resolve(__dirname, '../../boilerplates', '.editorconfig')

export default function(destPath) {
  let absolutePath = '';
  if (destPath) {
    absolutePath = path.resolve(destPath)
  } else {
    absolutePath = __dirname
  }

  if (!fs.existsSync(absolutePath)) {
    console.log(chalk.red(`target path not exist: ${absolutePath}`))
    return
  }

  if (!fs.existsSync(templateFile)) {
    console.log(chalk.red(`template file not exist: ${templateFile}`))
  }

  fs.copyFileSync(templateFile, path.resolve(absolutePath, '.editorconfig'))
}
