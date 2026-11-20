class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const anagramIndex = {}
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i]
            const sortedStr = str.split('').sort().join()
            if (Object.hasOwn(anagramIndex, sortedStr)) {
                anagramIndex[sortedStr].push(str)
            } else {
                anagramIndex[sortedStr] = [str]
            }
        }

        return Object.values(anagramIndex)
    }
}
