const mongoose = require('mongoose');
const User = require('../models/User');
const Thought = require('../models/Thought');


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

const seedUsers = [
    {
        username: 'Danny101',
        email: 'Danny@gmail.com'
    },
    {
        username: 'James101',
        email: 'james@gmail.com'
    },
    {
        username: 'Casey101',
        email: 'casey@gmail.com'
    },
    {
        username: 'Tommy101',
        email: 'tom@gmail.com'
    },
    {
        username: 'Sarah101',
        email: 'sarah@gmail.com'
    }
];

const seedThoughts = [
    {
        thoughtText: "WOW!"
    },
    {
        thoughtText: "Shoot!"
    },
    {
        thoughtText: "WOOOOOH!"
    },
    {
        thoughtText: "NO WAY!"
    },
    {
        thoughtText: "YES!"
    },
]

const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUsers)

    await Thought.deleteMany({});
    await Thought.insertMany(seedThoughts)
};

seedDB().then(() => {
    mongoose.connection.close();
})