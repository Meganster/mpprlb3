const mnist = require('mnist');
const synaptic = require('synaptic');
const fs = require('fs');

const set = mnist.set(0, 20);
const testSet = set.test;

const Network = synaptic.Network;

const myNeuralNetworkFromGile = fs.readFileSync('my_neural_network/my_nn.json');
const myNeuralNetwork = JSON.parse(myNeuralNetworkFromGile);
const synapticNetwork = Network.fromJSON(myNeuralNetwork);

printOutput(synapticNetwork.activate(testSet[0].input), 'NN result');
printOutput(testSet[0].output, 'number from set');

function printOutput(arr, summary) {
    console.log(summary + '-start');
    arr.forEach((el, i) => console.log(`${i}: ${el.toFixed(4)*100}%`));
    console.log(summary + '-end');
}