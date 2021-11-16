export interface IThumbnail {
  path: string;
  extension: string;
}

// TODO agregar los types que faltan
// comics events stories url's
export interface ICharacters {
  id: number;
  name: string;
  description: string;
  modified: string;
  thumbnail: IThumbnail;
  resourceURI: string;
}
