import './App.css';
import './reset.css';
import './StyleSheets/Modals.css';
import Header from './Components/Header/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Users from './Pages/Users/Users';

function App() {
	return (
		<>
			<div className='App'>
				<div className='App__container'>
					<Sidebar />
					<div className='App_main'>
						<Header />
						<Users />
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
