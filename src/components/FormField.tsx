
import React from 'react';
import { cn } from '@/lib/utils';

interface FormFieldProps {
  label: string;
  id: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  options?: { value: string; label: string }[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  value?: string;
  error?: string;
  checked?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  type = 'text',
  placeholder,
  required = false,
  className,
  options,
  onChange,
  value,
  error,
  checked,
}) => {
  return (
    <div className={cn("mb-5", className)}>
      {type === 'checkbox' ? (
        <div className="flex items-start">
          <input
            type="checkbox"
            id={id}
            name={id}
            required={required}
            className="mt-1 mr-3 h-4 w-4 rounded border-gray-300 focus:ring-primary"
            onChange={onChange}
            checked={checked}
          />
          <label htmlFor={id} className="text-sm">
            {label} {required && <span className="text-primary ml-0.5">*</span>}
          </label>
        </div>
      ) : (
        <label htmlFor={id} className="block mb-2 transition-opacity">
          {label} {required && <span className="text-primary ml-0.5">*</span>}
        </label>
      )}
      
      {type !== 'checkbox' && type === 'select' && options ? (
        <select
          id={id}
          name={id}
          required={required}
          className="input-field"
          onChange={onChange}
          value={value}
        >
          <option value="" disabled selected>Selecione uma opção</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : type === 'textarea' ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          className="input-field min-h-[120px] resize-y"
          onChange={onChange as any}
          value={value}
        ></textarea>
      ) : type !== 'checkbox' ? (
        <input
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          required={required}
          className="input-field"
          onChange={onChange}
          value={value}
        />
      ) : null}
      
      {error && (
        <p className="mt-1.5 text-sm text-destructive">{error}</p>
      )}
    </div>
  );
};

export default FormField;
