var mongoose = require('mongoose');
var Mix = mongoose.model('Mix');
var Track = mongoose.model('Track');

module.exports = {
    show: function(req, res){
        Mix.find({}).sort("mix_name").exec((err, mixes) => {
            console.log("checkpoint SHOW Mixes controller");
            if(err){
                res.json({message: "Couldn't find those sweet mixes but I love you anyway babes"})
            }else {
                res.json({ message: "Got 'em", mixes})
            }

        })
    },
    view: function(req, res){
        var mix = Mix.findById({_id: req.params.id}, (err, mix)=> {
            console.log(mix);
            if(err){
                res.json({ message: "Error finding mix", err})
            }else {
                res.json({message: "Found your mix", mix})
            }
        })
    },
    create: function(req, res){
        var name_decision
        if(req.body.show_name === 'yes'){
            name_decision = true;
        }else {
            name_decision = false;
        }
        console.log("checkpoint create mix controller")
        var mix = new Mix({
            name: req.body.name,
            mix_creator: req.body.mix_creator,
            show_name: name_decision,
            mix_description: req.body.mix_description,
            mix_genre: req.body.mix_genre,
            mix_password: req.body.mix_password,
            mix_link: req.body.mix_link,
            good_flow: 0,
            all_around_good: 0,
            good_track_choices: 0,
            total_likes: 0,
            finished: false
        })
        mix.save((err, mix) => {
            if(err){
                res.json({message: "Dude, things went haywire", err})
            }else {
                res.json({message: "Successfully added"})
            }
        })
    },
    addTrack: function(req, res){
        console.log("Checkpoint add track controller");
        var mix = Mix.findById({_id: req.params.id})
        var track = new Track({
            track_number: req.body.track_number,
            track_name: req.body.track_name,
            track_artist: req.body.track_artist
        })
        mix.mix_tracks.push(track)
        mix.save((err, mix) => {
            if(err){
                res.json({ message: "Track not added!", err})
            }else{
                res.json({ message: "Track added!", mix})
            }
        })
    },
    addReview: function(req, res){
        console.log("checkpoint add review controller");
        var mix = Mix.findById({_id: req.params.id});
        if(!mix){
            req.json({message: "Dude, there's no mix to review wtf"})
        }else{
            if(req.body.good_flow === "yes"){
                let new_flow= mix.good_flow += 1;
                let new_total= mix.total_likes += 1;
                mix.update({
                    total_likes: new_total,
                    good_flow: new_flow
                })
                mix.save((err, mix) => {
                    if(err){
                        res.json({message: "Your review didn't go through"})
                    }else{
                        res.json({message: "Your review went through!"})
                    }
            })}
            if(req.body.all_around_good === "yes"){
                let new_all_around= mix.all_around_good += 1;
                let new_total= mix.total_likes += 1;
                mix.update({
                    total_likes: new_total,
                    good_flow: new_all_around,
                })
                mix.save((err, mix) => {
                    if(err){
                        res.json({message: "Your review didn't go through"})
                    }else{
                        res.json({message: "Your review went through!"})
                    }
            })
        }
            if(req.body.good_track_choices === "yes"){
                let new_all_around= mix.all_around_good += 1;
                let new_choices= mix.good_track_choices += 1;
                mix.update({
                    total_likes: new_all_around,
                    new_choices: new_choices
                })
                mix.save((err, mix) => {
                    if(err){
                        res.json({message: "Your review didn't go through"})
                    }else{
                        res.json({message: "Your review went through!"})
                    }
            });
        }else {
           res.json({ message: "Something went wrong otherwise"}) 
            }
        }
    },
    
    delete: function(req, res){
        console.log("checkpoint mix delete controller");
        var mix = Mix.findById({_id: req.params.id})
        mix.remove((err) => {
            if(err){
                res.json({message: "It's not deleting omg we're stuck with this forever jk we'll fix this in a little bit"})
            } else {
                res.json({ message: "Mix destroyed, excellent shot"})
            }
        })
    },
    finalize: function(req, res){
        console.log("checkpoint mix FINALIZE controller");
        var mix = Mix.findById({_id: req.params.id})
        mix.update({
            finished: true
        })
        mix.save((err, mix) => {
            if(err){
                res.json({message: "Finalizing mix went wrong wuuuuuut", err})
            }else{
                res.json({
                    message: "mix is now ready to get judged!", mix
                })
            }
        })
    }
    }

