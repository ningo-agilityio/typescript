import { MatchData } from '../MatchData';
import { WinAnalysis } from '../analyzer/WinAnalysis';
import { Report } from '../analyzer/Report';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
  exportHtml(report: string): void;
}

export class Summary {
  static matchReport(team: string) {
    return new Summary(
      new WinAnalysis(team),
      new Report()
    );
  }

  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {
    
  }

  buildAndPrintReport(matches: MatchData[]): void {
    this.outputTarget.print(this.analyzer.run(matches));
  }
  
  buildAndExportHtmlReport(matches: MatchData[]): void {
    this.outputTarget.exportHtml(this.analyzer.run(matches));
  }
}