import { CsvFileReader } from "./CsvFileReader";

// enum
enum MATCH_RESULT {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}

enum TEAM {
  ManUnited = "Man United"
}

const reader = new CsvFileReader("data.csv");
reader.read();

let unitedWonMatches = 0;
for (let match of reader.data) {
  if ((match[1] === TEAM.ManUnited && match[5] === MATCH_RESULT.HomeWin) || 
    (match[2] === TEAM.ManUnited && match[5] === MATCH_RESULT.AwayWin)) {
    unitedWonMatches++;
  }
}

console.log(`United team won ${unitedWonMatches} matches`);