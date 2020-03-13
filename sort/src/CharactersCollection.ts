export class CharactersCollection {
  constructor(public data: string) { }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
      return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number):void {
    this.data = this.data.replace(this.data[leftIndex], '_').replace(this.data[rightIndex], this.data[leftIndex]).replace('_', this.data[rightIndex])
  }
}