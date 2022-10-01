//sorting
let myArr = [12,24,16,18,56,-1,-15];
for(let i=0; i<myArr.length; i++) {
    for(let j=0; j<myArr.length; j++){
        if(myArr[j] > myArr[j+1]){
            let temp = myArr[j+1]
            myArr[j+1] = myArr[j];
            myArr[j] = temp
        }
    }
}
console.log(myArr)

//intersection of array
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
let nums1 = [1,2,2,1];
let nums2 = [2,2];
let intersectionOfArr = nums1.filter((val) => {
    return nums2.includes(val)
})
console.log([...new Set(intersectionOfArr)])

//anagrams

let groupAnagrams = function(strs) {
    let hash = {}, anagrams = [];
      
    for (let i = 0; i < strs.length; i++) {
      let word = strs[i].split('').sort(); 
      hash[word] = hash[word] || []; 
      hash[word].push(strs[i]);
    }
    return Object.values(hash); 
  };
  let strs = ["eat","tea","tan","ate","nat","bat"]
  console.log(groupAnagrams(strs))
