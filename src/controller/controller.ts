import { City } from "../service/city";
import { PandemicAssistant, SeasonZeroConfiguration } from "../service/pandemicAssistant";

export interface ControllerProps {
    controller: Controller;
}

export class Controller {

    private playerDeckHandlers: Function[] = [];

    private infectionDeckHandlers: Function[] = [];

    private assistant: PandemicAssistant;

    constructor() {
        this.assistant = new PandemicAssistant();
    }

    public attachPlayerDeckHandler(handler: Function): void {
        this.playerDeckHandlers.push(handler);
    }

    public attachInfectionDeckHandler(handler: Function): void {
        this.infectionDeckHandlers.push(handler);
    }

    public detachPlayerDeckHandler(handler: Function): void {
        const idx = this.playerDeckHandlers.indexOf(handler);
        if (idx !== -1) {
            this.playerDeckHandlers.splice(idx, 1);
        }
    }

    public detachInfectionDeckHandler(handler: Function): void {
        const idx = this.infectionDeckHandlers.indexOf(handler);
        if (idx !== -1) {
            this.infectionDeckHandlers.splice(idx, 1);
        }
    }

    private notifyHandlers(handlers: Function[]): void {
        handlers.forEach(handler => {
            handler();
        });
    }

    private notifyPlayerDeckHandlers(): void {
        this.notifyHandlers(this.playerDeckHandlers);
    }

    private notifyInfectionDeckHandlers(): void {
        this.notifyHandlers(this.infectionDeckHandlers);
    }

    public setup(
        season: 0 | 1,
        month: number,
        playerCount: number,
        eventCards: number,
        epidemicCards: number,
        objectiveCards: number,
        seasonZeroConfiguration: SeasonZeroConfiguration
    ): void {
        this.assistant.setup(season, month, playerCount, eventCards, epidemicCards, objectiveCards, seasonZeroConfiguration);
        this.notifyPlayerDeckHandlers();
        this.notifyInfectionDeckHandlers();
    }

    public drawPlayerDeck(epidemic: boolean): void {
        this.assistant.drawPlayerDeck(epidemic);
        this.notifyPlayerDeckHandlers();
    }

    public drawInfectionDeck(city: City): void {
        this.assistant.drawInfectionDeck(city);
    }

    public removeInfectionCard(city: City): void {
        this.assistant.removeInfectionCard(city);
    }

    public intensify(): void {
        this.assistant.intensify();
    }

    public getRemainingPlayerCards(): number {
        return this.assistant.getRemainingPlayerCards();
    }

    public getCityGroups(): City[][] {
        return this.assistant.getCityGroups();
    }

    public getDiscards(): City[] {
        return this.assistant.getDiscards();
    }

    public getEpidemicsDrawn(): boolean[] {
        return this.assistant.getEpidemicsDrawn();
    }

    public getMinRemainder(): number {
        return this.assistant.getMinRemainder();
    }

    public getMaxRemainder(): number {
        return this.assistant.getMaxRemainder();
    }

    public getSeason(): 0 | 1 {
        return this.assistant.getSeason();
    }

    public getMonth(): number {
        return this.assistant.getMonth();
    }

}
