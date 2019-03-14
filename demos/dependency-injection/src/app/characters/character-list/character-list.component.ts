import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  title = 'Star Wars';
  characterList: any[] = characters;
  model: Character;

  constructor() {}

  ngOnInit() { }

  onClick() {
    this.title = 'Hej på dig';
  }
}


export class Character {
  id: number;
  name: string;
  list: any[];
}

export const characters = [
  {
    id: 1,
    name: 'Luke Skywalker',
    homeworld: 'Tatooine',
    vehicles: [
      {
        name: 'Snowspeeder',
        model: 't-47 airspeeder',
        passengers: '0',
        vehicle_class: 'airspeeder'
      },
      {
        name: 'Imperial Speeder Bike',
        model: '74-Z speeder bike',
        passengers: '1',
        vehicle_class: 'speeder'
      }
    ],
    starships: [
      {
        name: 'X-wing',
        model: 'T-65 X-wing',
        starship_class: 'Starfighter'
      },
      {
        name: 'Imperial shuttle',
        model: 'Lambda-class T-4a shuttle',
        starship_class: 'Armed government transport'
      }
    ]
  },
  {
    id: 2,
    name: 'C-3PO',
    homeworld: 'Tatooine',
    vehicles: [],
    starships: []
  },
  {
    id: 3,
    name: 'R2-D2',
    homeworld: 'Naboo',
    vehicles: [],
    starships: []
  },
  {
    id: 4,
    name: 'Darth Vader',
    homeworld: 'Tatooine',
    vehicles: [],
    starships: [
      {
        name: 'TIE Advanced x1',
        model: 'Twin Ion Engine Advanced x1',
        starship_class: 'Starfighter'
      }
    ]
  },
  {
    id: 5,
    name: 'Leia Organa',
    homeworld: 'Alderaan',
    vehicles: [
      {
        name: 'Imperial Speeder Bike',
        model: '74-Z speeder bike',
        passengers: '1',
        vehicle_class: 'speeder'
      }
    ],
    starships: []
  },
  {
    id: 6,
    name: 'Obi-Wan Kenobi',
    homeworld: 'Stewjon',
    vehicles: [
      {
        name: 'Tribubble bongo',
        model: 'Tribubble bongo',
        passengers: '2',
        vehicle_class: 'submarine'
      }
    ],
    starships: [
      {
        name: 'Jedi starfighter',
        model: 'Delta-7 Aethersprite-class interceptor',
        starship_class: 'Starfighter'
      },
      {
        name: 'Trade Federation cruiser',
        model: 'Providence-class carrier/destroyer',
        starship_class: 'capital ship'
      },
      {
        name: 'Naboo star skiff',
        model: 'J-type star skiff',
        starship_class: 'yacht'
      },
      {
        name: 'Jedi Interceptor',
        model: 'Eta-2 Actis-class light interceptor',
        starship_class: 'starfighter'
      },
      {
        name: 'Belbullab-22 starfighter',
        model: 'Belbullab-22 starfighter',
        starship_class: 'starfighter'
      }
    ]
  },
  {
    id: 7,
    name: 'Anakin Skywalker',
    homeworld: 'Tatooine',
    vehicles: [
      {
        name: 'Zephyr-G swoop bike',
        model: 'Zephyr-G swoop bike',
        passengers: '1',
        vehicle_class: 'repulsorcraft'
      },
      {
        name: 'XJ-6 airspeeder',
        model: 'XJ-6 airspeeder',
        passengers: '1',
        vehicle_class: 'airspeeder'
      }
    ],
    starships: [
      {
        name: 'Trade Federation cruiser',
        model: 'Providence-class carrier/destroyer',
        starship_class: 'capital ship'
      },
      {
        name: 'Jedi Interceptor',
        model: 'Eta-2 Actis-class light interceptor',
        starship_class: 'starfighter'
      },
      {
        name: 'Naboo fighter',
        model: 'N-1 starfighter',
        starship_class: 'Starfighter'
      }
    ]
  },
  {
    id: 8,
    name: 'Chewbacca',
    homeworld: 'Kashyyyk',
    vehicles: [
      {
        name: 'AT-ST',
        model: 'All Terrain Scout Transport',
        passengers: '0',
        vehicle_class: 'walker'
      }
    ],
    starships: [
      {
        name: 'Millennium Falcon',
        model: 'YT-1300 light freighter',
        starship_class: 'Light freighter'
      },
      {
        name: 'Imperial shuttle',
        model: 'Lambda-class T-4a shuttle',
        starship_class: 'Armed government transport'
      }
    ]
  },
  {
    id: 9,
    name: 'Han Solo',
    homeworld: 'Corellia',
    vehicles: [],
    starships: [
      {
        name: 'Millennium Falcon',
        model: 'YT-1300 light freighter',
        starship_class: 'Light freighter'
      },
      {
        name: 'Imperial shuttle',
        model: 'Lambda-class T-4a shuttle',
        starship_class: 'Armed government transport'
      }
    ]
  },
  {
    id: 10,
    name: 'Yoda',
    homeworld: 'Unknown',
    vehicles: [],
    starships: []
  },
  {
    name: 'Boba Fett',
    homeworld: 'Kamino',
    vehicles: [],
    starships: [
      {
        name: 'Slave 1',
        model: 'Firespray-31-class patrol and attack',
        starship_class: 'Patrol craft'
      }
    ]
  },
  {
    id: 11,
    name: 'Lando Calrissian',
    homeworld: 'Socorro',
    vehicles: [],
    starships: [
      {
        name: 'Millennium Falcon',
        model: 'YT-1300 light freighter',
        starship_class: 'Light freighter'
      }
    ]
  }
];
