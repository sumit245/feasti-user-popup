import React, { useState, useEffect } from 'react';
import { Router, Scene, Stack } from 'react-native-router-flux';
import { ActivityIndicator, View } from 'react-native';
import AuthScene from './scenes/AuthScene';
import HomeScreen from './scenes/HomeScreen';
import ResultDetails, {
  RenderRightButton,
} from './scenes/Components/resultdetails/ResultDetails';
import PlanChooser from './scenes/Components/resultdetails/PlanChooser';
import ReviewScreen from './scenes/ReviewScreen';
import CheckOut from './scenes/Components/checkout/CheckOut';
import Rewards from './scenes/ReviewScreen';
import UserDetail from './scenes/Components/UserDetail';
import ManageAddress from './scenes/Components/manageaddress/ManageAddress';
import { ModalOpener } from './services/documentopener/documentopener';
import ListAddress from './scenes/Components/manageaddress/ListAddress';
import { getUser } from './services/user/getuser';
import EditAccount from './scenes/Components/EditAccount';
import ListCard from './scenes/Components/managecards/ListCard';
import NotificationStack from './scenes/Components/NotificationStack';
import Favouite from './scenes/Components/Favouite';
import Thankyou, { DoneRightButton } from './scenes/Thankyou';
import Wallet from './scenes/Components/wallet/Wallet';
import Contacts from './scenes/Components/contacts/Contacts';
import BackButton from './scenes/Components/utility/BackButton';
import About from './scenes/About';
import Rate from './scenes/Components/ratings/Rate';
import OrderDetails from './scenes/Components/receipt/OrderDetails';
import Download from './scenes/Components/receipt/Download';
import PinComponent from './scenes/Components/pinlogin/PinComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ComingSoon from './scenes/ComingSoon';
import moment from 'moment';
import { StackActions } from '@react-navigation/native';

const LaunchedRoutes = ({ login }) => (
  <Router>
    <Stack key="root" hideNavBar={true}>
      <Scene
        key="home"
        component={HomeScreen}
        hideNavBar={true}
        initial={login}
      />

      <Scene key="contacts" component={Contacts} hideNavBar={true} />
      <Scene
        key="documents"
        component={ModalOpener}
        title={'Documents'}
        renderLeftButton={() => <BackButton />}
      />
      <Scene
        key="reviews"
        component={ReviewScreen}
        title={'Reviews'}
        renderLeftButton={() => <BackButton />}
      />
      <Scene
        key="thankyou"
        component={Thankyou}
        title={'Order Placed'}
        renderRightButton={DoneRightButton}
        rightButtonTextStyle={{ marginTop: 20, fontWeight: 'bold' }}
      />
      <Scene
        key="manageNotifications"
        component={NotificationStack}
        title={'Manage Notification'}
        renderLeftButton={() => <BackButton />}
      />
      <Scene
        key="editaccount"
        component={EditAccount}
        title={'Edit Account'}
        renderLeftButton={() => <BackButton />}
      />
      <Scene key="planchooser" component={PlanChooser} />
      <Scene key="user_details" component={UserDetail} hideNavBar={true} />
      <Scene key="contacts" component={Contacts} hideNavBar={true} />
      <Scene key="checkout" component={CheckOut} hideNavBar={true} />
      <Scene
        key="documents"
        component={ModalOpener}
        title={'Documents'}
        renderLeftButton={() => <BackButton />}
      />
      <Scene
        key="reviews"
        component={ReviewScreen}
        title={'Reviews'}
        renderLeftButton={() => <BackButton />}
      />
      <Scene
        key="thankyou"
        component={Thankyou}
        title={'Order Placed'}
        renderRightButton={DoneRightButton}
      />
      <Scene key="planchooser" component={PlanChooser} />

      <Scene
        key="manageCards"
        component={ListCard}
        renderLeftButton={() => <BackButton />}
      />
      <Scene key="manageAddress" component={ManageAddress} hideNavBar={true} />
      <Scene
        key="listAddress"
        component={ListAddress}
        title="Manage Address"
        renderLeftButton={() => <BackButton />}
      />
      <Scene
        key="policies"
        component={About}
        title="About"
        renderLeftButton={() => <BackButton />}
      />
      <Scene key="coupons" component={Rewards} hideNavBar={true} />
      <Scene
        key="details"
        component={ResultDetails}
        renderLeftButton={() => <BackButton />}
        renderRightButton={RenderRightButton}
      />
      <Scene
        key="favorites"
        component={Favouite}
        title="My Favorites"
        renderLeftButton={() => <BackButton />}
      />
      <Scene
        key="wallet"
        component={Wallet}
        renderLeftButton={() => <BackButton />}
      />
      <Scene
        key="ratings"
        component={Rate}
        renderLeftButton={() => <BackButton />}
      />
      <Scene
        key="orderDetails"
        component={OrderDetails}
        renderLeftButton={() => <BackButton />}
        renderRightButton={() => <Download />}
      />
    </Stack>
  </Router>
);

const NotLaunchedRoutes = () => (
  <Router>
    <Stack key="root" hideNavBar={true}>
      <Scene key="auth" component={ComingSoon} hideNavBar={true} />
      <Scene key="pinlogin" component={PinComponent} hideNavBar={true} />
      <Scene key="user_details" component={UserDetail} hideNavBar={true} />
      {/* <Scene key="auth" component={AuthScene} hideNavBar={true} /> */}
    </Stack>
  </Router>
);
export default function Routes() {
  const [login, setLogin] = useState(false);
  const [loaded, setLoading] = useState(false);
  const [launched, setLaunched] = useState(false);
  const setUser = async () => {
    try {
      const res = await getUser('user');
      if (res !== null) {
        setLogin(true);
      }
    } catch (error) {
      AsyncStorage.setItem('user', JSON.stringify({ user: '' }));
      setLogin(false);
    }
  };

  useEffect(() => {
    let componentMount = true;
    if (componentMount) {
      setUser();
      setLoading(true);
    }
    return () => {
      componentMount = false;
    };
  }, [login]);

  useEffect(() => {
    let componentMount = true;
    if (componentMount) {
      if (moment().isAfter(moment('10-Oct-2022').format('dd-MMM-YYYY'))) {
        setLaunched(true);
      }
    }
    return () => {
      componentMount = false;
    };
  }, []);

  if (loaded) {
    return launched ? <LaunchedRoutes /> : <NotLaunchedRoutes />;
  } else {
    return <ActivityIndicator size="small" color="#ff9900" />;
  }
}
