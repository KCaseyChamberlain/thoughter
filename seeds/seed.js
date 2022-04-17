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
        thoughtText: "WOW!",
        username: 'Sarah101'
    },
    {
        thoughtText: "Shoot!",
        username: 'Tommy101',
    },
    {
        thoughtText: "WOOOOOH!",
        username: 'Casey101'
    },
    {
        thoughtText: "NO WAY!",
        username: 'James101'
    },
    {
        thoughtText: "YES!",
        username: 'Danny101'
    },
]

// const seedReactions = [
//     {
//         reactionBody: "yeet",
//         username: "Danny101"
//     },
//     {
//         reactionBody: "neat",
//         username: "James101"
//     },
//     {
//         reactionBody: "deet",
//         username: "Casey101"
//     }, 
//     {
//         reactionBody: "feet",
//         username: "Tommy101"
//     }, 
//     {
//         reactionBody: "wheat",
//         username: "Sarah101"
//     },
// ]

const seedDB = async () => {
    await User.deleteMany({});
    await User.insertMany(seedUsers)

    await Thought.deleteMany({});
    await Thought.insertMany(seedThoughts)

    // await Reaction.deleteMany({});
    // await Reaction.insertMany(seedReactions)
};

seedDB().then(() => {
    mongoose.connection.close();
})