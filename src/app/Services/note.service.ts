import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notes } from '../model/notes';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http:HttpClient) { }
  addNote(note: Notes)
  {
    return this.http.post<Notes>("http://localhost:19090/api/addNote",note)
  }
  getAllNotes()
  {
    return this.http.get<Notes[]>("http://localhost:19090/api/notes")
  }
  delete(id:number)
  {
    return this.http.delete(`http://localhost:19090/api/notes/${id}`)
  }
  GetById(id){
    return this.http.get<Notes>(`http://localhost:19090/api/notes/${id}`)
  }
  modify(note:Notes)
  {
    return this.http.put<Notes>(`http://localhost:19090/api/notes/${note.id}`,note)
  }
}
