import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AuthComponent } from './auth/auth.component';
import { SharedComponent } from './shared/shared.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { VendorCreationComponent } from './vendor-creation/vendor-creation.component';


const routes: Routes = [

  //Empty Routiing
  {
    path:'',redirectTo:'auth/login', pathMatch: 'full'
  },

  //lazy loading
  {
    path: "purchase-order",
    component: PurchaseOrderComponent,
    loadChildren: () => import('./purchase-order/purchase-order.module').then(x => x.PurchaseOrderModule)
  },

  {
    path: "vendor-creation",
    component: VendorCreationComponent,
    loadChildren: () => import('./vendor-creation/vendor-creation.module').then(x => x.VendorCreationModule)
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
