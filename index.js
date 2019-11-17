// Add your functions here
function map(arr, func){
    return arr.map(element => func(element))
}

function reduce(arr, func, start){
    if(start){
        return arr.reduce(func, start)
    } else {
        return arr.reduce(func)
    }
}