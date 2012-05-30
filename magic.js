//jquery?
var script = document.createElement('script');
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);



//date work
function curweekday()
{
var d = new Date();
var weekday=new Array(7);
weekday[0]="Sunday";
weekday[1]="Monday";
weekday[2]="Tuesday";
weekday[3]="Wednesday";
weekday[4]="Thursday";
weekday[5]="Friday";
weekday[6]="Saturday";
var x = document.getElementById("clock");
x.innerHTML=weekday[d.getDay()];
}

function curmonth()
{
var d=new Date();
var month=new Array();
month[0]="January";
month[1]="February";
month[2]="March";
month[3]="April";
month[4]="May";
month[5]="June";
month[6]="July";
month[7]="August";
month[8]="September";
month[9]="October";
month[10]="November";
month[11]="December";
var n = document.getElementById("month");
n.innerHTML=month[d.getMonth()]; 
}

function curday()
{
var d = new Date();
var c = document.getElementById("day");
c.innerHTML=d.getDate();
}