import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { QueenComponent } from './queen/queen.component';
import { QueenDetailComponent } from './queen-detail/queen-detail.component';
import { QueenCreateComponent } from './queen-create/queen-create.component';
import { QueenEditComponent } from './queen-edit/queen-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

const appRoutes: Routes = [
  {
    path: 'queens',
    component: QueenComponent,
    data: { title: 'Queen List' }
  },
  {
    path: 'queen-details/:id',
    component: QueenDetailComponent,
    data: { title: 'Queen Details' }
  },
  {
    path: 'queen-create',
    component: QueenCreateComponent,
    data: { title: 'Create Queen' }
  },
  {
    path: 'queen-edit/:id',
    component: QueenEditComponent,
    data: { title: 'Edit Queen' }
  },
  { path: '',
    redirectTo: '/queens',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    QueenComponent,
    QueenDetailComponent,
    QueenCreateComponent,
    QueenEditComponent
    ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
