import { CommitResponse } from "./CommitResponse";

export interface CommitHistory {
  date: string;
  commits: CommitResponse[];
}