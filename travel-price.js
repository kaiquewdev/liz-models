#!/usr/bin/env node
const Model = require('keras-js').Model;
const model = new Model({
  filepaths: {
    model: './travel-price.json',
    weights: './travel-price_weights.buf',
    metadata: './travel-price_metadata.json',
  },
  filesystem: true
});
const ndarray = require('ndarray');
//const dim = ndarray([(Math.max(10,(Math.round(Math.random()*100))))]);
const args = process.argv.slice(2);
const dim = ndarray(args.map(v => parseFloat(v,10)));
console.log(`Input data: ${dim.data}`);
model
  .ready()
  .then(() => {
    const inputData = {
      'input': new Float32Array(dim.data)
    };
    return model.predict(inputData);
  })
  .then(outputData => console.log(outputData))
  .catch(err => console.log(err));
