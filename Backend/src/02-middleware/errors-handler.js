const config = require("../01-utils/config") 
const logger = require("../01-utils/log-helper") 
const ErrorModel = require("../03-models/error-model") 


function errorsHandler(err, request, response, next) {
    if (err instanceof Error) {
        logger.error(err.message)
        //We don't want the frontend to see sensitive information (about our database for example).
        const msg = config.isDevelopment ? err.message : 'Some error occurred, please try again...'
        response.status(err.status || 500).send(msg)
        return 
    }

    if (err instanceof ErrorModel) {
        logger.info(err.message)
        response.status(err.status).send(err.message)
        return
    }
}

module.exports =  errorsHandler