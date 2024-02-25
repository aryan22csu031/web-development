const base_url = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"
const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")
const msg = document.querySelector(".msg")
for(let select of dropdowns){
    for (currCode in countryList) {
        let newOpt = document.createElement("option");
        newOpt.innerText = currCode;
        newOpt.value = currCode;
        if(select.name === "from" && currCode ==="USD"){
            newOpt.selected = "selected";
        }else if(select.name === "to" && currCode ==="INR"){
            newOpt.selected = "selected";
        }
        select.append(newOpt);
    }
    select.addEventListener("change",(evt)=>{
        updateFlg(evt.target);
    });
}
const updateFlg = (elem) =>{
    let currCode = elem.value;
    let countCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countCode}/flat/64.png`
    let prevSrc = elem.parentElement.querySelector("img");
    prevSrc.src = newSrc;
}
btn.addEventListener("click",async (elem)=>{
    elem.preventDefault();
    let amount = document.querySelector(".amount input");
    let amountVal = amount.value;
    if(amountVal === 0 || amountVal < 1){
        amountVal = 1;
        amount.value = "1";
    }
    const URL = `${base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
    let response = await fetch(URL);
    let data = await response.json()
    let ExchangeRate = data[toCurr.value.toLowerCase()]
    console.log(ExchangeRate)
    console.log(data)
    console.log(response);
    let finalAmt = amountVal * ExchangeRate;
    msg.innerText = `${amountVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;
});