import { ProductItem } from '../types';

// Importação direta para o Vite empacotar no bundle de produção
import logoImg from '../assets/images/logo_exato_papelaria_encantada_1790979186315.jpg';
import caixaMagaliImg from '../assets/images/caixa_milk_magali_real_1790978722015.jpg';
import kitAnjinhoImg from '../assets/images/kit_anjinho_batizado_real_1790978733785.jpg';
import topoFlamingoImg from '../assets/images/topo_bolo_flamingo_real_1790978746924.jpg';
import kitUrsinhosImg from '../assets/images/kit_ursinhos_carinhosos_real_1790978757196.jpg';

// Logo oficial exato
export const LOGO_URL = logoImg;
export const HERO_FEATURED_IMAGE = caixaMagaliImg;

// WhatsApp e Instagram atualizados
export const STORE_PHONE = '5522998453648';
export const STORE_PHONE_DISPLAY = '(22) 99845-3648';
export const INSTAGRAM_HANDLE = 'papelariaencantada.campos';
export const INSTAGRAM_URL = `https://instagram.com/${INSTAGRAM_HANDLE}`;
export const LOCATION_CITY = 'Campos dos Goytacazes, RJ';

export const PRODUCTS_CATALOG: ProductItem[] = [
  {
    id: 'caixa-milk-magali',
    name: 'Caixa Milk de Luxo (Tema Melancia / Magali)',
    category: 'caixas',
    categoryLabel: 'Caixas Personalizadas',
    tagline: 'Laço duplo de cetim vermelho, strass e aplique 3D',
    description: 'Caixa Milk luxuosa com acabamento impecável: telhado listrado verde, laço duplo de cetim acetinado vermelho com ponteiras de manta de strass dourado, pérolas nos pezinhos e aplique tridimensional em camadas da personagem.',
    minQuantity: 5,
    image: caixaMagaliImg,
    badge: 'Destaque Luxo',
    dimensions: '14cm (A) x 6,5cm (L) x 6,5cm (C)',
    paperType: 'Offset Fosco 180g (cores vibrantes, toque aveludado e zero reflexo)',
    finishDetails: [
      'Aplique 3D em camadas de alto relevo',
      'Laço duplo de cetim com strass dourado nas pontas',
      'Acabamento com meia-pérola e pezinhos dourados',
      'Fundo inteligente com montagem fácil anti-amassado'
    ]
  },
  {
    id: 'kit-anjinho-batizado',
    name: 'Kit Clássico de Caixas (Tema Batizado Anjinho)',
    category: 'caixas',
    categoryLabel: 'Caixas Personalizadas',
    tagline: 'Caixa Milk, Caixa Cone e Maletinha em azul bebê e pérolas',
    description: 'Conjunto delicado em tons de azul bebê com estampa arabesco e renda: Caixa Milk com laço de cetim e pérola, Caixa Cone Anjinho com coração dourado e Caixa Maletinha com alça rendada perolada.',
    minQuantity: 5,
    image: kitAnjinhoImg,
    badge: 'Mais Pedido',
    dimensions: 'Tamanhos padronizados para compor a mesa de doces',
    paperType: 'Papel Offset 180g de alta alvura e corte eletrônico de alta precisão',
    finishDetails: [
      'Laços de cetim com chaton de pérola delicada',
      'Apliques de anjinho em camadas com fita banana',
      'Alça rendada com detalhes em mini-pérolas',
      'Arte personalizada com o nome da criança e data do evento'
    ]
  },
  {
    id: 'topo-de-bolo-flamingo',
    name: 'Topo de Bolo 3D em Camadas (Tema Flamingo Tropical)',
    category: 'topos',
    categoryLabel: 'Topos de Bolo',
    tagline: 'Scrap luxuoso com flores, flamingo e letreiro em relevo',
    description: 'Topo de bolo trabalhado em camadas de papéis especiais com letreiro temático em sobreposição, flamingo com asas em 3D, coqueiro tridimensional, cadeira de praia e flores tropicais de hibisco com miolo de pérola e strass.',
    minQuantity: 1,
    image: topoFlamingoImg,
    badge: 'Scrap Luxo',
    dimensions: 'Projetado sob medida para o aro do bolo (15cm a 25cm)',
    paperType: 'Papéis colorplus de alta gramatura 180g/240g + papel perolizado e texturizado',
    finishDetails: [
      'Nome e tema em camadas sobrepostas com relevo',
      'Flores de papel moldadas à mão com pérolas e strass',
      'Canudos próprios para confeitaria (transparentes e atóxicos)',
      'Acompanha prévia digital com seu nome antes da confecção'
    ]
  },
  {
    id: 'kit-festa-ursinhos',
    name: 'Kit Festa Completa (Tema Ursinhos Carinhosos)',
    category: 'kits',
    categoryLabel: 'Kits Prontos',
    tagline: 'Bandeirolas personalizadas, quadros 3D e caixinhas',
    description: 'Decoração completa e coordenada com varal de bandeirolas com o nome da aniversariante, molduras/quadros 3D de papel para parede, Caixas Milk com laço rosa, Caixas Cone e forminhas de docinhos temáticas.',
    minQuantity: 1,
    image: kitUrsinhosImg,
    badge: 'Festa Completa',
    dimensions: 'Kit completo coordenado para mesa e parede',
    paperType: 'Offset 180g + papéis especiais para scrap festa',
    finishDetails: [
      'Varal de bandeirolas com letras e personagens',
      'Quadros em papel 3D com profundidade de camadas',
      'Caixas Milk com laço duplo de cetim rosa',
      'Caixas pirâmide e forminhas personalizadas'
    ]
  }
];

export const FREQUENT_QUESTIONS = [
  {
    question: 'Como solicito um orçamento para o meu tema?',
    answer: 'Você pode clicar no botão "Falar no WhatsApp" ou montar sua lista no botão "Montar Lista de Personalizados". Basta nos enviar o tema, a data do evento e a quantidade desejada que passamos o orçamento detalhado rapidamente!'
  },
  {
    question: 'Qual é o prazo de confecção dos personalizados?',
    answer: 'Nosso prazo padrão de produção é de 7 a 12 dias úteis após a aprovação da arte digital. Caso precise de uma data de urgência para Campos dos Goytacazes ou envio expresso, entre em contato pelo WhatsApp para consultar nossa agenda!'
  },
  {
    question: 'Como funciona para quem mora em Campos dos Goytacazes?',
    answer: 'Clientes de Campos dos Goytacazes podem retirar os personalizados diretamente em nosso ateliê com dia e horário agendados (sem custo de frete) ou solicitar envio por motoboy com entrega no endereço.'
  },
  {
    question: 'Vocês enviam para outros estados do Brasil?',
    answer: 'Sim! Enviamos para todo o Brasil via Correios (SEDEX ou PAC) e transportadoras. As caixas são enviadas com dobras inteligentes e embalagem reforçada para chegarem 100% perfeitas.'
  },
  {
    question: 'Vocês fazem qualquer tema que eu escolher?',
    answer: 'Com certeza! Trabalhamos com temas clássicos, novidades do cinema e desenho, batizados, mesversários, 15 anos e aniversários adultos. Criamos a arte com o nome e idade e enviamos a prévia para você aprovar antes de produzir.'
  },
  {
    question: 'Como é feito o pagamento?',
    answer: 'Aceitamos Pix e Cartão de Crédito. A vaga na agenda e a elaboração da arte são confirmadas após o sinal ou pagamento.'
  }
];

export const REVIEWS = [
  {
    name: 'Camila Fernandes',
    city: 'Campos dos Goytacazes, RJ',
    event: 'Aniversário da Sophia',
    theme: 'Magali / Melancia',
    text: 'Fiquei apaixonada pelas caixas Milk da Magali! Os laços com strass e o pezinho dourado deram um charme surreal na mesa. Peguei no ateliê aqui em Campos e foi super tranquilo.'
  },
  {
    name: 'Letícia Guimarães',
    city: 'Niterói, RJ',
    event: 'Batizado do Leonardo',
    theme: 'Anjinho Azul',
    text: 'Encomendei o kit de anjinhos para o batizado e veio tudo impecavelmente embalado, muito cheiroso e sem nenhum amassadinho! O atendimento no WhatsApp foi nota 10.'
  },
  {
    name: 'Patrícia Alvarenga',
    city: 'Belo Horizonte, MG',
    event: 'Festa Flamingo',
    theme: 'Miami Beach Flamingo',
    text: 'O topo de bolo em camadas com as flores de pérolas e o flamingo é uma verdadeira obra de arte! Brilho lindo e acabamento nobre. Já virei cliente fiel!'
  }
];
