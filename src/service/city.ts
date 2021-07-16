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
}

export function getColor(city: City): "danger" | "warning" | "dark" | "primary" {
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
    return "danger";
}

export function toString(city: City) {
    switch (city) {case City.SanFrancisco:
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
        return "LosAngeles";
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
    }
}
