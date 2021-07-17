import React from 'react';
import { IonItemSliding, IonItemOptions, IonItemOption, IonGrid, IonCol, IonRow, IonList, IonItemDivider, IonItem, IonLabel, IonButton, IonIcon } from '@ionic/react';
import { ellipse } from 'ionicons/icons';
import './InfectionsContainer.css';
import { City, getColor, toString } from '../service/city';
import { Controller } from '../controller/controller';

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
        return (
            <div>
                <IonGrid>
                    <IonRow>
                        <IonCol></IonCol>
                        <IonCol>
                            <IonButton expand="block" onClick={() => {
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
                <IonItemDivider sticky>Discards</IonItemDivider>
                    {this.state.discards.map((card, index) => {
                    const id = `discard-${index}`;
                    return <IonItemSliding id={id} key={index}>
                      <IonItem>
                        <IonLabel>{toString(card as City)}</IonLabel>
                        <IonIcon icon={ellipse} color={getColor(card)}/>
                      </IonItem>
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
                    return <div key={index}>
                        <IonItemDivider sticky>{index === 0 ? "Current Group" : `Group ${index + 1}`}</IonItemDivider>
                        {group.map((city, index) => {
                            return <IonItem key={index} button onClick={() => { 
                                this.props.controller.drawInfectionDeck(city);
                                this.updateState();
                            }}>
                                <IonLabel>{toString(city as City)}</IonLabel>
                                <IonIcon icon={ellipse} color={getColor(city)}/>
                            </IonItem>
                        })}
                    </div>
                })}
                </IonList>
            </div>
        );
    }
}

export default InfectionsContainer;
