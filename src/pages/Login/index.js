/** @format */
import LoginForm from './components/LoginForm';
import styles from './login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <LoginForm />
    </div>
  );
};

export default Login;
