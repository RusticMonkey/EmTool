import React, { useState } from 'react';

type JQLInputProps = {
  onSubmit: (query: string) => void;
};

const JQLInput: React.FC<JQLInputProps> = ({ onSubmit }) => {
    const [query, setQuery] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setQuery(event.target.value);
    };
  
    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      if (query.trim()) {
        onSubmit(query); // Call the onSubmit prop with the query
        setQuery(''); // Clear the input after submission
      }
    };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          width: '100%',
          maxWidth: '100%',
          overflow: 'hidden',
          padding: '8px',
          boxSizing: 'border-box',
        }}
      >
        <label htmlFor="jql-input" style={{ whiteSpace: 'nowrap', minWidth: '80px' }}>
          Enter JQL:
        </label>
        <textarea
          id="jql-input"
          value={query}
          onChange={handleChange}
          placeholder="e.g., project = 'MYPROJECT' AND status = 'Open'"
          rows={1}
          style={{
            flexGrow: 1,
            minWidth: 0,
            padding: '8px',
            fontSize: '1rem',
            maxWidth: '80%',
            boxSizing: 'border-box',
          }}
        />
        <button type="submit" style={{ whiteSpace: 'nowrap' }}>Submit</button>
      </form>
    </div>
  );
};

export default JQLInput;
