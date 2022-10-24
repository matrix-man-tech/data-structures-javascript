function sortSquare(array){
    const newArray = new Array(array.length).fill(0)
    for(let i=0;i<array.length;i++){
        newArray[i] = Math.pow(array[i],2)
    }
    newArray.sort(function(a,b){return a-b})
    return newArray
}
a=[-3,-2,4,7,9]
console.log(sortSquare(a));

