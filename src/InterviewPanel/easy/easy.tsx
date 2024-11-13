import React, { useEffect } from 'react'

function Easy() {

    let printString = ""

    useEffect(()=>{
        console.log("#### Numbers Arr sort");

        const sampleArr = [5, 4, 9, 8, 4, 0, 3, "a", "k", "p"];
    
        const ascendingOrderArr = sampleArr.slice().sort();
    
        const descendingOrderArr = ascendingOrderArr.slice().reverse();
    
        // console.log("** ascendingOrderArr:", ascendingOrderArr, "descendingOrderArr:", descendingOrderArr);
    
        ////////////////////////////////////////////////////////////////////////////////////////
    
        console.log("#### String Arr sort");
    
        const sampleStringArr = ["5", "4", "9", "8", "4", "0", "3", "a", "p", "k"];
    
        const ascendingOrderStringArr = sampleStringArr.slice().sort();
    
        const descendingOrderStringArr = ascendingOrderStringArr.slice().reverse();
    
        // console.log("** ascendingOrderStringArr:", ascendingOrderStringArr, "descendingOrderStringArr:", descendingOrderStringArr);
    
        /////////////////////////////////////////////////////////////////////////////////////////////
    
        console.log("### string Reverse or palindrome");
    
        const string = "abcdefghij";
    
        const stringToArr = string.split("");
    
        const stringRev = stringToArr.slice().reverse();
    
        const ArrToString = stringRev.join().replaceAll(",", "");
        printString = ArrToString;
    
        console.log("> string =>", string);
    
        // console.log("stringToArr:", stringToArr);
        // console.log("stringRev:", stringRev);
        // console.log( "ArrToString:", ArrToString);
        console.log("** String Reverse =>", string.split("").reverse().join().replaceAll(",", ""));
    
        console.log("** Palindrome String =>", string.split("").reverse().join().replaceAll(",", "") === string);
    
    
        console.log("### Collection of numbers in that any of the pair should be equal to sum = 8");
    
        const sumArr1 = [1, 2, 3, 5];
        const sumArr2 = [1, 2, 4, 4];
    
        const pairArr: number[] = [];
    
        for(let i = 0; i<sumArr1.length; i++){
            for(let j=i+1; j<sumArr1.length; j++){            
                if((sumArr1[i] + sumArr1[j]) === 8){
                    pairArr.push(sumArr1[i], sumArr1[j]);
                }
            }
        }    
    
        console.log("** pairArr:", pairArr);
    
        function findPairsWithSum(array: number[], targetSum: number) {
            const pairs = [];
            const seenNumbers = new Set(); // is used to an empty object as {}
    
            for (const num of array) {        
                const complement = targetSum - num;
                
                if (seenNumbers.has(complement)) {
                    pairs.push([complement, num]);
                }
                
                seenNumbers.add(num);
            }
        
            return pairs;
        }
        
        console.log("** pairArr alternate sol:", findPairsWithSum(sumArr2, 8));
        
        
    
        console.log("### Sum of arr elements using array reducer method");
            
        const arrToAdd = [1, 2, 3, 9];    
    
        const sumOfTotalArrResult = arrToAdd.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        });
    
        console.log(arrToAdd, "** sumOfTotalArrResult using reducer:", sumOfTotalArrResult);

        console.log("### Remove the duplicate elements from an arr");

        const dupElementsArr = [1, 3, 4, 5, 1, 5, 3, 6, 9];

        const uniqueArrFromDuplicateArrElements= new Set();

        console.log(uniqueArrFromDuplicateArrElements);
        

        
        
    },[]);
   



return (
    <div>Easy {printString}</div>
)
}

export default Easy