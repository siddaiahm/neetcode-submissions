class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const indexes=nums.reduce((acc, num, index)=>{
            acc[num] = acc[num]||[];
            acc[num].push(index);
            return acc
        },{})
        for(let i=0;i<nums.length;i++){
            const remaining= target - nums[i];
            if(indexes[remaining]){
                if(indexes[remaining].length>1){
                    return [indexes[remaining][0],indexes[remaining][1]];
                }else if(indexes[remaining][0]!==i){
                return [i, indexes[remaining][0]]
                }
            }
        }
    }
}
