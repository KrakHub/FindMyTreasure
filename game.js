let xcord = Math.random();
let ycord = Math.random();
console.log('xcord = ' + xcord)
console.log('ycord = ' + ycord)


window.onload = function()
{
    window.onclick = function(e)
    {
        let evt = window.event || e;
        document.getElementById("result").innerHTML = "Mouse position: (" + evt.clientX + "," + evt.clientY + ")"

        if (evt.clientX === Math.floor(xcord*window.innerWidth) && evt.clientY === Math.floor(ycord*window.innerHeight)) {
            alert('test');
        }
            console.log('xcordfloor = ' + Math.floor(xcord*window.innerWidth))
            console.log('ycordfloor = ' + Math.floor(ycord*window.innerHeight))
    }
}