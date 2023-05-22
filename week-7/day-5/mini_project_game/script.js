function playTheGame(){
    const confirmGame = confirm('Would you like to play the game?');
    if(confirmGame == 0){
        alert('No problem, Goodbye')
    }else{
        let userNumber = null;
        // let computerNumber = null;
        let computerNumber = Math.floor(Math.random() * 11);
        let counter = 0;
        do{
            userNumber = prompt('Enter a number between 0 and 10');
            if(isNaN(userNumber)){
                alert('Sorry Not a number, Goodbye')
            }
            else{
                userNumber = Number(userNumber);
                if(userNumber > 10 || userNumber < 0){
                    alert('Sorry it’s not a good number, Goodbye')
                }else{
                    // computerNumber = Math.floor(Math.random() * 11);
                    console.log(computerNumber, userNumber);
                    counter++;
                    if(counter < 3){
                        let res = compareNumbers(userNumber, computerNumber)
                        alert(res)
                    }else{
                        alert('Game over')
                    }
                }
            }
        }while((userNumber < computerNumber || userNumber > computerNumber) && counter < 3);
    };
}

function compareNumbers(userNumber,computerNumber){
    if(userNumber === computerNumber){
        return 'WINNER'
    }
    else if(userNumber > computerNumber){
        return 'Your number is bigger then the computer’s, guess again'
    }
    else{
        return 'Your number is smaller then the computer’s, guess again'
    }
    
}

playTheGame()