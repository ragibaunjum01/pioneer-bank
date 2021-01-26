// login button event handler

document.getElementById('login').addEventListener('click',function(){
    document.getElementById('login-area').style.display = "none";
    document.getElementById('transactionArea').style.display = "block";
})

// deposit button event handler

document.getElementById('addDeposit').addEventListener('click',function(){
    const depositNum = getInputNum('depositAmount');

    updateSpanText('currentDeposit', depositNum);

    document.getElementById('depositAmount').value = "";

    updateSpanText('currentBalance', depositNum);
})

// withdraw button handler

document.getElementById('withdraw').addEventListener('click',function(){
    const withdrawNum = getInputNum('withdrawAmount');
    
    updateSpanText('currentWithdraw', withdrawNum)

    document.getElementById('withdrawAmount').value = "";

    updateSpanText('currentBalance', -1 * withdrawNum);
})

function getInputNum(id) {
    const amount = document.getElementById(id).value;
    const amountNum = parseFloat(amount);
    return amountNum;
}

function updateSpanText(id, addedNum) {
    const current = document.getElementById(id).innerText;
    const currentNum = parseFloat(current);
    const total = currentNum + addedNum;
    document.getElementById(id).innerText = total;
}


