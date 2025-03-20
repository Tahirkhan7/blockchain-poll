export interface Poll {
  id: number;
  question: string;
  results: number[];
  options: string[];
  thumnail: string;
}

export interface Voter {
  id: string;
  voted: number[];
}
