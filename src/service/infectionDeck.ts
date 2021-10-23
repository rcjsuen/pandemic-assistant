import { City, getCities, getInfectedCity } from "./city";
import { SeasonZeroConfiguration } from "./pandemicAssistant";

export class InfectionDeck {

    private groups: City[][];

    private discards: City[] = [];

    constructor(season: number, seasonZeroConfiguration: SeasonZeroConfiguration) {
        this.groups = [[]];
        for (const city of getCities(season)) {
            this.groups[0].push(city);
        }
        seasonZeroConfiguration.africaThreatCards.forEach((city) => {
            this.discards.push(getInfectedCity(city));
        });
        seasonZeroConfiguration.southAmericaThreatCards.forEach((city) => {
            this.discards.push(getInfectedCity(city));
        });
        this.groups[0].sort((a, b) => {
            return a.getName().localeCompare(b.getName());
        });
        this.discards.sort((a, b) => {
            return a.getName().localeCompare(b.getName());
        });
    }

    public draw(city: City): void {
        this.discards.push(city);
        this.discards.sort((a, b) => {
            return a.getName().localeCompare(b.getName());
        });
        for (const group of this.groups) {
            const idx = group.indexOf(city);
            if (idx !== -1) {
                group.splice(idx, 1);
                if (group.length === 0) {
                    this.groups.splice(0, 1);
                }
                break;
            }
        }
    }

    public intensify(): void {
        // insert the discard pile into the front of the groups
        this.groups.splice(0, 0, this.discards);
        // reset the discard pile
        this.discards = [];
    }

    public removeInfectionCard(city: City): void {
        const idx = this.discards.indexOf(city);
        if (idx === -1) {
            throw new Error("Can only remove a card that is in the discard pile")
        }
        this.discards.splice(idx, 1);
    }

    public getCityGroups(): City[][] {
        return this.groups;
    }

    public getDiscards(): City[] {
        return this.discards;
    }

    public hasDiscards(): boolean {
        return this.discards.length > 0;
    }
}
