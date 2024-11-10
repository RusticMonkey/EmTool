import React from 'react';

type VisualObject = {
  id: number;
  label: string;
  link: string;
  status: string;
  dependencies: number[];
};

type VisualObjectComponentProps = {
  data: VisualObject;
};

const statusColorMap: { [key: string]: string } = {
  open: 'lightgreen',
  closed: 'lightgrey'
  // Add more statuses and colors as needed
};

const VisualObjectComponent: React.FC<VisualObjectComponentProps> = ({ data }) => {
  const { label, link, status } = data;
  const backgroundColor = statusColorMap[status] || 'white';

  // Log to confirm that the component is receiving and applying the correct background color
  console.log(`Rendering ${label} with status: ${status}, backgroundColor: ${backgroundColor}`);

  return (
    <div
      style={{
        border: '1px solid black',
        padding: '10px',
        borderRadius: '8px',
        backgroundColor,
        textAlign: 'center',
        width: '150px',
        position: 'relative',
      }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'underline' }}>
        {label}
      </a>
    </div>
  );
};

export default VisualObjectComponent;
