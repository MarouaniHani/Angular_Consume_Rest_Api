import {ModuleWithProviders} from '@angular/core' ;
import {Routes, RouterModule} from '@angular/router';

import { AddNoteComponent } from './add-note/add-note.component';
import { ListerNoteComponent } from './lister-note/lister-note.component';

export const router: Routes = [
  {path:'', redirectTo:'notes',pathMatch:'full'},
  {path:'addNote',component:AddNoteComponent},
  {path:'notes',component:ListerNoteComponent}

]

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
