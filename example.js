function test(description, callback) {
    console.log(description);
    callback();

}

function expect(received) {
    function toBe(expected) {
        if (received === expected) {
            console.log("test has passed")
            return true
        } else {
            console.log("test has failed")
            console.log(`received: ${received}` + `expected:${expected}`)
        }
    }
    function toBelessThanOrEqual(expected) {
        if (received <= expected) {
            console.log("test has passed")
            return true;
        } else {
            console.log("test has failed")
            console.log(`received:${received} \n expected:${expected}`)
            return false
        }
    }

    function _toEqual(exp, rec) {
        let flag = true;
        let expectedLength = object.keys(exp).length;
        let receivedLength = object.keys(rec).length;
        if (receivedLength !== expectedLength) {
            return false
        }
        if (Array.isArray(exp) !== Array.isArray(rec)) {
            return false
        }

        for (let key in exp) {
            if (typeof exp[key] === "object" && typeof rec[key] === "object") {
                flag = _toEqual(exp[key], rec[key])
                if (!flag) { break }
            } else if (exp[key] !== rec[key]) {
                return false
            }
        }
        return flag
    }
    
    function toEqual(expected) {
        const isEqual = _toEqual(expected, received)
        if (isEqual) {
            console.log("test has passed")
        } else {
            console.log("test has failed")
        }
    }
}
