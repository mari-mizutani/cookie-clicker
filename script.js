let cookieClick = document.getElementById("cookie");
let countCookie = 0;
document.getElementById("displayCount").innerHTML = countCookie;

//click and count
cookieClick.addEventListener("click",function(){
    countCookie += 1;
    document.getElementById("displayCount").innerHTML = countCookie;
});

//reset button
let resetBtn = document.getElementById("reset");

resetBtn.addEventListener("click", function(){
    countCookie = 0;
    document.getElementById("displayCount").innerHTML = countCookie;
})


if(countCookie > 10){
  //when it's under 100, make the button disabled
  let multiplyBtn = document.getElementById("multiply");
  multiplyBtn.classList.toggle("disabled");

    // function multiplyBtn(){
    //     //multiply button function
    //     multiplyBtn.addEventListener("click", function(){
    //         countCookie *= 2;
    //         document.getElementById("displayCount").innerHTML = countCookie;
    //     });
    // }
};

