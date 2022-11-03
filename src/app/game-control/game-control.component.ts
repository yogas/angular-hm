import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  public isStart: boolean = false;
  public counter: number = 0;
  intID: number = 0;

  @Output('onCounterChange') onCounterChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() onStartGame: EventEmitter<void> = new EventEmitter<void>();
  @Output() onStopGame: EventEmitter<void> = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleGame(): void {
    this.isStart = !this.isStart

    if (this.isStart) {
      this.startPlay()
    } else {
      this.stopPlay()
    }
  }

  startPlay(): void {
    this.onStartGame.emit()
    clearInterval(this.intID);
    this.intID = window.setInterval(() => {
      this.counter++
      this.onCounterChange.emit(this.counter)
    }, 1000)
  }

  stopPlay(): void {
    this.onStopGame.emit()
    clearInterval(this.intID);
  }
}
