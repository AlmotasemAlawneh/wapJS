const Accounts = (function() {
    //const accoountsArray = [];
    const accountCreator = function(inName, inAmt){
        // accoountsArray.push(
            accountInfoList
            return {
                name:inName,
                amount:inAmt
            };
        // );
    };
    return{
        accountCreate:accountCreator
        //,getAccounts: function getAll() { return accoountsArray;} 
    };
}
)();

window.onload  =() => {
    accountInfoList = [];
    fName = document.getElementById("fname") ; 
    aType= document.getElementById("accountType");
    req = document.getElementById("request"); 
    paddableTag = document.getElementsByClassName("paddable"); // returns an array
    accountsTextArea = document.getElementById("accountsTA");
    depAmt = document.getElementById("depositeAmt");
    
};

function logAll() {
    accountsTextArea.value += (fName.value+ ' ' + aType.value + ' ' + depAmt.value +' deposit \n')    
    var account = Accounts.accountCreate(fName.value, depAmt.value);
    accountInfoList.push(account);
    // console.log(Accounts.getAccounts());
    // console.log(accountInfoList); 
}



function updateRequest(){
    // req.textContent = fName.value + ' wants to create a ' + aType.value +' account with deposite ' + depAmt.value;
}

function increasePadding(){
    let marg;
    if (!paddableTag[0].style.margin){
    marg = 10 ; 
    }
    else {
        marg = parseInt(paddableTag[0].style.margin);
        marg+=10;
    }
    for (let i = 0 ; i < paddableTag.length ; i++){
        paddableTag[i].style.margin = marg+'px';
    }
}

function openPopup(){
    window.open("http://www.google.com");
}

function timer(){
    setTimeout(countDown, 2000);
    function countDown(){
        updateRequest(); 
        req.style.color = "blue";
    }
}