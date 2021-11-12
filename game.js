let xcord;
let ycord;
let clicks;
let highscore;

function init() {
    xcord = Math.random();
    ycord = Math.random();
    if (clicks < highscore || highscore == undefined) {
        highscore = clicks;
    }
    document.getElementById("highscore").innerHTML = "High Score: " + highscore; 
    clicks = 0;
}
init();

//console.log('xcord = ' + xcord)
//console.log('ycord = ' + ycord)
//document.getElementById("treasure").innerHTML = "Winning coordinates: (" + Math.floor(xcord*window.innerWidth) + "," + Math.floor(ycord*window.innerHeight) + ")";

window.onload = function()
{
    window.onclick = function(evt)
    {
        document.getElementById("result").innerHTML = "Mouse position: (" + evt.clientX + "," + evt.clientY + ")";
        clicks++;
        document.getElementById("clicks").innerHTML = clicks;

        if ((evt.clientX < Math.floor(xcord*window.innerWidth) + 20 && evt.clientX > Math.floor(xcord*window.innerWidth) - 20) && (evt.clientY < Math.floor(ycord*window.innerHeight) + 20 && evt.clientY > Math.floor(ycord*window.innerHeight) - 20)) {
            alert('You win with a score of ' + clicks + '!');
            init();
        }
        else if ((evt.clientX < Math.floor(xcord*window.innerWidth) + 35 && evt.clientX > Math.floor(xcord*window.innerWidth) - 35) && (evt.clientY < Math.floor(ycord*window.innerHeight) + 35 && evt.clientY > Math.floor(ycord*window.innerHeight) - 35)) {
            document.getElementById("prox").innerHTML = "🔥🔥🔥";
        }
        else if ((evt.clientX < Math.floor(xcord*window.innerWidth) + 50 && evt.clientX > Math.floor(xcord*window.innerWidth) - 50) && (evt.clientY < Math.floor(ycord*window.innerHeight) + 50 && evt.clientY > Math.floor(ycord*window.innerHeight) - 50)) {
            document.getElementById("prox").innerHTML = "🔥🔥";
        }
        else if ((evt.clientX < Math.floor(xcord*window.innerWidth) + 75 && evt.clientX > Math.floor(xcord*window.innerWidth) - 75) && (evt.clientY < Math.floor(ycord*window.innerHeight) + 75 && evt.clientY > Math.floor(ycord*window.innerHeight) - 75)) {
            document.getElementById("prox").innerHTML = "🔥";
        }
        else if ((evt.clientX < Math.floor(xcord*window.innerWidth) + 100 && evt.clientX > Math.floor(xcord*window.innerWidth) - 100) && (evt.clientY < Math.floor(ycord*window.innerHeight) + 100 && evt.clientY > Math.floor(ycord*window.innerHeight) - 100)) {
            document.getElementById("prox").innerHTML = "🌶️";
        }
        else if ((evt.clientX < Math.floor(xcord*window.innerWidth) + 250 && evt.clientX > Math.floor(xcord*window.innerWidth) - 250) && (evt.clientY < Math.floor(ycord*window.innerHeight) + 250 && evt.clientY > Math.floor(ycord*window.innerHeight) - 250)) {
            document.getElementById("prox").innerHTML = "💦";
        }
        else if ((evt.clientX < Math.floor(xcord*window.innerWidth) + 500 && evt.clientX > Math.floor(xcord*window.innerWidth) - 500) && (evt.clientY < Math.floor(ycord*window.innerHeight) + 500 && evt.clientY > Math.floor(ycord*window.innerHeight) - 500)) {
            document.getElementById("prox").innerHTML = "❄️";
        }
        else {
            document.getElementById("prox").innerHTML = "🧊";
        } 
    }

    window.onresize = function()
    {
        //console.log('xcordfloor = ' + Math.floor(xcord*window.innerWidth))
        //console.log('ycordfloor = ' + Math.floor(ycord*window.innerHeight))
        //document.getElementById("treasure").innerHTML = "Winning coordinates: (" + Math.floor(xcord*window.innerWidth) + "," + Math.floor(ycord*window.innerHeight) + ")";
    }
    
}