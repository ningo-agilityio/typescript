import { MatchReader } from "./MatchReader";
import { MATCH_RESULT, TEAM } from "./Constants";
import { CsvFileReader } from './CsvFileReader';
// import { MatchData } from './MatchData';

// 1. T approaching way ===========================================
// const reader = new MatchReader("data.csv");
// reader.read();

// 2. Interface approaching way ===================================
const csvFileReader = new CsvFileReader("data.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const data = matchReader.matches;

let unitedWonMatches = 0;
for (let match of data) {
  if ((match[1] === TEAM.ManUnited && match[5] === MATCH_RESULT.HomeWin) ||
    (match[2] === TEAM.ManUnited && match[5] === MATCH_RESULT.AwayWin)) {
    unitedWonMatches++;
  }
}

console.log(`United team won ${unitedWonMatches} matches`);