import { City } from "../service/city";
import { PandemicAssistant } from "../service/pandemicAssistant";

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

    public setup(playerCount: number, eventCards: number, epidemicCards: number): void {
        this.assistant.setup(playerCount, eventCards, epidemicCards);
        this.notifyPlayerDeckHandlers();
        this.notifyInfectionDeckHandlers();
    }

    public drawPlayerDeck(epidemic: boolean): void {
        this.assistant.drawPlayerDeck(epidemic);
        this.notifyPlayerDeckHandlers();
    }

    public drawInfectionDeck(city: string): void {
        this.assistant.drawInfectionDeck(city);
    }

    public removeInfectionCard(city: string): void {
        this.assistant.removeInfectionCard(city);
    }

    public intensify(): void {
        this.assistant.intensify();
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

}
