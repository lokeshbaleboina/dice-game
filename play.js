var num=Math.random();
num=num*6;
num=Math.floor(num)+1;
document.querySelectorAll("img")[0].setAttribute("src","./images/dice"+num+".png");
var num1=Math.random();
num1=num1*6;
num1=Math.floor(num1)+1;

document.querySelectorAll("img")[1].setAttribute("src","./images/dice"+num1+".png");
if(num>num1){
    document.querySelector("h1").innerHTML="player1 👑 winner"

}
else if(num===num1){
       document.querySelector("h1").innerHTML="draw"
}
else{
        document.querySelector("h1").innerHTML="player2 👑 winner"
}