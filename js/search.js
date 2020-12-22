let searchBox=document.getElementById("searchtxt");


searchBox.addEventListener('keypress',(e)=>{
    if(e.keyCode==13){
        setTimeout(()=>{searchBox.value=""},1000);
    }
});
