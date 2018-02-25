module.exports = (() => {
    const base64Encode = (originalString) => {
        return new Buffer(originalString).toString('base64');
    };

    const reverseMe = (originalString) => {
        return originalString.split('').reverse().join().replace(/,/g, '');
    }

    return {
        base64Encode,
        reverseMe
    };

})();