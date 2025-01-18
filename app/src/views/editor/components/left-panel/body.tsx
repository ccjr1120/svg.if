import { FC } from "react";

const Content: FC = () => {
  return (
    <div className="flex flex-col h-full">
      {/* Pages Section */}
      <div className="flex-1 border-b border-[#444444] p-4 overflow-y-auto">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Pages</h4>
        {/* Pages content will go here */}
      </div>

      {/* Layers Section */}
      <div className="flex-1 p-4 overflow-y-auto">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Layers</h4>
        {/* Layers content will go here */}
      </div>
    </div>
  );
};

export default Content;
