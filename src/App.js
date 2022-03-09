import './styles/main.scss';

import Colors from './Colors';
import Typography from './Typography';

const App = () => {
  return (
    <div className="app p-3">
      <Colors/>
      <Typography/>
      <h1 className="header mt-3">Pilot Design system</h1>
      <p className="text-m">This is a medium text</p>
      <p className="text-s color-p-300">This is a medium small</p>
    </div>
  );
};

export default App;
