import { Avatar, Button } from "flowbite-react";
import { CommitResponse } from "../models/CommitResponse";
import TimeAgo from "react-timeago";

export const Commit = (commit: CommitResponse) => (
  <div className="flex p-3">
    <div className="flex-auto min-w-0">
      <p className="mb-3">
        {commit.commit.message}
      </p>
      <div className="flex items-center">
        <Avatar img={commit.author.avatar_url} rounded>
          <div className="space-y-1 font-medium dark:text-white">
            <div>
            {commit.author.login}
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Commited <TimeAgo date={commit.commit.author.date} />
            </div>
          </div>
        </Avatar>
      </div>
    </div>
    <div className="hidden md:flex md:items-center">
      <Button as="a" href={commit.html_url} color="light">{commit.sha.substring(0,6)}</Button>
    </div>
  </div>
);
