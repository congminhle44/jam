/** @format */

import { Delete, Edit } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './table.module.css';

const CategoryTable = ({
  categories,
  handleShowDeleteModal,
  handleShowUpdateModal,
}) => {
  const handleRenderCategories = () => {
    if (categories) {
      return categories.data.map((category) => {
        return (
          <tr key={category._id} className={styles.row}>
            <td className={styles.content}>
              <Typography variant={TypographyVariants.Body2}>
                {category.categoryName}
              </Typography>
            </td>
            <td className={styles.content}>
              <span
                onClick={() => handleShowUpdateModal(category)}
                className={styles.icon}>
                <Edit />
              </span>
              <span
                onClick={() => handleShowDeleteModal(category)}
                className={styles.icon}>
                <Delete />
              </span>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <table className={styles.container}>
      <thead className={styles.rowHead}>
        <tr>
          <th className={styles.title}>
            <Typography variant={TypographyVariants.Label1}>Name</Typography>
          </th>
          <th className={styles.title}>
            <Typography variant={TypographyVariants.Label1}>Action</Typography>
          </th>
        </tr>
      </thead>
      <tbody>{handleRenderCategories()}</tbody>
    </table>
  );
};

export default CategoryTable;
