export class PlayerDeck {

    private counts: number[] = [];

    private drawnEpidemics: boolean[] = [];

    private drawnCards: number = 0;

    private drawnCurrentBucket: number = 0;

    private deck: number;

    private currentBucket: number;

    constructor(private playerCount: number, private eventCards: number, private epidemicCards: number) {
        let total = 48 + this.eventCards + this.epidemicCards;
        this.deck = total - this.getStartingRemoval();
        let remainder = this.deck;
        let epidemics = this.epidemicCards;
        this.counts = [];
        while (epidemics > 0) {
            let split = Math.floor(remainder / epidemics);
            remainder -= Math.floor(split);
            epidemics--;
            this.counts.push(split);
            this.drawnEpidemics.push(false);
        }
        this.currentBucket = this.counts.length - 1;
    }

    public getRemainingCards(): number {
        return this.deck;
    }

    public draw(epidemic: boolean): void {
        this.drawnCards++;
        this.drawnCurrentBucket++;
        if (epidemic) {
            if (this.drawnEpidemics[this.currentBucket]) {
                throw new Error("Already drew an epidemic for this bucket");
            }
            this.drawnEpidemics[this.currentBucket] = true;
        }
        let depth = this.deck - this.drawnCards
        let cards = 0;
        for (let i = 0; i < this.counts.length; i++) {
            cards += this.counts[i];
            if (cards > depth) {
                return;
            } else if (cards == depth) {
                this.currentBucket--;
                this.drawnCurrentBucket = 0;
                return;
            }
        }
    }

    public getMinRemainder(): number {
        if (this.drawnEpidemics[this.currentBucket]) {
            return this.counts[this.currentBucket] - this.drawnCurrentBucket;
        }
        // next card could be an epidemic if we haven't drawn it yet
        return 0;
    }

    public getMaxRemainder(): number {
        if (this.drawnEpidemics[this.currentBucket]) {
            return this.counts[this.currentBucket] - this.drawnCurrentBucket + this.counts[this.currentBucket - 1] - 1;
        }
        return this.counts[this.currentBucket] - this.drawnCurrentBucket - 1;
    }

    public getCounts(): number[] {
        return this.counts;
    }

    private getStartingRemoval(): number {
        return this.playerCount === 3 ? 9 : 8;
    }
}
