import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { SharedComponent } from './shared/shared.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { AssetDefinitionComponent } from './asset-definition/asset-definition.component';
import { HomeComponent } from './home/home.component';
import { VendorCreationComponent } from './vendor-creation/vendor-creation.component'

const routes: Routes = [

  //Empty Routiing
  {
    path:'',redirectTo:'auth/login', pathMatch: 'full'
  },


  //lazy loading
  { path: 'vendor', component: VendorCreationComponent, loadChildren: () => import('./vendor-creation/vendor-creation.module')
  .then(x => x.VendorCreationModule) },
  { path: 'purchase', component: PurchaseOrderComponent, loadChildren: () => import('./purchase-order/purchase-order.module')
  .then(x => x.PurchaseOrderModule) },

  {
    path: "asset-definition",
    component: AssetDefinitionComponent,
    loadChildren: () => import('./asset-definition/asset-definition.module').then(x => x.AssetDefinitionModule)
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
  {
    path: "home",
    component: HomeComponent,
    loadChildren: () => import('./home/home.module').then(x => x.HomeModule)
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
