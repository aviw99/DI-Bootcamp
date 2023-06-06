const fs = require('fs');

fs.readFile('Right-Left_Week7JS-main/RightLeft.txt', 'utf-8',(err,text)=>{
    if(err){
        console.log(err)
    }else{
        let counter = 0;
        let steps = 0;
        let steps_arr = [];
        for(let char of text){
            if(char === '>'){
                counter++
                steps++
                if(counter == -1){
                    steps_arr.push(steps)
                }
            }else if(char == '<'){
                counter--
                steps++
                if(counter == -1){
                    steps_arr.push(steps)
                }
            }
        }
        console.log(counter + " steps to the right")
        console.log(steps_arr[0]+" steps")

        }

})