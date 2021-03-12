import React, { useState } from 'react';


function CareForm() {
  const user = useSession();
  const [date, setDate] = useState('');
  const [type, setType] = useState('');
  const [note, setNote] = useState('');
  const [formState, setFormState] = useState({
    date: '',
    careType: '',
    notes: ''
  });


  const handleCare = e => {
    e.preventDefault();
    console.log(e.target.elements);
  };


  return (
    <div>
      <form onSubmit={handleCare}>
        <input  
          type="date"
          value={date}
          min="2021-01-01"
          onChange={({ target }) => setDate(target.value)} />
        <select 
          name={type}
          onChange={({ target }) => setType(target.value)}>
          <option value="water">Water</option>
          <option value="fertilize">Fertilize</option>
          <option value="mist">Mist</option>
          <option value="repot">Repot</option>
        </select>
        <input
          type="text"
          value={note}
          placeholder="Notes"
          onChange={({ target }) => setNote(target.value)} />
        <button>Add Care</button>
      </form>
    </div>
  );
}

export default CareForm;
