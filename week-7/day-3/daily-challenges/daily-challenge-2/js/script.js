let star = '*';
for (i = 1; i <= 6; i ++){
    console.log(star.repeat(i));
}

let stars = ""

let num_of_lines = 6

for (let i = 1; i <= num_of_lines; i += 1){
    stars = ""

    for (b = 1; b <= i; b += 1){
        stars += '*';
    }

    console.log(stars)
}
