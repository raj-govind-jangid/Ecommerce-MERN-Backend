const formatError = (data) => {
    let result = data[0]
    return `${result.msg}`
}

module.exports = {formatError};