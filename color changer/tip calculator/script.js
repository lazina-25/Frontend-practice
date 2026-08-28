let bill=document.getElementById("bill");
let tip=document.getElementById("tip");
let calculate=document.getElementById("calculate");
let result=document.getElementById("result");

function calculateTip(bill, percentage) {
let tipamount=bill*(percentage/100);
return tipamount;
}
calculate.addEventListener("click", function() {
    let billamount=Number(bill.value);
    let tippercentage=Number(tip.value);
    if(billamount<=0 || tippercentage<0){
        result.textContent="please enter valid bill and tip amount";
        return;}
    let tipamount=calculateTip(billamount,tippercentage);
    let total=billamount+tipamount;
    result.textContent="The total bill amount is : "  +total+"the tip amount is: "+tipamount;;
});
