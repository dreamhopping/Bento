let searchBox=document.getElementById("searchtxt");


searchBox.addEventListener('keypress',(e)=>{
    console.log(e.keyCode);
    
    if(e.keyCode==13){
        setTimeout(()=>{searchBox.value=""},1000);
    }
});