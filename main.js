/*==========     ARRAY METHODS     ==========*/

const divElement = document.getElementById('div');



{
    /* Array Manipulaton */
    function oddNum(arr) {
        const oddNum = arr.filter(i => i%2 !== 0);
        return oddNum;
    }
    
    const arr = [1,2,3,4,5,6,7,8,9,10];
    const result = oddNum(arr);
    
    //divElement.innerHTML = result;
}


{
    /* Array Filtering */
    function filterWords(arr){
        const filteredArray = arr.filter(each => each.length<3);
        return filteredArray;
    }

    const arr=['aaaa','bb','cc','ddc','eee','f', 'gg'];
    const result = filterWords(arr);

    //divElement.innerHTML = result;   
}

{
    /* Array Transformation */
    function squareNumber(arr){
        const squaredarr = arr.map(each => each*each);
        return squaredarr;
    }

    const arr = [1,2,3,4,5,6,7,8,9,10];
    const result = squareNumber(arr);

    //divElement.innerHTML = result;
}

{
    /* Array Concatenation */
    function mergeArray(arr1,arr2){
        const concatenated = arr1.concat(arr2);
        return concatenated;
    }

    const one = ['a','b','c','d','e','f']
    const two = ['g','h','i','j','k','l','m'];
    const result = mergeArray(one,two);

    //divElement.innerHTML = result;
}

{
    /* Array Sorting */
    function sortArray(arr){
        arr.sort(function(a,b){return a-b});
    }
    
    const numWhat = [5,8,2,5,9,45,7,3,67,976,34,67,322,23,4];
    sortArray(numWhat);
    
    //divElement.innerHTML = numWhat;
}

{
    /* Array Searching */
    function searchArray(arr, targetName) {
        const arraySearched = arr.find(obj => obj.name === targetName);
        return arraySearched || null;
    }   
    const list = [
        {name: 'VolksWagen'},
        {name: 'HP'},
        {name: 'Maldives'}
    ];
    const targetName = 'HP';
    const search = searchArray(list, targetName);   
    if (search) {
        //divElement.innerHTML = search.name;
    } else {
        //divElement.innerHTML = 'Not available';
    }
}

{
    /* Array Iteration */
    const names = ['Jane', 'John', 'Chris', 'David', 'Richard'];

    names.forEach(name => {
        //divElement.innerHTML += 
        `
            <ul>
                <li>${name}</li> <br/>
            </ul>
        `;
    });
}

{
    /* Array Splicing */
    function spliceFunction(arr) {
        arr.splice(1,2,7,7);
    }

    const numbers = [1,2,3,4,5,6];
    spliceFunction(numbers);

    //divElement.innerHTML = numbers;
}

{
    /* Array Slicing */
    function sliceFunction(arr){
        const newArr = arr.slice(0, 3);
        return newArr;
    }

    const names = ['Jane', 'John', 'Chris', 'David', 'Richard'];
    const results = sliceFunction(names);

    //divElement.innerHTML = results;
}

{
    /* Nested Arrays */
    function flattenFunction(arr){
    const newArray = [].concat(arr);
    return newArray;
    }

    const numArray = [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ];
    const result = flattenFunction(numArray);

    divElement.innerHTML = result;
}
