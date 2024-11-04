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
      onSubmit(query);
      setQuery('');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '100%', // Ensures the form takes full width
        maxWidth: '100%',
        overflow: 'hidden', // Prevent overflow of content outside form
        padding: '8px', // Optional padding for spacing
        boxSizing: 'border-box',
      }}
    >
      <label htmlFor="jql-input" style={{ whiteSpace: 'nowrap', minWidth: '80px' }}>Enter JQL:</label>
      <textarea
        id="jql-input"
        value={query}
        onChange={handleChange}
        placeholder="e.g., project = 'MYPROJECT' AND status = 'Open'"
        rows={1}
        style={{
          flexGrow: 1, // Ensure it takes remaining space
          minWidth: 0, // Allow textarea to shrink properly
          padding: '8px',
          fontSize: '1rem',
          maxWidth: '80%', // Ensure it stays within form width
          boxSizing: 'border-box', // Adjust for padding
        }}
      />
      <button type="submit" style={{ whiteSpace: 'nowrap' }}>Submit</button>
    </form>
  );
};

export default JQLInput;
