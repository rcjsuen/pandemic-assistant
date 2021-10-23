import React from 'react';
import { IonGrid, IonCol, IonRow, IonList, IonLabel, IonInput, IonItem, IonSelect, IonSelectOption, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonBackButton, IonButtons } from '@ionic/react';
import { ControllerProps } from "../controller/controller";
import { Storage } from '@capacitor/storage';
import { City, getAfricaInfections, getSouthAmericaInfections } from '../service/city';
import { SeasonZeroConfiguration } from '../service/pandemicAssistant';
import StartButton from '../components/StartButton';

interface SeasonSetupState {
    season: 0 | 1;
    playerCount: number;
    month: number;
    eventCards: number;
    epidemicCards: number;
    objectiveCards: number;
    seasonZeroConfiguration: {
        africaThreatCards: Set<City>;
        southAmericaThreatCards: Set<City>;
    };
}

export interface GameConfiguration {
    season: 0 | 1;
    playerCount: number;
    month: number;
    eventCards: number;
    epidemicCards: number;
    objectiveCards: number;
    seasonZeroConfiguration: SeasonZeroConfiguration;
}

class SeasonSetupPage extends React.Component<ControllerProps, SeasonSetupState> {

    constructor(props: ControllerProps) {
        super(props)
        this.state = {
            season: 0,
            playerCount: 4,
            month: 1,
            eventCards: 4,
            epidemicCards: 5,
            objectiveCards: 0,
            seasonZeroConfiguration: {
                africaThreatCards: new Set(),
                southAmericaThreatCards: new Set()
            }
        };
        Storage.get({ key: "season" }).then((result) => {
            const season = Number(result.value) as (0 | 1);
            if (season === 0) {
                this.setState({ season: season, epidemicCards: 5 });
            } else {
                this.setState({ season: season });
            }
        });
        Storage.get({ key: "playerCount" }).then((result) => {
            this.setState({ playerCount: Number(result.value) });
        });
        Storage.get({ key: "month" }).then((result) => {
            this.setState({ month: Number(result.value) });
        });

        this.updateExtraThreatCards.bind(this);
    }

    private getDangerCardText(): string {
        return this.state.season === 0 ? "Threat Cards" : "Epidemic Cards";
    }

    private updateExtraThreatCards(threatCards: Set<City>, cities: string[]): void {
        threatCards.clear();
        for (const city of cities) {
            threatCards.add(city as any);
        }
    }

    private serialize(): GameConfiguration {
        const africa: string[] = [];
        this.state.seasonZeroConfiguration.africaThreatCards.forEach((city) => {
            africa.push(city.getName());
        });
        const southAmerica: string[] = [];
        this.state.seasonZeroConfiguration.southAmericaThreatCards.forEach((city) => {
            southAmerica.push(city.getName());
        });
        return {
            season: this.state.season,
            playerCount: this.state.playerCount,
            month: this.state.month,
            eventCards: this.state.eventCards,
            epidemicCards: this.state.epidemicCards,
            objectiveCards: this.state.objectiveCards,
            seasonZeroConfiguration: {
                africaThreatCards: africa,
                southAmericaThreatCards: southAmerica
            }
        };
    }

    public render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/"></IonBackButton>
                        </IonButtons>
                        <IonTitle>Season {this.state.season}</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent fullscreen>
                    <IonList>
                        <IonItem>
                            <IonLabel>Event Cards</IonLabel>
                            <IonSelect value={String(this.state.eventCards)} interface="popover" onIonChange={e => {
                                this.setState({ eventCards: Number(e.detail.value) });
                            }}>
                                <IonSelectOption value="0">0</IonSelectOption>
                                <IonSelectOption value="1">1</IonSelectOption>
                                <IonSelectOption value="2">2</IonSelectOption>
                                <IonSelectOption value="3">3</IonSelectOption>
                                <IonSelectOption value="4">4</IonSelectOption>
                                <IonSelectOption value="5">5</IonSelectOption>
                                <IonSelectOption value="6">6</IonSelectOption>
                                <IonSelectOption value="7">7</IonSelectOption>
                                <IonSelectOption value="8">8</IonSelectOption>
                            </IonSelect>
                        </IonItem>
                        {this.state.season === 0 &&
                            <IonItem>
                                <IonLabel>Objective Cards</IonLabel>
                                <IonInput
                                    type="number"
                                    value={this.state.objectiveCards}
                                    placeholder="Enter Number"
                                    min="0"
                                    onIonChange={e => this.setState({ objectiveCards: Number(e.detail.value) })}>
                                </IonInput>
                            </IonItem>
                        }
                        {this.state.season !== 0 &&
                            // there are only ever 5 cards in Season 0
                            <IonItem>
                                <IonLabel>{this.getDangerCardText()}</IonLabel>
                                <IonSelect value={String(this.state.epidemicCards)} interface="popover" onIonChange={e => {
                                    this.setState({ epidemicCards: Number(e.detail.value) });
                                }}>
                                    <IonSelectOption value="4">4</IonSelectOption>
                                    <IonSelectOption value="5">5</IonSelectOption>
                                    <IonSelectOption value="6">6</IonSelectOption>
                                    <IonSelectOption value="7">7</IonSelectOption>
                                </IonSelect>
                            </IonItem>
                        }
                        {this.state.season === 0 && this.state.month >= 3 &&
                            <IonItem>
                                <IonLabel>Infected Cities (Africa)</IonLabel>
                                <IonSelect multiple interface="popover" onIonChange={e => {
                                    this.updateExtraThreatCards(this.state.seasonZeroConfiguration.africaThreatCards, e.detail.value);
                                }}>
                                    {getAfricaInfections().map((city) => {
                                        return <IonSelectOption key={city.getName()} value={city}>{city.getName()}</IonSelectOption>
                                    })}
                                </IonSelect>
                            </IonItem>
                        }
                        {this.state.season === 0 && this.state.month >= 5 &&
                            <IonItem>
                                <IonLabel>Infected Cities (South America)</IonLabel>
                                <IonSelect multiple interface="popover" onIonChange={e => {
                                    this.updateExtraThreatCards(this.state.seasonZeroConfiguration.southAmericaThreatCards, e.detail.value);
                                }}>
                                {getSouthAmericaInfections().map((city) => {
                                    return <IonSelectOption key={city.getName()} value={city}>{city.getName()}</IonSelectOption>
                                })}
                                </IonSelect>
                            </IonItem>
                        }
                        <IonGrid>
                            <IonRow>
                                <IonCol></IonCol>
                                <IonCol>
                                    <StartButton config={ this.serialize() }></StartButton>
                                </IonCol>
                                <IonCol></IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonList>
                </IonContent>
            </IonPage>
        );
    }
}

export default SeasonSetupPage;