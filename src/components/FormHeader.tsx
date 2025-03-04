
import React from 'react';

interface FormHeaderProps {
  title: string;
  subtitle?: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="bg-secondary/70 p-6 sm:p-8 border-b border-border/40">
      <div className="max-w-md">
        <div className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary mb-3 animate-fade-in">
          Bootcamp de Cibersegurança
        </div>
        <h1 className="text-2xl sm:text-3xl font-semibold text-foreground tracking-tight mb-2">{title}</h1>
        {subtitle && (
          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormHeader;
