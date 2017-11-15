import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {ZeroesComponent} from './zeroes/zeroes.component';
import {ZeroDetailComponent} from './zero-detail/zero-detail.component';

import {ZeroService} from './zero.service';
import {MessagesComponent} from './messages/messages.component';
import {MessageService} from './message.service';
import {AppRoutingModule} from './app-routing.module';
import {DashboardComponent} from './dashboard/dashboard.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';
import { ZeroSearchComponent } from './zero-search/zero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ZeroesComponent,
    ZeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    ZeroSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [ZeroService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule {}
