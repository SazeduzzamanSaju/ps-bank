// login button event handler.

const loginBtn = document.getElementById('check-login');
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const transectionArea = document.getElementById('transection-area');
    transectionArea.style.display = "block";
})

// deposit button event handler.
const depositeButton = document.getElementById('add-deposit');
depositeButton.addEventListener('click',function(){
    const depositAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depositAmount);
    
    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    const totalDeposit = depositNumber + currentDepositNumber;
    console.log(totalDeposit);

    document.getElementById('currentDeposit').innerHTML = totalDeposit;
    document.getElementById('depositAmount').value = "";

    //   CURRONT = total 

    const totalBalance = document.getElementById('totalBalance').innerText;
    const totalBalanceNumber = parseFloat(totalBalance);
    var subtotalBalance = depositNumber + totalBalanceNumber;

    document.getElementById('totalBalance').innerHTML = subtotalBalance;
    document.getElementById('depositAmount').value = "";
 
})


// withdraw  button event handler.
const withdrawButton = document.getElementById('add-withdraw');
withdrawButton.addEventListener('click',function(){
    const withdrawAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber = parseFloat(withdrawAmount);

    const withdrawalBalance = document.getElementById('withdrawalBalance').innerText;
    const withdrawalBalanceNumber = parseFloat(withdrawalBalance);
    const totalWithdraw = withdrawNumber + withdrawalBalanceNumber;

    document.getElementById('withdrawalBalance').innerHTML = totalWithdraw;
    document.getElementById('withdrawAmount').value = "";

    // Withdraw Amount - Total Balance 

    const totalBalance = document.getElementById('totalBalance').innerText;
    const totalBalanceNumber = parseFloat(totalBalance);
    const mainBalance = totalBalance - withdrawAmount;
    console.log(mainBalance);
    
    document.getElementById('totalBalance').innerText = mainBalance;
    document.getElementById('withdrawAmount').value = "";

 
})