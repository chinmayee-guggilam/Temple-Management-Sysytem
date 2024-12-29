import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';

export const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'registration',component:RegisterComponent},
  {path:'home',component:HomeComponent},
  {path:'contact',component:ContactusComponent},
  {path:'about',component:AboutComponent}
];
