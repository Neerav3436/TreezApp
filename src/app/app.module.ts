import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortingComponent } from './sorting-component/sorting.component';
import { PalindromeComponent } from './palindrome-component/palindrome.component';
import { ErrorPageComponent } from './error-page-component/error-page.component';
import { AnagramComponent } from './anagram-component/anagram.component';
import { AnagramComponent } from './anagram/anagram.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { PalindromeComponent } from './palindrome/palindrome.component';
import { SortingComponent } from './sorting/sorting.component';


const appRoutes: Routes = [
  { path: '', component: SortingComponent },
  { path: 'palindrome', component: PalindromeComponent},
  { path: 'anagram', component: AnagramComponent},
  { path: 'not-found', component: ErrorPageComponent},
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  declarations: [
    AppComponent,
    SortingComponentComponent,
    PalindromeComponentComponent,
    ErrorPageComponentComponent,
    AnagramComponentComponent,
    AnagramComponent,
    ErrorPageComponent,
    PalindromeComponent,
    SortingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
