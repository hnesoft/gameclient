import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})

export class GameComponent implements OnInit {

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
  }

  play(symbolId: number): void {
    this.gameService.check(symbolId).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.error('an error occurred while checking the result', err)
      }
    });

  }
}
