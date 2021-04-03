import React from "react";

export const Section: React.FC<{ title: string; description: string }> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="space-y-8 divide-y divide-gray-200">
      <div className="pt-8">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
        </div>
        <div className="grid grid-cols-1 mt-6 gap-y-6 gap-x-4 sm:grid-cols-6">
          {children}
        </div>
      </div>
      <div className="divide-y-4 divide-yellow-600 divide-dashed"></div>
    </div>
  );
};
