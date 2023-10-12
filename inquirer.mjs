import inquirer from 'inquirer'
inquirer
  .prompt([
    {
      type: 'password',
      name: 'password',
      message: 'Enter your password'
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers.password)
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  })