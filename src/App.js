import PatientManagement from "./components/patientManagement.component";
import Patient from "./components/patientReducer.component";
import Reducer from "./components/reducerCount.component";

function App() {
  return (
    <>
        <Reducer></Reducer>
        <Patient></Patient>
        <PatientManagement></PatientManagement>
    </>
  );
}

export default App;
