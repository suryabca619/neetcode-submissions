class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count = {}

        for (let num of nums) {
            count[num] = (count[num] || 0) + 1
        }

        const numCountPairs = Object.keys(count).map(key => [key, count[key]]).sort((a, b) => b[1] - a[1])
        const res = []
        for (let i = 0; i < k; i++) {
            res.push(numCountPairs[i][0])
        }
        return res
    }
}
