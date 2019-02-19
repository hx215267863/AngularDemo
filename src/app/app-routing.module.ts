import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Animations01Component } from './animations01/animations01.component';
import { Animations02Component } from './animations02/animations02.component';
import { Animations03Component } from './animations03/animations03.component';

const routes: Routes = [
  { path: '', redirectTo: 'animations01',pathMatch: 'full' },

  { path: 'animations01', component: Animations01Component },
  { path: 'animations02', component: Animations02Component },
  { path: 'animations03', component: Animations03Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
