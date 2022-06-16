export const compareToNow = (date: Date) => {
    const dateDiffNum: number = +new Date() - +date;
    let dateDiff: string = "только что";

    //86400000 - кол-во мс в сутках, 3600000 - в часе, 60000 - в минуте
    if (dateDiffNum >= 86400000) dateDiff = `${Math.floor(dateDiffNum / 86400000)} дней назад`;
    if (dateDiffNum < 86400000 && dateDiffNum >= 3600000) dateDiff = `${Math.floor(dateDiffNum / 3600000)} ч. назад`;
    if (dateDiffNum < 3600000 && dateDiffNum >= 60000) dateDiff = `${Math.floor(dateDiffNum / 60000)} мин. назад`;

    return dateDiff;
};
