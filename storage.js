
      var email;
      var pass;
      function store() {
      email = document.getElementById("e1").value;
      pass = document.getElementById("p1").value;
      }
     

function compare(){
    var str1 = "ab";
var str2 = "cd";
email = document.getElementById("e1").value;
pass = document.getElementById("p1").value;
var n = email.localeCompare();
document.getElementById("demo").innerHTML = n;
}

var pos =new Array();
function tt(){
l = document.getElementById("id").value;
alert(l);
var arr =new Array();
for(var j=0;j<=200;j++){
 pos[j] =0;
}

for(var i=1;i<=5;i++){
    if(pos[i]==0){
        k=i;
        pos[i]=1;
        arr[i]=l;
        break;
    }
}
document.getElementById("id2").innerHTML = k;
document.getElementById("id3").innerHTML = l;
}

 function checkifcorrect(){
     alert("working");
     console.log("working2");
 }