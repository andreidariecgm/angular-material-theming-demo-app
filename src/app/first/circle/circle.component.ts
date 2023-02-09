import { Component, Input } from '@angular/core';

@Component({
  selector: 'amt-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss'],
  host: {
    class: 'mat-elevation-z8'
  }
})
export class CircleComponent {
  @Input() text: string = '';
}
