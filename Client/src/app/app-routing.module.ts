import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './Component/login/login.component';
import { MoviesComponent } from './Component/movies/movies.component';



const routes: Routes = [
  {
    path:'',redirectTo:'/login',pathMatch:'full'
  },
  {path:'login' , component:LoginComponent},
  {path:'movieShows',component:MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
