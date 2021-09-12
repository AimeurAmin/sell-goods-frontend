import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardComponent as DSC } from './dashboard/containers/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, children: [
    { path: 'home', loadChildren: () => import('../dashboard/dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'products', loadChildren: () => import('../dashboard/products/products.module').then(m => m.ProductsModule) },
    { path: 'clients', loadChildren: () => import('../dashboard/clients/clients.module').then(m => m.ClientsModule) },
    { path: 'cachier', loadChildren: () => import('../dashboard/cachier/cachier.module').then(m => m.CachierModule) },
    { path: 'bills', loadChildren: () => import('../dashboard/bills/bills.module').then(m => m.BillsModule) },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
