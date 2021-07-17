import { City } from "../service/city";
import { PandemicAssistant } from "../service/pandemicAssistant";

export interface ControllerProps {
    controller: Controller;
}

export class Controller {

    private assistant: PandemicAssistant;

    constructor() {
        this.assistant = new PandemicAssistant();
    }

    public setup(playerCount: number, eventCards: number, epidemicCards: number): void {
        this.assistant.setup(playerCount, eventCards, epidemicCards);
    }

    public drawPlayerDeck(epidemic: boolean): void {
        this.assistant.drawPlayerDeck(epidemic);
    }

    public drawInfectionDeck(city: string): void {
        this.assistant.drawInfectionDeck(city);
    }

    public intensify(): void {
        this.assistant.intensify();
    }

    public getCityGroups(): City[][] {
        return this.assistant.getCityGroups();
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
