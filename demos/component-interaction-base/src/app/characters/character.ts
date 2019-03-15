export interface Character {
  id: number;
  name: string;
  homeworld: string;
  vehicles: Vehicle[];
  starships: Starship[];
}

export interface Starship {
  name: string;
  model: string;
  starship_class: string;
}

export interface Vehicle {
  name: string;
  model: string;
  passengers: number;
  vehicle_class: string;
}
