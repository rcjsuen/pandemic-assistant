export class City {
    constructor(
        private name: string,
        private flag: string,
        private colours: ("dark" | "danger" | "primary" | "warning")[],
        private region: "Africa" | "Asia" | "Europe" | "North America" | "Pacific Rim" | "South America",
        private infected: boolean = false
    ) { }

    public getName(): string {
        return this.name;
    }

    public getLabel(season: 0 | 1 | 2): string {
        if (season === 2) {
            return this.name;
        }
        if (this.infected) {
            return `☣️ ${this.name} (${this.region})`;
        }
        return `${this.flag} ${this.name} (${this.region})`;
    }

    public getColour(season: 0 | 1 | 2): "dark" | "danger" | "primary" | "warning" | "success" {
        if (this.colours.length < 2) {
            throw new Error(this.name);
        }
        if (this.infected) {
            return "success";
        }
        return this.colours[season];
    }

    public infect(): City {
        return new City(this.name, this.flag, this.colours, this.region, true);
    }

    public isInfected(): boolean {
        return this.infected;
    }
}

const SAN_FRANCISCO = new City("San Francisco", "🇺🇸", ["primary", "primary"], "North America");
const CHICAGO = new City("Chicago", "🇺🇸", ["primary", "primary"], "North America");
const MONTREAL = new City("Montreal", "🇨🇦", ["primary", "primary"], "North America");
const ATLANTA = new City("Atlanta", "🇺🇸", ["primary", "primary"], "North America");
const NEW_YORK = new City("New York", "🇺🇸", ["primary", "primary", "primary"], "North America");
const WASHINGTON_DC = new City("Washington DC", "🇺🇸", ["primary", "primary"], "North America");
const LONDON = new City("London", "🇬🇧", ["primary", "primary", "primary"], "Europe");
const PARIS = new City("Paris", "🇨🇵", ["primary", "primary"], "Europe");
const MADRID = new City("Madrid", "🇪🇸", ["dark", "primary"], "Europe");
const ESSEN = new City("Essen", "🇩🇪", ["primary", "primary"], "Europe");
const ST_PETERSBURG = new City("St. Petersburg", "🇷🇺", ["primary", "primary"], "Europe");
const MILAN = new City("Milan", "🇮🇹", ["primary", "primary"], "Europe");
const LOS_ANGELES = new City("Los Angeles", "🇺🇸", ["primary", "warning"], "North America");
const MIAMI = new City("Miami", "🇺🇸", ["warning", "warning"], "North America");
const MEXICO_CITY = new City("Mexico City", "🇲🇽", ["dark", "warning"], "North America");
const BOGOTA = new City("Bogota", "🇨🇴", ["dark", "warning"], "South America");
const SAO_PAOLO = new City("Sao Paolo", "🇧🇷", ["warning", "warning"], "South America");
const BUENOS_AIRES = new City("Buenos Aires", "🇦🇷", ["dark", "warning"], "South America");
const LIMA = new City("Lima", "🇵🇪", ["dark", "warning"], "South America");
const SANTIAGO = new City("Santiago", "🇨🇱", ["dark", "warning"], "South America");
const LAGOS = new City("Lagos", "🇳🇬", ["dark", "warning", "warning"], "Africa");
const KINSHASA = new City("Kinshasa", "🇨🇩", ["warning", "warning"], "Africa");
const JOHANNESBURG = new City("Johannesburg", "🇿🇦", ["primary", "warning"], "Africa");
const KHARTOUM = new City("Khartoum", "🇸🇩", ["dark", "warning"], "Africa");
const MOSCOW = new City("Moscow", "🇷🇺", ["danger", "dark"], "Europe");
const ALGIERS = new City("Algiers", "🇩🇿", ["primary", "dark"], "Africa");
const RIYADH = new City("Riyadh", "🇸🇦", ["dark", "dark"], "Asia");
const BAGHDAD = new City("Baghdad", "🇮🇶", ["danger", "dark"], "Asia");
const TEHRAN = new City("Tehran", "🇮🇷", ["dark", "dark"], "Asia");
const CAIRO = new City("Cairo", "🇪🇬", ["danger", "dark", "dark"], "Asia");
const ISTANBUL = new City("Istanbul", "🇹🇷", ["primary", "dark", "dark"], "Europe");
const KARACHI = new City("Karachi", "🇵🇰", ["dark", "dark"], "Asia");
const DELHI = new City("Delhi", "🇮🇳", ["dark", "dark"], "Asia");
const MUMBAI = new City("Mumbai", "🇮🇳", ["dark", "dark"], "Asia");
const CHENNAI = new City("Chennai", "🇮🇳", ["dark", "dark"], "Asia");
const KOLKATA = new City("Kolkata", "🇮🇳", ["dark", "dark"], "Asia");
const BEIJING = new City("Beijing", "🇨🇳", ["danger", "danger"], "Asia");
const SHANGHAI = new City("Shanghai", "🇨🇳", ["danger", "danger"], "Asia");
const HONG_KONG = new City("Hong Kong", "🇭🇰", ["danger", "danger"], "Asia");
const TAIPEI = new City("Taipei", "🇹🇼", ["danger", "danger"], "Asia");
const BANGKOK = new City("Bangkok", "🇹🇭", ["dark", "danger"], "Asia");
const MANILA = new City("Manila", "🇵🇭", ["dark", "danger"], "Pacific Rim");
const JAKARTA = new City("Jakarta", "🇮🇩", ["dark", "danger"], "Pacific Rim");
const HO_CHI_MINH_CITY = new City("Ho Chi Minh City", "🇻🇳", ["danger", "danger"], "Pacific Rim");
const SEOUL = new City("Seoul", "🇰🇷", ["danger", "danger"], "Pacific Rim");
const TOKYO = new City("Tokyo", "🇯🇵", ["dark", "danger"], "Pacific Rim");
const OSAKA = new City("Osaka", "🇯🇵", ["dark", "danger"], "Pacific Rim");
const SYDNEY = new City("Sydney", "🇦🇺", ["primary", "danger"], "Pacific Rim");

// Season 0
const LEOPOLDVILLE = new City("Leopoldville", "🇨🇩", ["dark", "dark"], "Africa");
const BOMBAY = new City("Bombay", "🇮🇳", ["danger", "danger"], "Asia");
const CALCUTTA = new City("Calcutta", "🇮🇳", ["dark", "dark"], "Asia");
const HANOI = new City("Hanoi", "🇻🇳", ["danger", "danger"], "Asia");
const NOVOSIBIRSK = new City("Novosibirsk", "🇷🇺", ["danger", "danger"], "Asia");
const PEKING = new City("Peking", "🇨🇳", ["danger", "danger"], "Asia");
const PYONGYANG = new City("Pyongyang", "🇰🇵", ["danger", "danger"], "Asia");
const SAIGON = new City("Saigon", "🇻🇳", ["primary", "primary"], "Asia");
const EAST_BERLIN = new City("East Berlin", "🇩🇪", ["danger", "danger"], "Europe");
const KIEV = new City("Kiev", "🇺🇦", ["danger", "danger"], "Europe");
const LENINGRAD = new City("Leningrad", "🇷🇺", ["danger", "danger"], "Europe");
const PRAGUE = new City("Prague", "🇨🇿", ["danger", "danger"], "Europe");
const ROME = new City("Rome", "🇮🇹", ["primary", "primary"], "Europe");
const WARSAW = new City("Warsaw", "🇵🇱", ["danger", "danger"], "Europe");
const HAVANA = new City("Havana", "🇨🇺", ["danger", "danger"], "North America");
const TORONTO = new City("Toronto", "🇨🇦", ["primary", "primary"], "North America");
const WASHINGTON = new City("Washington", "🇺🇸", ["primary", "primary", "primary"], "North America");
const SAO_PAULO = new City("Sao Paulo", "🇧🇷", ["dark", "dark", "warning"], "South America");

// Season 2
const TRIPOLI = new City("Tripoli", "🇱🇾", ["dark", "dark", "dark"], "Africa");
const JACKSONVILLE = new City("Jacksonville", "🇺🇸", ["warning", "warning", "warning"], "North America");

export function getInfectedCity(city: string): City {
    switch (city) {
        case ALGIERS.getName():
            return ALGIERS.infect();
        case CAIRO.getName():
            return CAIRO.infect();
        case JOHANNESBURG.getName():
            return JOHANNESBURG.infect();
        case KHARTOUM.getName():
            return KHARTOUM.infect();
        case LAGOS.getName():
            return LAGOS.infect();
        case LEOPOLDVILLE.getName():
            return LEOPOLDVILLE.infect();
        case BOGOTA.getName():
            return BOGOTA.infect();
        case BUENOS_AIRES.getName():
            return BUENOS_AIRES.infect();
        case LIMA.getName():
            return LIMA.infect();
        case SANTIAGO.getName():
            return SANTIAGO.infect();
        case SAO_PAULO.getName():
            return SAO_PAULO.infect();
        case EAST_BERLIN.getName():
            return EAST_BERLIN.infect();
        case ISTANBUL.getName():
            return ISTANBUL.infect();
        case KIEV.getName():
            return KIEV.infect();
        case LENINGRAD.getName():
            return LENINGRAD.infect();
        case LONDON.getName():
            return LONDON.infect();
        case MADRID.getName():
            return MADRID.infect();
        case MOSCOW.getName():
            return MOSCOW.infect();
        case PARIS.getName():
            return PARIS.infect();
        case PRAGUE.getName():
            return PRAGUE.infect();
        case ROME.getName():
            return ROME.infect();
        case WARSAW.getName():
            return WARSAW.infect();
        case BAGHDAD.getName():
            return BAGHDAD.infect();
        case BANGKOK.getName():
            return BANGKOK.infect();
        case BOMBAY.getName():
            return BOMBAY.infect();
        case CALCUTTA.getName():
            return CALCUTTA.infect();
        case DELHI.getName():
            return DELHI.infect();
        case HANOI.getName():
            return HANOI.infect();
        case KARACHI.getName():
            return KARACHI.infect();
        case NOVOSIBIRSK.getName():
            return NOVOSIBIRSK.infect();
        case PEKING.getName():
            return PEKING.infect();
        case PYONGYANG.getName():
            return PYONGYANG.infect();
        case RIYADH.getName():
            return RIYADH.infect();
        case SAIGON.getName():
            return SAIGON.infect();
        case SHANGHAI.getName():
            return SHANGHAI.infect();
    }
    throw new Error(city);
}

export function getAfricaInfections(): City[] {
    return [
        ALGIERS.infect(),
        CAIRO.infect(),
        JOHANNESBURG.infect(),
        KHARTOUM.infect(),
        LAGOS.infect(),
        LEOPOLDVILLE.infect()
    ];
}

export function getSouthAmericaInfections(): City[] {
    return [
        BOGOTA.infect(),
        BUENOS_AIRES.infect(),
        LIMA.infect(),
        SANTIAGO.infect(),
        SAO_PAULO.infect()
    ];
}

export function getEuropeInfections(): City[] {
    return [
        EAST_BERLIN.infect(),
        ISTANBUL.infect(),
        KIEV.infect(),
        LENINGRAD.infect(),
        LONDON.infect(),
        MADRID.infect(),
        MOSCOW.infect(),
        PARIS.infect(),
        PRAGUE.infect(),
        ROME.infect(),
        WARSAW.infect()
    ];
}

export function getAsiaInfections(): City[] {
    return [
        BAGHDAD.infect(),
        BANGKOK.infect(),
        BOMBAY.infect(),
        CALCUTTA.infect(),
        DELHI.infect(),
        HANOI.infect(),
        KARACHI.infect(),
        NOVOSIBIRSK.infect(),
        PEKING.infect(),
        PYONGYANG.infect(),
        RIYADH.infect(),
        SAIGON.infect(),
        SHANGHAI.infect()
    ]
}

export function getNorthAmericaInfections(): City[] {
    return [
        ATLANTA.infect(),
        HAVANA.infect(),
        LOS_ANGELES.infect(),
        MEXICO_CITY.infect(),
        NEW_YORK.infect(),
        SAN_FRANCISCO.infect(),
        TORONTO.infect(),
        WASHINGTON.infect()
    ]
}

export function getCities(season: number): City[] {
    if (season === 2) {
        return [
            LONDON, LONDON, LONDON,
            NEW_YORK, NEW_YORK, NEW_YORK,
            WASHINGTON, WASHINGTON, WASHINGTON,

            CAIRO, CAIRO, CAIRO,
            ISTANBUL, ISTANBUL, ISTANBUL,
            TRIPOLI, TRIPOLI, TRIPOLI,

            JACKSONVILLE, JACKSONVILLE, JACKSONVILLE,
            LAGOS, LAGOS, LAGOS,
            SAO_PAULO, SAO_PAULO, SAO_PAULO,
        ]
    } else if (season === 0) {
        return [
            SAN_FRANCISCO,
            TORONTO,
            NEW_YORK,
            LOS_ANGELES,
            ATLANTA,
            WASHINGTON,
            MEXICO_CITY,
            HAVANA,
            BOGOTA,
            LIMA,
            SAO_PAULO,
            SANTIAGO,
            BUENOS_AIRES,
            LONDON,
            EAST_BERLIN,
            PARIS,
            MADRID,
            WARSAW,
            LENINGRAD,
            MOSCOW,
            ROME,
            ISTANBUL,
            PRAGUE,
            KIEV,
            ALGIERS,
            LAGOS,
            CAIRO,
            KHARTOUM,
            LEOPOLDVILLE,
            JOHANNESBURG,
            NOVOSIBIRSK,
            PEKING,
            PYONGYANG,
            DELHI,
            BAGHDAD,
            KARACHI,
            RIYADH,
            HANOI,
            CALCUTTA,
            SHANGHAI,
            BOMBAY,
            BANGKOK,
            SAIGON,
            OSAKA,
            TOKYO,
            SYDNEY,
            MANILA,
            JAKARTA
        ];
    }
    return [
        SAN_FRANCISCO,
        CHICAGO,
        MONTREAL,
        ATLANTA,
        NEW_YORK,
        WASHINGTON_DC,
        LONDON,
        PARIS,
        MADRID,
        ESSEN,
        ST_PETERSBURG,
        MILAN,
        LOS_ANGELES,
        MIAMI,
        MEXICO_CITY,
        BOGOTA,
        SAO_PAOLO,
        BUENOS_AIRES,
        LIMA,
        SANTIAGO,
        LAGOS,
        KINSHASA,
        JOHANNESBURG,
        KHARTOUM,
        MOSCOW,
        ALGIERS,
        RIYADH,
        BAGHDAD,
        TEHRAN,
        CAIRO,
        ISTANBUL,
        KARACHI,
        DELHI,
        MUMBAI,
        CHENNAI,
        KOLKATA,
        BEIJING,
        SHANGHAI,
        HONG_KONG,
        TAIPEI,
        BANGKOK,
        MANILA,
        JAKARTA,
        HO_CHI_MINH_CITY,
        SEOUL,
        TOKYO,
        OSAKA,
        SYDNEY,
    ];
}
