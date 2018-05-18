import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../http.service';
import { Routes, RouterModule, ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-view-mix',
  templateUrl: './view-mix.component.html',
  styleUrls: ['./view-mix.component.css']
})
export class ViewMixComponent implements OnInit {
  mix: {
    id: any,
    mix_name: any, 
    mix_creator: any, 
    show_name: any, 
    mix_description: any, 
    mix_genre: any, 
    mix_link: any,
    good_flow: any,
    all_around_good:any,
    good_track_choices: any,
    total_likes: any,
    finished: any
  }
  constructor(
    private _httpService: HttpService, 
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params["id"]);
      this.mix.id = params["id"];
      this.getMix(this.mix.id);
    })
  }
  getMix(id){
    let obs = this._httpService.viewMix(id)
    obs.subscribe(data => {
      console.log(data["mix"]);
      this.mix = data["mix"];
    })
  }

}
