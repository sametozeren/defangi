class ServerResult {
    errorResult(status, message) {
        return {
            status: status,
            message: message,
        };
    }

    successResult(status, message) {
        return {
            status: status,
            message: message,
        };
    }

    successResult(status, message, data) {
        return {
            status: status,
            message: message,
            result: data,
        };
    }
}

module.exports = new ServerResult();