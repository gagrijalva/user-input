import { Component } from '@angular/core';

@Component({
  selector: 'keyup',
  template: `
    <input (keyup)="onKey($event)">
    <p>{{values}}</p>
    `

})

export class KeyUpComponent_v1 {
  values = '';

  // with strong typing
  onKey(event: KeyboardEvent) {
    this.values += (<HTMLInputElement>event.target).value + ' | ';
  }
}

