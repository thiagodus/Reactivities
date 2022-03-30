import React, { useEffect} from 'react';
import { Container } from 'semantic-ui-react';
import NavBar from './NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import Loadingcomponent from './LoadingComponent';
import { useStore } from '../stores/store';
import { observer } from 'mobx-react-lite';

function App() {

  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]);


  if (activityStore.loadingInitial) return <Loadingcomponent/>

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7rem'}}>
         <ActivityDashboard />
      </Container>
      
        
    </>
  );
}

export default observer(App);
