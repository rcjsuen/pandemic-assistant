import React from 'react';
import { IonItemSliding, IonItemOptions, IonItemOption, IonGrid, IonCol, IonRow, IonList, IonItemDivider, IonButton } from '@ionic/react';
import './InfectionsContainer.css';
import { City } from '../service/city';
import { Controller } from '../controller/controller';
import CityItem from './CityItem';

class InfectionsContainer extends React.Component<{ controller: Controller }, { groups: City[][], discards: City[] }> {

    private mounted: boolean = false;

    private handler: Function = () => {
        this.updateState();
    };

    constructor(props: { controller: Controller }) {
        super(props)
        this.state = {
            groups: this.props.controller.getCityGroups(),
            discards: this.props.controller.getDiscards()
        };
        this.props.controller.attachInfectionDeckHandler(this.handler);
    }

    public componentDidMount(): void {
        this.mounted = true;
    }

    public componentWillUnmount(): void {
        this.mounted = false;
        this.props.controller.detachInfectionDeckHandler(this.handler);
    }

    private updateState(): void {
        if (this.mounted) {
            this.setState({
                groups: this.props.controller.getCityGroups(),
                discards: this.props.controller.getDiscards()
            });
        } else {
            this.state = {
                groups: this.props.controller.getCityGroups(),
                discards: this.props.controller.getDiscards()
            };
        }
    }
  
    public render() {
        const hasDiscards = this.state.discards.length > 0;
        return (
            <div>
                <IonGrid>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol>
                            <IonButton disabled={!hasDiscards} expand="block" onClick={() => {
                                this.props.controller.intensify();
                                this.updateState();
                            }} >
                                Intensify
                            </IonButton>
                        </IonCol>
                        <IonCol></IonCol>
                    </IonRow>
                </IonGrid>
                <IonList>
                {hasDiscards && <IonItemDivider sticky>Discards</IonItemDivider>}
                {hasDiscards && this.state.discards.map((card, index) => {
                    const id = `discard-${index}`;
                    return <IonItemSliding id={id} key={index}>
                        <CityItem city={card} onClick={undefined}/>
                        <IonItemOptions side="end">
                            {/* remove a card via Resilient Population */}
                            <IonItemOption color="danger" onClick={() => {
                                this.props.controller.removeInfectionCard(card);
                                this.updateState();
                                (document.getElementById(id) as any).close();
                            }}>
                                Remove
                            </IonItemOption>
                      </IonItemOptions>
                    </IonItemSliding>
                })}
                {this.state.groups.map((group, index) => {
                    let name = `Group ${index + 1}`;
                    if (index === this.state.groups.length - 1) {
                        name = "Deck";
                    } else if (index === 0) {
                        name = "Current Group";
                    }
                    return <div key={index}>
                        <IonItemDivider sticky>{name}</IonItemDivider>
                        {group.map((city, index) => {
                            return <CityItem key={index} city={city} onClick={() => {
                                this.props.controller.drawInfectionDeck(city);
                                this.updateState();
                            }}/>
                        })}
                    </div>
                })}
                </IonList>
            </div>
        );
    }
}

export default InfectionsContainer;
