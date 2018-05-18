import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTracksComponent } from './components/add-tracks/add-tracks.component';
import { CreateMixComponent } from './components/create-mix/create-mix.component';
import { ShowMixesComponent } from './components/show-mixes/show-mixes.component';
import { ViewMixComponent } from './components/view-mix/view-mix.component';
import { YourMixComponent } from './components/your-mix/your-mix.component'; 
import { LandingPageComponent} from './components/landing-page/landing-page.component';

const routes: Routes = [
  {path: 'mixes/show', component: ShowMixesComponent },
  {path: 'mixes/:id/addtracks', component: AddTracksComponent},
  {path: 'mixes/newmix', component: CreateMixComponent },
  {path: 'mixes/:id/mixstats', component: YourMixComponent},
  {path: 'mixes/:id/viewamix', component: ViewMixComponent},
  {path: 'mixes/landingpage', component: LandingPageComponent},
  { path: '', pathMatch: 'full', redirectTo: '/mixes/landingpage'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
