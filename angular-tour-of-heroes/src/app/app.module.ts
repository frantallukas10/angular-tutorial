import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false
    }),
    AppRoutingModule
  ],
  declarations: [AppComponent, HeroesComponent, HeroDetailComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
