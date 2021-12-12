(function(){
    "use strict";

    //Declaring variables
    var ConvertType = 'Miles';
    var heading = document.querySelector('h1');
    var intro = document.querySelector('p');
    var Answer = document.getElementById('answer')
    var form = document.getElementById('convert');

    //Detecting M and K keys.
    document.addEventListener('keydown', function(event){
        var key = event.code;

        if(key==='KeyK'){
            ConvertType = 'Kilometers';
            heading.innerHTML='Kilometers to Miles converter.'
            intro.innerHTML='Type in a number of Kilometers and click the button to convert the distance to Miles.';
        }
        else if(key === 'KeyM'){
            ConvertType = 'Miles';
            heading.innerHTML='Miles to Kilometers converter.'
            intro.innerHTML='Type in a number of Miles and click the button to convert the distance to Kilometers.';
        }
    })

    //Detecting the submission of a number
    form.addEventListener('submit',function(event){
        event.preventDefault();

        var distance=parseFloat( document.getElementById('distance').value);
        if(distance){

            if(ConvertType == 'Miles'){
                var converted= (distance*1.609344).toFixed(2);
                Answer.innerHTML=`${distance} Miles converts to ${converted} Kilometers`;
            }
            else {
                var converted=(distance*0.621371192).toFixed(2);
                Answer.innerHTML=`${distance} Kilometers converts to ${converted} Miles`
            }

        }
        else{
            Answer.innerHTML='<h2>Please enter a number!</h2>'
        }
    })

})()