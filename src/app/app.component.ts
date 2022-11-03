import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'home-work';

  public allNumbers: {type: string, counter: number}[] = [];

  onCounterChange(counter: number) {
    if (counter % 2) {
      this.allNumbers.push({type: 'odd', counter})
    } else {
      this.allNumbers.push({type: 'even', counter})
    }
  }

  onStart() {
    this.allNumbers = [];
  }

  onStop() {
    console.info('game stopped')
  }
}
