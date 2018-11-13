const mnist = require('mnist');
const synaptic = require('synaptic');
const fs = require('fs');

// const set = mnist.set(700, 20); // 700 training count, 20 - test

// const trainingSet = set.training;
// const testSet = set.test;

// const Layer = synaptic.Layer;
// const Network = synaptic.Network;
// const Trainer = synaptic.Trainer;

// const inputLayer = new Layer(784);
// const hiddenLayer = new Layer(100);
// const outputLayer = new Layer(10);

// inputLayer.project(hiddenLayer);
// hiddenLayer.project(outputLayer);

// const myNetwork = new Network({
//     input: inputLayer,
//     hidden: [hiddenLayer],
//     output: outputLayer
// });

// const trainer = new Trainer(myNetwork);
// trainer.train(trainingSet, {
//     rate: .2, //TODO
//     iterations: 2,
//     error: .1,
//     shuffle: true,
//     log: 1,
//     cost: Trainer.cost.CROSS_ENTROPY //Перекрёстная энтропия
// });
// console.log(myNetwork.toJSON)

// console.log(myNetwork.activate(testSet[0].input));
// console.log(testSet[0].output);

fs.writeFileSync('nn.json', data);

const nnrow = fs.readFileSync('nn.json');
const mynn = JSON.parse(nnrow);
console.log(mynn);