import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {
  //   path:'',
  //   component:AppComponent
  // },
  {
    path: 'app-one',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry:`${environment.appOneUrl}/UserModule.js`,
        exposedModule: './UserModule',
      }).then((m) => m.UserModule),
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
