let display = document.getElementById("display");
function inputdisplay(inputnumber){
    let newnumber = display.value + inputnumber;
    display.value = newnumber;
}
function clean(){
    display.value = "";
}
function result(){
    
    let result = eval(display.value);
    display.value = result;
    
    
    


}
function pm(){
    if (display.value < 0){
        let ex =  eval(display.value - display.value - display.value);
        display.value = ex;
    }
    else{
        let ex = eval(display.value - display.value - display.value)
        display.value = ex;
    }
}
function cut(){
    let slice = display.value.slice(0,-1);
    display.value = slice;
}
