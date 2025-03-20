import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PollCreateComponent } from './poll-create/poll-create.component';
import { PollComponent } from './poll/poll.component';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PollCreateComponent, NgIf, PollComponent, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  showForm = false;

  polls = [
    {
      question: 'What is the best programming language?',
      image: 'https://picsum.photos/375/100',
      votes: [0, 5, 7, 1],
      voted: true,
    },
    {
      question: 'What is the best programming language?',
      image: 'https://picsum.photos/375/100',
      votes: [1, 2, 3, 4, 5],
      voted: false,
    },
    {
      question: 'What is the best programming language?',
      image: 'https://picsum.photos/375/100',
      votes: [9, 6, 3],
      voted: true,
    },
  ];
}
