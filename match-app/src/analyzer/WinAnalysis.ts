import { MatchData } from '../MatchData';
import { Analyzer } from './Summary';
import { MATCH_RESULT } from '../Constants';

export class WinAnalysis implements Analyzer {
  constructor(public team: string){}
  run(matches: MatchData[]): string { 
    let wins = 0;
    for (let match of matches) {
      if ((match[1] === this.team && match[5] === MATCH_RESULT.HomeWin) ||
        (match[2] === this.team && match[5] === MATCH_RESULT.AwayWin)) {
        wins++;
      }
    }
    return `Team ${this.team} team won ${wins} matches`;
  }
}