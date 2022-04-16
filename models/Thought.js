const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        // username: [
        //     // type: String,
        //     // required: true,
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'User'
        //     }
        // ],
        // reactions: [
        //     {
        //         type: Schema.Types.ObjectId,
        //         ref: 'Reaction'
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
// ThoughtSchema.virtual('reactionCount').get(function () {
//     return this.reactions.length;
// });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;