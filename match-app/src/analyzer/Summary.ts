import { MatchData } from '../MatchData';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
  exportHtml(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {
    
  }

  buildAndPrintReport(matches: MatchData[]): void {
    this.outputTarget.print(this.analyzer.run(matches));
  }
  
  buildAndExportHtmlReport(matches: MatchData[]): void {
    this.outputTarget.exportHtml(this.analyzer.run(matches));
  }
}