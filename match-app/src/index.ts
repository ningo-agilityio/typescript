import { MatchReader } from "./MatchReader";
import { TEAM } from "./Constants";
import { CsvFileReader } from './CsvFileReader';
// import { MatchData } from './MatchData';
import { WinAnalysis } from './analyzer/WinAnalysis';

// 1. T approaching way ===========================================
// const reader = new MatchReader("data.csv");
// reader.read();

// 2. Interface approaching way ===================================
const csvFileReader = new CsvFileReader("data.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const report = new WinAnalysis(TEAM.ManUnited);
console.log(report.run(matchReader.matches));