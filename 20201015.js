/*  Recap 1 - arrays 
*   Let's create an array of 5 elements
*   iterate over it with a for loop
*   and print out each element separately 
*/
function recap1() {
    const array = [1, 2, 3, 4, 5, 4567 , 0, 3];
    
    for (let i = 0; i < array.length; i++ ) {
        console.log(array[i]);
        // this [i] means access the array at the index of [i] and its (value) will be logged
    }
}
// Note: nothing will show up in the Console until you call the function by its name
//--->     recap1()



/** Recap 2 - arrays
 * Let's create 2 arrays of 5 numbers
 * and create a third array as a sum of the first two
 */
 function recap2() {
     const array1 = [1, 2, 3, 4, 5];
     const array2 = [4, 2, 9, 5, 6];
     const array3 = [];
     let i = 0;
     while (i < array1.length) {
         array3[i] = array1[i] + array2[i];
         // you must increment the loop using ++ , otherwise the loop will be infinite
         i++
        }
        console.log(array3);
        // you can also target certain array and certain position using array[]
        //---> console.log(array2[2])
    }
    // recap2();
    
    
    
    
/** Recap 3 - functions
* Let's create a new year countdown from 10 to 0 the bad way
*/
    function recap3() {
    
    
    
    
    }

