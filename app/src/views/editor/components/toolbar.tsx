import { FC } from 'react';

const Toolbar: FC = () => {
  return (
    <div className="toolbar">
      <button className="toolbar-button">Select</button>
      <button className="toolbar-button">Rectangle</button>
      <button className="toolbar-button">Ellipse</button>
      <button className="toolbar-button">Text</button>
      <button className="toolbar-button">Export</button>
    </div>
  );
};

export default Toolbar;
