
alert("Hello! I'm a JavaScript alert");

//User interaction

const username = prompt('Type your name:')

//User name information
    document.body.innerHTML += `<center>Your name is <strong>${username}</strong></center> <br/><br/>`

    let nameNoSpace = username.replace(/ /g, "") // removing spaces

    document.body.innerHTML += `Your name have <strong>${nameNoSpace.length}</strong> letters <br/><br/>`

    document.body.innerHTML += `The second letter of your name is <strong>${username[1]}</strong> <br/><br/>`

    document.body.innerHTML += `The first index of your name is <strong>${username.indexOf(username)}</strong><br/><br/>`

    document.body.innerHTML += `The last index of your name is <strong>${username.length}</strong><br/><br/>`
    
    document.body.innerHTML += `The last 3 letters of your name are <strong>${username.slice(-3)}</strong><br/><br/>`

    document.body.innerHTML += `The words of your name are: <strong>${username.split(" ")}</strong><br/><br/>`

    document.body.innerHTML += `Your name in CAPS LOCK <strong>${username.toUpperCase()}</strong><br/><br/>`

    document.body.innerHTML += `Your name in lower case <strong>${username.toLowerCase()}</strong><br/><br/>`

