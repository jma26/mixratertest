import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Routes, RouterModule, ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-add-tracks',
  templateUrl: './add-tracks.component.html',
  styleUrls: ['./add-tracks.component.css']
})
export class AddTracksComponent implements OnInit {
  mix: {
    id: any,
    mix_name: any, 
    mix_creator: any, 
    show_name: any, 
    mix_description: any, 
    mix_genre: any, 
    mix_link: any,
    mix_track: any,
    good_flow: any,
    all_around_good:any,
    good_track_choices: any,
    total_likes: any,
    finished: any
  }
  track: {
    track_number: any,
    track_name: any,
    track_artist: any
  }
  errors: any;
  constructor(
    private _httpService: HttpService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.track = {
      track_number: "",
      track_name: "",
      track_artist: ""
    }
    this.errors = {}
    this.route.params.subscribe(params => {
      console.log(params["id"]);
      this.mix.id = params["id"];
      this.getMix(this.mix.id)
    })
  }
  getMix(id){
    let obs = this._httpService.viewMix(id)
    obs.subscribe(data => {
      console.log(data["mix"]);
      this.mix = data["mix"];
    })
  }
  submitTrack(id){
    id = this.mix.id;
    let obs = this._httpService.addTrack(id, this.track);
    obs.subscribe(data => {
      console.log("add Track return checkpoint", data);
      if(data["err"]){
        this.errors = data["err"];
      }else {
        this.goToTracks(data["mix"].id)
      }
    })
  }
  goToTracks(id){
    this.router.navigate(["/mixes/:id/newTracks", id])
  }
  mixReady(id){
    id = this.mix.id;
    let obs = this._httpService.finalizeMix(id);
    obs.subscribe(data => {
      console.log("finalize mix checkpoint return");
      if(data["err"]){
        this.errors = data["err"];
      }else{
        this.router.navigate(["mixes/show"])
      }
    })
  }
}
