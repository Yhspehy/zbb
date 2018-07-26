import cookie from 'js-cookie'
const getters = {
    username: state => state.user.username,
    pp: state => {
        cookie.get('pp')
    }
}

export default getters