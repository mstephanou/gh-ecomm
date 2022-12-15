import game1 from '../../assets/game1.jpg';
import game2 from '../../assets/game2.jpg';
import game3 from '../../assets/game3.jpg';
import game4 from '../../assets/game4.jpg';

const initialData = [
  {
    id: '001',
    Name: 'Star Wars: Battlefront',
    description: 'Immerse Yourself in the Ultimate Star Wars Experience',
    image: game1,
    inCart: false,
    Price: 300,
  },
  {
    id: '002',
    Name: 'Dying Light',
    description:
      'Dying Light is an open world first person survival horror action-adventure video game developed by Techland',
    image: game2,
    inCart: false,
    Price: 500,
  },
  {
    id: '003',
    Name: 'Bloodborne',
    description:
      'Bloodborne is an action-playing video game developed by FromSoftware',
    image: game3,
    inCart: false,
    Price: 9999,
  },
  {
    id: '004',
    Name: 'Evolve',
    description:
      'Evolve is a first-person shooter video game developed by Turtle Rock Studios',
    image: game4,
    inCart: false,
    Price: 150,
  },
];

export default initialData;
