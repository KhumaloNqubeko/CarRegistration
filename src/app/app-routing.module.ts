import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { SignUpComponent } from 'src/app/sign-up/sign-up.component';
import { SignInComponent } from 'src/app/sign-in/sign-in.component';
import { HomeSignedInComponent } from 'src/app/home-signed-in/home-signed-in.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { num: 6 } },
  { path: 'register', component: SignUpComponent, data: { num: 6 } },
  { path: 'login', component: SignInComponent, data: { num: 6 } },
  { path: 'inside', component: HomeSignedInComponent, data: { num: 6 } },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
