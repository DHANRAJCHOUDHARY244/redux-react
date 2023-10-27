import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { uiActions } from './store/UiSlice';
import { Fragment } from 'react';
import Notification from './components/UI/Notification';

function App() {
  const ui = useSelector(state => state.ui.cartIsVisible)
  const cart = useSelector(state => state.cart)
  const notification = useSelector(state => state.ui.notification)
  const dispatch = useDispatch()
  useEffect(() => {
    const sendcartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending.....',
        message: 'Sending cart data!'
      }))
      const response = await fetch('https://react-hhtp-f5e96-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      });
      const responseDta = await response.json()
      if (responseDta.ok) {
        throw new Error('Sending Cart data failed.')
      }
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success !',
        message: 'Sent cart data successfully!'
      }))
    }
    sendcartData().catch(err => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error !',
        message: 'Sending cart data Failed!'
      }))
    })
  }, [cart])
  return (
    <Fragment>
    {/* <Notification
      status={notification.status}
      title={notification.title}
      message={notification.message}
    /> */}
      <Layout>
        {ui && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
