import { CsvFileReader } from './CsvFileReader';
import { MATCH_RESULT } from '../Constants';
import { parseDate } from '../Utils';
import { MatchData } from '../MatchData';

// 1. T approaching way ===========================================
export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      parseDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MATCH_RESULT,
      row[6],
      row[7]
    ]
  }
}
