const prompt = require("prompt-sync")();

const deposit = () => {
    while(true){
    const depositAmount = prompt('Enter a deposit amount: ')
    const numberDepositAmount = parseFloat(depositAmount);
    if(isNaN(numberDepositAmount) || numberDepositAmount<= 0 )
    console.log("Invalid deposit amount, try again");
        else
        {
            return numberDepositAmount;
        }
    }

}

const getNumberOfLines = () => {
    while(true){
        const numberOfLines = prompt('Enter number of Lines(1-3):  ')
        const getNumberOfLines = parseFloat(numberOfLines);
        if(isNaN(getNumberOfLines) || getNumberOfLines<= 0 || getNumberOfLines>3)
        console.log("Invalid lines, try again");
            else
            {
                return getNumberOfLines;
            }
        }

}

const getBet = (balance, numberOfLines) => {
    const getBet = prompt("place bet: ");
    const numberBet = parseFloat(getBet);
    if(isNaN(numberBet) || numberBet<=0 || numberBet > balance /numberOfLines)
    {
        console.log("Bet not supported, try again ");
    }
    else{
        return numberBet;
    }

    
} 

let balance = deposit();
const  numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);
