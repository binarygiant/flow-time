module.exports = (() => {
    const base64Encode = (originalString) => {
        return new Buffer(originalString).toString('base64');
    };

    return {
        base64Encode
    };

})();