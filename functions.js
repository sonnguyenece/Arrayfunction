function ex1() {
    let myColor = ['Red', 'Green', 'White', 'Back'];
    document.getElementById('sourceArray').innerHTML = "['Red','Green','White','Back']";
    document.getElementById('resultEx1').innerHTML = myColor.toString() + "<br>" + myColor.join(' ') +
        "<br>" + myColor.join('+') + "<br>" + myColor.join('');
}

function ex2() {
    let num = window.prompt();
    let str = num.toString();
    let result = [str[0]];
    for (let x = 1; x < str.length; x++) {
        if ((str[x - 1] % 2 === 0) && (str[x] % 2 === 0)) {
            result.push('-', str[x]);
        } else {
            result.push(str[x]);
        }
    }
    document.getElementById('resultEx2').innerHTML = result.join('');

}

function ex3() {
    var str = prompt("nhap 1 day ki tu tu ban phim");
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];

    for(var x=0; x<str.length; x++)
    {
        if(UPPER.indexOf(str[x]) !== -1)
        {
            result.push(str[x].toLowerCase());
        }
        else if(LOWER.indexOf(str[x]) !== -1)
        {
            result.push(str[x].toUpperCase());
        }
        else
        {
            result.push(str[x]);
        }
    }
 document.getElementById('resultEx3').innerHTML=result.join('');

}