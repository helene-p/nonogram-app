import './App.css';
import logimageSolution from './assets/logimage_demo_solution.png';
import Nonogram from './components/Nonogram/Nonogram';
import GameSetup from './components/ui/GameSetup';
import Title from './components/ui/Title';
import logo from '/logo.png';

function App() {
  return (
    <div className="flex flex-col gap-5">
      <Title />

      <Nonogram />

      <GameSetup title="Configuration">
        <img src={logo} className="w-50" alt="Logo chat" />
      </GameSetup>

      <GameSetup title="Règles">
        <img src={logimageSolution} className="max-w-[200px] -mt-5" alt="Logimage solution" />
      </GameSetup>
    </div>
  );
}

export default App;
