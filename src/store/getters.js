const getters = {
    username: state => state.user.username,
    leagueList: state => state.league.leagueList,
    subLeagueList: state => state.league.subLeagueList, //关注联赛列表
    unSubLeagueList: state => state.league.unSubLeagueList, //非关注联赛列表
    subTeamList: state => state.league.subTeamList //关注球队列表
};

export default getters;
