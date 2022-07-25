import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token:any=localStorage.getItem('token')

  constructor(private http:HttpserviceService) { }

  create_note(data:any){
    let header= {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
      })
    }
    return this.http.postService('notes/addNotes', data, true, header)
  }
  get_note(){
    let header= {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.token
      })
    }
    return this.http.getService('notes/getNotesList', true, header)
  }
  update_note(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
      return this.http.postService('notes/updateNotes', data, true, header)
  }
  archive_note(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postService('notes/archiveNotes', data, true, header)
  }
  delete_note(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postService('notes/trashNotes', data, true, header)
  }
  change_note_color(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postService('notes/changesColorNotes', data, true, header)
  }
  get_trash_note(){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.getService('notes/getTrashNotesList', true, header)
  }
  get_archive_note(){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.getService('notes/getArchiveNotesList', true, header)
  }
  permanent_delete(data:any){
    let header={
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.http.postService('notes/deleteForeverNotes', data, true, header)
  }
}
