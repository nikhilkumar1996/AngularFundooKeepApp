import { Component, OnInit,  Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {

  title:any;
  desc:any;
  color:any;

  constructor( public dialogRef: MatDialogRef<UpdateNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,
    private note:NoteService,) { }

  ngOnInit(): void {
    this.title=this.data.title;
    this.desc = this.data.description;
    this.color=this.data.color
  }
  update(){
    let data={
      'noteId': this.data.id,
      'title': this.title,
      'description': this.desc
    }
    console.log('Update Note Api calling starts..')
    this.note.update_note(data).subscribe((res:any)=>{
      console.log(res);
    })
    this.dialogRef.close();
  }
  receiveMessage(event:any){
    console.log(event);
    this.color=event;
  }

}
