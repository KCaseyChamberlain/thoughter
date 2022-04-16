const { Schema, model } = require('mongoose');

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const UserSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: [validateEmail, 'Please fill a valid email address'],
            match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
        },
        // thoughts: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Thoughts'
        //     }
        // ],
        // friends: [
        //     {
        //         type: Schema.Types.ObjectId,
        //     }
        // ]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        // prevents virtuals from creating duplicate of _id as `id`
        id: false
    }
);



// get total count of friends on retrieval
// UserSchema.virtual('friendCount').get(function () {
//     return this.friends.reduce(
//         (total, friend) => total + friend.friends.length + 1,
//         0
//     );
// });

const User = model('User', UserSchema);

module.exports = User;