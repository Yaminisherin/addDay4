/*#map
const fruits = ["apple","mango","orange"]
const result = fruits.map((ele)=>ele+"s");
console.log(result);
*/
//filter
/*const great = [1,2,3,4,5,6,7,8]
const result1= great.filter((a)=>{
    return a>3
})
console.log(result1);
*/
const array = [1,2,3,4,5];
const res = array.reduce((max,i)=>{
    if(i>max){
        max=i
    }
    return max;
},0)
console.log(res);
