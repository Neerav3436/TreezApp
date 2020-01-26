import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ErrorPageComponent } from './error-page/error-page.component';
import { OrdersComponent } from './orders/orders.component';
import {TreezComponent} from './treez/treez.component';
import { InventoryComponent } from './inventory/inventory.component';

import {ShortenPipe} from './formatDataSize.pipe';

import { MatInputModule,MatButtonModule,MatDividerModule,MatCardModule, MatDialogModule} from '@angular/material';
import { InventoryDialogComponent } from './inventory-dialog/inventory-dialog.component';
import { OrderDialogComponent } from './order-dialog/order-dialog.component';

const appRoutes: Routes = [
  { path: '', component: TreezComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'orders', component: OrdersComponent},
  { path: 'not-found', component: ErrorPageComponent},
  { path: '**', redirectTo: '/not-found' }
];


@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    OrdersComponent,
    TreezComponent,
    InventoryComponent,
    ShortenPipe,
    InventoryDialogComponent,
    OrderDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatDialogModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  entryComponents:[InventoryDialogComponent,OrderDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
