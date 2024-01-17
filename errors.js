//const divElement = document.getElementById('div');

{
    //divElement.innerHTML = 
        `<input type="text" id="demo">
        <button type="button" onClick="myFunction()">Test Input</button>
        <p id="p1"></p>`
    function myFunction(){
        var message, x;
        message = document.getElementById('p1');
        message.innerHTML = '';
        x = document.getElementById('demo').value;

        try {
            if (x == "") throw 'empty';
            if (isNaN(x)) throw 'Not a Number';
            x = Number(x);
            if (x < 5) throw 'Too low';
            if (x > 5) throw 'Too high';
        }
        catch(Error){
            message.innerHTML = 'Input is ' + Error;
        }
        finally {
            document.getElementById('demo').value = '';
        }
    }
}