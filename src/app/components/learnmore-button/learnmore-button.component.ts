import { Component } from '@angular/core';

import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-learnmore-button',
  templateUrl: './learnmore-button.component.html',
  styleUrls: ['./learnmore-button.component.css']
})
export class LearnmoreButtonComponent {
  size: NzButtonSize = 'large';
}
