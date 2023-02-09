import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'amt-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss']
})
export class DialogExampleComponent {

  constructor(private dialogRef: MatDialogRef<any>) {}

  close() {
    this.dialogRef.close();
  }
}
