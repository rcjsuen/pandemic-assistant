import { City } from "./city";
import { InfectionDeck } from "./infectionDeck";
import { PlayerDeck } from "./playerDeck";

export class PandemicAssistant {

    private playerDeck: PlayerDeck;

    private infectionDeck: InfectionDeck;

    private epidemicsDrawn: boolean[] = [];

    private epidemicsDrawnIndex: number = 0;

    constructor() {
        this.playerDeck = new PlayerDeck(2, 2, 5);
        this.infectionDeck = new InfectionDeck();
    }

    public setup(playerCount: number, eventCards: number, epidemicCards: number): void {
        this.playerDeck = new PlayerDeck(playerCount, eventCards, epidemicCards);
        this.infectionDeck = new InfectionDeck();
        this.epidemicsDrawn = [];
        for (let i = 0; i < epidemicCards; i++) {
            this.epidemicsDrawn.push(false);
        }
    }

    public getMinRemainder(): number {
        return this.playerDeck.getMinRemainder();
    }

    public getMaxRemainder(): number {
        return this.playerDeck.getMaxRemainder();
    }

    public drawPlayerDeck(epidemic: boolean): void {
        this.playerDeck.draw(epidemic);
        if (epidemic) {
            this.epidemicsDrawn[this.epidemicsDrawnIndex] = true;
            this.epidemicsDrawnIndex++;
        }
    }

    public drawInfectionDeck(city: string): void {
        this.infectionDeck.draw(city as City);
    }

    public intensify(): void {
        this.infectionDeck.intensify();
    }

    public getCityGroups(): City[][] {
        return this.infectionDeck.getCityGroups();
    }

    public getEpidemicsDrawn(): boolean[] {
        return this.epidemicsDrawn;
    }
}

export const Assistant = new PandemicAssistant();
