import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-poll',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './poll.component.html',
  styleUrl: './poll.component.scss'
})
export class PollComponent {
  @Input() question: string = '';
  @Input() pollImage: string = '';
  @Input() votes: number[] = [];
  @Input() voted: boolean = false;

  numberOfVotes: number = 0;

  constructor() {
    if (this.votes.length) {
      this.numberOfVotes = this.votes.reduce((acc: number, curr: number) => acc + curr, 0);
    }
  }
}
