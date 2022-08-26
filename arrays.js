//Array Access (TC: O(1))
var train1 = ["Wheat","Rice","Barley"];
console.log(train1[0]);
//output: Wheat

//Array Iterator(TC: O(N))
for(var i=0;i<train1.length;i++) {
    console.log(train1[i]);
}
/**
 * output:
 *  - Wheat
 *  - Rice
 *  - Barley
 */

//letterFinder: TC: O(N) and SC: O(1)
function findLetterPosition(word, match) {
    for(var i=0;i<word.length;i++) {
        if(word[i]==match) {
            return i;
        }
    }
    return -1;
}
console.log(findLetterPosition("Help",'p'));
//output: 3