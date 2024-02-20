import HomeScreen from '../../pages/home-screen/home-screen';

type AppProps = {
  numberOffers: number;
}

function App({numberOffers}: AppProps): JSX.Element {
  return (
    <HomeScreen numberOffers={numberOffers} />
  );
}

export default App;
