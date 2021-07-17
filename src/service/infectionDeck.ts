import { City } from "./city";

export class InfectionDeck {

    private groups: City[][];

    private discards: City[] = [];

    constructor() {
        this.groups = [[]];
        for (const city of Object.keys(City)) {
            this.groups[0].push(city as City);
        }
        this.groups[0].sort((a, b) => {
            return a.localeCompare(b);
        });
    }

    public draw(city: City): void {
        this.discards.push(city);
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
        this.discards.sort((a, b) => {
            return a.localeCompare(b);
        });
        // insert the discard pile into the front of the groups
        this.groups.splice(0, 0, this.discards);
        // reset the discard pile
        this.discards = [];
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
