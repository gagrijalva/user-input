import { Component } from '@angular/core';
import { ClickMeComponent } from './click-me.component';
import { KeyUpComponent_v1 } from './keyup.component_v1'; 
import { LoopbackComponent } from './loop-back.component';
import { KeyUpComponent_v2 } from './keyup.component_v2';
import { KeyUpComponent_v3 } from './keyup.component_v3';
import { KeyUpComponent_v4 } from './keyup.component_v4';
import { LittleTourComponent } from './little-tour.component';

@Component({
  selector: 'my-app',
  template: `<h1>Basic Samples App</h1>
            <click-me></click-me><br><br>
            <h3>Keyup Version 1</h3>
            <keyup></keyup>
            <h3>Template reference variable</h3>
            <loop-back></loop-back>
            <h3>Keyup Version 2</h3>
            <key-up2></key-up2>
            <h3>Keyup Version 3</h3>
            <key-up3></key-up3>
            <h3>Keyup Version 4</h3>
            <key-up4></key-up4>
            <h3>Little Tour Heroes</h3>
            <little-tour></little-tour>
  `, 
  directives: [ClickMeComponent, 
               KeyUpComponent_v1, 
               LoopbackComponent, 
               KeyUpComponent_v2,
               KeyUpComponent_v3,
               KeyUpComponent_v4, 
               LittleTourComponent]
})
export class AppComponent { }
