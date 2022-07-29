import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  flag:any;
  colors: Array<any> = [
    { code: '#ffffff', name: 'white' },
    { code: '#FF6347', name: 'red' },
    { code: '#FF4500', name: 'orange' },
    { code: '#FFFF00', name: 'yellow' },
    { code: '#ADFF2F', name: 'green' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey'}
  ]
  @Input() childmessage:any
  @Output() messageEvent = new EventEmitter<any>(); 
  message:any;

  constructor(private note:NoteService, private route:ActivatedRoute,private snackBar:MatSnackBar) { }

  ngOnInit(): void {
    this.flag=this.route.snapshot.url[0].path;
    console.log(this.flag)
  }

  archive(){
    console.log('Icons ArchiveNote Api Calling..')
    let data={
      noteIdList:[this.childmessage],
      isArchived: true
    }
    console.log(data)
    this.note.archive_note(data).subscribe((res:any)=>{
      console.log(res)
      this.messageEvent.emit(this.message='Note Archived')
      this.snackBar.open('Note Archived')
    })
    
  }
  trash(){
    console.log('Icons More(:) DeleteNote Api Calling..')
    let data={
      noteIdList:[this.childmessage],
      isDeleted: true
    }
    console.log(data)
    this.note.delete_note(data).subscribe((res:any)=>{
      console.log(res);
      this.messageEvent.emit(this.message='Note Trashed')
      this.snackBar.open('Note trashed')
    })
  }
  change_color(note_color:any){
    console.log('Icons ChangeNoteColor Api Calling..')
    let data={
      noteIdList: [this.childmessage],
      color: note_color
    }
    console.log(data)
    this.note.change_note_color(data).subscribe((res)=>{
      console.log(res);
      this.messageEvent.emit(note_color)
      this.snackBar.open('Note color changed')
    })
  }
  unarchive(){
    console.log('Icons UnarchiveNote Api Calling..')
    let data={
      noteIdList:[this.childmessage],
      isArchived:false
    }
    this.note.archive_note(data).subscribe((res)=>{
      console.log(res);
      this.messageEvent.emit(this.message='Note Unarchived')
      this.snackBar.open('Note Unarchived')
    })
  }
  delete_permanent(){
    console.log('Icons permanentDelete Note Api Calling..')
    let data={
      noteIdList: [this.childmessage],
      isDeleted: true
    }
    this.note.permanent_delete(data).subscribe((res)=>{
      console.log(res);
      this.messageEvent.emit(this.message='Note Deleted')
      this.snackBar.open('Note deleted permanently')
    })
  }
  restore(){
    console.log('Icons restore Note Api Calling..')
    let data={
      noteIdList: [this.childmessage],
      isDeleted: false
    }
    this.note.delete_note(data).subscribe((res)=>{
      console.log(res);
      this.messageEvent.emit(this.message='Note Restored')
      this.snackBar.open('Note restored')
    })
  }
}
