/* function test1{
var arr1 = [17, 28, 57, 357, 75, 20, 57, 20, 357, 653, 17];
var outputArray = [];

for (i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
  console.log(outputArray);
  var isDuplicate = outputArray.includes(arr1[i]);
  console.log(isDuplicate);
  if (!isDuplicate) {
    outputArray.push(arr1[i]);
  }
}
console.log(outputArray);
}
 */





var arr1 = [17, 28, 57, 357, 75, 20, 57, 20, 357, 653, 17];
var outputArray = [];



for (let i = 0; i < arr1.length; i++) {
    
    var isDuplicate = outputArray.includes(arr1[i]);
    var repeats = 0;

    if (isDuplicate) {
        repeats+1;
        outputArray.push(arr1[i]);
    }
}
console.log(outputArray);