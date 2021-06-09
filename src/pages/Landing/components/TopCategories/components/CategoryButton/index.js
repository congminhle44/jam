/** @format */
import Button, { ButtonSizes, ButtonVariants } from '@/components/Button';
import { useHistory } from 'react-router';
import styles from './button.module.css';

const CategoryButton = ({ data }) => {
  const history = useHistory();

  const renderButton = () => {
    if (data) {
      return data.map((data) => {
        const redirectToCategoryDetail = () => {
          history.push(`/category/${data._id}`);
        };
        return (
          <Button
            key={data._id}
            onClick={redirectToCategoryDetail}
            className={styles.button}
            variant={ButtonVariants.Outline}
            size={ButtonSizes.Small}>
            {data.categoryName}
          </Button>
        );
      });
    }
  };

  return <div className={styles.buttonWrap}>{renderButton()}</div>;
};

export default CategoryButton;
