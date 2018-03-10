var h2 = document.getElementsByTagName('h2')[0],
    start = document.getElementById('start'),
    pause = document.getElementById('pause'),
    clear = document.getElementById('clear'),
    miliseconds = 0, sec = 0, mins = 0,
    mytimeOut;
    var stopData;
     var array = [];
    var i=0;
    var lapCount = document.getElementById('lapCount');

function add() {
    miliseconds++;
    if (miliseconds >= 60) {
        miliseconds = 0;
        sec++;
        if (sec >= 60) {
            sec = 0;
            mins++;
        }
    }
    
 h2.textContent =
  (mins ? (mins > 9 ? mins : "0" + mins) : "00") + ":" + (sec ? (sec > 9 ? sec : "0" + sec) : "00") + ":" + (miliseconds > 9 ? miliseconds : "0" + miliseconds);
    startTimer();
    stopData = h2.textContent;

}
function startTimer() {
    mytimeOut = setTimeout(add, 16);
    
}



start.onclick = startTimer;
console.log(startTimer);


pause.onclick = function() {
    clearTimeout(mytimeOut);
}

lapCount.onclick =  function(){
    newDiv1 = document.createElement('div');
    newDiv2 = document.createElement('input');
    newDiv3 = document.createElement('button');
    newDiv1.className = "data";
    newDiv2.className = "inputText";
     newDiv3.className = "inputButton";
       newDiv3.textContent = "Save";
      console.log(mytimeOut);
    newDiv1.textContent = stopData;
  
    var lap = document.getElementById("parent-div").appendChild(newDiv1);
     document.getElementById("parent-div").appendChild(newDiv2);
     document.getElementById("parent-div").appendChild(newDiv3);
   
         var obj = {
        time : newDiv1.textContent,
        title : newDiv2.value
    };
        newDiv3.addEventListener("click", function(){
              var obj = {
        time : newDiv1.textContent,
        title : newDiv2.value
    };
        var recieve =  JSON.stringify(obj);
        array.push(recieve);
        localStorage.setItem("Data",array);
        console.log(newDiv2.value);
        console.log(newDiv1.textContent);
});
    //  var obj = {

    //  };
    console.log(document.getElementById("parent-div"));
    console.log(lap);
   
}
clear.onclick = function() {
    h2.textContent = "00:00:00";
    newDiv1.textContent = "00:00:00";
    if(document.getElementById('lapCount').clicked == true)
        {
             newDiv1.textContent = "00:00:00";        
        }
    miliseconds = 0; sec = 0; mins = 0;
}