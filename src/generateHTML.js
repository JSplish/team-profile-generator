function managerOffice(office) {
    if (office){
        return `<p> Office Number: ${office}</p>` 
    } else {
        return ''
    }
}

function engineerGithub(github) {
    if (github){
        return `<p> GitHub: <a href = "https://github.com/${github}">${github}</a></p>` 
    } else {
        return ''
    }
}

function internSchool(school) {
    if (school){
        return `<p> School: ${school}</p>` 
    } else {
        return ''
    }
}

function infoCard(data) {
    return `
        <div class="column is-4-desktop">
            <div class="card">
                <header class="card-header">
                    <p class="card-header-title has-background-info-dark">
                        ${data.name} <br>
                        ${data.getRole()}
                    </p>
                </header>

                <div class="card-content has-background-grey-lighter has-text-dark">
                    <p>ID: ${data.ID}</p>
                    <p>Email: <a href = "mailto:${data.email}">${data.email}</a></p>
                    ${managerOffice(data.office)}
                    ${engineerGithub(data.github)}
                    ${internSchool(data.school)}
                </div>
            </div>
        </div>
        `
};

function team(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Members</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";">
    </head>

    <body>
        <nav class="navbar has-background-info-dark">
            <div>
                <h1 class="has-text-white is-size-1 p-4">Team Members</h1>
            </div>
        </nav>

        <div class="section">
             <div class="columns is-multiline">    
                ${data.map(card => infoCard(card)).join(" ")}
            </div>
        </div>
    </body>
    `
};



module.exports = team;