import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../lister-note/lister-note.component';
import { NoteService } from '../Services/note.service';
import { Notes } from '../model/notes';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.css']
})
export class UpdateNoteComponent implements OnInit {
  title: string = " "
  content: string = " "
  constructor(
    public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, private noteService: NoteService) { }

  ngOnInit() {
    this.noteService.GetById(this.data.id).subscribe(
      (data) => {
        this.title = data.title
        this.content = data.content
      }
    )
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
  // Action executed after clicking update button in the dialog box
  updateDialogNote() {
    let note = new Notes()
    note.id = this.data.id
    note.title = this.title
    note.content = this.content
    this.noteService.modify(note).subscribe(
      (data) => {
        console.log(data)
        this.dialogRef.close()
        var event = new CustomEvent('loaddata')
        document.dispatchEvent(event)
      }
    )

  }
}
