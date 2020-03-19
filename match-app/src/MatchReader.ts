import { CsvFileReader } from './CsvFileReader';
import { MatchDataType, MATCH_RESULT } from './Constants';
import { parseDate } from './Utils';

export class MatchReader extends CsvFileReader<MatchDataType> {
  mapRow(row: string[]): MatchDataType {
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