import React from "react";

export const BreakSession = ({ children, ...props }) => {
  return (
    <div className="flex flex-col items-center my-auto" {...props}>
      {children}
    </div>
  );
};

export const BreakSessionLabel = ({ children, ...props }) => {
  return (
    <p className="text-xl md:text-2xl font-medium text-gray-300" {...props}>
      {children}
    </p>
  );
};

export const BreakSessionLength = ({ children, ...props }) => {
  return (
    <p className="text-4xl md:text-8xl font-light text-gray-300" {...props}>
      {children}
    </p>
  );
};

export const BreakSessionButtonContainer = ({ children, ...props }) => {
  return (
    <div className="grid grid-flow-col gap-2 rounded" {...props}>
      {children}
    </div>
  );
};

export const BreakSessionButton = ({ children, ...props }) => {
  return (
    <button
      className="mt-4 text-sm md:text-lg px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-gray-900 transition duration-300 ease-in-out"
      {...props}
    >
      {children}
    </button>
  );
};
