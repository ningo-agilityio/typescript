import { MatchReader } from "./MatchReader";
import { MATCH_RESULT, TEAM, MatchDataType } from "./Constants";

const reader = new MatchReader("data.csv");
reader.read();

let unitedWonMatches = 0;
for (let match of reader.data) {
  if ((match[1] === TEAM.ManUnited && match[5] === MATCH_RESULT.HomeWin) ||
    (match[2] === TEAM.ManUnited && match[5] === MATCH_RESULT.AwayWin)) {
    unitedWonMatches++;
  }
}

console.log(`United team won ${unitedWonMatches} matches`);