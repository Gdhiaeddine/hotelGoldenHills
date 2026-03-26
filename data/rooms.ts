
export type Room = {
    name: string;
    slug: string;
    description: string;
    type : string;
    about : string[];
    information : string[];
    equipements : Equipement[];
    price: number;
    guests: string;
    images : Image[];
};

type Equipement = {
  icon : string;
  name : string;
}
type Image = {
  path : string;
  alt : string;
}

export const rooms = [
  {
    name: "Deluxe Single Room",
    slug: "deluxe-single-room",
    description: "Comfortably furnished room without the possibility of an extra bed with breakfast, unlimited access to thermal pools, Spa & Wellness.",
    type : "Single room",
    about: [
      "Comfortable, smaller room, bed (120cm), with satellite TV, coffee and tea set, minibar, desk, air conditioning, WIFI, bathroom with shower, bathrobe and slippers available in the room. Rooms are without or with loggia.",
      "The rooms are non-smoking.",
      "A Kaskady inclusive service included as our attention for your wonderful stay. The price of accommodation includes breakfast and unlimited access to the thermal pools and the Wellness & Spa.",
    ],
    information: [
      "Child to 2,99 years old is gratis.",
      "The price does not include the local tax 2 € / night / person.",
    ],
    equipements: [
      {
        icon: "Calendar",
        name: "Air conditioning"
      },
      {
        icon: "Calendar",
        name: "Air conditioning"
      }, {
        icon: "Calendar",
        name: "Air conditioning"
      }, {
        icon: "Calendar",
        name: "Air conditioning"
      },
    ],
    price: 11900,
    guests:"One guest",
    images : [
      {
        path: '/assets/rooms/SingleDeluxe.jpg',
        alt: 'Single Deluxe Room',
      },
      {
        path: '/RoomPresentation.png',
        alt: 'aaa',
      },
      {
        path: '/RoomPresentation.png',
        alt: 'aaa',
      },
    ]
  },
  {
    name: "Deluxe Double Room",
    slug: "deluxe-double-room",
    description: "Comfortably furnished room without the possibility of an extra bed with breakfast, unlimited access to thermal pools, Spa & Wellness.",
    type : "Double room",
    about: [
      "Comfortable, smaller room, bed (120cm), with satellite TV, coffee and tea set, minibar, desk, air conditioning, WIFI, bathroom with shower, bathrobe and slippers available in the room. Rooms are without or with loggia.",
      "The rooms are non-smoking.",
      "A Kaskady inclusive service included as our attention for your wonderful stay. The price of accommodation includes breakfast and unlimited access to the thermal pools and the Wellness & Spa.",
    ],
    information: [
      "Child to 2,99 years old is gratis.",
      "The price does not include the local tax 2 € / night / person.",
    ],
    equipements: [
      {
        icon: "Calendar",
        name: "Air conditioning"
      },
      {
        icon: "Calendar",
        name: "Air conditioning"
      }, {
        icon: "Calendar",
        name: "Air conditioning"
      }, {
        icon: "Calendar",
        name: "Air conditioning"
      },
    ],
    price: 14800,
    guests:"Two guests",
    images : [
      {
        path: '/assets/rooms/DeluxeDoubleRoom1.jpg',
        alt: 'Deluxe Double Room',
      },
      {
        path: '/assets/rooms/DeluxeDoubleRoom2.JPG',
        alt: 'Deluxe Double Room',
      },
      {
        path: '/assets/rooms/DeluxeDoubleRoom3.JPG',
        alt: 'Deluxe Double Room',
      },
    ]
  },
  {
    name: "Twin Comfort Room",
    slug: "twin-double-room",
    description: "Comfortably furnished room without the possibility of an extra bed with breakfast, unlimited access to thermal pools, Spa & Wellness.",
    type : "Double room",
    about: [
      "Comfortable, smaller room, bed (120cm), with satellite TV, coffee and tea set, minibar, desk, air conditioning, WIFI, bathroom with shower, bathrobe and slippers available in the room. Rooms are without or with loggia.",
      "The rooms are non-smoking.",
      "A Kaskady inclusive service included as our attention for your wonderful stay. The price of accommodation includes breakfast and unlimited access to the thermal pools and the Wellness & Spa.",
    ],
    information: [
      "Child to 2,99 years old is gratis.",
      "The price does not include the local tax 2 € / night / person.",
    ],
    equipements: [
      {
        icon: "Calendar",
        name: "Air conditioning"
      },
      {
        icon: "Calendar",
        name: "Air conditioning"
      }, {
        icon: "Calendar",
        name: "Air conditioning"
      }, {
        icon: "Calendar",
        name: "Air conditioning"
      },
    ],
    price: 14800,
    guests:"Two guests",
    images : [
      {
        path: '/assets/rooms/DoubleDeluxe.jpg',
        alt: 'Twin Comfort Room',
      },
      {
        path: '/assets/rooms/DoubleSeparatedBed.JPG',
        alt: 'Twin Comfort Room',
      },
      {
        path: '/assets/rooms/DoubleSeparatedBed1.JPG',
        alt: 'Twin Comfort Room',
      },
      {
        path: '/assets/rooms/DoubleSeparatedBed2.JPG',
        alt: 'Twin Comfort Room',
      },
    ]
  },
];

{/* ################# */}

export type Suite = {
    name: string;
    slug: string;
    description: string;
    type : string;
    about : string[];
    information : string[];
    equipements : Equipement[];
    price: number;
    guests: string;
    images : Image[];
};

export const suites = [
  {
    name: "Classic Suite",
    slug: "classic-junior",
    description: "Comfortably furnished room without the possibility of an extra bed with breakfast, unlimited access to thermal pools, Spa & Wellness.",
    type : "Classic Suite",
    about: [
      "Stylish, comfortable suite renovated in 2022, with separate living area with sofa bed for 1 person or 2 children up to 12 years old. (140 x 200), bedroom with double bed, minibar, tea and coffee making facilities, WIFI, satellite TV, two bathrooms with showers, air conditioning, bathrobe and slippers available in the room.",
      "The rooms are non-smoking.",
      "A Kaskady inclusive service included as our attention for your wonderful stay. Accommodation includes breakfast and unlimited access to the thermal pools and the Wellness & Spa.",
    ],
    information: [
      "Child to 2,99 years old is gratis.",
      "The price does not include the local tax 2 € / night / person.",
    ],
    equipements: [
      {
        icon: "Calendar",
        name: "Air conditioning"
      },
      {
        icon: "Calendar",
        name: "Air conditioning"
      }, {
        icon: "Calendar",
        name: "Air conditioning"
      }, {
        icon: "Calendar",
        name: "Air conditioning"
      },
    ],
    price: 20500,
    guests:"Two guests",
    images : [
      {
        path: '/RoomPresentation.png',
        alt: 'aaa',
      },
      {
        path: '/RoomPresentation.png',
        alt: 'aaa',
      },
      {
        path: '/RoomPresentation.png',
        alt: 'aaa',
      },
    ]
  },
  {
    name: "Junior Executive Suite",
    slug: "junior-executive-suite",
    description: "Comfortably furnished room without the possibility of an extra bed with breakfast, unlimited access to thermal pools, Spa & Wellness.",
    type : "Four Junior",
    about: [
      "Stylish, comfortable suite renovated in 2022, with separate living area with sofa bed for 1 person or 2 children up to 12 years old. (140 x 200), bedroom with double bed, minibar, tea and coffee making facilities, WIFI, satellite TV, two bathrooms with showers, air conditioning, bathrobe and slippers available in the room.",
      "The rooms are non-smoking.",
      "A Kaskady inclusive service included as our attention for your wonderful stay. Accommodation includes breakfast and unlimited access to the thermal pools and the Wellness & Spa.",
    ],
    information: [
      "Child to 2,99 years old is gratis.",
      "The price does not include the local tax 2 € / night / person.",
    ],
    equipements: [
      {
        icon: "Calendar",
        name: "Air conditioning"
      },
      {
        icon: "Calendar",
        name: "Air conditioning"
      }, {
        icon: "Calendar",
        name: "Air conditioning"
      }, {
        icon: "Calendar",
        name: "Air conditioning"
      },
    ],
    price: 17200,
    guests:"Two guests",
    images : [
      {
        path: '/assets/suites/SuiteJunior3.jpg',
        alt: 'Junior Executive Suite',
      },
      {
        path: '/assets/suites/SuiteJunior1.jpg',
        alt: 'Junior Executive Suite',
      },
      {
        path: '/assets/suites/SuiteJunior2.jpg',
        alt: 'Junior Executive Suite',
      },

    ]
  },
  {
    name: "Royal Suite",
    slug: "royal-junior",
    description: "Comfortably furnished room without the possibility of an extra bed with breakfast, unlimited access to thermal pools, Spa & Wellness.",
    type : "Suite Senior",
    about: [
      "Stylish, comfortable suite renovated in 2022, with separate living area with sofa bed for 1 person or 2 children up to 12 years old. (140 x 200), bedroom with double bed, minibar, tea and coffee making facilities, WIFI, satellite TV, two bathrooms with showers, air conditioning, bathrobe and slippers available in the room.",
      "The rooms are non-smoking.",
      "A Kaskady inclusive service included as our attention for your wonderful stay. Accommodation includes breakfast and unlimited access to the thermal pools and the Wellness & Spa.",
    ],
    information: [
      "Child to 2,99 years old is gratis.",
      "The price does not include the local tax 2 € / night / person.",
    ],
    equipements: [
      {
        icon: "Calendar",
        name: "Air conditioning"
      },
      {
        icon: "Calendar",
        name: "Air conditioning"
      }, {
        icon: "Calendar",
        name: "Air conditioning"
      }, {
        icon: "Calendar",
        name: "Air conditioning"
      },
    ],
    price: 22000,
    guests:"Five guests",
    images : [
      {
        path: '/assets/suites/SuiteSenior.jpg',
        alt: 'Suite Senior',
      },
      {
        path: '/assets/suites/SuiteSenior1.jpg',
        alt: 'Suite Senior',
      },
      {
        path: '/assets/suites/SuiteSenior2.jpg',
        alt: 'Suite Senior',
      },
      {
        path: '/assets/suites/SuiteSenior3.jpg',
        alt: 'Suite Senior',
      },
    ]
  },
];