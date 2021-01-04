import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationSidebarComponent } from './navigation-sidebar/navigation-sidebar.component';
import { NavigationItemComponent } from './navigation-item/navigation-item.component';
import { NavigationDropdownComponent } from './navigation-dropdown/navigation-dropdown.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationSidebarComponent,
    NavigationItemComponent,
    NavigationDropdownComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
