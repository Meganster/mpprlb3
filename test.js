const mnist = require('mnist');
const synaptic = require('synaptic');
const fs = require('fs');

const set = mnist.set(0, 20); // 700 training count, 20 - test
const testSet = set.test;


const Network = synaptic.Network;

const nnrow = fs.readFileSync('nn.json');
const mynn = JSON.parse(nnrow);

const myNetwork = Network.fromJSON(mynn);

printOutput(myNetwork.activate(testSet[0].input), 'NN result');
printOutput(testSet[0].output, 'number from set');

function printOutput(arr, summary) {
    console.log(summary + '-start');
    arr.forEach((el, i) => console.log(`${i}: ${el.toFixed(4)*100}%`));
    console.log(summary + '-end');
}