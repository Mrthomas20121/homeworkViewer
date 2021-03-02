let versioning = () => {
    let url = new URLSearchParams(location.search)

    // get the update boolean and the version
    let update = url.get('update')
    let version = url.get('version')

    if(update) {
        // tell the user that there is a update available
    }

    // return the version
    return version
}

class Update extends DefaultAlert {
    constructor(message) {
        super(message, 'warning')
    }
}

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
        alertDiv.classList.add('alert' ,'alert-dismissible', `alert-${type}`)

        let button = document.createElement('button')
        button.classList.add('close')
        button.innerHTML = '&times;'
        button.setAttribute('data-dismiss', 'alert')
        button.type = 'button'
        alertDiv.append(button)

        let strong = document.createElement('strong')
        strong.innerHTML = this.message

        element.append(alertDiv)
    }
}