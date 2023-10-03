import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { SharedComponent } from './shared/shared.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { AssetMasterComponent } from './asset-master/asset-master.component';
import {AssetDefinitionComponent } from './asset-definition/asset-definition.component';

const routes: Routes = [

  //Empty Routiing
  {
    path:'',redirectTo:'auth/login', pathMatch: 'full'
  },

  //lazy loading
  {
    path:"asset-definition",
    component:AssetDefinitionComponent,
    loadChildren: () => import('./asset-definition/asset-definition.module').then(x => x.AssetDefinitionModule)
  },
  {
    path: "asset-master",
    component: AssetMasterComponent,
    loadChildren: () => import('./asset-master/asset-master.module').then(x => x.AssetMasterModule)
  },
  {
    path: "purchase-order",
    component: PurchaseOrderComponent,
    loadChildren: () => import('./purchase-order/purchase-order.module').then(x => x.PurchaseOrderModule)
  },

  {
    path: "shared",
    component: SharedComponent,
    loadChildren: () => import('./shared/shared.module').then(x => x.SharedModule)
  },

  {
    path: "auth",
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then(x => x.AuthModule)
  },

  //Wild card routes
  {
    path: "**",
    component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
