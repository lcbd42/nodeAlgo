const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let inputs = [];

rl.on('line', function(line) {

    inputs.push(line);

    if (inputs.length == 2) {
        rl.close();
    }
}).on('close', function() {

    // input.pop(); // 마지막에 입력된 '0 0'을 제거합니다.
    if(inputs[0].length > inputs[1].length){
        console.log('go')
    }
    else{
        console.log('no')
    }

    process.exit();
});
