import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.svg';
const Logo = () => {
  return (
    <>
      {/* <Link to='/dashboard'> */}
      <img src={logo} alt='jobber' className='logo' />
      {/* </Link> */}
    </>
  );
};
export default Logo;
