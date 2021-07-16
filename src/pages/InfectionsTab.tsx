import { IonButton, IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import InfectionsContainer from '../components/InfectionsContainer';
import { ControllerProps } from "../controller/controller";
import './InfectionsTab.css';

const InfectionsTab: React.FC<ControllerProps> = ({controller}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Infections</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Infections</IonTitle>
          </IonToolbar>
        </IonHeader>
        <InfectionsContainer controller={controller} />
      </IonContent>
    </IonPage>
  );
};

export default InfectionsTab;
