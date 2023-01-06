let times =0;

const syncDB = () => {
    times++;
    console.log('tick cada mulitiplo 5 segundos:',times);
    
    return times;
}

module.exports = {
    syncDB
}
