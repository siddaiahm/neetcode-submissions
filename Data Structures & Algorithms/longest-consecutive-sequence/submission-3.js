class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numset=new Set(nums);
        let max=0;
        
        for(let num of numset){
            if(max>(numset.length/2)){
                return max
            }
            if(!numset.has(num-1)){
                let length=1;
                let current=num;
                while(numset.has(current+1)){
                    current++;
                    length++;
                }
                max=Math.max(max,length)
            }
        }
        return max;
    }
}
