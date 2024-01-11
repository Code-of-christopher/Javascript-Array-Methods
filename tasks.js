const divElement = document.getElementById('div');

{
    /* TO Be or Not To Be */
    function expect(a){
        return {
            toBe: (b) => {if (a === b) return true; else throw new Error("Not Equal")},
            notToBe: (b) => {if (a !== b) return true; else throw new Error("Equal")}
        }
    }

    const result = expect(4).toBe(4);
    //divElement.innerHTML = result;
}



{
    /* Counter */
    function createCounter(init){
        let count = init;
        return {
            increment: () => {return ++count;},
            decrement: () => {return --count;},
            reset: () => {return count = init;},
        }
    }

    //divElement.innerHTML = createCounter(5).increment();
}




{
    /* Alternative to Array.Map */
    let map = function (arr, fn){
        let arr2 = [];
        for (let i = 0; i < arr.length; i++){
            arr2[i] = fn(arr[i], i);
        }
        return arr2;
    }

    let arr =[1,2,3]
    let result = map(arr, function(item, index){
        return item*2;
    });
    //divElement.innerHTML = result;

}



{
    /* Alternative to Array.Filter */
    let filter = function(arr, fn){
        let filteredArr = [];
        for (let i = 0; i < arr.length; i++){
            if (fn(arr[i], i)){
                filteredArr.push(arr[i]);
            }
        }
        return filteredArr;
    }

    let arr = [1, 2, 3];
    let result= filter(arr, function(item, index){
        return item = item > 2;
    });
    divElement.innerHTML = result;
}