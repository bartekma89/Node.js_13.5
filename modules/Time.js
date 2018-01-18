function getTime(time) {
    var hours = Math.floor(time / 3600);
    var minutes = Math.floor(time / 60) - hours * 60;
    var seconds = Math.floor(time % 60);
    if (time < 60) return seconds + ' sec.'
    else if (time < 3600)
        return minutes + " min " + seconds + " sec";
    else
        return hours + ' h ' + minutes + " min " + seconds + " sec";
}

module.exports = {
    transformTime: getTime
}