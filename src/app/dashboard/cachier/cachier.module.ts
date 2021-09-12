import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CachierRoutingModule } from './cachier-routing.module';
import { CachierComponent } from './cachier.component';


@NgModule({
  declarations: [CachierComponent],
  imports: [
    CommonModule,
    CachierRoutingModule
  ]
})
export class CachierModule { }
