import { OutputTarget } from './Summary';
import fs from "fs";

export class Report implements OutputTarget {
  print(report: string): void {
    console.log(report);
  }

  exportHtml(report: string): void {
    const html = `
      <div>
        <h1>Analysis reports</h1>
        <p>${report}</p>
      </div>
    `;  

    fs.writeFileSync("report.html", html);
  }
}