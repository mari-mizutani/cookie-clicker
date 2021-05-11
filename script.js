let cookieClick = document.getElementById("cookie");
let countCookie = 0;
let clickPoint = 0;
document.getElementById("cookieCount").innerHTML = countCookie;
document.getElementById("pointCount").innerHTML = clickPoint;

//click and count cookie
cookieClick.addEventListener("click",function(){
    countCookie += 1;
    document.getElementById("cookieCount").innerHTML = countCookie;
    //count point
    clickPoint += 1;
    document.getElementById("pointCount").innerHTML = clickPoint;
});


//multiply button
let multiplyBtn = document.getElementById("multiply");  
let multiNumber = 2;

multiplyBtn.addEventListener("click",function(){
let cost = multiNumber*10;

    if(countCookie >= cost){
        
        multiNumber+=1;
        countCookie = countCookie - cost;

        document.getElementById("multiNum").innerHTML = multiNumber;
        document.getElementById("multiNum2").innerHTML = multiNumber;
        document.getElementById("multiNum3").innerHTML = multiNumber;
        
        cookieClick.addEventListener("click",function(){
            countCookie += 1 ; //add 1 on the original click point
            document.getElementById("cookieCount").innerHTML = countCookie;
        });

    };       
});


