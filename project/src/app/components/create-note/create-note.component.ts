import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms'
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {
  createNoteForm !: FormGroup
  flag=false;
  message:any;
  @Output() messageEvent = new EventEmitter<any>();
  
  constructor(private fb:FormBuilder, private note:NoteService) { }

  ngOnInit(): void {
    this.createNoteForm=this.fb.group({
      title:[''],
      desc:['']
    })
  }
  open(){
    this.flag=true
  }
  onSubmit(){
    this.flag=false
    let data={
      'title': this.createNoteForm.value.title,
      'description': this.createNoteForm.value.desc
    }
    
    console.log('Create Note Api calling starts..')
    this.note.create_note(data).subscribe((res)=>{
      console.log(res);
      this.messageEvent.emit(this.message="Note Created")
    })
    
  }
    
  


}