import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OrologiFormComponent } from './components/orologi-form/orologi-form.component';
import { OrologiListComponent } from './components/orologi-list/orologi-list.component';
import { OrologioComponent } from './components/orologio/orologio.component';

@NgModule({
  declarations: [
    AppComponent,
    OrologiFormComponent,
    OrologiListComponent,
    OrologioComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
