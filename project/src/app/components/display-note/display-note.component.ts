import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {
  noteId:any;
  @Input() childMessage: any;
  @Output() messageEvent = new EventEmitter<any>();

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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
