import React from 'react';
import { IonGrid, IonCol, IonRow, IonList, IonItem, IonLabel, IonButton, IonNote, IonIcon } from '@ionic/react';
import './EpidemicsContainer.css';
import { Controller } from '../controller/controller';
import EpidemicItem from './EpidemicItem';
import { happyOutline, warningOutline } from 'ionicons/icons';

class EpidemicsContainer extends React.Component<{ controller: Controller }, {
    epidemics: boolean[];
    minCards: number;
    maxCards: number;
}> {

    private mounted: boolean = false;

    constructor(props: { controller: Controller }) {
        super(props)
        this.state = {
            epidemics: this.props.controller.getEpidemicsDrawn(),
            minCards: this.props.controller.getMinRemainder(),
            maxCards: this.props.controller.getMaxRemainder()
        };
        this.props.controller.attachPlayerDeckHandler(() => {
            if (this.mounted) {
                this.setState({
                    epidemics: this.props.controller.getEpidemicsDrawn(),
                    minCards: this.props.controller.getMinRemainder(),
                    maxCards: this.props.controller.getMaxRemainder(),
                });
            } else {
                this.state = {
                    epidemics: this.props.controller.getEpidemicsDrawn(),
                    minCards: this.props.controller.getMinRemainder(),
                    maxCards: this.props.controller.getMaxRemainder()
                };
            }
        });
    }

    public componentDidMount(): void {
        this.mounted = true;
    }
  
    public render() {
        const minRounds = Math.ceil(this.state.minCards / 2);
        const maxRounds = Math.ceil(this.state.maxCards / 2);
        return (
            <IonList>
                <IonItem>
                    <IonLabel>Cards to Next Epidemic</IonLabel>
                    <IonNote slot="end" color="dark">{this.state.minCards === 0 && this.state.maxCards === 0 ? "0" : `${this.state.minCards}-${this.state.maxCards}`}</IonNote>
                </IonItem>
                <IonItem>
                    <IonLabel>Rounds to Next Epidemic</IonLabel>
                    <IonNote slot="end" color="dark">{minRounds === 0 && maxRounds === 0 ? "0" : `${minRounds}-${maxRounds}`}</IonNote>
                </IonItem>
                {this.state.epidemics.map((drawn, index) => {
                    return <EpidemicItem key={index} drawn={drawn} position={index + 1} />
                })}
                <IonGrid>
                    <IonRow>
                        <IonCol>
                        </IonCol>
                        <IonCol>
                            <IonButton color="danger" expand="block" onClick={() => { this.props.controller.drawPlayerDeck(true) }}>
                                <IonIcon icon={warningOutline} />
                            </IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton color="success" expand="block" onClick={() => { this.props.controller.drawPlayerDeck(false) }}>
                                <IonIcon icon={happyOutline} />
                            </IonButton>
                        </IonCol>
                        <IonCol>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonList>
        );
    }
}

export default EpidemicsContainer;
