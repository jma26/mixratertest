import { Component, OnInit } from '@angular/core';
import { HttpService} from '../../http.service';

@Component({
  selector: 'app-show-mixes',
  templateUrl: './show-mixes.component.html',
  styleUrls: ['./show-mixes.component.css']
})
export class ShowMixesComponent implements OnInit {

  constructor(
    private _httpService: HttpService
  ) { }
  mixes: {
    mix_name: "", 
    mix_creator: "", 
    show_name: "", 
    mix_description: "", 
    mix_genre: "", 
    mix_password: "",
    mix_link: "",
    good_flow: "",
    all_around_good:"",
    good_track_choices: "",
    total_likes: "",
    finished: "",
  }
  ngOnInit() {
    this.getAllMixes();
  }
  getAllMixes(){
    console.log("Show component checkpoint");
    let obs = this._httpService.mixLanding();
    obs.subscribe(data => {
      console.log("Show component return", data["mix"])
      this.mixes = data["mixes"];
      console.log(this.mixes);
    })
  }

}
