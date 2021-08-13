import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    //FormModalComponent,
  ],
  schemas:[
CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // FlexLayoutModule,
    ToastrModule.forRoot({
      timeOut: 30000,
      // positionClass: 'toast-bottom-right',
      preventDuplicates: true,
      maxOpened: 3,
      closeButton: true
    }),
  ],
  exports:[
ReactiveFormsModule,
ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
