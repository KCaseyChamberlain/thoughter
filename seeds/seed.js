const mongoose = require('mongoose');
const Model = require('./models/model');

mongoose
    .connect('mongodb://localhost:27017/thoughter', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('MONGO SEED CONNECTION OPEN')
    })
    .catch((err) => {
        console.log(err);
    });

const seedModels = [
    {
        name: 'name'
    }
];

const seedDB = async () => {
    await Model.deleteMany({});
    await Model.insertMany(seedsModels)
};

seedDB().then(() => {
    mongoose.connection.close();
})