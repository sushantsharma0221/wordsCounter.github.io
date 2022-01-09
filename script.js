let textArea=document.getElementById("textArea");


textArea.addEventListener('input',function(){
let text=this.value;
document.getElementById("char").innerHTML=text.length;


text=text.trim();
let words= text.split(" ");
let cleanList= words.filter(function(elem){
    return elem!="";
});
document.getElementById("words").innerHTML=words.length;
});