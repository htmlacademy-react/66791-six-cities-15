import {ThreeCircles} from 'react-loader-spinner';
import './spinner.css';

function Spinner(): JSX.Element {
  return (
    <div className="spinner__wrapper">
      <ThreeCircles
        visible
        height="100"
        width="100"
        color="#4481c3"
        ariaLabel="three-circles-loading"
      />
    </div>
  );
}

export default Spinner;
