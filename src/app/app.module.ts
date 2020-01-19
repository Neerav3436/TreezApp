import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AnagramComponent } from './anagram/anagram.component';
import { SortingComponent } from './sorting/sorting.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { ErrorPageComponent } from './error-page/error-page.component';

import { MatInputModule,MatButtonModule} from '@angular/material';


const appRoutes: Routes = [
  { path: 'sorting', component: SortingComponent },
  { path: 'palindrome', component: PalindromeComponent},
  { path: 'anagram', component: AnagramComponent},
  { path: 'not-found', component: ErrorPageComponent},
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  declarations: [
    AppComponent,
    SortingComponent,
    PalindromeComponent,
    ErrorPageComponent,
    AnagramComponent,
    AnagramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
