import { CsvFileReader } from './CsvFileReader';
import { MATCH_RESULT } from './Constants';
import { parseDate } from './Utils';
import { MatchData } from './MatchData';

interface DataReader {
  read(): void;
  data: string[][];
}

// 1. T approaching way ===========================================
// export class MatchReader extends CsvFileReader<MatchDataType> {
//   mapRow(row: string[]): MatchDataType {
//     return [
//       parseDate(row[0]),
//       row[1],
//       row[2],
//       parseInt(row[3]),
//       parseInt(row[4]),
//       row[5] as MATCH_RESULT,
//       row[6],
//       row[7]
//     ]
//   }
// }

// 2. Interface approaching way ===================================
export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader){}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        parseDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MATCH_RESULT,
        row[6],
        row[7]
      ];
    });
  }
}