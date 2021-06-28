/** @format */

import Alert, { AlertVariants } from '@/components/Alert';
import Typography, { TypographyVariants } from '@/components/Typography';
import {
  useCartItem,
  useGetWishlist,
  useRemoveWishlist,
} from '@/queries/hooks/courses';
import { useGetCartItem } from '@/queries/hooks/users';
import { showAlertAtom } from '@/store/alert';
import { useAtom } from 'jotai';
import { FormattedMessage } from 'react-intl';
import Wishitem from './components/item';
import styles from './wish.module.css';

const Wishlist = () => {
  const { data: wishItems, refetch: refetchWishlist } = useGetWishlist();
  const { mutateAsync: removeWishItem } = useRemoveWishlist();
  const { mutateAsync: addItemToCart } = useCartItem();
  const { refetch: refetchCartItem } = useGetCartItem();

  const [, showAlert] = useAtom(showAlertAtom);

  const handleRemoveWishItem = (courseId) => {
    return removeWishItem({ courseId })
      .then((result) => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: result && result.message,
          },
        });
        refetchWishlist();
      })
      .catch((err) => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Warning,
            children: err.response && err.response.data.message,
          },
        });
      });
  };

  const handleAddItemToCart = (courseId) => {
    return addItemToCart({ courseId })
      .then((result) => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Success,
            children: result && result.message,
          },
        });
        refetchCartItem();
      })
      .catch((err) => {
        showAlert({
          component: Alert,
          props: {
            variant: AlertVariants.Warning,
            children: err.response && err.response.data.message,
          },
        });
      });
  };

  const handleRenderWishItems = () => {
    if (wishItems) {
      return wishItems.map((item) => {
        return (
          <Wishitem
            key={item._id}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveWishItem={handleRemoveWishItem}
            wishInfo={item}
          />
        );
      });
    }
  };

  return (
    <div className={styles.container}>
      <Typography className={styles.title} variant={TypographyVariants.H5}>
        <FormattedMessage id='wish.title' /> ({wishItems ? wishItems.length : 0}
        )
      </Typography>
      {wishItems && wishItems.length > 0 ? (
        handleRenderWishItems()
      ) : (
        <Typography className={styles.empty} variant={TypographyVariants.H6}>
          <FormattedMessage id='wish.empty' />
        </Typography>
      )}
    </div>
  );
};

export default Wishlist;
