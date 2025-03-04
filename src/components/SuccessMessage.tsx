
import React from 'react';
import { Button } from '@/components/ui/button';

interface SuccessMessageProps {
  onReset: () => void;
}

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onReset }) => {
  return (
    <div className="text-center py-16 px-6 animate-fade-in">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
        <svg 
          className="w-10 h-10 text-primary" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>
      <h2 className="text-2xl font-semibold text-foreground mb-2">Cadastro Realizado!</h2>
      <p className="text-muted-foreground max-w-md mx-auto mb-8">
        Seu formulário foi enviado com sucesso. Agradecemos pelo seu interesse.
        Entraremos em contato em breve.
      </p>
      <Button 
        onClick={onReset}
        className="bg-primary text-white hover:bg-primary/90 transition-all"
      >
        Preencher Novo Formulário
      </Button>
    </div>
  );
};

export default SuccessMessage;
