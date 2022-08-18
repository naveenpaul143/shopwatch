let image=document.querySelector("#image");
let one=document.querySelector(".black");
let two=document.querySelector(".red");
let three=document.querySelector(".blue");
let four=document.querySelector(".purple");
one.addEventListener('click',function(){
    image.src="black.png";
});
two.addEventListener('click',function(){
    image.src="red.png";
});
three.addEventListener('click',function(){
    image.src="blue.png";
});
four.addEventListener('click',function(){
    image.src="purple.png";
});




function time(){
    var today=new Date();
    var h=((today.getHours()+11)%12+1);
    var m=today.getMinutes();
    var s=today.getSeconds();
    document.getElementById("timewatch").innerHTML=h+":"+m+":"+s;
    setInterval("time()",1000);
   
    
}

function heart(){
  
   let sp= document.querySelector("#sp");
   let si=document.querySelector("i");
   si.classList.add("it");
   sp.classList.add("beat");
   clearInterval(interval);
   
   
   

}

