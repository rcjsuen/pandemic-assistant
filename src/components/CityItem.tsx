import React from 'react';
import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import { ellipse } from 'ionicons/icons';
import { City } from '../service/city';

export interface CityItemProps {
    season: 0 | 1 | 2;
    city: City;
    onClick?: React.MouseEventHandler;
}

const CityItem: React.FC<CityItemProps> = ({season, city, onClick}) => {
    return (
        <IonItem button={onClick !== undefined} onClick={onClick}>
            <IonLabel>{city.getLabel(season)}</IonLabel>
            <IonIcon icon={ellipse} color={city.getColour(season)} slot="end"/>
        </IonItem>
    );
};

export default CityItem;
