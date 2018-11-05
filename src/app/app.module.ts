import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { UpdateNoteComponent } from './update-note/update-note.component';
import { ListerNoteComponent } from './lister-note/lister-note.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {routes} from './app.router'

@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    UpdateNoteComponent,
    ListerNoteComponent
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    MatDialogModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[UpdateNoteComponent]
})
export class AppModule { }
