import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import logo from '../assets/images/logo.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span>app
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti
            quis ad facilis at ut alias sequi maiores reprehenderit maxime
            itaque quidem rerum, earum quas ab veritatis iste, ipsa suscipit
            nesciunt.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};
export default Landing;
