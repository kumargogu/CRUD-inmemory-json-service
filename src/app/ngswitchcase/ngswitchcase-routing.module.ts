import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgswitchcaseComponent } from './ngswitchcase.component';

const routes: Routes = [{ path: '', component: NgswitchcaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgswitchcaseRoutingModule { }
