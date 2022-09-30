const fs = require('fs')


function safeDelete(fullPath) {
    try {
        if (!fullPath || !fs.existsSync(fullPath)) return

        fs.unlinkSync(fullPath)

    } catch (err) {
        //no need to display anything
    }

}

module.exports = safeDelete 
