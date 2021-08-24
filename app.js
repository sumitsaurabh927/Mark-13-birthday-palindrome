var btn=document.querySelector("#btn")
var date=document.querySelector("#date")

function clickHandler(){
    console.log(date.value);

}

btn.addEventListener("click",clickHandler)