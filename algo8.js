const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let T;
let inputs = [];
let outputs = [];

rl.on('line', function (line) {

    if(!T){
        T = parseInt(line);
    } 
    else{
        const arr = line.split(' ').map(el => parseInt(el));
        const sum = arr[0] + arr[1];
        outputs.push(`Case #${inputs.length}: ${arr[0]} + ${arr[1]} = ${sum}`);

        T--;
        if (T == 0) rl.close();
    }

}).on('close', function () {

    for (let i = 0; i < outputs.length; i++) {
        console.log(outputs[i]);
    }

    process.exit();
});
