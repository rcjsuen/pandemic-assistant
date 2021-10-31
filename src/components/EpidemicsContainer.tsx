import React from 'react';
import { IonGrid, IonCol, IonRow, IonList, IonItem, IonLabel, IonButton, IonNote, IonIcon } from '@ionic/react';
import './EpidemicsContainer.css';
import { Controller } from '../controller/controller';
import EpidemicItem from './EpidemicItem';
import { happyOutline, warningOutline } from 'ionicons/icons';

class EpidemicsContainer extends React.Component<{ controller: Controller }, {
    playerCards: number;
    epidemics: boolean[];
    minCards: number;
    maxCards: number;
}> {

    private mounted: boolean = false;

    private handler: Function = () => {
        if (this.mounted) {
            this.setState({
                playerCards: this.props.controller.getRemainingPlayerCards(),
                epidemics: this.props.controller.getEpidemicsDrawn(),
                minCards: this.props.controller.getMinRemainder(),
                maxCards: this.props.controller.getMaxRemainder(),
            });
        } else {
            this.state = {
                playerCards: this.props.controller.getRemainingPlayerCards(),
                epidemics: this.props.controller.getEpidemicsDrawn(),
                minCards: this.props.controller.getMinRemainder(),
                maxCards: this.props.controller.getMaxRemainder()
            };
        }
    };

    constructor(props: { controller: Controller }) {
        super(props)
        this.state = {
            playerCards: this.props.controller.getRemainingPlayerCards(),
            epidemics: this.props.controller.getEpidemicsDrawn(),
            minCards: this.props.controller.getMinRemainder(),
            maxCards: this.props.controller.getMaxRemainder()
        };
        this.props.controller.attachPlayerDeckHandler(this.handler);
    }

    public componentDidMount(): void {
        this.mounted = true;
    }

    public componentWillUnmount(): void {
        this.mounted = false;
        this.props.controller.detachPlayerDeckHandler(this.handler);
    }
  
    public render() {
        const minRounds = Math.floor(this.state.minCards / 2);
        const maxRounds = Math.floor(this.state.maxCards / 2);
        const allDrawn = this.state.epidemics.length === 0 ? false : this.state.epidemics.reduce((previous, current) => {
            return previous && current;
        });
        const label = this.props.controller.getSeason() === 0 ? "Escalation" : "Epidemic";
        return (
            <IonList>
                <IonItem>
                    <IonLabel>Player Deck Size</IonLabel>
                    <IonNote slot="end" color="dark">{this.state.playerCards}</IonNote>
                </IonItem>
                {!allDrawn && <IonItem>
                    <IonLabel>Cards to Next {label}</IonLabel>
                    <IonNote slot="end" color="dark">{this.state.minCards === 0 && this.state.maxCards === 0 ? "0" : `${this.state.minCards}-${this.state.maxCards}`}</IonNote>
                </IonItem>}
                {!allDrawn && <IonItem>
                    <IonLabel>Rounds to Next {label}</IonLabel>
                    <IonNote slot="end" color="dark">{minRounds === 0 && maxRounds === 0 ? "0" : `${minRounds}-${maxRounds}`}</IonNote>
                </IonItem>}
                {this.state.epidemics.map((drawn, index) => {
                    return <EpidemicItem label={label} key={index} drawn={drawn} position={index + 1} />
                })}
                {!allDrawn && <IonGrid>
                    <IonRow>
                        <IonCol>
                        </IonCol>
                        <IonCol>
                            <IonButton disabled={this.state.minCards > 0} color="danger" expand="block" onClick={() => { this.props.controller.drawPlayerDeck(true) }}>
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
                </IonGrid>}
            </IonList>
        );
    }
}

export default EpidemicsContainer;
