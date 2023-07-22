import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {

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
