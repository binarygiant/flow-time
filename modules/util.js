module.exports = (() => {
    const base64Encode = (originalString) => {
        return new Buffer(originalString).toString('base64');
    };

    // product owner said we have to uppercase all reversed strings
    const reverseMe = (originalString) => {
        return originalString.split('').reverse().join().replace(/,/g, '').toUpperCase();
    };

    return {
        base64Encode,
        reverseMe
    };

})();