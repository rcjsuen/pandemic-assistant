import { City } from "./city";
import { InfectionDeck } from "./infectionDeck";
import { PlayerDeck } from "./playerDeck";

export interface SeasonZeroConfiguration {
    africaThreatCards: string[];
    southAmericaThreatCards: string[];
    europeThreatCards: string[];
}

export class PandemicAssistant {

    private playerDeck: PlayerDeck;

    private infectionDeck: InfectionDeck;

    private epidemicsDrawn: boolean[] = [];

    private epidemicsDrawnIndex: number = 0;

    private season: 0 | 1 | 2 = 0;

    private month: number = 0;

    constructor() {
        this.playerDeck = new PlayerDeck(48, 2, 2, 5, 0);
        this.infectionDeck = new InfectionDeck(1, {
            africaThreatCards: [], southAmericaThreatCards: [], europeThreatCards: []
        });
    }

    public setup(
        season: 0 | 1 | 2,
        month: number,
        playerCount: number,
        eventCards: number,
        epidemicCards: number,
        objectiveCards: number,
        seasonZeroConfiguration: SeasonZeroConfiguration
    ): void {
        this.season = season;
        this.month = month;
        this.playerDeck = new PlayerDeck(season === 2 ? 44 : 48, playerCount, eventCards, epidemicCards, objectiveCards);
        this.infectionDeck = new InfectionDeck(season, seasonZeroConfiguration);
        this.epidemicsDrawn = [];
        for (let i = 0; i < epidemicCards; i++) {
            this.epidemicsDrawn.push(false);
        }
        this.epidemicsDrawnIndex = 0;
    }

    public getRemainingPlayerCards(): number {
        return this.playerDeck.getRemainingCards();
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

    public drawInfectionDeck(city: City): void {
        this.infectionDeck.draw(city);
    }

    public removeInfectionCard(city: City): void {
        this.infectionDeck.removeInfectionCard(city);
    }

    public intensify(): void {
        this.infectionDeck.intensify();
    }

    public getCityGroups(): City[][] {
        return this.infectionDeck.getCityGroups();
    }

    public getDiscards(): City[] {
        return this.infectionDeck.getDiscards();
    }

    public getEpidemicsDrawn(): boolean[] {
        return this.epidemicsDrawn;
    }

    public getSeason(): 0 | 1 | 2 {
        return this.season;
    }

    public getMonth(): number {
        return this.month;
    }
}

export const Assistant = new PandemicAssistant();
