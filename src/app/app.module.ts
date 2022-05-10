import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { RecordDetailsComponent } from './record-details/record-details.component';
import { RecordListComponent } from './record-list/record-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCollectionComponent,
    RecordDetailsComponent,
    RecordListComponent,
    NavbarComponent,
    DashboardComponent,
    AppRoutingComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
