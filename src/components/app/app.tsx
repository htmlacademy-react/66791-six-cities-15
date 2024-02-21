import HomeScreen from '../../pages/home-screen/home-screen';

type AppProps = {
  numberOffers: number;
  cities: string[];
}

function App({cities, numberOffers}: AppProps): JSX.Element {
  return (
    <HomeScreen
      cities={cities}
      numberOffers={numberOffers}
    />
  );
}

export default App;
