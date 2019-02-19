import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DragdropComponent } from './dragdrop.component';

const routes: Routes = [
  { path: '', redirectTo: 'animations01',pathMatch: 'full' },

  { path: 'dragdrop', component: DragdropComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class DragDropRoutingModule {


 }
