$(document).ready(function(){
  $("button").click(function(){
    $("#panel").slideDown(1500);
  });
});
var a= document.getElementById('submit').addEventListener("click",function(){
  var phy=document.getElementById('1').value;
  var che=document.getElementById('2').value;
  var mat=document.getElementById('3').value;

var t=(Number(phy)+Number(che)+Number(mat));
document.getElementById('total').innerHTML=t;

  var per=((Number(phy)+Number(che)+Number(mat))*100)/300;
  document.getElementById('p').innerHTML=per.toFixed(2);

  if(per>90){
    var grade="A ";
    document.getElementById('g').innerHTML=grade;
  }
  if(per>80&&per<90){
    var grade="B ";
    document.getElementById('g').innerHTML=grade;

  }
  if(per>60&&per<80){
    var grade="C ";
    document.getElementById('g').innerHTML=grade;
  }
if(per<60){
    var grade="D ";
    document.getElementById('g').innerHTML=grade;
  }


  if(per>90){
    var r="PASS ";
    document.getElementById('result').innerHTML=r;
  }
  if(per>80&&per<90){
    var r="PASS ";
    document.getElementById('result').innerHTML=r;

  }
  if(per>60&&per<80){
    var r="PASS";
    document.getElementById('result').innerHTML=r;
  }
  if(per<60){
    var r="FAIL";
    document.getElementById('result').innerHTML=r;
  }

});

function validate(){
  var phy=document.getElementById('1').value;
  var che=document.getElementById('2').value;
  var mat=document.getElementById('3').value;

  //
  // if(phy==""){
  //  document.getElementById('null1').innerHTML="**feild cannot be empty";
  //  return false;
  // }
  // if(phy>100){
  //  document.getElementById('full1').innerHTML="**feild cannot be greater than 100";
  //  return false;
  // }
  // if(phy<0){
  //  document.getElementById('less1').innerHTML="**feild cannot be less than 0";
  //  return false;
  // }
  //
  //
  //   if(che==""){
  //    document.getElementById('null2').innerHTML="**feild cannot be empty";
  //    return false;
  //   }
  //   if(che>100){
  //    document.getElementById('full2').innerHTML="**feild cannot be greater than 100";
  //    return false;
  //   }
  //   if(che<0){
  //    document.getElementById('less2').innerHTML="**feild cannot be less than 0";
  //    return false;
  //   }
  //
  //
  //     if(mat==""){
  //      document.getElementById('null3').innerHTML="**feild cannot be empty";
  //      return false;
  //     }
  //     if(mat>100){
  //      document.getElementById('full3').innerHTML="**feild cannot be greater than 100";
  //      return false;
  //     }
  //     if(mat<0){
  //      document.getElementById('less3').innerHTML="**feild cannot be less than 0";
  //      return false;
  //     }


if(phy==""||che==""||mat==""){
 document.getElementById('null').innerHTML="**feilds cannot be empty";
 return false;
}
if(phy>100||che>100||mat>100){
 document.getElementById('full').innerHTML="**feilds cannot be greater than 100";
 return false;
}
if(phy<0||che<0||mat<0){
 document.getElementById('less').innerHTML="**feilds cannot be less than 0";
 return false;
}

}
