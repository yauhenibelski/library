import theBookEatersCover from './img/book_cover/TheBookEatersBySunyiDean.png';
import cackle from './img/book_cover/CackleByRachelHarrison.png';
import dante from './img/book_cover/Dante-PoetoftheSecularWorldByErichAuerbach.png';
import queen from './img/book_cover/TheLastQueenByCliveIrving.png';
import theBody from './img/book_cover/The_Body.png';
import carry from './img/book_cover/Carry.png';
import days from './img/book_cover/DaysofDistraction.png';
import dominicana from './img/book_cover/Dominicana.png';
import crude from './img/book_cover/Crude.png';
import letMyPeople from './img/book_cover/LetMyPeople.png';
import theOctopusMuseum from './img/book_cover/TheOctopusMuseum.png';
import sharkDialogues from './img/book_cover/SharkDialogues.png';
import casual from './img/book_cover/Casual.png';
import theGreatFire from './img/book_cover/TheGreatFire.png';
import rickey from './img/book_cover/Rickey.png';
import slug from './img/book_cover/Slug.png';

const books = [
  {
    id: 1,
    name: 'The Book Eaters',
    author: 'Sunyi Dean',
    description: 'An unusual sci-fi story about a book eater woman who tries desperately to save her dangerous mind-eater son from tradition and certain death. Complete with dysfunctional family values, light Sapphic romance, and a strong, complex protagonist. Not for the faint of heart.       ',
    src: theBookEatersCover,
    value: 'winter',
  },
  {
    id: 2,
    name: 'Cackle',
    author: 'Rachel Harrison',
    description: 'Are your Halloween movies of choice The Witches of Eastwick and Practical Magic? Look no further than here - where a woman recovering from a breakup moves to a quaint town in upstate New York and befriends a beautiful witch.',
    src: cackle,
    value: 'winter',
  },
  {
    id: 3,
    name: 'Dante: Poet of the Secular World',
    author: 'Erich Auerbach',
    description: 'Auerbach\'s engaging book places the \'Comedy\' within the tradition of epic, tragedy, and philosophy in general, arguing for Dante\'s uniqueness as one who raised the individual and his drama of soul into something of divine significance—an inspired introduction to Dante\'s main themes.',
    src: dante,
    value: 'winter',
  },
  {
    id: 4,
    name: 'The Last Queen',
    author: 'Clive Irving',
    description: 'A timely and revelatory new biography of Queen Elizabeth (and her family) exploring how the Windsors have evolved and thrived as the modern world has changed around them.',
    src: queen,
    value: 'winter',
  },
  {
    id: 5,
    name: 'The Body',
    author: 'Stephen King',
    description: 'Powerful novel that takes you back to a nostalgic time, exploring both the beauty and danger and loss of innocence that is youth.',
    src: theBody,
    value: 'spring',
  },
  {
    id: 6,
    name: 'Carry: A Memoir of Survival on Stolen',
    author: 'Toni Jenson',
    description: 'This memoir about the author\'s relationship with gun violence feels both expansive and intimate, resulting in a lyrical indictment of the way things are.',
    src: carry,
    value: 'spring',
  },
  {
    id: 7,
    name: 'Days of Distraction',
    author: 'Alexandra Chang',
    description: 'A sardonic view of Silicon Valley culture, a meditation on race, and a journal of displacement and belonging, all in one form-defying package of spare prose.',
    src: days,
    value: 'spring',
  },
  {
    id: 8,
    name: 'Dominicana',
    author: 'Angie Cruz',
    description: 'A fascinating story of a teenage girl who marries a man twice her age with the promise to bring her to America. Her marriage is an opportunity for her family to eventually immigrate. For fans of Isabel Allende and Julia Alvarez.',
    src: dominicana,
    value: 'spring',
  },
  {
    id: 9,
    name: 'Crude: A Memoir',
    author: 'Pablo Fajardo & ​​Sophie Tardy-Joubert',
    description: 'Drawing and color by Damien Roudeau | This book illustrates the struggles of a group of indigenous Ecuadoreans as they try to sue the ChevronTexaco company for damage their oil fields did to the Amazon and her people.',
    src: crude,
    value: 'summer',
  },
  {
    id: 10,
    name: 'Let My People Go Surfing',
    author: 'Yvon Chouinard',
    description: 'Chouinard—climber, businessman, environmentalist—shares tales of courage and persistence from his experience of founding and leading Patagonia, Inc. Full title: Let My People Go Surfing: The Education of a Reluctant Businessman, Including 10 More Years of Business Unusual.',
    src: letMyPeople,
    value: 'summer',
  },
  {
    id: 11,
    name: 'The Octopus Museum: Poems',
    author: 'Brenda Shaughnessy',
    description: 'This collection of bold and scathingly beautiful feminist poems imagines what comes after our current age of environmental destruction, racism, sexism, and divisive politics.',
    src: theOctopusMuseum,
    value: 'summer',
  },
  {
    id: 12,
    name: 'Shark Dialogues: A Novel',
    author: 'Kiana Davenport',
    description: 'An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.',
    src: sharkDialogues,
    value: 'summer',
  },
  {
    id: 13,
    name: 'Casual Conversation',
    author: 'Renia White',
    description: 'White\'s impressive debut collection takes readers through and beyond the concepts of conversation and the casual - both what we say to each other and what we don\'t, examining the possibilities around how we construct and communicate identity.',
    src: casual,
    value: 'autumn',
  },
  {
    id: 14,
    name: 'The Great Fire',
    author: 'Lou Ureneck',
    description: 'The harrowing story of an ordinary American and a principled Naval officer who, horrified by the burning of Smyrna, led an extraordinary rescue effort that saved a quarter of a million refugees from the Armenian Genocide.',
    src: theGreatFire,
    value: 'autumn',
  },
  {
    id: 15,
    name: 'Rickey: The Life and Legend',
    author: 'Howard Bryant',
    description: 'With the fall rolling around, one can\'t help but think of baseball\'s postseason coming up! And what better way to prepare for it than reading the biography of one of the game\'s all-time greatest performers, the Man of Steal, Rickey Henderson?',
    src: rickey,
    value: 'autumn',
  },
  {
    id: 16,
    name: 'Slug: And Other Stories',
    author: 'Megan Milks',
    description: 'An epic saga of seven generations of one family encompasses the tumultuous history of Hawaii as a Hawaiian woman gathers her four granddaughters together in an erotic tale of villains and dreamers, queens and revolutionaries, lepers and healers.',
    src: slug,
    value: 'autumn',
  },
];

export default books;
