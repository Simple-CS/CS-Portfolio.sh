function myFunction(){
    function getRandomInt(min,max){
        return Math.floor(Math.random()*(max-min)) + min; 
    }
    var num = getRandomInt(1,6);
    
    switch(num){
        case 1:
            answer ="Yes";
            break;
    }
    
    document.getElementById("coin").innerHTML = answer;
}



// JavaScript File