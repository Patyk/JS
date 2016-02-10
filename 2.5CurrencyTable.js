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


    document.forms["CurrencyTable"].elements["gbpRate"].value = gbpRate;
    document.forms["CurrencyTable"].elements["cadRate"].value = cadRate;
    document.forms["CurrencyTable"].elements["eurRate"].value = eurRate;
    document.forms["CurrencyTable"].elements["yapRate"].value = yapRate;
    document.forms["CurrencyTable"].elements["mexRate"].value = mexRate;
    document.forms["CurrencyTable"].elements["gbpAmount"].value = gbpAmt;
    document.forms["CurrencyTable"].elements["cadAmount"].value = cadAmt;
    document.forms["CurrencyTable"].elements["yapAmount"].value = eurAmt;
    document.forms["CurrencyTable"].elements["eurAmount"].value = yapAmt;
    document.forms["CurrencyTable"].elements["mexAmount"].value = mexAmt;

}
