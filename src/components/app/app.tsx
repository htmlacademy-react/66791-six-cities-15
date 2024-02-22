import HomeScreen from '../../pages/home-screen/home-screen';

type AppProps = {
  cities: string[];
}

function App({cities}: AppProps): JSX.Element {
  return (
    <HomeScreen cities={cities} />
  );
}

export default App;
