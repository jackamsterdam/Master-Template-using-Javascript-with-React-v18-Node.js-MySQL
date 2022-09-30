import { Notyf } from "notyf";

class NotifyService {
    notification = new Notyf({ duration: 4000, position: { x: 'center', y: 'top' } })

    success(message) {
        this.notification.success(message)

    }

    error(err) {
        const message = this.extractErrorMessage(err)
        this.notification.error(message)
    }

    extractErrorMessage(err) {
       if (typeof err === 'string') return err 

       if (typeof err.response?.data === 'string') return err.response.data 

       if (Array.isArray(err.response?.data)) return err.response.data[0]

       if (typeof err.message === 'string') return err.message 

       return 'Some error occured, please try again...'
    }
}

const notify = new NotifyService()

export default notify