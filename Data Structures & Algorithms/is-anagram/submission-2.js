class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s==t){
            return true
        }
        if(s.length!= t.length){
            return false
        }
        const str1=s.split("");
        const str2=t.split("");
        const str1Alphabets=str1.reduce((acc, cur)=>{
            acc[cur]=(acc[cur]||0)+1;
            return acc
        },{});
        const str2Alphabets=str2.reduce((acc, cur)=>{
            acc[cur]=(acc[cur]||0)+1;
            return acc
        },{});
        let str2AlphabetKeys=Object.keys(str2Alphabets);
        for(const alphabetKey of str2AlphabetKeys){
            if(!str1Alphabets[alphabetKey] || str1Alphabets[alphabetKey]!== str2Alphabets[alphabetKey]){
                return false
            }
        }
        return true;
    }
}
