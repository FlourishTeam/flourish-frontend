import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSession } from '../../../../../providers/AuthContext';
import {
  useTempLog,
  useUserPlantId,
} from '../../../../../providers/CareLogContext';
import { addCareLog } from '../../../../../services/queries/addCareLog';

function CareForm() {
  const user = useSession();
  const { id } = useParams();
  const userPlantId = useUserPlantId();

  const [date, setDate] = useState('');
  const [type, setType] = useState('water');
  const [note, setNote] = useState('');

  const { setTempLog } = useTempLog();

  const handleCare = (e) => {
    e.preventDefault();
    setDate(e.target.elements.careDate.value);
    setNote(e.target.elements.careNote.value);

    return addCareLog(user.id, id, userPlantId, date, type, note).then(
      (res) => {
        setTempLog(res.data.addLogById);
        window.location.reload();
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleCare}>
        <input
          type="date"
          value={date}
          min="2021-01-01"
          name="careDate"
          onChange={({ target }) => setDate(target.value)}
        />
        <select
          name={type}
          defaultValue={type}
          onChange={({ target }) => setType(target.value)}
        >
          <option value="water">Water</option>
          <option value="fertilize">Fertilize</option>
          <option value="mist">Mist</option>
          <option value="repot">Repot</option>
        </select>
        <input
          type="text"
          value={note}
          placeholder="Notes"
          name="careNote"
          onChange={({ target }) => setNote(target.value)}
        />
        <button>Add Care</button>
      </form>
    </div>
  );
}

export default CareForm;
