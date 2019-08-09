export class CharatersCollection {
  data: string;

  constructor(data: string) {
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    const stringCharacters = this.data.split('');

    const leftHand = stringCharacters[leftIndex];
    stringCharacters[leftIndex] = stringCharacters[rightIndex];
    stringCharacters[rightIndex] = leftHand;

    this.data = stringCharacters.join('');
  }
}
