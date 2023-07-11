export interface Country {
  name: {
    official: string;
  },
  flags: {
    svg: string;
  },
  region: string;
  capital: string;
  population: number;
  maps: {
    googleMaps: URL;
  },
  timezones: [];
  coatOfArms: {
    svg: string;
  }
}