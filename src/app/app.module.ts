import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyTestComponentComponent } from './my-test-component/my-test-component.component';
import { MyTestComponent } from './my-test/my-test.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTestComponentComponent,
    MyTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
