import React from 'react';
import { IonItemSliding, IonItemOptions, IonItemOption, IonGrid, IonCol, IonRow, IonList, IonItemDivider, IonButton, IonToolbar, IonSegment, IonSegmentButton } from '@ionic/react';
import './InfectionsContainer.css';
import { City } from '../service/city';
import { Controller } from '../controller/controller';
import CityItem from './CityItem';

class InfectionsContainer extends React.Component<{ controller: Controller, season: 0 | 1 | 2, month: number }, { filter: string, groups: City[][], discards: City[] }> {

    private mounted: boolean = false;

    private handler: Function = () => {
        this.updateState();
    };

    constructor(props: { controller: Controller, season: 0 | 1, month: number }) {
        super(props)
        this.state = {
            filter: "all",
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
                filter: "all",
                groups: this.props.controller.getCityGroups(),
                discards: this.props.controller.getDiscards()
            };
        }
    }

    private shouldShow(city: City): boolean {
        if (this.state.filter === "all") {
            return true;
        } else if (this.state.filter === "green") {
            return city.isInfected();
        }

        switch (city.getColour(this.props.season)) {
            case "dark":
                return this.state.filter === "black";
            case "danger":
                return this.state.filter === "red";
            case "primary":
                return this.state.filter === "blue";
            case "warning":
                return this.state.filter === "yellow";
        }
        return false;
    }
  
    public render() {
        const hasDiscards = this.state.discards.length > 0;
        return (
            <div>
                <IonToolbar>
                    {
                        this.props.season === 0 && <IonSegment value={this.state.filter} onIonChange={e => { this.setState({filter: e.detail.value as string })}}>
                            <IonSegmentButton value="all">all</IonSegmentButton>
                            <IonSegmentButton value="blue">allied</IonSegmentButton>
                            <IonSegmentButton value="black">neutral</IonSegmentButton>
                            <IonSegmentButton value="red">USSR</IonSegmentButton>
                            {
                                this.props.month >= 3 && <IonSegmentButton value="green">infected</IonSegmentButton>
                            }
                        </IonSegment>
                    }
                    {
                        this.props.season === 1 && <IonSegment value={this.state.filter} onIonChange={e => { this.setState({filter: e.detail.value as string })}}>
                            <IonSegmentButton value="all">all</IonSegmentButton>
                            <IonSegmentButton value="black">black</IonSegmentButton>
                            <IonSegmentButton value="blue">blue</IonSegmentButton>
                            <IonSegmentButton value="red">red</IonSegmentButton>
                            <IonSegmentButton value="yellow">yellow</IonSegmentButton>
                        </IonSegment>
                    }
                    {
                        this.props.season === 2 && <IonSegment value={this.state.filter} onIonChange={e => { this.setState({filter: e.detail.value as string })}}>
                            <IonSegmentButton value="all">all</IonSegmentButton>
                            <IonSegmentButton value="black">black</IonSegmentButton>
                            <IonSegmentButton value="blue">blue</IonSegmentButton>
                            <IonSegmentButton value="yellow">yellow</IonSegmentButton>
                        </IonSegment>
                    }
                </IonToolbar>
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
                    {hasDiscards && <IonItemDivider sticky>{this.state.discards.length === 0 ? "Discards" : `Discards (${this.state.discards.length})`}</IonItemDivider>}
                {hasDiscards && this.state.discards.map((city, index) => {
                    if (!this.shouldShow(city)) {
                        return <div key={index}></div>
                    }
                    const id = `discard-${index}`;
                    return <IonItemSliding id={id} key={index}>
                        <CityItem season={this.props.season} city={city}/>
                        <IonItemOptions side="end">
                            {/* remove a card via Resilient Population */}
                            <IonItemOption color="danger" onClick={() => {
                                this.props.controller.removeInfectionCard(city);
                                this.updateState();
                                (document.getElementById(id) as any).close();
                            }}>
                                Remove
                            </IonItemOption>
                      </IonItemOptions>
                    </IonItemSliding>
                })}
                {this.state.groups.map((group, index) => {
                    let name = `Group ${index + 1} (${group.length})`;
                    if (index === this.state.groups.length - 1) {
                        name = "Deck";
                    } else if (index === 0) {
                        name = `Current Group (${group.length})`;
                    }
                    return <div key={index}>
                        <IonItemDivider sticky>{name}</IonItemDivider>
                        {group.map((city, index) => {
                            if (!this.shouldShow(city)) {
                                return <div key={index}></div>
                            }
                            return <CityItem key={index} season={this.props.season} city={city} onClick={() => {
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
