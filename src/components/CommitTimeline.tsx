import { CommitHistory } from "../models/Commit"
import { Commit } from "./Commit"

export const CommitTimeline = (history: CommitHistory) => {
  return <div>
    <h2>{history.date}</h2>
    {history.commits.map(commit => <Commit {...commit} key={commit.sha} />)}
  </div>
}