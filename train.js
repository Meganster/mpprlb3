const mnist = require('mnist');
const synaptic = require('synaptic');
const fs = require('fs');

const readline = require('readline-sync');
// 3000, 0.05
const trainSetCount = readline.question("Enter train set count: ");
const trainRate = readline.question("Enter train rate: ");

const set = mnist.set(trainSetCount, 30);

const trainingSet = set.training;

const Layer = synaptic.Layer;
const Network = synaptic.Network;
const Trainer = synaptic.Trainer;

const inputLayer = new Layer(784);
const hiddenLayer = new Layer(100);
const outputLayer = new Layer(10);

inputLayer.project(hiddenLayer);
hiddenLayer.project(outputLayer);

const myNetwork = new Network({
    input: inputLayer,
    hidden: [hiddenLayer],
    output: outputLayer
});

const trainer = new Trainer(myNetwork);
trainer.train(trainingSet, {
    rate: trainRate,
    iterations: 2000,
    error: 0.8,
    shuffle: true,
    log: 1,
    // Перекрёстная энтропия
    cost: Trainer.cost.CROSS_ENTROPY
});

fs.writeFileSync('my_neural_network/my_nn.json', JSON.stringify(myNetwork.toJSON()));