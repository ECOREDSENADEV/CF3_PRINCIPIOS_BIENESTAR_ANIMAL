<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Comportamiento animal
    
    p.mb-5 El comportamiento animal es una manifestación integral del bienestar físico, emocional y social de las mascotas. Comprenderlo permite prevenir problemas, interpretar señales de alerta y fortalecer el vínculo entre el animal y su tutor.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 El comportamiento animal comprende el conjunto de respuestas, conductas y patrones de acción que manifiestan los animales como resultado de la interacción dinámica entre su biología, genética, fisiología, estado emocional, experiencia previa y el entorno físico y social en el que se desarrollan. Estas conductas no son aleatorias; cumplen funciones esenciales para la supervivencia, adaptación, comunicación, reproducción, defensa y mantenimiento del equilibrio físico y psicológico del individuo.

    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema1/2.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 Desde el enfoque del bienestar animal, el comportamiento constituye una expresión directa del estado interno del animal. Un animal que puede expresar sus conductas naturales en un entorno adecuado presenta mayor estabilidad emocional, mejor salud y una relación más armónica con las personas. Por el contrario, cuando estas conductas son reprimidas, distorsionadas o ignoradas, se generan respuestas de estrés, frustración y sufrimiento, que pueden derivar en problemas conductuales y enfermedades. En el marco de la tenencia responsable, comprender el comportamiento animal es fundamental para:
    
    .row.mb-5.align-items-center
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/3.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1 
        .bg-color-1.p-4(data-aos="fade-left")
          ul.lista-ul--color
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-3
              p.mb-0 Prevenir problemas de conducta, identificando causas ambientales, emocionales o sanitarias.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-3
              p.mb-0  Reducir el estrés y el sufrimiento, evitando prácticas de manejo inadecuadas o coercitivas.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-3
              p.mb-0 Evitar accidentes y agresiones, mediante la correcta interpretación de señales de advertencia.
            li.mb-3.d-flex
              i.fas.fa-circle-check.bg-color-3
              p.mb-0 Fortalecer el vínculo humano–animal, basado en la comprensión y el respeto mutuo.
            li.mb-0.d-flex
              i.fas.fa-circle-check.bg-color-3
              p.mb-0 Garantizar el bienestar integral, incluyendo las dimensiones física, mental y comportamental.

    p.mb-5 El comportamiento es, además, un indicador temprano de enfermedad o malestar. Manifestaciones como agresividad repentina, apatía, estereotipias (conductas repetitivas sin función aparente), vocalizaciones excesivas, automutilación, marcaje inadecuado, destrucción de objetos o aislamiento persistente suelen ser signos de dolor, enfermedad, miedo, ansiedad, frustración o manejo incorrecto.

    .row.justify-content-center
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/4.png', alt='')
          .col-lg.mb-3.mb-lg-0  
            .bg-color-15.tarjeta(data-aos="fade-up")
              .p-5
                p.mb-0 En Colombia, la omisión en la atención de estas señales puede constituir maltrato animal por negligencia, sancionado por la Ley 84 de 1989, la Ley 1774 de 2016, que reconoce a los animales como seres sintientes, y la Ley 2455 de 2025 (Ley Ángel), que fortalece el régimen sancionatorio frente al maltrato.

    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto de comportamiento animal
    
    p.mb-5 Para interpretar adecuadamente las conductas de una mascota, es necesario comprender qué origina su comportamiento y cómo este responde a estímulos tanto internos como externos. El comportamiento animal se define como el conjunto de acciones observables y respuestas internas que un animal presenta frente a distintos estímulos, con el fin de adaptarse a su entorno y mantener su equilibrio interno.

    TabsC.color-acento-contenido(data-aos="zoom-in").mb-5
      .p-4(titulo="Estímulos internos")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Estímulos internos
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Hambre y sed.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Dolor y enfermedad.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Cambios hormonales.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Estados emocionales como miedo, ansiedad o frustración.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/5.png', alt='Texto que describa la imagen')
      .p-4(titulo="Estímulos externos")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Estímulos externos
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Condiciones del ambiente (temperatura, luz, ruido).
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Presencia de otros animales.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Interacción con personas.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Tipo de manejo y rutina diaria.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/6.png', alt='Texto que describa la imagen')
      
    p.mb-5 Según su origen y función, las conductas se clasifican en:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Innatas
          p.mb-0.p-4 Presentes desde el nacimiento y genéticamente determinadas, como la succión, la huida, el acicalamiento o ciertas vocalizaciones.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Aprendidas
          p.mb-0.p-4 Adquiridas a través de la experiencia, la socialización, el adiestramiento y el entrenamiento.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Adaptativas
          p.mb-0.p-4 Aquellas que favorecen la supervivencia, la reproducción y el equilibrio del individuo dentro de su entorno.
    
    p.mb-5 El comportamiento está íntimamente ligado a las Cinco Libertades del Bienestar Animal, especialmente a la libertad de expresar un comportamiento natural. Cuando esta libertad es vulnerada por confinamiento inadecuado, falta de estimulación, aislamiento social o manejo incorrecto, el animal desarrolla estrés crónico, con efectos negativos sobre el sistema inmunológico y la salud general.

    .row.justify-content-center
      .col-lg-8
        .bg-color-5.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/7.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") En mascotas no convencionales, esta relación es aún más crítica, ya que muchas especies tienen requerimientos ambientales muy específicos y manifiestan el estrés de forma silenciosa, enfermando rápidamente cuando no pueden expresar sus conductas naturales.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Características del comportamiento según la especie
    
    p Cada especie tiene requerimientos conductuales particulares que deben ser respetados para garantizar su bienestar. Reconocer estas diferencias evita errores de manejo, humanización indebida y sufrimiento silencioso.

    .row.align-items-center.mb-5
      .col-lg-auto.mb-3.mb-lg-0
        img(src="@/assets/curso/tema1/8.svg", style="max-width: 90px").mx-auto
      .col-lg
        p.mb-0 Cada especie presenta patrones conductuales propios, determinados por su evolución, hábitat natural, estructura social y forma de comunicación. Por ello, no es correcto extrapolar el comportamiento de una especie a otra ni aplicar los mismos métodos de manejo. Lo que resulta adecuado para un perro puede ser inadecuado para un gato, un ave o un reptil.

    .row.justify-content-center
      .col-lg-8
        .bg-color-9.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/9.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") El reconocimiento de estas diferencias es esencial para evitar el manejo incorrecto, el estrés prolongado y la frustración conductual, especialmente en mascotas no convencionales, cuyas señales suelen ser más sutiles y fácilmente ignoradas por el tutor.
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Señales de comunicación animal
    
    .row.mb-5
      .col-lg-3.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/10.png", data-aos="zoom-in")
      .col-lg-9.order-lg-1
        p(data-aos="fade-left") Los animales se comunican de forma continua para expresar su estado emocional, necesidades fisiológicas y percepción del entorno. Interpretar estas señales es esencial para evitar conflictos, detectar problemas de salud y mejorar la convivencia.
        .bg-color-1.mb-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/11.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Los animales se comunican mediante señales corporales, vocales, químicas y conductuales, que reflejan su bienestar, incomodidad, intenciones y disposición frente a personas, otros animales o estímulos ambientales.
        p Estas señales constituyen el lenguaje natural del animal y representan su principal herramienta para evitar conflictos, regular interacciones sociales y proteger su integridad física y emocional. A diferencia de los humanos, los animales no verbalizan el dolor o el miedo de forma explícita; por eso, el comportamiento es la principal vía para identificar su estado.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Tipos de señales de comunicación
    
    p.mb-5 La comunicación animal permite identificar el bienestar o malestar de las mascotas a partir de sus señales corporales, vocales y químicas.

    .row.align-items-start.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/12.png", alt="").mb-4.mb-lg-0
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          .div(titulo="Comunicación corporal (lenguaje corporal)")
            p Es la forma más inmediata de expresión animal y permite identificar el estado emocional a través de la postura, los movimientos y las expresiones corporales. El bienestar se asocia con postura relajada, movimientos fluidos, exploración tranquila y juego espontáneo, mientras que el miedo o el estrés se reflejan en rigidez corporal, posturas defensivas, huida, congelamiento e hipervigilancia. En perros y gatos, señales como la posición de orejas y cola, la rigidez o el ronroneo aportan información clara sobre su estado emocional. En mascotas no convencionales, como aves, roedores, reptiles y peces, las señales suelen ser más sutiles e incluyen inmovilidad, cambios posturales, alteraciones en la actividad y conductas defensivas.
          .div(titulo="Comunicación vocal")
            p Las vocalizaciones expresan estados emocionales, sociales y de alerta, y su significado depende del contexto y de la especie. En perros, los ladridos pueden indicar alerta, miedo, frustración o juego, mientras que en gatos los maullidos se relacionan con atención, dolor o ansiedad. En mascotas no convencionales, los chillidos en roedores y las vocalizaciones intensas en aves suelen asociarse con miedo, estrés o aislamiento. La disminución o ausencia de vocalización en especies habitualmente vocales puede indicar enfermedad o sufrimiento.
          .div(titulo="Comunicación química")
            p Se produce mediante feromonas, secreciones y marcajes territoriales, especialmente en especies con organización social compleja. Permite transmitir información sobre territorialidad, estado reproductivo y niveles de estrés, siendo relevante en gatos, roedores, reptiles y algunas aves. El marcaje excesivo suele asociarse con ansiedad o conflicto. En peces, las alteraciones químicas del agua influyen directamente en el comportamiento y en la interacción social.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Importancia de las señales de comunicación en el manejo y entrenamiento
    
    p.mb-5 Antes de cualquier manejo, es fundamental observar el estado emocional del animal. Forzar la interacción sin tener en cuenta sus señales puede generar daños físicos y emocionales. Las evaluaciones previas al entrenamiento o intervención:

    .row.justify-content-center.mb-3
      .col-lg-4.mb-3.mb-lg-0.d-flex
        .bg-color-1.tarjeta.w-100
          .p-3
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 El animal se encuentra relajado y receptivo.
      .col-lg-4.mb-3.mb-lg-0.d-flex
        .bg-color-1.tarjeta.w-100
          .p-3
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 No hay signos de miedo, dolor o tensión
      .col-lg-4.mb-3.mb-lg-0.d-flex
        .bg-color-1.tarjeta.w-100
          .p-3
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/13.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Tolera la manipulación y muestra interés por el entorno.

    p Un animal estresado o asustado no puede aprender de forma efectiva. Ignorar estas condiciones aumenta el riesgo de fallos en el adiestramiento, agresiones y deterioro del vínculo humano–animal.
    p.mb-5 En especies no convencionales, donde las señales suelen ser más sutiles, la observación diaria y atenta es clave. El comportamiento alterado puede ser la primera manifestación de enfermedad o sufrimiento.

    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-7.tarjeta.p-4.h-100(data-aos="fade-left")
          p(data-aos="fade-left") Las señales de comunicación animal son la manifestación más clara del estado interno de cada individuo. Aprender a reconocerlas, interpretarlas y responder con respeto es indispensable para:
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/14.png" data-aos="zoom-in")
      .col-lg-6.mb-3.mb-lg-0
        .bg-color-1.tarjeta.p-5.h-100(data-aos="fade-left")
          ul.lista-ul--color.mb-0
            li.mb-2.d-flex
              i.fas.fa-circle-check.bg-color-3
              p.mb-0 Prevenir accidentes y situaciones de riesgo.
            li.mb-2.d-flex
              i.fas.fa-circle-check.bg-color-3
              p.mb-0 Reducir el sufrimiento innecesario.
            li.mb-0.d-flex
              i.fas.fa-circle-check.bg-color-3
              p.mb-0 Promover una convivencia armónica.
            li.mb-2.d-flex
              i.fas.fa-circle-check.bg-color-3
              p.mb-0 Facilitar el manejo veterinario y el aprendizaje.
            li.mb-0.d-flex
              i.fas.fa-circle-check.bg-color-3
              p.mb-0 Cumplir con la normativa legal de protección animal en Colombia.

    separador
    
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.4 Adiestramiento y entrenamiento según la especie
    
    p.mb-5 El adiestramiento y el entrenamiento son herramientas complementarias para el manejo conductual, pero no son sinónimos, ni deben aplicarse indistintamente. Su aplicación debe basarse en el conocimiento del comportamiento natural de cada especie, su capacidad cognitiva, su estado emocional y su contexto de vida.

    .row.justify-content-center
      .col-lg-8
        .bg-color-9.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/15.png', alt='')
            .col-lg
              .p-4
                p.mb-0(data-aos="fade-up") Ambos procesos deben ser respetuosos, libres de castigo y centrados en el bienestar del animal. La finalidad no es el sometimiento, sino facilitar la convivencia, reducir el estrés, mejorar la seguridad y fortalecer el vínculo humano–animal.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Concepto de adiestramiento
    
    p.mb-5 El adiestramiento es un proceso educativo básico que busca enseñar al animal conductas funcionales para una convivencia armónica y segura. Se enfoca en:

    .row.justify-content-center.mb-5
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/13.svg', style="max-width: 42px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-2.w-100
            .p-4.text-center
              p.mb-0 Obediencia básica.
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/13.svg', style="max-width: 42px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-2.w-100
            .p-4.text-center
              p.mb-0 Control emocional.
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/13.svg', style="max-width: 42px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-2.w-100
            .p-4.text-center
              p.mb-0 Manejo sanitario y cotidiano.
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/13.svg', style="max-width: 42px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-2.w-100
            .p-4.text-center
              p.mb-0 Prevención de problemas de conducta.
      .col-md-6.col-lg-2.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/13.svg', style="max-width: 42px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.bg-color-2.w-100
            .p-4.text-center
              p.mb-0 Adaptación al entorno y a la interacción humana.

    p.mb-5 El adiestramiento bien aplicado promueve el bienestar del animal, facilita el acceso a servicios veterinarios y previene situaciones de riesgo. En mascotas convencionales:

    TabsC.color-acento-contenido(data-aos="zoom-in").mb-5
      .p-4(titulo="Perros")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Perros
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Acudir al llamado.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Caminar con correa.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Sentarse, esperar, acostarse.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Tolerar manipulación veterinaria.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Controlar impulsos y vocalizaciones excesivas.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/16.png', alt='Texto que describa la imagen')
      .p-4(titulo="Gatos")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Gatos
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Uso adecuado del arenero.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Habituación a la transportadora.
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Manejo durante exámenes o tratamientos.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Reducción de marcaje y agresión defensiva.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/17.png', alt='Texto que describa la imagen')

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto En mascotas no convencionales
    
    p.mb-5 El adiestramiento se limita a aspectos de habituación y manejo sanitario, evitando la imposición de conductas artificiales o antinaturales.

    .row.justify-content-center
      .col-lg-10
        .bg-color-1.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/18.png', alt='')
            .col-lg
              .p-4
                h5 Ejemplos:
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Aves: subir voluntariamente al posadero.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Conejos: tolerancia al contacto humano.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Roedores: exploración sin pánico.
                p.mb-0 Forzar comportamientos complejos en estas especies genera estrés crónico y afecta su salud física y emocional.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Concepto de entrenamiento
    
    p.mb-5 El entrenamiento es un proceso técnico y especializado que busca desarrollar habilidades físicas o cognitivas con un propósito funcional, asistencial, clínico, deportivo o laboral. Requiere planificación estructurada y mayor exigencia que el adiestramiento. Se aplica exclusivamente en casos en los que el bienestar del animal no se vea comprometido, y donde exista una justificación ética y técnica clara.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/19.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Entrenamiento en mascotas convencionales (perros)
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Perros de asistencia o apoyo emocional.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Perros de detección (olfato médico, búsqueda).
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Perros de deporte canino.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Entrenamiento cooperativo para manejo veterinario.
              p Todos estos procesos requieren:
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Evaluación veterinaria previa.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Entrenadores certificados.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Supervisión continua del bienestar.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/20.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Entrenamiento en mascotas no convencionales
              p Está limitado a casos muy específicos, donde:
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Reduce el estrés ante el manejo clínico.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Mejora la seguridad durante la manipulación.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Favorece la expresión natural de la conducta.
              h5 Ejemplos:
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Aves entrenadas para ingresar a su transportadora.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Aves que cooperan durante revisión de patas o pico.
    
    p.mb-5 El entrenamiento conductual no se aplica a reptiles, peces ni a especies con capacidad limitada de aprendizaje asociativo. Forzar procesos de entrenamiento en estas especies representa una violación al principio de bienestar animal.

    .row.justify-content-center
      .col-lg-9
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Cuadro comparativo: Adiestramiento vs. Entrenamiento
        
        .tabla-a.color-acento-contenido.mb-5.tabl
          table
            thead
              tr
                th.bg-color-9 Característica
                th.bg-color-9 Adiestramiento
                th.bg-color-9 Entrenamiento
            tbody
              tr
                td Definición
                td Enseñanza básica de conductas funcionales para la convivencia.
                td Desarrollo de habilidades específicas con fines asistenciales, clínicos o laborales.
              tr.bg-color-sintesis
                td Objetivo
                td Facilitar el manejo y la interacción segura.
                td Cumplir funciones especializadas según aptitud individual.
              tr
                td Finalidad
                td Bienestar, educación y manejo responsable.
                td Funcionalidad avanzada en contextos específicos.
              tr.bg-color-sintesis
                td Exigencia
                td Baja a media.
                td Media a alta.
              tr
                td Complejidad
                td Progresiva y sencilla.
                td Técnica, estructurada.
              tr.bg-color-sintesis
                td Método
                td Refuerzo positivo simple.
                td Condicionamiento positivo avanzado.
              tr
                td Duración
                td Continua, integrada a la rutina.
                td Planificada, con metas específicas.
              tr.bg-color-sintesis
                td Edad recomendada
                td Desde etapas tempranas.
                td Tras alcanzar madurez física y emocional.
              tr
                td Riesgo de estrés
                td Bajo.
                td Medio a alto si se aplica incorrectamente.
              tr.bg-color-sintesis
                td Evaluación veterinaria
                td Recomendable.
                td Obligatoria.
              tr
                td Aplicabilidad
                td Perros, gatos; manejo básico en otras especies.
                td Principalmente perros; aves en contextos clínicos.
              tr.bg-color-sintesis
                td Mascotas no convencionales
                td Solo habituación básica.
                td Muy restringido.
              tr
                td No aplicable a
                td —
                td Reptiles, peces.
              tr.bg-color-sintesis
                td Marco legal
                td Debe promover bienestar.
                td Su mala aplicación puede ser considerada maltrato.
              tr
                td Responsabilidad del tutor
                td Total.
                td Total, con mayor exigencia ética y legal.

    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto ¿Cómo se realiza el adiestramiento?
    
    p.mb-5 El adiestramiento debe ser:

    .row.justify-content-center.mb-5
      .col-lg-3.mb-3.mb-lg-0.d-flex
        .bg-color-1.tarjeta.w-100
          .p-3
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/21.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Progresivo y adaptado a la especie.
      .col-lg-3.mb-3.mb-lg-0.d-flex
        .bg-color-1.tarjeta.w-100
          .p-3
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/21.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Centrado en el refuerzo positivo.
      .col-lg-3.mb-3.mb-lg-0.d-flex
        .bg-color-1.tarjeta.w-100
          .p-3
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/21.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Centrado en el refuerzo positivo.
      .col-lg-3.mb-3.mb-lg-0.d-flex
        .bg-color-1.tarjeta.w-100
          .p-3
            .row.align-items-center
              .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
                img(src="@/assets/curso/tema1/21.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Basado en sesiones cortas y repetitivas.

    p.mb-5 Las etapas del adiestramiento son:

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        SlyderF(columnas="col-12 col-lg-6 col-xl-4").mb-5
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema1/22.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Observación del comportamiento natural
            p.text-center Identificar respuestas espontáneas, señales de estrés o interés.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema1/23.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Identificación de motivadores
            p.text-center Recompensas efectivas según la especie: alimento, juego, caricias.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema1/24.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Asociación positiva
            p.text-center Recompensar de forma inmediata la conducta deseada.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema1/25.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Repetición constante
            p.text-center Cortos períodos de práctica para evitar frustración.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema1/26.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Generalización
            p.text-center Practicar en diferentes ambientes para reforzar la conducta aprendida.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto ¿Cómo se realiza el entrenamiento?
    
        p.mb-5 El entrenamiento exige mayor rigurosidad técnica, estructura clara y acompañamiento profesional. Los requisitos previos son:

    .row.justify-content-center
      .col-lg-10
        .bg-color-9.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
              figure
                img(src='@/assets/curso/tema1/27.png', alt='')
            .col-lg
              .p-4
                ul.lista-ul--color
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Evaluación veterinaria completa.
                  li.mb-2.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Conocimiento profundo del comportamiento animal.
                  li.mb-0.d-flex
                    i.fas.fa-circle-check.bg-color-3
                    p.mb-0 Diseño de un plan con objetivos medibles y fases progresivas.
    
    p.mb-5 Las fases del entrenamiento son:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Habituación progresiva
          p.mb-0.p-4 Introducción gradual a estímulos, personas y ambientes.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Condicionamiento positivo
          p.mb-0.p-4 Asociación entre estímulo y recompensa clara.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Desarrollo de habilidades
          p.mb-0.p-4 Aumento paulatino del reto o complejidad.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Descansos adecuados
          p.mb-0.p-4 Evitan agotamiento físico y emocional.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Evaluación permanente del bienestar
          p.mb-0.p-4 Interrupción del proceso ante cualquier signo de estrés o sufrimiento.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Mascotas no convencionales: enfoque especial

    p.mb-5 En especies como aves, roedores, lagomorfos o reptiles, el adiestramiento tradicional no es aplicable. El objetivo debe ser la habituación y el manejo sanitario.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/28.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Principios clave
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Evitar exigencias fuera de su capacidad etológica.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Priorizar confort, seguridad y cooperación voluntaria.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Observar diariamente para detectar cambios conductuales sutiles.
              p El entrenamiento inadecuado en estas especies puede causar:
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Estrés crónico.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Inmunosupresión.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Alteraciones de conducta.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Enfermedad e incluso muerte.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema1/29.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Importancia ética y legal
              p Todo manejo conductual debe:
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Estar centrado en el bienestar, no en el control.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Evitar generar miedo, dolor o sufrimiento.
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Ser responsabilidad directa del tutor.
              p El uso de métodos coercitivos o aversivos constituye una violación a la legislación vigente en Colombia, en especial:
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Ley 84 de 1989 (Estatuto de Protección Animal).
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Ley 1774 de 2016 (reconocimiento de los animales como seres sintientes).
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Ley 2455 de 2025 (Ley Ángel).

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
