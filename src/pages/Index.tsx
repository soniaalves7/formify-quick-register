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
      
      const firstErrorId = Object.keys(newErrors)[0];
      const element = document.getElementById(firstErrorId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        element.focus();
      }
      
      return;
    }
    
    setIsSubmitting(true);
    
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-secondary/70 p-6 sm:p-8 rounded-lg border border-border/40 h-fit">
          <div className="prose prose-sm max-w-none text-foreground">
            <h2 className="text-xl font-semibold mb-4">As inscrições para o HubCyber Squad já estão abertas!</h2>
            <p>Se você é aluno de Análise e Desenvolvimento de Sistemas (ADS) e está em busca de desafios práticos na segurança cibernética, esta é a sua chance de aprimorar seus conhecimentos em um evento imersivo!</p>
            
            <p className="mt-4">O Bootcamp de Cibersegurança será um evento único, com a participação de especialistas da área. Você terá a oportunidade de atuar estrategicamente ao lado de profissionais e aprender sobre defesa digital, análise forense e simulações reais de ataques e respostas.</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-2">O que é o HubCyber Squad?</h3>
            <p>O HubCyber Squad será composto por 10 alunos selecionados para apoiar o evento, auxiliando os especialistas em organização, operação e suporte técnico durante o Bootcamp de Cibersegurança.</p>
            
            <h3 className="text-lg font-semibold mt-6 mb-2">Benefícios para os participantes:</h3>
            <ul className="space-y-1 my-2 pl-5">
              <li className="flex items-start">
                <span className="text-primary mr-2">✅</span> 
                <span>Acesso exclusivo aos bastidores do evento e interação com especialistas da área</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✅</span> 
                <span>Treinamentos práticos em segurança cibernética, hacking ético e resposta a incidentes</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✅</span> 
                <span>Certificado de participação</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✅</span> 
                <span>Camiseta exclusiva do evento</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✅</span> 
                <span>Networking com profissionais do setor e oportunidades de carreira</span>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-6 mb-2">Requisitos para participar:</h3>
            <ul className="space-y-1 my-2 pl-5">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span> 
                <span>Ser estudante de Análise e Desenvolvimento de Sistemas (ADS) SENAC</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span> 
                <span>Interesse e disposição para aprender sobre cibersegurança</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span> 
                <span>Disponibilidade de 6 horas semanais para colaborar no evento</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">🔹</span> 
                <span>Comprometimento em apoiar as atividades e interagir com os participantes</span>
              </li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-6 mb-2">Cronograma:</h3>
            <ul className="space-y-1 my-2 pl-5">
              <li>Etapa 1 – Preenchimento do formulário online (até xx/xx/2025)</li>
              <li>Etapa 2 – Dinâmica de grupo online (xx/xx/2025)</li>
              <li>Divulgação final dos selecionados e Convocação dos aprovados (xx/xx/2025)</li>
            </ul>
            
            <h3 className="text-lg font-semibold mt-6 mb-2">Perfil que buscamos:</h3>
            <ul className="space-y-1 my-2 pl-5">
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔️</span> 
                <span>Proatividade e vontade de aprender na prática</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔️</span> 
                <span>Trabalho em equipe e capacidade de adaptação</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔️</span> 
                <span>Interesse por segurança cibernética e tecnologia</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-500 mr-2">✔️</span> 
                <span>Comprometimento e responsabilidade</span>
              </li>
            </ul>
            
            <div className="mt-6 p-4 border border-primary/20 bg-primary/5 rounded-lg">
              <p className="font-semibold mb-2">🔐 Está pronto para ser parte do time que ajudará a fortalecer a segurança digital?</p>
              <p className="font-semibold">⚡ Inscreva-se agora no HubCyber Squad e participe dessa experiência única!</p>
            </div>
          </div>
        </div>
        
        <div className="form-container">
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
    </div>
  );
};

export default Index;
