export function getFormatDate() {
    const date = new Date();
    let nowMonth = date.getMonth() + 1;
    let strDate = date.getDate();
    const seperator = "-";
    if (nowMonth >= 1 && nowMonth <= 9) {
        nowMonth = "0" + nowMonth;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    const nowDate = date.getFullYear() + seperator + nowMonth + seperator + strDate;
    return nowDate
}
