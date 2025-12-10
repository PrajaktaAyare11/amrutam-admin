"use client";

interface CustomToggleProps {
  enabled: boolean;
  onChange: () => void;
}

export default function CustomToggle({ enabled, onChange }: CustomToggleProps) {
  return (
    <button
      onClick={onChange}
      className={`w-12 h-6 flex items-center rounded-full p-1 transition-colors duration-300
        ${enabled ? "bg-gray-100 border border-green-800" : "bg-gray-300 border border-green-800"}`}
    >
      <div
        className={`bg-green-800 w-4 h-4 rounded-full shadow-md transform transition-transform duration-300
          ${enabled ? "translate-x-6" : "translate-x-0"}`}
      />
    </button>
  );
}
