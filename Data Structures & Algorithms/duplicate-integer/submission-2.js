class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const existingNum={};
        for(let num of nums){
            if(existingNum[num]){
                return true
            }
            existingNum[num]=1;
        }
        return false;
    }
}
