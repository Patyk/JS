var gbpRate = 0.62998;
var cadRate = 1.22700;
var eurRate = 0.88052;
var yapRate = 102.7000;
var mexRate = 15.34770;

function start(){
    usdAmt = document.getElementById("usdAmount");
}

function calculateRates(){
    var gbpAmt = parseFloat(usdAmt*gbpRate);
    var cadAmt = parseFloat(usdAmt*gbpRate);
    var eurAmt = parseFloat(usdAmt*gbpRate);
    var yapAmt = parseFloat(usdAmt*gbpRate);
    var mexAmt = parseFloat(usdAmt*gbpRate);


    document.forms["counterForm"].elements["gbpRate"].value = gbpRate;
    document.forms["counterForm"].elements["cadRate"].value = cadRate;
    document.forms["counterForm"].elements["eurRate"].value = eurRate;
    document.forms["counterForm"].elements["yapRate"].value = yapRate;
    document.forms["counterForm"].elements["mexRate"].value = mexRate;
    document.forms["counterForm"].elements["gbpAmount"].value = gbpAmt;
    document.forms["counterForm"].elements["cadAmount"].value = cadAmt;
    document.forms["counterForm"].elements["yapAmount"].value = eurAmt;
    document.forms["counterForm"].elements["eurAmount"].value = yapAmt;
    document.forms["counterForm"].elements["mexAmount"].value = mexAmt;

}