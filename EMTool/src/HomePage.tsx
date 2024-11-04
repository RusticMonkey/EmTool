import React from 'react';
import JQLInput from './JqlEntry';


const HomePage: React.FC = () => {
    const handleJQLSubmit = (query: string) => {
        console.log('Submitted JQL Query:', query);
      };
  return (
    <div
        style={{
          height: '100vh', // Full viewport height
          padding: '20px', 
          width: '100vw'
          }}
    >
        <JQLInput onSubmit={handleJQLSubmit} />
      </div>
  );
};

export default HomePage;