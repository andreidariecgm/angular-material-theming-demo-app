import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogExampleComponent } from '../shared/dialog-example/dialog-example.component';

@Component({
  selector: 'amt-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogExampleComponent)
  }
}
