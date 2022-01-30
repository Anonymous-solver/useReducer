import React, { useReducer, useRef } from "react";
import { patientReducer, patientState } from "../reducers/patientReducer";

const PatientManagement = () => {
	const [state, dispatch] = useReducer(patientReducer, patientState);
	const nameRef = useRef();
	const handleSubmit = (event) => {
		event.preventDefault();
		dispatch({
			type: "ADD_PATIENT",
			id: state.patients.length,
			name: nameRef.current.value,
		});
		nameRef.current.value = "";
	};
	return (
		<div>
			<h1>Patient Management: {state.patients.length}</h1>
			<form onSubmit={handleSubmit}>
				<input ref={nameRef} />
			</form>
			{state.patients.map((pt) => (
				<li
					key={pt.id}
					onClick={() =>
						dispatch({ type: "REMOVE_PATIENT", id: pt.id })
					}
				>
					{pt.name}
				</li>
			))}
		</div>
	);
};

export default PatientManagement;
