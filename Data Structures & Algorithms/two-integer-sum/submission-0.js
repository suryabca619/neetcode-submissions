class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const seen = {}

        for (let i = 0; i <= nums.length; i++) {
            const remaining = target - nums[i]

            if (Object.hasOwn(seen, remaining)) {
                return [seen[remaining], i]
            }

            seen[nums[i]] = i
        }
    }
}
