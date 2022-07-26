import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';


@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  token:any;
  noteArray:any;
  notesValue:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.get_all_note();
  }
  get_all_note(){
    console.log('GetAllNotes Api Calling..')
    this.note.get_note().subscribe((res:any)=>{
      console.log(res.data.data)
      this.noteArray = res.data.data
      this.notesValue = this.noteArray.filter((obj:any)=>{
        return obj.isDeleted==false && obj.isArchived==false
      })
      
    })
  }
  receiveMessage(event:any){
    console.log(event)
    this.get_all_note();
  }

}
