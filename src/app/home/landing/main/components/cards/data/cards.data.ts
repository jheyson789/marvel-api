interface ImageCard {
  path: string;
  description: string;
}

export interface ICard {
  title: string;
  subtitle: string;
  description: string;
  image: ImageCard;
  route: string;
}
export const dataMarvelCards: ICard[] = [
  {
    title: 'Events',
    subtitle: 'Events Marvel',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    image: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/9/40/51ca10d996b8b.jpg',
      description: 'image to events marvel comics',
    },
    route: '/events',
  },
  {
    title: 'Series',
    subtitle: 'Series Marvel',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    image: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/4/b0/5d939e25a9787.jpg',
      description: 'image to events marvel comics',
    },
    route: '/series',
  },
  {
    title: 'Stories',
    subtitle: 'Stories Marvel',
    description:
      'Some quick example text to build on the card title and make up the bulk of the cards content.',
    image: {
      path: 'http://i.annihil.us/u/prod/marvel/i/mg/a/d0/4bb4eafadecaf.jpg',
      description: 'image to events marvel comics',
    },
    route: '/stories',
  },
];
