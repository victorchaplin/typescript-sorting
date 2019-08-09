import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharatersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -20, 1500]);
const charactersCollection = new CharatersCollection('Xaaybzxcv');
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

let sorter = new Sorter(numbersCollection);
sorter.bubbleSort();
console.log(numbersCollection.data);

sorter = new Sorter(charactersCollection);
sorter.bubbleSort();
console.log(charactersCollection.data);

sorter = new Sorter(linkedList);
sorter.bubbleSort();
linkedList.print();
