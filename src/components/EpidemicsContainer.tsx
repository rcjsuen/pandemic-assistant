import React from 'react';
import { IonActionSheet, IonGrid, IonCol, IonRow, IonList, IonItem, IonLabel, IonButton, IonNote } from '@ionic/react';
import './EpidemicsContainer.css';
import { Controller } from '../controller/controller';
import EpidemicItem from './EpidemicItem';

class EpidemicsContainer extends React.Component<{ controller: Controller }, {
    epidemics: boolean[];
    minCards: number;
    maxCards: number;
    showActionSheet: boolean
}> {

    private mounted: boolean = false;

    constructor(props: { controller: Controller }) {
        super(props)
        this.state = {
            epidemics: this.props.controller.getEpidemicsDrawn(),
            minCards: this.props.controller.getMinRemainder(),
            maxCards: this.props.controller.getMaxRemainder(),
            showActionSheet: false,
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
                    maxCards: this.props.controller.getMaxRemainder(),
                    showActionSheet: this.state.showActionSheet,
                };
            }
        });
    }

    public componentDidMount(): void {
        this.mounted = true;
    }
  
    public render() {
        const showActionSheet = this.state.showActionSheet;
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
                        <IonCol></IonCol>
                        <IonCol>
                            <IonButton expand="block" onClick={() => { this.setState({showActionSheet: true}) }}>
                                Draw
                            </IonButton>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                </IonGrid>
                <IonActionSheet
                  isOpen={showActionSheet}
                  onDidDismiss={() => { this.setState({ showActionSheet: false })}}
                  buttons={[
                    { text: "Player Card", handler: () => { this.props.controller.drawPlayerDeck(false) } },
                    { text: "Epidemic", handler: () => { this.props.controller.drawPlayerDeck(true) } },
                    { text: "Cancel", role: "cancel" }
                  ]}
                >
                </IonActionSheet>
            </IonList>
        );
    }
}

export default EpidemicsContainer;
