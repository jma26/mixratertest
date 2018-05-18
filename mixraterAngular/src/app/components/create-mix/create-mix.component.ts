import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router } from '@angular/router'
import { HttpService } from '../../http.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-create-mix',
  templateUrl: './create-mix.component.html',
  styleUrls: ['./create-mix.component.css']
})
export class CreateMixComponent implements OnInit {
  mix: {
    mix_name: any, 
    mix_creator: any, 
    show_name: any, 
    mix_description: any, 
    mix_genre: any, 
    mix_password: any,
    mix_link: any
  }
  errors: any;
  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.mix = { 
      mix_name: "",
      mix_creator: "",
      show_name: "",
      mix_description: "",
      mix_genre: "",
      mix_password: "",
      mix_link: ""
    }
    this.errors =  {}
  }
  addMix(){
    console.log("Create component checkpoint");
    let obs = this._httpService.makeMix(this.mix);
    obs.subscribe(data => {
      console.log("Create return checkpoint");
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
}
