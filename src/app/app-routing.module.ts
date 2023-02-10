import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularPipeComponent} from './angular-pipe/angular-pipe.component'
import { IODecoratorComponent } from './io-decoratore/io-decorator.component';
import { LifeCycleHookComponent } from './hooks/hooks.component';
import { ReactiveFormComponent } from './reactive/reactive.component';
import { TemplateDrivenFormComponent } from './template-driven/template-driven.component';
import { ViewEncapsulationV1Component } from './encap-v1/encap-v1.component';
import { ViewEncapsulationV2Component } from './encap-v2/encap-v2.component';
const routes: Routes = [
  {path: 'pipe', component:AngularPipeComponent},
  {path: 'io-decorator', component:IODecoratorComponent},
  {path: 'hooks', component:LifeCycleHookComponent},
  {path: 'reactive-form', component:ReactiveFormComponent},
  {path: 'td-form', component:TemplateDrivenFormComponent},
  {path: 'encap-v1', component:ViewEncapsulationV1Component},
  {path: 'encap-v2', component:ViewEncapsulationV2Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
