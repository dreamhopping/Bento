function test_key(selkey){
    var alias = {
        "ctrl":  17,
        "f":     70
    };

    return key[selkey] || key[alias[selkey]];
}

function test_keys(){
    var keylist = arguments;

    for(var i = 0; i < keylist.length; i++)
        if(!test_key(keylist[i]))
            return false;

    return true;
}

document.addEventListener("keydown",(e)=>{
    
});