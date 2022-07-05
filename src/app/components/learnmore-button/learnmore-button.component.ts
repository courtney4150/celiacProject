import { Component, Input } from '@angular/core';

import { NzButtonSize } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-learnmore-button',
  templateUrl: './learnmore-button.component.html',
  styleUrls: ['./learnmore-button.component.css']
})
export class LearnmoreButtonComponent {
  @Input() link = '';

  size: NzButtonSize = 'large';
}
