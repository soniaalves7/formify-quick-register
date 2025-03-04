
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
}) => {
  return (
    <div className={cn("mb-5", className)}>
      <label htmlFor={id} className="block mb-2 transition-opacity">
        {label} {required && <span className="text-primary ml-0.5">*</span>}
      </label>
      
      {type === 'select' && options ? (
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
      ) : (
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
      )}
      
      {error && (
        <p className="mt-1.5 text-sm text-destructive">{error}</p>
      )}
    </div>
  );
};

export default FormField;
