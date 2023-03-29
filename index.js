//const currDate= document.getAnimations9("date");

//let weatherImg= document.getElementById("icomImg");

const tempStatus="cloud";
var currDate;
var currDay;
var currMonth;

var currYear;

var period;
var Hour;
var minute;

const getCurrDay = ()=>{
    var weekdays= new Array(7);
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Friday";
    weekdays[5] = "Saturday";
    weekdays[6] = "Sunday";


    let currTime= new Date();
    //console.log( weekdays[currTime.getDay()]);
      currDay= weekdays[currTime.getDay()];
    

};
getCurrDay();

const getcurrTime= ()=>{
    var month=new Array(12);
    month[0]="Jan";
    month[1]="Feb";
    month[2]="Mar";
    month[3]="Apr";
    month[4]="May";
    month[5]="Jun";
    month[6]="Jul";
    month[7]="Aug";
    month[8]="Sep";
    month[9]="Oct";
    month[10]="Nov";
    month[11]="Dec";

    let nowTime= new Date();

     currMonth= nowTime.getMonth();
     currDate = nowTime.getDate();

     currYear= nowTime.getFullYear();
     Hour= nowTime.getHours();
     minute=nowTime.getMinutes();
     currMonth=month[currMonth];

     period="AM";
    if(Hour>11){
        period="PM";
        if(Hour>12){
            Hour= Hour-12;
        }
    }

    if(minute<10){
        minute="0"+minute;
    }
    //console.log(month[currMonth],currDate,currYear);
}
getcurrTime();
// console.log( currDay+ " "+ currDate +" "+currMonth+ " "+currYear);

document.querySelector(".day-and-date").innerHTML=  currDay+ " | "+ currDate +" / "+currMonth+ " / "+currYear;
document.querySelector(".time").innerHTML= "Time- "+ Hour+ ":"+ minute+ " "+ period;
