class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length != t.length) return false

        const sChrCount = {}
        const tChrCount = {}
    
        for (let i = 0; i <= s.length; i++) {
            if (sChrCount[s[i]]) {
                sChrCount[s[i]] += 1
            } else {
                sChrCount[s[i]] = 1
            }

            if (tChrCount[t[i]]) {
                tChrCount[t[i]] += 1
            } else {
                tChrCount[t[i]] = 1
            }
        }

        for (const key in sChrCount) {
            if (tChrCount[key] != sChrCount[key]) return false
        }

        return true

    }
}
