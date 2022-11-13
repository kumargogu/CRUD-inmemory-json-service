import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgswitchcaseRoutingModule } from './ngswitchcase-routing.module';
import { NgswitchcaseComponent } from './ngswitchcase.component';


@NgModule({
  declarations: [
    NgswitchcaseComponent
  ],
  imports: [
    CommonModule,
    NgswitchcaseRoutingModule
  ]
})
export class NgswitchcaseModule { }
