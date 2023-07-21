import { useEffect, useState } from "react";
import { fetchCommitHistory } from "./services/commitsApi";
import { CommitHistory } from "./models/Commit";
import { CommitTimeline } from "./components/CommitTimeline";

export const App = () => {
  const [commitHistory, setCommitHistory] = useState<CommitHistory[]>([]);

  useEffect(() => {
    fetchCommitHistory()
      .then(x => setCommitHistory(x))
      .catch((e: Error) => console.error(e));

  }, []);

  return (
    <div>
      <header>
        <h1>Github Commits Clone</h1>
      </header>
      <main>
        CommitTimeline

        {commitHistory.map((history, i) => <CommitTimeline {...history} key={i} />)}
      </main>
    </div>
  )
}
