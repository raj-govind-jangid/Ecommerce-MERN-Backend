const formatError = (data) => {
    return data.map((x)=>{return {[x.param] : `${x.param} has ${x.msg}`} });
}

module.exports = {formatError};