class ServerResult {
    errorResult(message) {
        console.log('çalıştı')
        return {
            status: false,
            message: message,
        };
    }
    
    successResult(message) {
        return {
            status: false,
            message: message,
        };
    }

}

module.exports= new ServerResult();