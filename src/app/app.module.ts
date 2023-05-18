import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import { SearchComponent } from './search/search.component';
import { CoursesComponent } from './courses/courses.component';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NxWelcomeComponent,
    SearchComponent,
    CoursesComponent,
    HeaderComponent,
    SearchComponent,
    FilterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
