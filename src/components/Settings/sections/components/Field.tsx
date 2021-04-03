import { useFormContext } from "react-hook-form";

export const Field: React.FC<{
  label: string;
  id: string;
  type: React.InputHTMLAttributes<HTMLInputElement>["type"];
  autoComplete?: React.InputHTMLAttributes<HTMLInputElement>["autoComplete"];
  defaultValue?: string | number;
}> = ({ label, id, type = "text", autoComplete, defaultValue = "" }) => {
  const { register } = useFormContext();

  return (
    <>
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="mt-1">
        <input
          defaultValue={defaultValue}
          type={type}
          autoComplete={autoComplete}
          className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          {...register(id)}
        />
      </div>
    </>
  );
};
