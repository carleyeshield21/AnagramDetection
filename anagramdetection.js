// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

var isAnagram = function(test, original) {
    // We convert the strings to lowercase to have an accurate comparison. We then use the sort function to arrange the elements in ascending order. We will not remove the recurring elements for direct comparison. We use the for loop for comparing the elements of both array, then use the return in the if statement when it detects an inequality.

    test = test.toLowerCase()
    original = original.toLowerCase()

    testArr = []
    for(i=0; i<=test.length-1; i++){
        testArr.push(test[i])
    }
    sortedtest = testArr.sort()

    originalArr = []
    for(i=0; i<=original.length-1; i++){
        originalArr.push(original[i])
    }
    sortedoriginal = originalArr.sort()
    
    if(test.length != original.length){
        console.log(`${false}: Not an anagram because the lengths of ${test} and ${original} are not equal`)
    } else {
        for(i=0; i<=sortedoriginal.length-1; i++){
            // console.log(sortedoriginal[i], sortedtest[i])
            if(sortedoriginal[i] != sortedtest[i]){
                return console.log(`${false}: ${test} is not an anagram of ${original}`)
            }
        }
        return console.log(`${true}: ${test} is an anagram of ${original}`)
    }

};
isAnagram('Buckethead', 'DeathCubeK')
console.log('=====')
isAnagram('toffee', 'foefet')
console.log('=====')
isAnagram('dumble', 'bumble')
console.log('=====')
isAnagram('BucketheadD', 'DeathCubeK')