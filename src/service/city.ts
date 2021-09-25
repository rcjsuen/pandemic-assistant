export enum City {
    SanFrancisco = "SanFrancisco",
    Chicago = "Chicago",
    Montreal = "Montreal",
    Atlanta = "Atlanta",
    NewYork = "NewYork",
    WashingtonDC = "WashingtonDC",
    London = "London",
    Paris = "Paris",
    Madrid = "Madrid",
    Essen = "Essen",
    StPetersburg = "StPetersburg",
    Milan = "Milan",

    LosAngeles = "LosAngeles",
    Miami = "Miami",
    MexicoCity = "MexicoCity",
    Bogota = "Bogota",
    SaoPaolo = "SaoPaolo",
    BuenosAires = "BuenosAires",
    Lima = "Lima",
    Santiago = "Santiago",
    Lagos = "Lagos",
    Kinshasa = "Kinshasa",
    Johannesburg = "Johannesburg",
    Khartoum = "Khartoum",

    Moscow = "Moscow",
    Algiers = "Algiers",
    Riyadh = "Riyadh",
    Baghdad = "Baghdad",
    Tehran = "Tehran",
    Cairo = "Cairo",
    Istanbul = "Istanbul",
    Karachi = "Karachi",
    Delhi = "Delhi",
    Mumbai = "Mumbai",
    Chennai = "Chennai",
    Kolkata = "Kolkata",

    Beijing = "Beijing",
    Shanghai = "Shanghai",
    HongKong = "HongKong",
    Taipei = "Taipei",
    Bangkok = "Bangkok",
    Manila = "Manila",
    Jakarta = "Jakarta",
    HoChiMinhCity = "HoChiMinhCity",
    Seoul = "Seoul",
    Tokyo = "Tokyo",
    Osaka = "Osaka",
    Sydney = "Sydney",

    Leopoldville = "Leopoldville",
    Bombay = "Bombay",
    Calcutta = "Calcutta",
    Hanoi = "Hanoi",
    Novosibirsk = "Novosibirsk",
    Peking = "Peking",
    Pyongyang = "Pyongyang",
    Saigon = "Saigon",
    EastBerlin = "EastBerlin",
    Kiev = "Kiev",
    Leningrad = "Leningrad",
    Prague = "Prague",
    Rome = "Rome",
    Warsaw = "Warsaw",
    Havana = "Havana",
    Toronto = "Toronto",
    Washington = "Washington",
    SaoPaulo = "SaoPaulo"
}

export function getCities(season: number): City[] {
    if (season === 0) {
        return [
            City.SanFrancisco,
            City.LosAngeles,
            City.Toronto,
            City.NewYork,
            City.Washington,
            City.Atlanta,
            City.MexicoCity,
            City.Havana,

            City.Bogota,
            City.Lima,
            City.SaoPaolo,
            City.BuenosAires,
            City.Santiago,

            City.Lagos,
            City.Algiers,
            City.Cairo,
            City.Khartoum,
            City.Leopoldville,
            City.Johannesburg,

            City.London,
            City.Madrid,
            City.Paris,
            City.Rome,
            City.Istanbul,
            City.EastBerlin,
            City.Prague,
            City.Kiev,
            City.Warsaw,
            City.Leningrad,
            City.Moscow,

            City.Novosibirsk,
            City.Peking,
            City.Pyongyang,
            City.Shanghai,
            City.Baghdad,
            City.Riyadh,
            City.Karachi,
            City.Delhi,
            City.Bombay,
            City.Calcutta,
            City.Hanoi,
            City.Saigon,
            City.Bangkok,

            City.Tokyo,
            City.Osaka,
            City.Manila,
            City.Jakarta,
            City.Sydney,
        ];
    }
    return [
        City.SanFrancisco,
        City.Chicago,
        City.Montreal,
        City.Atlanta,
        City.NewYork,
        City.WashingtonDC,
        City.London,
        City.Paris,
        City.Madrid,
        City.Essen,
        City.StPetersburg,
        City.Milan,

        City.LosAngeles,
        City.Miami,
        City.MexicoCity,
        City.Bogota,
        City.SaoPaolo,
        City.BuenosAires,
        City.Lima,
        City.Santiago,
        City.Lagos,
        City.Kinshasa,
        City.Johannesburg,
        City.Khartoum,

        City.Moscow,
        City.Algiers,
        City.Riyadh,
        City.Baghdad,
        City.Tehran,
        City.Cairo,
        City.Istanbul,
        City.Karachi,
        City.Delhi,
        City.Mumbai,
        City.Chennai,
        City.Kolkata,

        City.Beijing,
        City.Shanghai,
        City.HongKong,
        City.Taipei,
        City.Bangkok,
        City.Manila,
        City.Jakarta,
        City.HoChiMinhCity,
        City.Seoul,
        City.Tokyo,
        City.Osaka,
        City.Sydney,
    ];
}

export function toFlagS0(city: City): string {
    switch (city) {
        case City.Algiers:
        case City.Atlanta:
        case City.Istanbul:
        case City.Johannesburg:
        case City.London:
        case City.LosAngeles:
        case City.NewYork:
        case City.Paris:
        case City.Rome:
        case City.Saigon:
        case City.SanFrancisco:
        case City.Sydney:
        case City.Toronto:
        case City.Washington:
            return "🤝";
        case City.Bangkok:
        case City.Bogota:
        case City.Bombay:
        case City.BuenosAires:
        case City.Calcutta:
        case City.Delhi:
        case City.Jakarta:
        case City.Karachi:
        case City.Khartoum:
        case City.Lagos:
        case City.Leopoldville:
        case City.Lima:
        case City.Madrid:
        case City.Manila:
        case City.MexicoCity:
        case City.Osaka:
        case City.Riyadh:
        case City.Santiago:
        case City.SaoPaulo:
        case City.Tokyo:
            return "🌐";
        case City.Baghdad:
        case City.Cairo:
        case City.EastBerlin:
        case City.Hanoi:
        case City.Havana:
        case City.Kiev:
        case City.Leningrad:
        case City.Moscow:
        case City.Novosibirsk:
        case City.Peking:
        case City.Prague:
        case City.Pyongyang:
        case City.Shanghai:
        case City.Warsaw:
            return "☭";
    }
    return "";
}

export function getColorS0(city: City): "danger" | "dark" | "primary" {
    switch (city) {
        case City.Algiers:
        case City.Atlanta:
        case City.Istanbul:
        case City.Johannesburg:
        case City.London:
        case City.LosAngeles:
        case City.NewYork:
        case City.Paris:
        case City.Rome:
        case City.Saigon:
        case City.Sydney:
        case City.Toronto:
        case City.Washington:
            return "primary";
        case City.Bangkok:
        case City.Bogota:
        case City.Bombay:
        case City.Calcutta:
        case City.Delhi:
        case City.BuenosAires:
        case City.Jakarta:
        case City.Karachi:
        case City.Khartoum:
        case City.Lagos:
        case City.Leopoldville:
        case City.Lima:
        case City.Madrid:
        case City.Manila:
        case City.MexicoCity:
        case City.Osaka:
        case City.Riyadh:
        case City.SaoPaolo:
        case City.Santiago:
        case City.Tokyo:
            return "dark";
        case City.Baghdad:
        case City.Cairo:
        case City.EastBerlin:
        case City.Havana:
        case City.Hanoi:
        case City.Kiev:
        case City.Leningrad:
        case City.Moscow:
        case City.Novosibirsk:
        case City.Peking:
        case City.Prague:
        case City.Pyongyang:
        case City.Shanghai:
        case City.Warsaw:
            return "danger";
    }
    return "dark";
}

export function getColorS1(city: City): "danger" | "warning" | "dark" | "primary" {
    switch (city) {
        case City.SanFrancisco:
        case City.Chicago:
        case City.Montreal:
        case City.Atlanta:
        case City.NewYork:
        case City.WashingtonDC:
        case City.London:
        case City.Paris:
        case City.Madrid:
        case City.Essen:
        case City.StPetersburg:
        case City.Milan:
            return "primary";
        case City.LosAngeles:
        case City.Miami:
        case City.MexicoCity:
        case City.Bogota:
        case City.SaoPaolo:
        case City.BuenosAires:
        case City.Lima:
        case City.Santiago:
        case City.Lagos:
        case City.Kinshasa:
        case City.Johannesburg:
        case City.Khartoum:
            return "warning";
        case City.Moscow:
        case City.Algiers:
        case City.Riyadh:
        case City.Baghdad:
        case City.Tehran:
        case City.Cairo:
        case City.Istanbul:
        case City.Karachi:
        case City.Delhi:
        case City.Mumbai:
        case City.Chennai:
        case City.Kolkata:
            return "dark";
        case City.Beijing:
        case City.Shanghai:
        case City.HongKong:
        case City.Taipei:
        case City.Bangkok:
        case City.Manila:
        case City.Jakarta:
        case City.HoChiMinhCity:
        case City.Seoul:
        case City.Tokyo:
        case City.Osaka:
        case City.Sydney:
            return "danger";
    }
    return "dark";
}

export function toFlag(city: City) {
    switch (city) {
        case City.Paris:
            return "🇨🇵";
        case City.Atlanta:
        case City.Chicago:
        case City.LosAngeles:
        case City.Miami:
        case City.NewYork:
        case City.SanFrancisco:
        case City.Washington:
        case City.WashingtonDC:
            return "🇺🇸";
        case City.Montreal:
        case City.Toronto:
            return "🇨🇦";
        case City.London:
            return "🇬🇧";
        case City.Madrid:
            return "🇪🇸";
        case City.EastBerlin:
        case City.Essen:
            return "🇩🇪";
        case City.Leningrad:
        case City.Moscow:
        case City.Novosibirsk:
        case City.StPetersburg:
            return "🇷🇺";
        case City.Milan:
        case City.Rome:
            return "🇮🇹";
        case City.MexicoCity:
            return "🇲🇽";
        case City.Bogota:
            return "🇨🇴";
        case City.SaoPaolo:
        case City.SaoPaulo:
            return "🇧🇷";
        case City.BuenosAires:
            return "🇦🇷";
        case City.Lima:
            return "🇵🇪";
        case City.Santiago:
            return "🇨🇱";
        case City.Lagos:
            return "🇳🇬";
        case City.Leopoldville:
        case City.Kinshasa:
            return "🇨🇩";
        case City.Johannesburg:
            return "🇿🇦";
        case City.Khartoum:
            return "🇸🇩";
        case City.Algiers:
            return "🇩🇿";
        case City.Riyadh:
            return "🇸🇦";
        case City.Baghdad:
            return "🇮🇶";
        case City.Tehran:
            return "🇮🇷";
        case City.Cairo:
            return "🇪🇬";
        case City.Istanbul:
            return "🇹🇷";
        case City.Karachi:
            return "🇵🇰";
        case City.Bombay:
        case City.Delhi:
        case City.Mumbai:
        case City.Chennai:
        case City.Calcutta:
        case City.Kolkata:
            return "🇮🇳";
        case City.Havana:
            return "🇨🇺";
        case City.Kiev:
            return "🇺🇦";
        case City.Prague:
            return "🇨🇿";
        case City.Pyongyang:
            return "🇰🇵";
        case City.Warsaw:
            return "🇵🇱";
        case City.Beijing:
        case City.Peking:
        case City.Shanghai:
            return "🇨🇳";
        case City.HongKong:
            return "🇭🇰";
        case City.Taipei:
            return "🇹🇼";
        case City.Bangkok:
            return "🇹🇭";
        case City.Manila:
            return "🇵🇭";
        case City.Jakarta:
            return "🇮🇩";
        case City.Hanoi:
        case City.HoChiMinhCity:
        case City.Saigon:
            return "🇻🇳";
        case City.Seoul:
            return "🇰🇷";
        case City.Osaka:
        case City.Tokyo:
            return "🇯🇵";
        case City.Sydney:
            return "🇦🇺";
    }
}

export function toString(city: City) {
    switch (city) {
        case City.SanFrancisco:
            return "San Francisco";
        case City.Chicago:
            return "Chicago";
        case City.Montreal:
            return "Montreal";
        case City.Atlanta:
            return "Atlanta";
        case City.NewYork:
            return "New York";
        case City.WashingtonDC:
            return "Washington D.C.";
        case City.London:
            return "London";
        case City.Paris:
            return "Paris";
        case City.Madrid:
            return "Madrid";
        case City.Essen:
            return "Essen";
        case City.StPetersburg:
            return "St. Petersburg";
        case City.Milan:
            return "Milan";
        case City.LosAngeles:
            return "Los Angeles";
        case City.Miami:
            return "Miami";
        case City.MexicoCity:
            return "Mexico City";
        case City.Bogota:
            return "Bogota";
        case City.SaoPaolo:
            return "Sao Paolo";
        case City.BuenosAires:
            return "Buenos Aires";
        case City.Lima:
            return "Lima";
        case City.Santiago:
            return "Santiago";
        case City.Lagos:
            return "Lagos";
        case City.Kinshasa:
            return "Kinshasa";
        case City.Johannesburg:
            return "Johannesburg";
        case City.Khartoum:
            return "Khartoum";
        case City.Moscow:
            return "Moscow";
        case City.Algiers:
            return "Algiers";
        case City.Riyadh:
            return "Riyadh";
        case City.Baghdad:
            return "Baghdad";
        case City.Tehran:
            return "Tehran";
        case City.Cairo:
            return "Cairo";
        case City.Istanbul:
            return "Istanbul";
        case City.Karachi:
            return "Karachi";
        case City.Delhi:
            return "Delhi";
        case City.Mumbai:
            return "Mumbai";
        case City.Chennai:
            return "Chennai";
        case City.Kolkata:
            return "Kolkata";
        case City.Beijing:
            return "Beijing";
        case City.Shanghai:
            return "Shanghai";
        case City.HongKong:
            return "Hong Kong";
        case City.Taipei:
            return "Taipei";
        case City.Bangkok:
            return "Bangkok";
        case City.Manila:
            return "Manila";
        case City.Jakarta:
            return "Jakarta";
        case City.HoChiMinhCity:
            return "Ho Chi Minh City";
        case City.Seoul:
            return "Seoul";
        case City.Tokyo:
            return "Tokyo";
        case City.Osaka:
            return "Osaka";
        case City.Sydney:
            return "Sydney";

        case City.Leopoldville:
            return "Leopoldville";
        case City.Bombay:
            return "Bombay";
        case City.Calcutta:
            return "Calcutta";
        case City.Hanoi:
            return "Hanoi";
        case City.Novosibirsk:
            return "Novosibirsk";
        case City.Peking:
            return "Peking";
        case City.Pyongyang:
            return "Pyongyang";
        case City.Saigon:
            return "Saigon";
        case City.EastBerlin:
            return "East Berlin";
        case City.Kiev:
            return "Kiev";
        case City.Leningrad:
            return "Leningrad";
        case City.Prague:
            return "Prague";
        case City.Rome:
            return "Rome";
        case City.Warsaw:
            return "Warsaw";
        case City.Havana:
            return "Havana";
        case City.Toronto:
            return "Toronto";
        case City.Washington:
            return "Washington";
        case City.SaoPaulo:
            return "Sao Paulo";
    }
}
