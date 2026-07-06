class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr="";
        for(const str of strs){
            encodedStr+=str.length+"#"+str;
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let i=0;
        const decodedStrs=[];

        while(i<str.length){
            let j=i;
            while(str[j]!="#"){
                j++;
            }
            const strLength=Number(str.substring(i,j));
            decodedStrs.push(str.substring(j+1, j+strLength+1));
            i=strLength+j+1;
        }
        return decodedStrs
    }
}
