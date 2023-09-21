import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { LeftComponentComponent } from './left-component/left-component.component';
import { RightComponentComponent } from './right-component/right-component.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CardsComponent } from './cards/cards.component';
import { BottomCardsComponent } from './bottom-cards/bottom-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LeftComponentComponent,
    RightComponentComponent,
    CardsComponent,
    BottomCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
