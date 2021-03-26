class DefaultAlert {
    
    /**
     * @constructor
     */
    constructor(message, type) {
        this.message = message
        this.type = type
    }

    /**
     * 
     * @param {HTMLElement} element 
     */
    build(element) {
        let alertDiv = document.createElement('div')
        alertDiv.classList.add('alert' ,'alert-dismissible', `alert-${this.type}`)

        // close button
        let button = document.createElement('button')
        button.classList.add('close')
        button.innerHTML = '&times;'
        button.setAttribute('data-dismiss', 'alert')
        button.type = 'button'
        alertDiv.append(button)

        // message
        let strong = document.createElement('strong')
        strong.innerHTML = this.message

        alertDiv.append(strong)

        element.append(alertDiv)
    }
}

class Update extends DefaultAlert {
    constructor(message) {
        super(message, 'warning')
    }
}

let versioning = () => {
    let url = new URLSearchParams(location.search)

    // get the update boolean and the version
    let update = url.get('update')
    let version = url.get('version')

    if(update=='true') {
        // tell the user that there is a update available
        let update = new Update(`there is a new update available at https://github.com/Mrthomas20121-Mods/Tinkers-Reforged/releases/tag/${version}`)
        update.build(document.body)
    }

    // return the version
    return version
}