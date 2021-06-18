let checkForUpdate = () => {
    if(navigator.onLine) {
        fetch('https://raw.githubusercontent.com/Mrthomas20121/homeworkViewer/master/app/version.json')
        .then(response => response.json())
        .then(data => {
            loadApp(data)
        }).catch((reason) => {
            console.log(reason)
        });
    }
}

let loadApp = (file_data) => {
    console.log(file_data)
    window.api.readFile('./app/version.json')
    .then((data) => {
        // document.body.innerHTML = data.version
        
    })

    // if(file_data.version == data.version) {
    //     //location.assign(`./index.html?update=true&version=${version}`)
    // }
    // else location.assign(`./index.html?update=false&version=${app_version}`)
}

checkForUpdate()