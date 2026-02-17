
import { SERVICES } from '../constants';

const loadScript = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = reject;
    document.head.appendChild(script);
  });
};

export const exportCatalogToPDF = async () => {
  try {
    if (!(window as any).jspdf) {
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
    }

    const { jsPDF } = (window as any).jspdf;
    const doc = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const CORES = {
      primaria: [57, 95, 163],   // #395fa3
      secundaria: [170, 26, 32], // #aa1a20
      fundo: [5, 10, 20],        // Quase preto
      texto: [40, 40, 40],
      branco: [255, 255, 255],
      cinza: [240, 240, 245]
    };

    const margem = 20;
    const larguraPagina = 210;
    const alturaPagina = 297;
    let paginaAtual = 1;

    // --- HELPERS ---
    const desenharRodape = (num: number) => {
      doc.setFillColor(CORES.fundo[0], CORES.fundo[1], CORES.fundo[2]);
      doc.rect(0, 285, larguraPagina, 12, 'F');
      doc.setFontSize(7);
      doc.setTextColor(150, 150, 150);
      doc.setFont('helvetica', 'bold');
      doc.text('FORTALTECH SOLUÇÕES TECNOLÓGICAS LTDA | RMF', margem, 292);
      doc.setTextColor(CORES.secundaria[0], CORES.secundaria[1], CORES.secundaria[2]);
      doc.text(`DOSSIÊ TÉCNICO 2026 | PÁGINA ${num}`, 160, 292);
    };

    const desenharCabecalhoSeção = (titulo: string) => {
      doc.setFillColor(CORES.fundo[0], CORES.fundo[1], CORES.fundo[2]);
      doc.rect(0, 0, larguraPagina, 35, 'F');
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(22);
      doc.setFont('helvetica', 'bold');
      doc.text(titulo.toUpperCase(), margem, 20);
      doc.setDrawColor(CORES.secundaria[0], CORES.secundaria[1], CORES.secundaria[2]);
      doc.setLineWidth(1);
      doc.line(margem, 25, 50, 25);
    };

    // --- PÁGINA 1: CAPA 2026 ---
    doc.setFillColor(CORES.fundo[0], CORES.fundo[1], CORES.fundo[2]);
    doc.rect(0, 0, larguraPagina, alturaPagina, 'F');
    doc.setDrawColor(30, 40, 70);
    doc.setLineWidth(0.1);
    for(let i=0; i<larguraPagina; i+=5) doc.line(i, 0, i, alturaPagina);
    
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(60);
    doc.text('FORTAL', margem, 100);
    doc.setTextColor(CORES.secundaria[0], CORES.secundaria[1], CORES.secundaria[2]);
    doc.text('TECH', margem + 85, 100);
    doc.setFontSize(12);
    doc.setTextColor(180, 180, 180);
    doc.text('INFRAESTRUTURA COMERCIAL E RESIDENCIAL DE ALTA PERFORMANCE', margem, 112);
    doc.setFontSize(28);
    doc.setTextColor(255, 255, 255);
    doc.text('PORTFÓLIO ESTRATÉGICO', margem, 160);
    doc.setFontSize(40);
    doc.text('EDICÃO 2026', margem, 178);
    desenharRodape(paginaAtual++);

    // --- PÁGINA 2: SUMÁRIO DINÂMICO ---
    doc.addPage();
    desenharCabecalhoSeção('Índice de Navegação');
    let yMenu = 50;
    const itensMenu = [
      { t: "MANIFESTO TECNOLÓGICO 2026", p: 3 },
      { t: "A2INSIGHTS LAB: UNIDADE DE SOFTWARE", p: 4 },
      ...SERVICES.map((s, i) => ({ t: s.title, p: 5 + i })),
      { t: "METODOLOGIA DE IMPLEMENTAÇÃO", p: 5 + SERVICES.length },
      { t: "COBERTURA REGIONAL E SEDE", p: 6 + SERVICES.length },
      { t: "CONTATOS E CANAIS DE ENGENHARIA", p: 7 + SERVICES.length }
    ];

    itensMenu.forEach(item => {
      doc.setFillColor(CORES.cinza[0], CORES.cinza[1], CORES.cinza[2]);
      doc.roundedRect(margem, yMenu, 170, 12, 1, 1, 'F');
      doc.setTextColor(40, 40, 40);
      doc.setFontSize(9);
      doc.setFont('helvetica', 'bold');
      doc.text(item.t.toUpperCase(), margem + 5, yMenu + 7.5);
      doc.setTextColor(CORES.secundaria[0], CORES.secundaria[1], CORES.secundaria[2]);
      doc.text(`PÁGINA ${item.p}`, 175, yMenu + 7.5);
      doc.link(margem, yMenu, 170, 12, { pageNumber: item.p });
      yMenu += 14;
      if (yMenu > 260) {
          desenharRodape(paginaAtual++);
          doc.addPage();
          desenharCabecalhoSeção('Índice de Navegação (Continuação)');
          yMenu = 50;
      }
    });
    desenharRodape(paginaAtual++);

    // --- PÁGINA 3: MANIFESTO ---
    doc.addPage();
    desenharCabecalhoSeção('Visão Estratégica');
    doc.setTextColor(CORES.texto[0], CORES.texto[1], CORES.texto[2]);
    doc.setFontSize(14);
    doc.setFont('helvetica', 'normal');
    const manifesto = "A FortalTech 2026 não apenas instala equipamentos; nós projetamos ecossistemas de inteligência comercial e residencial. Em um mundo onde a conectividade é o sistema nervoso central de qualquer operação, garantimos que sua infraestrutura seja resiliente, escalável e pronta para os desafios da próxima década na Região Metropolitana de Fortaleza.";
    doc.text(doc.splitTextToSize(manifesto, 170), margem, 55);
    desenharRodape(paginaAtual++);

    // --- PÁGINA 4: A2INSIGHTS LAB ---
    doc.addPage();
    doc.setFillColor(CORES.fundo[0], CORES.fundo[1], CORES.fundo[2]);
    doc.rect(0, 0, larguraPagina, alturaPagina, 'F');
    doc.setTextColor(CORES.secundaria[0], CORES.secundaria[1], CORES.secundaria[2]);
    doc.setFontSize(30);
    doc.text('A2INSIGHTS LAB', margem, 50);
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(14);
    doc.text('O CÉREBRO DIGITAL DA INFRAESTRUTURA', margem, 62);
    doc.setFontSize(10);
    doc.setTextColor(150, 150, 150);
    const labDesc = "Nossa unidade de elite de software desenvolve os dashboards e sistemas que dão vida ao hardware. Dashboards de telemetria, interfaces de automação comercial e sistemas ERP customizados são criados aqui com padrão de excelência mundial.";
    doc.text(doc.splitTextToSize(labDesc, 170), margem, 80);
    desenharRodape(paginaAtual++);

    // --- PÁGINAS 5 EM DIANTE: UM SERVIÇO POR PÁGINA ---
    SERVICES.forEach(s => {
      doc.addPage();
      desenharCabecalhoSeção(s.title);
      
      doc.setTextColor(CORES.texto[0], CORES.texto[1], CORES.texto[2]);
      doc.setFontSize(16);
      doc.setFont('helvetica', 'bold');
      doc.text('RESUMO DA SOLUÇÃO', margem, 55);
      
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.text(doc.splitTextToSize(s.fullDescription, 170), margem, 65);
      
      // Box de Benefícios
      doc.setFillColor(CORES.cinza[0], CORES.cinza[1], CORES.cinza[2]);
      doc.roundedRect(margem, 110, 170, 60, 3, 3, 'F');
      doc.setTextColor(CORES.primaria[0], CORES.primaria[1], CORES.primaria[2]);
      doc.setFont('helvetica', 'bold');
      doc.text('BENEFÍCIOS ESTRATÉGICOS:', margem + 10, 120);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(60, 60, 60);
      s.benefits.forEach((b, i) => {
        doc.text(`• ${b}`, margem + 10, 130 + (i * 8));
      });

      // Especificações Técnicas
      doc.setTextColor(CORES.secundaria[0], CORES.secundaria[1], CORES.secundaria[2]);
      doc.setFont('helvetica', 'bold');
      doc.text('CONFIGURAÇÕES TÉCNICAS E PADRÕES:', margem, 185);
      doc.setDrawColor(200, 200, 200);
      doc.line(margem, 188, 190, 188);
      
      doc.setTextColor(80, 80, 80);
      doc.setFontSize(9);
      s.technicalSpecs.forEach((spec, i) => {
        doc.text(`> ${spec}`, margem, 198 + (i * 8));
      });

      // Segmento
      doc.setFillColor(CORES.primaria[0], CORES.primaria[1], CORES.primaria[2], 0.1);
      doc.rect(margem, 250, 170, 15, 'F');
      doc.setTextColor(CORES.primaria[0], CORES.primaria[1], CORES.primaria[2]);
      doc.setFont('helvetica', 'bold');
      doc.text(`SEGMENTO FOCO: ${s.sectors[0].title.toUpperCase()}`, margem + 5, 259);

      desenharRodape(paginaAtual++);
    });

    // --- PÁGINA: METODOLOGIA ---
    doc.addPage();
    desenharCabecalhoSeção('Metodologia de Entrega');
    const passos = [
      { t: "Levantamento Tático", d: "Auditoria in-loco para mapeamento de necessidades comerciais ou residenciais." },
      { t: "Projeto Executivo", d: "Desenho técnico em CAD e dimensionamento de carga/dados." },
      { t: "Implementação de Campo", d: "Instalação por engenheiros certificados com ferramentas de alta precisão." },
      { t: "Comissionamento", d: "Testes de estresse de rede e homologação de automação." },
      { t: "Suporte Vital", d: "Monitoramento 24/7 via A2insights Lab para garantir uptime de 99.9%." }
    ];
    let yPasso = 60;
    passos.forEach((p, i) => {
      doc.setFillColor(CORES.cinza[0], CORES.cinza[1], CORES.cinza[2]);
      doc.circle(margem + 5, yPasso + 5, 5, 'F');
      doc.setTextColor(CORES.secundaria[0], CORES.secundaria[1], CORES.secundaria[2]);
      doc.text(`${i+1}`, margem + 3.5, yPasso + 8.5);
      doc.setTextColor(CORES.primaria[0], CORES.primaria[1], CORES.primaria[2]);
      doc.setFont('helvetica', 'bold');
      doc.text(p.t.toUpperCase(), margem + 15, yPasso + 5);
      doc.setTextColor(100, 100, 100);
      doc.setFont('helvetica', 'normal');
      doc.text(doc.splitTextToSize(p.d, 150), margem + 15, yPasso + 12);
      yPasso += 35;
    });
    desenharRodape(paginaAtual++);

    // --- PÁGINA: COBERTURA ---
    doc.addPage();
    desenharCabecalhoSeção('Áreas de Atendimento');
    doc.setTextColor(60, 60, 60);
    const cobertura = "A FortalTech opera com logística própria em toda a Região Metropolitana de Fortaleza (RMF), garantindo tempo de resposta técnico de até 4 horas em chamados críticos.";
    doc.text(doc.splitTextToSize(cobertura, 170), margem, 55);
    const cidades = ["Fortaleza (Sede)", "Maracanaú (Base Técnica)", "Eusébio", "Caucaia", "Aquiraz", "Itaitinga", "Horizonte", "Pacajus"];
    cidades.forEach((c, i) => {
      doc.text(`• ${c}`, margem + 10, 75 + (i * 10));
    });
    desenharRodape(paginaAtual++);

    // --- PÁGINA FINAL: CONTATO ---
    doc.addPage();
    doc.setFillColor(CORES.primaria[0], CORES.primaria[1], CORES.primaria[2]);
    doc.rect(0, 0, larguraPagina, alturaPagina, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(40);
    doc.text('PRONTO PARA', margem, 100);
    doc.text('O FUTURO?', margem, 115);
    doc.setFontSize(14);
    doc.text('Inicie sua jornada tecnológica hoje.', margem, 130);
    doc.setFillColor(CORES.fundo[0], CORES.fundo[1], CORES.fundo[2]);
    doc.roundedRect(margem, 150, 170, 70, 5, 5, 'F');
    doc.setTextColor(255, 255, 255);
    doc.setFontSize(16);
    doc.text('CENTRAL DE ENGENHARIA:', margem + 10, 170);
    doc.setFontSize(12);
    doc.text('TEL: (85) 2028-0942', margem + 10, 185);
    doc.text('WEB: fortaltech.com.br', margem + 10, 195);
    doc.text('HQ: Maracanaú, CE - Brasil', margem + 10, 205);
    desenharRodape(paginaAtual++);

    doc.save('FortalTech_Dossie_Tecnico_2026.pdf');

  } catch (erro) {
    console.error('Erro no PDF:', erro);
    alert('Erro crítico na geração do PDF de 20+ páginas.');
  }
};
