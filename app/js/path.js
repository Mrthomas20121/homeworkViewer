let path = {
    /**
     * Join paths together
     * @param  {...string} args 
     * @returns string
     */
    join:(...args) => {
        return args.join('/')
    },
    getAppPath: () => {
        let url = window.location.href.split('/')
        while(url[url.length-1] != 'app') {
            url.pop()
        }
        return url.join('/')
    }
}