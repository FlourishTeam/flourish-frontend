import React, { useState } from 'react';

function MyPlantNotesForm() {
  const [notes, setNotes] = useState('');

  const handleNotes = e => {
    e.preventDefault();
  };

  return (
    <div>
      <form
        onSubmit={handleNotes}>
        <input
          type="text"
          value={notes}
          placeholder="Plant Notes"
          onChange={({ target }) => setNotes(target.value)} />
        <button>Save</button>
      </form>
    </div>
  );
}

export default MyPlantNotesForm;
