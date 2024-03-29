import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
//import { StarterModule } from './starter/starter.module';

export const routes: Routes = [
  {
    path: 'starter',
    loadChildren: () => import('./starter/starter.module').then(m => m.StarterModule)
  }

,
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'Dashboard',
    component: LoginComponent,
    data: {
      title: 'Dashboard Page'
    }
  },
  {
    path: 'AddUser',
    component: RegisterComponent,
    data: {
      title: 'Add User Page'
    }
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
