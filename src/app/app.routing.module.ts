import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { YikespageComponent } from './yikespage/yikespage.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { AuthGuard } from './auth.guard';

const appRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'search', component: SearchResultComponent, canActivate: [AuthGuard]},
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: '**', component: YikespageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
