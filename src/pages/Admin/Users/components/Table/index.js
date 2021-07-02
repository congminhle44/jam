/** @format */

import { Delete, Edit } from '@/components/Icons';
import Typography, { TypographyVariants } from '@/components/Typography';
import styles from './table.module.css';

const UserTable = ({ users, handleShowDeleteModal }) => {
  const handleRenderUsers = () => {
    if (users) {
      return users.data.map((user) => {
        return (
          <tr key={user._id} className={styles.row}>
            <td className={styles.content}>
              <Typography variant={TypographyVariants.Body2}>
                {user.fullName}
              </Typography>
              <Typography
                className={styles.email}
                variant={TypographyVariants.Paragraph1}>
                {user.email}
              </Typography>
            </td>
            <td className={styles.content}>{user.userType}</td>
            <td className={styles.content}>
              <span className={styles.icon}>
                <Edit />
              </span>
              <span
                onClick={() => handleShowDeleteModal(user)}
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
            <Typography variant={TypographyVariants.Label1}>Role</Typography>
          </th>
          <th className={styles.title}>
            <Typography variant={TypographyVariants.Label1}>Action</Typography>
          </th>
        </tr>
      </thead>
      <tbody>{handleRenderUsers()}</tbody>
    </table>
  );
};

export default UserTable;
