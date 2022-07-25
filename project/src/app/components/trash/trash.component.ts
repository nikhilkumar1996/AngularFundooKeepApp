import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  result:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.display_trash()
  }
  display_trash(){
    console.log('GetTrashNotes Api Calling..')
    this.note.get_trash_note().subscribe((res:any)=>{
      console.log(res)
      this.result=res.data.data
    })
  }
  recieveMessage(event:any){
    console.log(event);
    this.display_trash();  
  } 

}
