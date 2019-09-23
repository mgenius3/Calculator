var text=document.getElementById("input");//we are asingning input id to text
 var answer=document.getElementById("answer");// we are assinging were 
var another=document.getElementById("another");
var a,p;

function men(e,f){
    text.value+=e;//we are referring text.value to the first parameter of the onclick value;
    another.value+=f;//we are referring another.value to the second parameter of the onclick value;
    equa();// we are calling the equa() function to perform its operation when the onclick men() function is carried out
      console.log(answer.innerHTML);
}
function equa(){
    //we are using this function to evaluate the operation as an expression is been inputed;
 p=text.value;// assingning the text.value to  var(p);
var ans2=another.value;//assingning the another.value to var(ans2)
answer.innerHTML=eval(ans2);//to display the  evaluated(text.value) answer as soon as it is computed;
answer.innerHTML=eval(p);//to display the  evaluated(another.value) answer as soon as it is computed;
} 
function keyboard(e){
    text.value+=e.key;// we are using this expression to transfer the entered key on the keyboard to the text.value;
    another.value+=e.key//we are using this expression to transfer the entered key to the text.value;
    answer.innerHTML=eval(another.value)// we are transferring the evaluated(entered key value) to display
}

// To calculate  the evaluate the expression  as soon as the equal button is clicked
function equal(){
    var ans2=another.value;
answer.innerHTML=eval(ans2);
}
// To switch off the calculator;
function AC(){                              
answer.innerHTML=" "
    text.value=" "
    another.value=" "
}
// to delete the unneeded value;
function del(){
    text.value=text.value.slice(0,-1)// cutting the text from the beginning to the end of the second to the last one and returning the text cut to the screen 
    another.value=another.value.slice(0,-1);
    clear(text.value,another.value,answer.innerHTML);
     equa();
}
function clear(a,b,c){
 if(a=="" && b=="Math."){
        text.value=""
        another.value=""
    }
}   
window.addEventListener("keydown",keyboard);