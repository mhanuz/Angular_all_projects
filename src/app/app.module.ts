import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularPipeComponent } from './angular-pipe/angular-pipe.component';
import { NameSwapPipe } from './angular-pipe/nameSwap.pipe';
import { AddNameTitle } from './angular-pipe/addtitle.pipe';
import { IODecoratorComponent } from './io-decoratore/io-decorator.component'
import { Child1Component} from './io-decoratore/child1/child1.component';
import { Child2Component} from './io-decoratore/child2/child2.component';
import { LifeCycleHookComponent} from './hooks/hooks.component';
import { ChildComponent } from './hooks/child/child.component';
import { ReactiveFormComponent} from './reactive/reactive.component';
import { TemplateDrivenFormComponent} from'./template-driven/template-driven.component';
import { ViewEncapsulationV1Component} from './encap-v1/encap-v1.component';
import { ViewEncapsulationV1Child1Component} from './encap-v1/comp1/comp1.component';
import { ViewEncapsulationV1Child2Component} from './encap-v1/comp2/comp2.component';
import { ViewEncapsulationV1Child3Component} from './encap-v1/comp3/comp3.component';
import { ChildOfComponentThreee} from './encap-v1/comp3/comp3child/comp3child.component';
import { ViewEncapsulationV2Component } from './encap-v2/encap-v2.component';
import { ViewEncapsulationv2Child1Component} from'./encap-v2/encap-v2-child1/encap-v2-child1.component';
import { ViewEncapsulationV2Child2Component} from'./encap-v2/encap-v2-child2/encap-v2-child2.component';
import { ViewEncapsulationv2Child3Component} from './encap-v2/encap-v2-child3/encap-v2-child3.component';
import { CommonAddressComponent } from './reactive/common-address/common-address.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularPipeComponent,
    NameSwapPipe,
    AddNameTitle,
    IODecoratorComponent,
    Child1Component,
    Child2Component,
    LifeCycleHookComponent,
    ChildComponent,
    ReactiveFormComponent,
    TemplateDrivenFormComponent,
    ViewEncapsulationV1Component,
    ViewEncapsulationV1Child1Component,
    ViewEncapsulationV1Child2Component,
    ViewEncapsulationV1Child3Component,
    ChildOfComponentThreee,
    ViewEncapsulationV2Component,
    ViewEncapsulationv2Child1Component,
    ViewEncapsulationV2Child2Component,
    ViewEncapsulationv2Child3Component,
    CommonAddressComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
