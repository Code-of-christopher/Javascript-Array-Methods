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

    divElement.innerHTML = createCounter(5).increment();
}