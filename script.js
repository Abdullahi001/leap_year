function leapYear(){
  var year= document.getElementById('forming').value;
  if (year % 400 !==0 && year % 100 === 0){
    alert("Not a leap year");
  }
  else if(year%4 === 0){
    alert("its a leap year");
  }
  else{
    alert("wait for leap year!");
  }
}
