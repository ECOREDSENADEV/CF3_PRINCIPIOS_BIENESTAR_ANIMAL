export default {
  global: {
    Name: 'Tenencia responsable, bienestar y protección animal',
    Description:
      'Este componente formativo trata la tenencia responsable de animales, abordando su comportamiento, comunicación, adiestramiento y bienestar. También analiza el maltrato, transporte, convivencia y reproducción responsable. Resalta la importancia de la educación del tutor y el cumplimiento de las leyes colombianas (84/1989, 1774/2016 y 2455/2025), promoviendo una relación ética, consciente y respetuosa con los animales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comportamiento animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de comportamiento animal',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características del comportamiento según la especie',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Señales de comunicación animal',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Adiestramiento y entrenamiento según la especie',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Protección animal',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto de protección animal',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Fundamentos del bienestar animal',
            hash: 't_2_2',
          },
          { numero: '2.3', titulo: 'Maltrato animal', hash: 't_2_3' },
          {
            numero: '2.4',
            titulo: 'Denuncia del maltrato animal',
            hash: 't_2_4',
          },
          { numero: '2.5', titulo: 'Transporte de animales', hash: 't_2_5' },
          {
            numero: '2.6',
            titulo: 'Normativa de protección animal en Colombia',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Convivencia responsable',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Riesgos domésticos', hash: 't_3_1' },
          { numero: '3.2', titulo: 'Prevención de riesgos', hash: 't_3_2' },
          { numero: '3.3', titulo: 'Normas de convivencia', hash: 't_3_3' },
          {
            numero: '3.4',
            titulo: 'Seguro de responsabilidad civil',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Impacto ambiental de la tenencia irresponsable',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Reproducción responsable',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto de reproducción responsable',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Riesgos de la reproducción no controlada',
            hash: 't_4_2',
          },
          { numero: '4.3', titulo: 'Esterilización', hash: 't_4_3' },
          {
            numero: '4.4',
            titulo: 'Prácticas responsables e ilegales',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Normativa aplicable en Colombia',
            hash: 't_4_5',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Principios éticos del tutor',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Responsabilidad del tutor', hash: 't_5_1' },
          { numero: '5.2', titulo: 'Capacitación del tutor', hash: 't_5_2' },
          { numero: '5.3', titulo: 'Adopción responsable', hash: 't_5_3' },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Protección animal',
      referencia:
        'Congreso de la República de Colombia. (2016). <em>Ley 1774 de 2016: Por la cual se reconocen los animales como seres sintientes y se dictan normas para su protección</em>. Diario Oficial.',
      tipo: 'Ley',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=68135',
    },
    {
      tema: 'Reproducción responsable',
      referencia:
        'Fernández Álvarez, A. (s. f.). <em>Guía básica para la esterilización canina y felina: Fundamentos en la práctica veterinaria</em>. Colvet Jaén.',
      tipo: 'Guía técnica',
      link:
        'https://colvetjaen.com/wp-content/uploads/2021/04/GUIA-BASICA-ESTERILIZACION-CANINA-Y-FELINA.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Adiestramiento',
      significado:
        'Proceso educativo que enseña al animal comportamientos básicos y funcionales para facilitar la convivencia, como obedecer órdenes simples o adaptarse al entorno doméstico.',
    },
    {
      termino: 'Bienestar animal',
      significado:
        'Condición en la que un animal se encuentra sano, bien alimentado, libre de dolor, miedo y estrés, y puede expresar sus comportamientos naturales en un entorno adecuado.',
    },
    {
      termino: 'Comportamiento',
      significado:
        'Conjunto de respuestas y acciones que realiza un animal frente a estímulos internos (emociones, hambre, dolor) o externos (ambiente, personas, otros animales), reflejando su estado físico y emocional.',
    },
    {
      termino: 'Comunicación animal',
      significado:
        'Forma en que los animales expresan su estado emocional, necesidades o intenciones a través de señales corporales, vocales, químicas o conductuales.',
    },
    {
      termino: 'Entrenamiento',
      significado:
        'Proceso más avanzado y técnico que desarrolla habilidades físicas o cognitivas en un animal con fines específicos (terapia, deporte, detección, etc.), siempre respetando su bienestar.',
    },
    {
      termino: 'Maltrato',
      significado:
        'Toda acción, omisión o negligencia que cause daño, sufrimiento o afecte negativamente el bienestar del animal, ya sea de forma intencional (violencia) o por descuido (falta de cuidados).',
    },
    {
      termino: 'Normativa',
      significado:
        'Conjunto de leyes, decretos y regulaciones vigentes en Colombia que protegen a los animales, sancionan el maltrato y promueven la tenencia responsable.',
    },
    {
      termino: 'Reproducción responsable',
      significado:
        'Control consciente y ético de la capacidad reproductiva de los animales, evitando camadas no deseadas, riesgos de salud, abandono y sobrepoblación.',
    },
    {
      termino: 'Tenencia responsable',
      significado:
        'Compromiso de cuidar a un animal considerando sus necesidades físicas, emocionales y sociales, garantizando su bienestar durante toda su vida.',
    },
    {
      termino: 'Tutor',
      significado:
        'Persona que asume la custodia, cuidado y responsabilidad total sobre un animal, garantizando su salud, seguridad, alimentación, afecto y cumplimiento de normas legales.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de la República de Colombia. (2016). <em>Ley 1774 de 2016 por medio de la cual se modifican el Código Civil, la Ley 84 de 1989 y el Código Penal, y se dictan otras disposiciones sobre protección animal</em>. Diario Oficial No. 49.747.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=68135',
    },
    {
      referencia:
        'Congreso de la República de Colombia. (1989). <em>Ley 84 de 1989, Estatuto Nacional de Protección de los Animales</em>. Diario Oficial No. 39.120.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=8242',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2017). <em>Política pública de protección y bienestar animal</em>. Gobierno de Colombia.',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2025/05/VF_PoliticaNacionalProteccionBienestarAnimal_7_5_25.pdf',
    },
    {
      referencia:
        'Ministerio de Salud y Protección Social. (2017). <em>Lineamientos para la tenencia responsable de animales de compañía</em>. Gobierno de Colombia.',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/VS/PP/SA/lineamientos-tenencia-responsables-acy.pdf',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal – OMSA. (2019). <em>Código sanitario para los animales terrestres</em>. OMSA.',
      link: 'https://www.woah.org/es/que-hacemos/normas/codigos-y-manuales/',
    },
    {
      referencia:
        'República de Colombia. (2025). <em>Ley 2455 de 18 de abril de 2025: Por la cual se fortalece la lucha contra el maltrato animal y se actualiza el Estatuto Nacional de Protección de los Animales (Ley 84 de 1989)</em>. Diario Oficial No. 53.162.',
      link:
        'https://www.funcionpublica.gov.co/eva/gestornormativo/norma.php?i=259656',
    },
    {
      referencia:
        'Serpell, J. (Ed.). (2022). <em>The domestic dog: Its evolution, behavior and interactions with people</em> (2nd ed.). Cambridge University Press.',
      link:
        'https://books.google.es/books?id=I8HU_3ycrrEC&printsec=frontcover#v=onepage&q&f=false',
    },
    {
      referencia:
        'World Organisation for Animal Health – WOAH. (2021). <em>Animal welfare and five freedoms</em>. WOAH.',
      link:
        'https://www.woah.org/en/what-we-do/animal-health-and-welfare/animal-welfare/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
