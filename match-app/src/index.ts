import { MatchReader } from "./MatchReader";
import { TEAM } from "./Constants";
import { CsvFileReader } from './CsvFileReader';
// import { MatchData } from './MatchData';
import { WinAnalysis } from './analyzer/WinAnalysis';
import { Summary } from './analyzer/Summary';
import { Report } from './analyzer/Report';

// 1. T approaching way ===========================================
// const reader = new MatchReader("data.csv");
// reader.read();

// 2. Interface approaching way ===================================
const csvFileReader = new CsvFileReader("data.csv");
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(
  new WinAnalysis(TEAM.ManUnited), 
  new Report()
);
summary.buildAndPrintReport(matchReader.matches);
summary.buildAndExportHtmlReport(matchReader.matches);