let cookieClick = document.getElementById("cookie");
let countCookie = 0;

cookieClick.addEventListener("click",function(){
    countCookie += 1;
    document.getElementById("displayCount").innerHTML = countCookie;

});
