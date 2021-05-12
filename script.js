let cookieClick = document.getElementById("cookie");
let countCookie = 0;
let clickPoint = 0;
document.getElementById("cookieCount").innerHTML = countCookie;
document.getElementById("clickCount").innerHTML = clickPoint;

//click and count cookie
cookieClick.addEventListener("click",function(){
    countCookie += 1;
    document.getElementById("cookieCount").innerHTML = countCookie;
    //count click
    clickPoint += 1;
    document.getElementById("clickCount").innerHTML = clickPoint;
});


//multiply button
let multiplyBtn = document.getElementById("multiply");  
let multiNumber = 2;

multiplyBtn.addEventListener("click",function(){
let cost = multiNumber*10;

    if(countCookie >= cost){
        
        multiNumber+=1;
        countCookie = countCookie - cost;
        document.getElementById("cookieCount").innerHTML = countCookie;

        document.getElementById("multiNum").innerHTML = multiNumber;
        document.getElementById("multiNum2").innerHTML = multiNumber;
        document.getElementById("multiNum3").innerHTML = multiNumber;
        document.getElementById("multiNum4").innerHTML = multiNumber-1;
        
        cookieClick.addEventListener("click",function(){
            countCookie += 1 ; //add 1 on the original click point
            document.getElementById("cookieCount").innerHTML = countCookie;
        });
    };       
});

//auto clicker (1click per 1sec)
let autoBtn = document.getElementById("auto"); 

autoBtn.addEventListener("click",function(){
    if(countCookie >=100){

        countCookie = countCookie - 100; //purchase
        document.getElementById("cookieCount").innerHTML = countCookie;
        
        setInterval(addCookie,1000);

        function addCookie(){
            countCookie +=1; 
            document.getElementById("cookieCount").innerHTML = countCookie;
        }
        autoBtn.disabled = true;
    }
});

//bonus button (for 30sec 200%)
let bonusBtn = document.getElementById("bonus"); 

bonusBtn.addEventListener("click",function(){
    if(countCookie >=100){
        countCookie = countCookie - 100; //purchase
        document.getElementById("cookieCount").innerHTML = countCookie;

        //timer
        let timeLeft = 30;
        let showTimer = document.getElementById("timer");
        let timer = setInterval(countdown, 1000);//set the countdown to every second

        function countdown(){
            if (timeLeft == -1){
                clearTimeout(timer);
                showTimer.innerHTML = "No more Bonus!";
            }else{
                showTimer.innerHTML = "Bonus time" + timeLeft;
                timeLeft--; //we subtract the second each iteration
            };
        };
        
        cookieClick.addEventListener("click",function(){
            if(timeLeft >= 0){
                countCookie *=2;
                document.getElementById("cookieCount").innerHTML = countCookie;
            }else if(timeLeft == -1){
                countCookie *=1;
                document.getElementById("cookieCount").innerHTML = countCookie;
            };
        });
        bonusBtn.disabled = true;
    }
});