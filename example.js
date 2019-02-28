const loadCSV = require('./load-csv')

const { features, labels, testFeatures, testLabels } = loadCSV('data.csv', {
    dataColumns: ['height', 'value'],
    labelColumns: ['passed'],
    shuffle: true,
    splitTest: 1,
    converters: {
        passed: val => val === 'TRUE'
    }
})

console.log('Features ', features)
console.log('Labels ', labels)
console.log('TestFeatures ', testFeatures)
console.log('TestLabels ', testLabels)