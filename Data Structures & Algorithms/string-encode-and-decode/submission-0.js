class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = ''
        for (let str of strs) {
            res += str.length + '#' + str
        }
        console.log(res)
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = []
        let i = 0
        while (i < str.length) {
            let j = i
            while(str[j] !== '#') {
                j++
            }
            let strLength = parseInt(str.substring(i, j));
            // console.log(strLength, )
            i = j + 1;
            j = i + strLength
            res.push(str.substring(i , j));
            i = j
        }
        return res
    }
}
