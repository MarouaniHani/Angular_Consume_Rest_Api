import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Notes } from '../model/notes';
import { NoteService } from '../Services/note.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent implements OnInit {

  @Input() titre: any
  @Input() contenu: any
  registerForm: FormGroup
  submited: boolean = false
  isLoading: boolean = false
  constructor(private formBuilder: FormBuilder, private serviceNote: NoteService, private router: Router) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required]
    });
  }

  submit() {
    if (this.titre != null && this.contenu != null) {
      this.submited = true;
      this.isLoading = true
      if (this.registerForm.invalid) {
        return
      }
      const note = new Notes()
      note.title = this.registerForm.controls.title.value
      note.content = this.registerForm.controls.content.value
      this.serviceNote.addNote(note).subscribe(

        (data) => {
          console.log(data)
        },
        (error) => {
          throw new Error(error)
        },
        () => {
          this.isLoading = false
          this.submited = false;
          this.router.navigateByUrl('/notes')

        }


      )

    }
  }
}
