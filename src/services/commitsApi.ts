import { CommitHistory } from "../models/Commit";
import { CommitResponse } from "../models/CommitResponse";

export const fetchCommitHistory = async () => {
  const data: CommitHistory[] = [];
  const url = import.meta.env.VITE_GITHUB_API_REPO_URL + '/commits';
  const response = await fetch(url);
  const commits = (await response.json()) as CommitResponse[];

  const commitsByDate = commits.reduce((acc, commitItem) => {
    const date = new Date(commitItem.commit.author.date);

    const formattedDate = date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });

    acc[formattedDate] = acc[formattedDate] ?? [];
    
    acc[formattedDate].push(commitItem);

    return acc;
  }, {} as Record<string, CommitResponse[]>);

  Object.keys(commitsByDate).forEach((key) => {
    commitsByDate[key].sort((a, b) => {
      return new Date(b.commit.author.date).getTime() - new Date(a.commit.author.date).getTime();
    });

    data.push({
      date: key,
      commits: commitsByDate[key],
    });
  });

  return data;
}