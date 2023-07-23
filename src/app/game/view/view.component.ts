import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Response } from '../response';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})

export class ViewComponent implements OnInit {

  private response: Response | undefined

  constructor(private gameService: GameService) {
  }

  ngOnInit(): void {
  }

  play(symbolId: number): void {
    this.gameService.check(symbolId).subscribe({
      next: (response) => {
        this.response = response;
        console.log(this.response);
      },
      error: (err) => {
        console.error('an error occurred while checking the result', err)
      }
    });

  }

  get result(): String | undefined {
    return this.response?.resultMessage;
  }
}
