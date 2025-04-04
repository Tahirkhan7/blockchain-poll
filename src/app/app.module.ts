import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PollCreateComponent } from './poll-create/poll-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PollComponent } from './poll/poll.component';
import { PollVoteComponent } from './poll-vote/poll-vote.component';
import { PollService } from './poll-service/poll.service';
import { Web3Service } from './blockchain/web3.service';

@NgModule({
  declarations: [
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, PollCreateComponent,
    PollComponent,
    PollVoteComponent,],
  providers: [PollService, Web3Service],
  bootstrap: [],
})
export class AppModule {}
