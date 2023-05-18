let remainingBottles;
let bottlesToRemove = 1;

function bottleSong(){
    let bottle;
    let plural_singular;

    bottle = remainingBottles == 1 ? 'bottle' : 'bottles';
    plural_singular = bottlesToRemove > 1 ? 'them' : 'it';
    bottlesToRemove = bottlesToRemove > remainingBottles ? remainingBottles : bottlesToRemove;
    let song = `${remainingBottles} ${bottle} of beer on the wall \n${remainingBottles} ${bottle} of beer \nTake ${bottlesToRemove} down, pass ${plural_singular} around \n${remainingBottles -= bottlesToRemove} ${bottle} of beer on the wall`;

    console.log(song);
    
}

function songLoop(){
    remainingBottles = Number(prompt('How many bottles are left?(99-1)'));
    for (let i = remainingBottles; i > 0; i -= bottlesToRemove-1) {
        bottleSong()    
        bottlesToRemove++;
        console.log(remainingBottles);
    }
}
songLoop()