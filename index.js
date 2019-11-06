// Add your functions here
function map(array,func){
    return array.map(element => func(element))
}

function reduce(array, func, startingPoint){
    if(startingPoint){
        return array.reduce(func, startingPoint)
    }else{
        return array.reduce(func)
    }
}