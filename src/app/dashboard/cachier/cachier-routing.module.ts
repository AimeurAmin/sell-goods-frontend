import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CachierComponent } from './cachier.component';

const routes: Routes = [{ path: '', component: CachierComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CachierRoutingModule { }
