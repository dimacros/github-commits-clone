import { CommitResponse } from "./CommitResponse";

export interface CommitHistory {
  date: string;
  commits: CommitResponse[];
}

export interface Commit {
  author: {
    name: string
    email: string
    date: string
  },
  committer: {
    name: string
    email: string
    date: string
  }
  message: string
  tree: {
    sha: string
    url: string
  }
  url: string
  comment_count: number
  verification: {
    verified: boolean
    reason: string
    signature: string
    payload: string
  }
}

export interface Author {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface Committer {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  site_admin: boolean
}

export interface Parent {
  sha: string
  url: string
  html_url: string
}
  