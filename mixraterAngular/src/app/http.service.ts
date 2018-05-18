import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  makeMix(mix){
    console.log("Anything please");
    return this._http.post(`/mixes/create`, mix, {responseType: 'text'});
  }
  addTrack(id, track){
    console.log("Add Track checkpoint on service");
    return this._http.post(`/mixes/${id}/addTrack`, track)
  }
  addReview(mix){
    console.log("Add Review checkpoint on service");
    return this._http.patch(`/mixes/${mix.id}/addReview`, mix);
  }
  seeMyMix(id){
    console.log("See my mix checkpoint on service");
    return this._http.get(`/mixes/${id}/userview`);
  }
  viewMix(id){
    console.log("See other mix checkpoint on service");
    return this._http.get(`/mixes/${id}/view`);
  }
  mixLanding(){
    console.log("Get all mixes checkpoint on service");
    return this._http.get(`mixes/show`);
  }
  deleteMix(id){
    console.log("Delete Mix checkpoint on service");
    return this._http.get(`/mixes/${id}/userview`);
  }
  finalizeMix(id){
    console.log("Finalize Mix checkpoint on service");
    return this._http.patch(`/mixes/${id}/finalize`, id)
  } 
}

