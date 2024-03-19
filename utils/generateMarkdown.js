// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.project}

  ## Description
  ${data.description}

  ## Installation
  ${data.notes}

  ## Usage
  ${data.usage}

  ## Contributors
  ${data.contributors}

  ## Testers
  ${data.testers}

  ## License
  ${data.license}

  ## GitHub
  ${data.github}

  ## Contact
  ${data.email}
  `;
}


module.exports = generateMarkdown;
