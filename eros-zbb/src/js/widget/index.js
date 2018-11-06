let instance = null
export default class Widget {
    constructor () {
        if (!instance) {
            instance = this
        }
        return instance
    }
}
