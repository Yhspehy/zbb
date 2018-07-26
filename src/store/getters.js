import cookie from 'js-cookie';
const getters = {
    username: state => state.user.username,
    pp: state => {
        console.log(state.user.pp);
        cookie.get('pp');
    }
};

export default getters;
