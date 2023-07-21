import { CommitResponse } from "../models/CommitResponse";

export const Commit = (commit: CommitResponse) => (
  <div>
    <p>{commit.commit.message}</p>
    <hr />
  </div>
)