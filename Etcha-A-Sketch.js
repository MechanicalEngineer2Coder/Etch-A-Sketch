var answer = 4; //initiliaze answer as a global variable and make first run a 4 x 4 grid.        
    
window.addEventListener('load', (event) => {
    
    //function if user enters anything other than a number between 0 and 100
    function tryAgain(){
        var tryAgainAnswer = window.prompt("Try again.");
        if (!(tryAgainAnswer >= 0 && tryAgainAnswer <= 100)){
            tryAgain();
        } else{
            //tryAgain passed and sets it to the global variable answer
            answer = tryAgainAnswer;
        }
    }

    console.log("Page loaded.")
    const container = document.querySelector(".container");   


    //create button
    const button = document.createElement('button');
    button.textContent = 'Clear';
    button.setAttribute('id', 'button');
    button.onclick = function(){
        console.log("Click");
        var x = document.querySelectorAll('#container');
        for (var i = 0; i < x.length; i++) {
            x[i].style.backgroundColor = "blue";            
          }
        answer = window.prompt("How many grids? (Keep it under 100)", "4");
        console.log(answer);
        //if answer is anything other than a number between 0 and 100, throw the tryAgain function
        if (!(answer >= 0 && answer <= 100)){
            tryAgain();
        }
        
        //make array to setup new grid's rows and columns
        var newGridSize = new Array();
        for (var i = 0; i < answer; i++) {
            newGridSize[i] = (1/answer) *100; //make a percentage
          }
        
        
        //make a string from newGridSize put lopping through and adding each entry to the string
        var newGridSizeString = "";
        for (var i = 0; i <newGridSize.length; i++){
            newGridSizeString += newGridSize[i] + "% ";
        }
        console.log(newGridSizeString);

        //remove previous grid        
        container.removeChild(container.lastChild);
        
        //make the new grid
        const divMain = document.createElement('div');
        divMain.setAttribute('id', 'divMain')
        divMain.style.height = '100vh';
        divMain.style.width = '100vw';
        divMain.style.display = 'grid';
        divMain.style.gridTemplateColumns = newGridSizeString;
        divMain.style.gridTemplateRows = newGridSizeString;
        divMain.style.justifyContent = 'space-evenly';
        container.appendChild(divMain);

        
        for (var i=1; i < (newGridSize.length+1)**2 ; i++) {
            const divID = 'div'  + i;
            const div = document.createElement('div');
            div.setAttribute('id', "container");
            div.style.backgroundColor = 'blue';
            div.onmouseover = function(){div.style.backgroundColor = 'green';}
            divMain.appendChild(div);
            };  
        };
    container.appendChild(button);    
    
    const divMain = document.createElement('div');
    divMain.setAttribute('id', 'divMain')
    divMain.style.height = '100vh';
    divMain.style.width = '100vw';
    divMain.style.display = 'grid';
    divMain.style.gridTemplateColumns = '25% 25% 25% 25%';
    divMain.style.gridTemplateRows = '25% 25% 25% 25%';
    divMain.style.justifyContent = 'space-evenly';
    container.appendChild(divMain);

    for (var i=1; i<17; i++) {
        const divID = 'div'  + i;
        const div = document.createElement('div');
        div.setAttribute('id', "container");
        div.style.backgroundColor = 'blue';
        div.onmouseover = function(){div.style.backgroundColor = 'green';}
        divMain.appendChild(div);
    };  

})