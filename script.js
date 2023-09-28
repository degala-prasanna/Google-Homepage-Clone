let userInput=document.querySelector(".search-input");
let searchbtn=document.querySelector(".search-btn");


function searchUserinput(){
    let url="https://www.google.com/search?q="+userInput.value;
    window.open(url, "_self");
};

searchbtn.addEventListener("click",searchUserinput);

userInput.addEventListener("keydown",(event)=>{
    if (event.key==="Enter"){
        searchUserinput();
       
    }
})