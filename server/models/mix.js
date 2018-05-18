var mongoose = require('mongoose');

var MixSchema = new mongoose.Schema({
    mix_name: {
        type: String,
        required: [true, "Please choose a name for your mix! Be creative or funny, don't be racist or crappy to people tho."]
    },
    mix_creator: {
        type: String,
        required: [true, "I know that you go by something, and having your name displayed will be optional"]
    },
    show_name: {
        type: Boolean
    },
    mix_description: {
        type: String,
        required: [true, "Please describe the mission statement of this mix! Be sincere!"]
    },
    mix_genre: {
        type: String,
        required: [true, "Please add a genre or mood to your mix!"]
    },
    mix_password: {
        type: String
    },
    mix_tracks: [],
    
    mix_link: {
        type: String
    },
    good_flow: {
        type: Number
    },
    all_around_good: {
        type: Number
    },
    good_track_choices: {
        type: Number
    },
    total_likes: {
        type: Number
    },
    finished: {
        type: Boolean
    }
})
var TrackSchema = new mongoose.Schema({
    track_number: {
        type: Number,
        required: [true, "You need to put in a track number for the order!"]
    },
    track_name: {
        type: String,
        required: [true, "All tracks required a name"]
    },
    track_artist: {
        type: String,
        required: [true, "Big or small artist, they need to be named!"]
    }
})
mongoose.model('Track', TrackSchema);
mongoose.model('Mix', MixSchema);