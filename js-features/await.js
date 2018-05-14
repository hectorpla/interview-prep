fetch = require('node-fetch')

const PORT = 6650

async function fetch_and_add(arg1, arg2) {
    const num1 = await fetch(`http://localhost:${PORT}/number/${arg1}`);
    const val1 = (await num1.json()).val;

    const num2 = await fetch(`http://localhost:${PORT}/number/${arg2}`);
    const val2 = (await num2.json()).val;

    // console.log(val1);

    return console.log(+val1 + +val2);
}


fetch_and_add(3, 5);