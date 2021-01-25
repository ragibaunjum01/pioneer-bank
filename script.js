// login button event handler

document.getElementById('login').addEventListener('click',function(){
    document.getElementById('login-area').style.display = "none";
    document.getElementById('transactionArea').style.display = "block";
})

// deposit button event handler

document.getElementById('addDeposit').addEventListener('click',function(){
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNum = parseFloat(depositAmount);

    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNum = parseFloat(currentDeposit);
    const total = depositNum + currentDepositNum;
    document.getElementById('currentDeposit').innerText = total;

    document.getElementById('depositAmount').value = "";

    const currentBalance = document.getElementById('currentBalance').innerText;
    const currentBalanceNum = parseFloat(currentBalance);
    const totalBalance = total + currentBalanceNum;
    document.getElementById('currentBalance').innerText = totalBalance;
})
