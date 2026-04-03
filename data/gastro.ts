export interface Gastro {
    name: string,
    description: string,
    headerContent: headerContentInterface,
    details: detailsType,
    images : imageInterface[],
}

interface headerContentInterface {
    subtitle: string,
    title: string,
    paragraphtitle: string,
    paragraphDescription: string,
}
interface detailsType {
    capacity: number,
    openHours: string,
    lunch?: string,
    dinner?: string,
}
interface imageInterface {
    path: string,
    alt: string
}
export const gastro = [
    {
        name: 'restaurant',
        description: 'Come and taste meals from national and international cuisines.',
        headerContent: {
            subtitle: 'Gastro',
            title: 'Come and taste meals from national and international cuisines that are prepared by our chef from fresh, seasonal ingredients from local producers, growers and breeders.',
            paragraphtitle: 'National and global culinary delights form the basis not only for the A’la Carte menu, but also for the rich selection of our evening buffets.',
            paragraphDescription: 'In the morning we offer a nice surprise – breakfast buffet with healthy corner. The charming atmosphere of the restaurant during the summer season is complemented with the summer terrace and the view on the outdoor pool. During the summer you can enjoy specialties from the grill. Maximum capacity is 130 pax.',
        },
        details: {
            capacity: 130,
            openHours: "Daily from 07.00 to 22.00, July – August, holidays, weekends 7:30 – 22:00",
            lunch: '12:00 – 15:00',
            dinner: '17:30 – 21:00',
        },
        images: [
            {
                path: '/assets/gastro/gastro.jpg',
                alt: 'gastro',
            },
            {
                path: '/assets/gastro/gastro2.jpg',
                alt: 'gastro',
            },
            {
                path: '/assets/gastro/gastro3.jpg',
                alt: 'gastro',
            },
        ]
    },
    {
        name: 'cafeteria',
        description: 'A stylish Cafeteria with a pleasant atmosphere is always a good choice.',
        headerContent: {
            subtitle: 'Gastro',
            title: 'Come and relax in our Cafeteria, where we prepare for you delicious coffee of highest quality, tasty drinks and in addition, we have a daily delicious cakes baked only for you.',
            paragraphtitle: 'Our stylish Cafeteria with a pleasant atmosphere next to the reception is the right choice, whether you fancy a coffee with a business partner or an evening drink with friends.',
            paragraphDescription: 'Our bartenders are ready to help you in choosing from a wide range of fine whiskeys, exclusive rums, mixed drinks and our baristas will prepare you delicious coffee which you can enjoy with a home-made cake.',
        },
        details: {
            capacity: 30,
            openHours: "Open daily 08:00 – 23:00",
        },
        images: [
            {
                path: '/assets/gastro/cafeteria1.jpg',
                alt: 'Cafeteria',
            },
            {
                path: '/assets/gastro/cafeteria2.jpg',
                alt: 'Cafeteria',
            },
        ]
    }
]