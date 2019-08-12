import { CharatersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';
import { NumbersCollection } from './NumbersCollection';

const numbersCollection = new NumbersCollection([10, 3, -5, 0, -20, 1500]);
numbersCollection.bubbleSort();
console.log(numbersCollection.data);

const charactersCollection = new CharatersCollection('Xaaybzxcv');
charactersCollection.bubbleSort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.bubbleSort();
linkedList.print();
