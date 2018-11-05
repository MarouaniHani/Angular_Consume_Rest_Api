import { Component, OnInit, HostListener } from '@angular/core';
import { NoteService } from '../Services/note.service';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';
import { Router } from '@angular/router'

@Component({
  selector: 'app-lister-note',
  templateUrl: './lister-note.component.html',
  styleUrls: ['./lister-note.component.css']
})
export class ListerNoteComponent implements OnInit {
  dataSource = []
  displayedColumns: string[] = ['title', 'content', 'delete', 'modify'];
  constructor(private serviceNote: NoteService, public dialog: MatDialog, private router: Router) {
    this.LoadData()
  }

  ngOnInit() {

  }
  //Delete note action button
  deleteNote(id) {
    this.serviceNote.delete(id).subscribe(
      (data) => {
        this.LoadData()
      },
      (error) => {

      },
      () => { }
    )
  }
  @HostListener('document:loaddata', ['$event'])
  loadD(event) {
    console.log("jkhkjhjk")
    this.LoadData()
  }
// Load all data from data base
  LoadData() {
    this.serviceNote.getAllNotes().subscribe(
      (data) => {
        this.dataSource = data
        console.log(data)
      },
      (error) => {

      },
      () => { }
    )
  }
// Action will be executed after click modify button
  modifyNote(id) {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '250px',
      data: { id: id }
    });
  }
//redirection to add note page
  addNoteClick() {
    this.router.navigateByUrl('/addNote')
  }

}

export interface DialogData {
  id: number
}
