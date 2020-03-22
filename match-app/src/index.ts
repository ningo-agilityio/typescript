import { MatchReader } from "./MatchReader";
import { TEAM } from "./Constants";
// import { MatchData } from './MatchData';
import { WinAnalysis } from './analyzer/WinAnalysis';
import { Summary } from './analyzer/Summary';
import { Report } from './analyzer/Report';

// 1. T approaching way ===========================================
// const reader = new MatchReader("data.csv");
// reader.read();

// 2. Interface approaching way ===================================
const matchReader = MatchReader.fromCsv("data.csv");
matchReader.load();

const summary = Summary.matchReport(TEAM.ManUnited);
summary.buildAndPrintReport(matchReader.matches);
summary.buildAndExportHtmlReport(matchReader.matches);