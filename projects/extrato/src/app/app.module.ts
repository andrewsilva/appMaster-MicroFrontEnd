import { CUSTOM_ELEMENTS_SCHEMA, Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExtratoListComponent } from './extrato-list/extrato-list.component';
import { VazioComponent } from './vazio/vazio.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtratoListComponent,
    VazioComponent
  ],
  imports: [
   BrowserModule,
   RouterModule.forRoot([
      {
        path: 'extrato',
        component: ExtratoListComponent
      },
      {
        path: '**',
        component: VazioComponent
      }
    ], {useHash: true})
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
  constructor(private injector: Injector){
    const elem = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('micro-app-extrato', elem);
  }

  ngDoBootstrap(){}
}
