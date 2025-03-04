
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import FormHeader from '@/components/FormHeader';
import FormField from '@/components/FormField';
import SuccessMessage from '@/components/SuccessMessage';
import { cn } from '@/lib/utils';

const Index = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    cidade: '',
    estado: '',
    instituicao: '',
    curso: '',
    periodo: '',
    conhecimento: '',
    expectativa: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const estadoOptions = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'DF', label: 'Distrito Federal' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantins' },
  ];

  const periodoOptions = [
    { value: '1', label: '1º Período' },
    { value: '2', label: '2º Período' },
    { value: '3', label: '3º Período' },
    { value: '4', label: '4º Período' },
    { value: '5', label: '5º Período' },
    { value: '6', label: '6º Período' },
    { value: '7', label: '7º Período' },
    { value: '8', label: '8º Período' },
    { value: '9', label: '9º Período' },
    { value: '10', label: '10º Período' },
    { value: 'outro', label: 'Outro' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when field is edited
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.nome.trim()) {
      newErrors.nome = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!formData.telefone.trim()) {
      newErrors.telefone = 'Telefone é obrigatório';
    }
    
    if (!formData.cidade.trim()) {
      newErrors.cidade = 'Cidade é obrigatória';
    }
    
    if (!formData.estado) {
      newErrors.estado = 'Estado é obrigatório';
    }
    
    if (!formData.instituicao.trim()) {
      newErrors.instituicao = 'Instituição de ensino é obrigatória';
    }
    
    if (!formData.curso.trim()) {
      newErrors.curso = 'Curso é obrigatório';
    }
    
    if (!formData.periodo) {
      newErrors.periodo = 'Período é obrigatório';
    }
    
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      
      // Scroll to first error
      const firstErrorId = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      cidade: '',
      estado: '',
      instituicao: '',
      curso: '',
      periodo: '',
      conhecimento: '',
      expectativa: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6">
      <div className="form-container max-w-3xl">
        {!isSubmitted ? (
          <>
            <FormHeader 
              title="Participe do HubCyber Squad no Bootcamp de Cibersegurança!"
              subtitle="Preencha o formulário abaixo para se inscrever e garantir sua vaga no bootcamp exclusivo de cibersegurança."
            />
            
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
              <div className="form-section">
                <h2 className="text-lg font-medium mb-5 text-foreground">Informações Pessoais</h2>
                <div className="space-y-0">
                  <FormField
                    label="Nome Completo"
                    id="nome"
                    placeholder="Seu nome completo"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    error={errors.nome}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      label="E-mail"
                      id="email"
                      type="email"
                      placeholder="seu.email@exemplo.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                    />
                    
                    <FormField
                      label="Telefone"
                      id="telefone"
                      placeholder="(00) 00000-0000"
                      required
                      value={formData.telefone}
                      onChange={handleChange}
                      error={errors.telefone}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      label="Cidade"
                      id="cidade"
                      placeholder="Sua cidade"
                      required
                      value={formData.cidade}
                      onChange={handleChange}
                      error={errors.cidade}
                    />
                    
                    <FormField
                      label="Estado"
                      id="estado"
                      type="select"
                      required
                      options={estadoOptions}
                      value={formData.estado}
                      onChange={handleChange}
                      error={errors.estado}
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-section">
                <h2 className="text-lg font-medium mb-5 text-foreground">Informações Acadêmicas</h2>
                <div className="space-y-0">
                  <FormField
                    label="Instituição de Ensino"
                    id="instituicao"
                    placeholder="Nome da sua faculdade/universidade"
                    required
                    value={formData.instituicao}
                    onChange={handleChange}
                    error={errors.instituicao}
                  />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <FormField
                      label="Curso"
                      id="curso"
                      placeholder="Seu curso atual"
                      required
                      value={formData.curso}
                      onChange={handleChange}
                      error={errors.curso}
                    />
                    
                    <FormField
                      label="Período"
                      id="periodo"
                      type="select"
                      required
                      options={periodoOptions}
                      value={formData.periodo}
                      onChange={handleChange}
                      error={errors.periodo}
                    />
                  </div>
                </div>
              </div>
              
              <div className="form-section">
                <h2 className="text-lg font-medium mb-5 text-foreground">Sobre Você</h2>
                <div className="space-y-0">
                  <FormField
                    label="Conhecimentos e Habilidades"
                    id="conhecimento"
                    type="textarea"
                    placeholder="Descreva brevemente seus conhecimentos e habilidades relacionados à vaga"
                    value={formData.conhecimento}
                    onChange={handleChange}
                  />
                  
                  <FormField
                    label="Expectativas"
                    id="expectativa"
                    type="textarea"
                    placeholder="Quais são suas expectativas para este processo seletivo?"
                    value={formData.expectativa}
                    onChange={handleChange}
                  />
                </div>
              </div>
              
              <div className="form-section pt-4">
                <Button 
                  type="submit"
                  className={cn(
                    "w-full py-6 text-base bg-primary hover:bg-primary/90 text-white transition-all",
                    isSubmitting && "opacity-90 pointer-events-none"
                  )}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : "Enviar Formulário"}
                </Button>
                <p className="text-center text-xs text-muted-foreground mt-4">
                  Ao enviar este formulário, você concorda com nossos Termos e Condições e Política de Privacidade.
                </p>
              </div>
            </form>
          </>
        ) : (
          <SuccessMessage onReset={resetForm} />
        )}
      </div>
    </div>
  );
};

export default Index;
