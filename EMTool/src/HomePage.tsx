import React, {useState} from 'react';
import JQLInput from './JqlEntry';
import VisualObjectContainer from './VisualObjectContainer';
import { translatePayload, VisualObject } from './PayloadTranslator';

const HomePage: React.FC = () => {
  const [visualObjects, setVisualObjects] = useState<VisualObject[]>([]);

  const handleQuerySubmit = (query: string) => {
    console.log("Received query:", query);

    // Process the fake payload and update the visualization state
    const translatedObjects = translatePayload();
    console.log("Translated Objects:", translatedObjects);
    setVisualObjects(translatedObjects);
  };
  return (
    <div
        style={{
          height: '100vh', // Full viewport height
          padding: '20px', 
          width: '100vw'
          }}
    >
        <JQLInput onSubmit={handleQuerySubmit} />
        {/* Render VisualObjectContainer if there are visual objects */}
        {visualObjects.length > 0 && (
          
          <VisualObjectContainer objects={visualObjects} />
        )}
      </div>
  );
};

export default HomePage;