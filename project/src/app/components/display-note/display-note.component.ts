import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataService } from 'src/app/services/dataservice/data.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  message:any;
  noteId:any;
  isGrid:any = true;
  @Input() childMessage: any;
  @Output() messageEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog, private data:DataService) { }

  ngOnInit(): void {

    this.data.currentMessage.subscribe((message)=>{
      this.message = message
      console.log(this.message)
    })

    this.data.currentView.subscribe((flag)=>{
      this.isGrid=flag
      console.log(this.isGrid)
    })
  }
  

  // onclick(id:any){
  //   this.noteId=id;
  //   console.log(this.noteId)
  // }

  openDialog(note:any): void {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {
      width: '500px',
      data:note
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }
  receiveMessage(event:any){
    console.log(event)
    this.messageEvent.emit(event)
  }
}
