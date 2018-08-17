export function getMatchStatus(status) {
    switch (status) {
        case 0:
            return '未开始';
        case 1:
            return '进行中';
        case 2:
            return '已结束';
    }
}
