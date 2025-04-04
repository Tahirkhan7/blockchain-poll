import { Component } from '@angular/core';
import { Poll, PollForm, PollVote } from './types';
import { PollService } from './poll-service/poll.service';
import { PollComponent } from "./poll/poll.component";
import { PollVoteComponent } from "./poll-vote/poll-vote.component";
import { PollCreateComponent } from "./poll-create/poll-create.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [
    CommonModule,
    PollComponent,
    PollVoteComponent,
    PollCreateComponent,
  ],
})
export class AppComponent {
  showForm = false;
  activePoll: Poll = null;

  polls: Promise<Poll[]>;


  constructor(private ps: PollService) {}

  ngOnInit() {
    this.polls = this.ps.getPolls();
  
    this.ps.onEvent('PollCreated').subscribe(() => {
      this.polls = this.ps.getPolls();
    });
  }
  

  setActivePoll(poll) {
    this.activePoll = null;

    setTimeout(() => {
      this.activePoll = poll;
    }, 100);
  }

  handlePollCreate(poll: PollForm) {
    this.ps.createPoll(poll);
  }

  handlePollVote(pollVoted: PollVote) {
    this.ps.vote(pollVoted.id, pollVoted.vote);
  }
}
