function generateMarkdown(data) {

const readMeInformation = `
![GitHub last commit](https://img.shields.io/github/last-commit/${data.username}/${data.folder}?style=for-the-badge)
![GitHub pull requests](https://img.shields.io/github/issues-pr/${data.username}/${data.folder}?style=for-the-badge)
![GitHub contributors](https://img.shields.io/github/contributors/${data.username}/${data.folder}?style=for-the-badge)

# ${data.title} 
## ${data.subheading}
${data.date}

### Aim
${data.aim}

### Key Concepts for ${data.folder}
${data.concept}
    
## Contents
* [${data.contents[0]}](#${data.contents[0]})
* [${data.contents[1]}](#${data.contents[1]})
* [${data.contents[2]}](#${data.contents[2]})
* [${data.contents[3]}](#${data.contents[3]})
* [${data.contents[4]}](#${data.contents[4]})
* [${data.contents[5]}](#${data.contents[5]})



<a name="${data.contents[0]}">

## Build Process 
${data.build} 


<a name="${data.contents[1]}">

## Project Issues 
${data.issues}


<a name="${data.contents[2]}">

## Installation 
${data.install}


<a name="${data.contents[3]}">

## Usuage 
${data.use}
  
<a name="${data.contents[4]}">


## Tests
${data.test}

<a name="${data.contents[5]}">

## Additional Information
Licenses: ${data.licenses}
Contributions: ${data.contributors}



### ${data.name} // ${data.username} // ${data.email}
### Made with ReadMe.Md Generator Node.JS Project HomeworkWK9
`;
        return readMeInformation;
}

module.exports = generateMarkdown;