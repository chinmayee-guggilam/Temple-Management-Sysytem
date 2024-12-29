import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DataComponent } from './data/data.component';
import { LogoutComponent } from './logout/logout.component';
import { PoojaComponent } from './pooja/pooja.component';
import { OverviewComponent } from './overview/overview.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pooja', component: PoojaComponent},
  { path: 'about', component: AboutComponent },
  { path: 'data',component:DataComponent },
  {path:'logout',component:LogoutComponent},
  {path:'overview',component:OverviewComponent},
  { path: '', component: HomeComponent, pathMatch: 'full' }, // Default route for home

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
