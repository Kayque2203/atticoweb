/* ÚNICO arquivo para editar contatos, preço e projetos. */
window.SITE = {
  whatsapp: "5511969466069",            // DDI+DDD+número, só dígitos
  instagram: "",                        // Cole o link do Instagram aqui quando existir; vazio = link oculto
  email: "",                            // Cole o e-mail aqui; vazio = link oculto
  plan: { price: "29,99", period: "mês", label: "a partir de",
    note: "Valor de entrada. O que está incluso (domínio, hospedagem, alterações, suporte) é definido na conversa inicial." },
  projects: [
    { slug:"jeferson-natacao", name:"Personal de Natação", cat:"Serviços", filter:"Serviços", badge:"Landing page",
      link:"projects/jeferson-natacao/index.html", cover:"assets/covers/jeferson-natacao.jpg",
      desc:"Landing page para personal de natação, com modalidades, método, planos, perguntas frequentes e contato pelo WhatsApp.", tech:["HTML","CSS","JavaScript"], features:["Modalidades","Planos","Perguntas frequentes","WhatsApp"],
      context:"Página para um profissional de natação apresentar seu trabalho.", goal:"Apresentar serviços e planos e levar o visitante ao contato.", solution:"Página única com seções claras e botões de contato pelo WhatsApp." },
    { slug:"vagner-personal", name:"Personal Trainer", cat:"Serviços", filter:"Serviços", badge:"Landing page",
      link:"projects/vagner-personal/index.html", cover:"assets/covers/vagner-personal.jpg",
      desc:"Landing page para personal trainer de musculação, com serviços, metodologia, galeria e contato direto pelo WhatsApp.", tech:["HTML","CSS","JavaScript"], features:["Serviços","Metodologia","Galeria","WhatsApp"],
      context:"Página para um personal trainer apresentar treino e acompanhamento.", goal:"Gerar conversas pelo WhatsApp.", solution:"Página leve, responsiva e com chamadas diretas para contato." },
    { slug:"lash-studio", name:"Lash Studio", cat:"Beleza e estética", filter:"Beleza e estética", badge:"Projeto demonstrativo",
      link:"projects/lash-studio/index.html", cover:"assets/covers/lash-studio.jpg",
      desc:"Modelo de landing page para lash designer, com serviços, depoimentos e agendamento pelo WhatsApp.", tech:["HTML","CSS","JavaScript"], features:["Serviços","Depoimentos","Agendamento via WhatsApp"],
      context:"Modelo de página para profissionais de extensão de cílios.", goal:"Apresentar serviços e facilitar o agendamento.", solution:"Visual delicado, seções objetivas e botão de agendamento." },
    { slug:"fruta-fruto", name:"Fruta &amp; Fruto", cat:"Alimentação", filter:"Alimentação", badge:"Projeto demonstrativo",
      link:"projects/fruta-fruto/index.html", cover:"assets/covers/fruta-fruto.jpg",
      desc:"Site com receitas para aproveitar melhor os alimentos, com apresentação do projeto e comunidade.", tech:["HTML","CSS","JavaScript"], features:["Receitas","Quem somos","Comunidade"],
      context:"Site sobre reaproveitamento de alimentos.", goal:"Apresentar receitas de forma clara e atrativa.", solution:"Layout em cards com navegação simples." },
    { slug:"petshop", name:"Mary & Gabi Petshop", cat:"Comércio", filter:"Comércio", badge:"Projeto demonstrativo",
      link:"projects/petshop/index.html", cover:"assets/covers/petshop.jpg",
      desc:"Site de petshop (marca fictícia) com sobre, produtos, serviços e contato pelo WhatsApp.", tech:["HTML","CSS","JavaScript"], features:["Sobre","Produtos","Serviços","WhatsApp"],
      context:"Projeto de estudo: site comercial para um petshop fictício.", goal:"Apresentar produtos e serviços e facilitar o contato.", solution:"Página única com navegação por seções, galeria e contato pelo WhatsApp." },
    { slug:"gustavo-curriculo", name:"Currículo online", cat:"Institucional", filter:"Institucional", badge:"Projeto desenvolvido pela ATTICOWEB",
      link:"projects/gustavo-curriculo/index.html", cover:"assets/covers/gustavo-curriculo.jpg",
      desc:"Currículo online com apresentação, formação, experiência e contato.", tech:["HTML","CSS","JavaScript"], features:["Formação","Experiência","Contato"],
      context:"Página para apresentar o perfil profissional de Gustavo Souza.", goal:"Facilitar o contato com recrutadores.", solution:"Página única, responsiva e com currículo em PDF." }
  ]
};
