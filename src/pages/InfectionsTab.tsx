import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import InfectionsContainer from '../components/InfectionsContainer';
import { ControllerProps } from "../controller/controller";

const InfectionsTab: React.FC<ControllerProps> = ({controller}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{controller.getSeason() === 0 ? "Threats" : "Infections"}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{controller.getSeason() === 0 ? "Threats" : "Infections"}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <InfectionsContainer controller={controller} season={controller.getSeason()} month={controller.getMonth()} />
      </IonContent>
    </IonPage>
  );
};

export default InfectionsTab;
