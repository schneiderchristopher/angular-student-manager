import { Component, OnInit } from '@angular/core';
import { StudentDialogFormComponent } from '../student-dialog-form/student-dialog-form.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    console.log('open dialog');
    const dialogRef = this.dialog.open(StudentDialogFormComponent, {
      width: '500px',
      height: '500px',
    });
  }

}
