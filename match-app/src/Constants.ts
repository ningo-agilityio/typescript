// enum
export enum MATCH_RESULT {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D"
}

export enum TEAM {
  ManUnited = "Man United"
}

export type MatchDataType = [
  Date,
  string,
  string,
  number,
  number,
  MATCH_RESULT,
  string,
  string
];