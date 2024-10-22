class CustomAPIError extends Error {
    constructor(message, statusCode = 500) {
        super(message);
        this.statusCode = statusCode;
    }
}

const createCustomAPIError = (message, statusCode) => {
    return new CustomAPIError(message, statusCode);
}

module.exports = {createCustomAPIError, CustomAPIError};