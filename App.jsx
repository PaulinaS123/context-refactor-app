import Dashboard from "./components/Dashboard";
import { UserProvider } from "./UserContext";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <div className="app">
        <h1>React Context Refactor Assignment</h1>
        <Dashboard />
      </div>
    </UserProvider>
  );
}

export default App;
