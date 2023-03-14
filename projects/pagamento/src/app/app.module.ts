import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PagamentoListComponent } from './pagamento-list/pagamento-list.component';
import { VazioComponent } from './vazio/vazio.component';

@NgModule({
  declarations: [
    AppComponent,
    PagamentoListComponent,
    VazioComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'pagamento',
        component: PagamentoListComponent
      },
      {
        path: '**',
        component: VazioComponent
      }
    ], {useHash: true})
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector){
    const elem =  createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('micro-app-pagamento', elem);
  }

  ngDoBootstrap(){}
 }
