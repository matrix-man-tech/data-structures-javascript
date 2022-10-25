function monotone(array){
    first = array[0]
    last = array[array.length-1]
    if(first===last){
        for(let i=0;i<array.length-1;i++){
            if(array[i]!=array[i+1]){
            return false
            }
        }
    }
    else if(first<last){
        for(let i=0;i<array.length-1;i++){
            if(array[i]>array[i+1]){
            return false
            }
        }
    }
    else{
        for(let i=0;i<array.length-1;i++){
            if(array[i]<array[i+1]){
            return false
            }
       }
    }
    return true
}

a=[3,2,8]
console.log(monotone(a));