const {Schema, model} = require('mongoose')

const tasksSchema = Schema({
    name: {
        type: String,
        required: true
    },
    startTime: {
        type: Date,
        required: true,
        validate: [x => x > Date.now(), 'Start time must be less than current time']
    },
    duration: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['meeting', 'break', 'work'],
        required: true
    },
    user :{
        type: Schema.Types.ObjectId,
        ref:'User'
    }
});

const Task = model('Task', tasksSchema);

module.exports = Task;