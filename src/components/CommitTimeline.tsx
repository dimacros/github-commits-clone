import { Card, CustomFlowbiteTheme, Timeline, theme } from "flowbite-react";
import { CommitHistory } from "../models/Commit"
import { Commit } from "./Commit"

const cardTheme: CustomFlowbiteTheme['card'] = {
  root: {
    children: 'flex h-full flex-col justify-center gap-4 divide-y divide-dashed'
  }
}
export const CommitTimeline = (history: CommitHistory) => (
  <Timeline>
    <Timeline.Item>
      <Timeline.Point />
      <Timeline.Content>
        <Timeline.Time>
          Commits on {history.date}
        </Timeline.Time>
        <Timeline.Body>
          <Card theme={cardTheme}>
            {history.commits.map(commit => <Commit {...commit} key={commit.sha} />)}
          </Card>
        </Timeline.Body>
      </Timeline.Content>
    </Timeline.Item>
  </Timeline>
)
