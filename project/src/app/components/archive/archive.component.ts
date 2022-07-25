import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteservice/note.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  result:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.display_archive()

  }
  display_archive(){
    console.log('GetArchiveNotes Api Calling..')
    this.note.get_archive_note().subscribe((res:any)=>{
      this.result=res.data.data
      console.log(this.result)
    })
  }

}
