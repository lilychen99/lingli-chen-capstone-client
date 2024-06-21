import './Home.scss';
import ExampleLogs from '../../components/Log/Log';


const Home = () => {
  
    return (
        <div className='home__container'>
          <h1 className='home__title'>Recent Logs</h1>
          <ExampleLogs />
        </div>
      );
    }
    ;

export default Home;