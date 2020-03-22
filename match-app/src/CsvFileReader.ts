import fs from "fs";
// import { MatchDataType } from "./Constants";

// 1. T approaching way ===========================================
// T: Type of any data
// export abstract class CsvFileReader<T> {
//   data: T[] = [];

//   constructor(public filename: string) {
//   }

//   abstract mapRow(row: string[]): T;

//   read(): void {
//     this.data = fs.readFileSync(this.filename, {
//       encoding: "utf-8"
//     }).split("\n").map((row: string): string[] => {
//       return row.split(",");
//     }).map(this.mapRow);
//   }
// }

// 2. Interface approaching way ===================================
export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string){}

  read():void {
    this.data = fs.readFileSync(this.filename, {
      encoding: "utf-8"
    }).split("\n").map((row: string): string[] => {
      return row.split(",");
    });
  }
}