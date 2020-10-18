import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShopComponent } from './pages/shop/shop.component'; 
import { HomepageComponent } from './pages/homepage/homepage.component';
const routes: Routes = [
  {path: '',component:HomepageComponent, pathMatch: 'full'},
  {path:'shop', component:ShopComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents =[ShopComponent,HomepageComponent]
