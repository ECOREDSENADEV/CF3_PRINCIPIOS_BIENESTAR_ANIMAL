<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Reproducción responsable
    
    p.mb-5 La reproducción responsable implica decisiones éticas, conscientes y fundamentadas sobre la capacidad reproductiva de las mascotas. No debe asumirse como un derecho automático del tutor, sino como un proceso biológico complejo que conlleva riesgos físicos, emocionales, sanitarios y sociales.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema4/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Este principio aplica tanto a mascotas convencionales (perros y gatos) como a no convencionales (aves, roedores, reptiles, lagomorfos, peces, entre otras), considerando sus características fisiológicas y etológicas particulares. En Colombia, la reproducción irresponsable puede constituir maltrato por omisión, abandono indirecto y riesgo sanitario, sancionado por la normativa vigente.
    
    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Concepto de reproducción responsable
    
    p.mb-5 La reproducción responsable implica manejar adecuadamente la capacidad reproductiva del animal, priorizando siempre su bienestar y el impacto social de traer nuevas vidas al mundo.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Principios fundamentales
    
    p.mb-5 Estos son los criterios sobre los que se debe basar toda decisión reproductiva:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Bienestar del animal
          p.mb-0.p-4 Considerar la salud física y emocional de la mascota.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Capacidad del tutor
          p.mb-0.p-4 Valorar si puede asumir la atención de las crías.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Impacto social y ambiental
          p.mb-0.p-4 Tener en cuenta la sobrepoblación y sus consecuencias.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Cumplimiento normativo
          p.mb-0.p-4 Respetar leyes y regulaciones vigentes.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Condiciones mínimas para reproducir responsablemente
    
    p.mb-5 Antes de permitir la reproducción de una mascota, es fundamental cumplir con los siguientes requisitos:

    .bg-full-width.bg-fondo-1
      .px-4.px-md-5
        .row.justify-content-center.mb-5.align-items-center
          .col-lg-8.mb-3.mb-lg-0.order-lg-2
            SlyderF(columnas="col-12 col-lg-6")
              .bg-color-8.p-5.h-100.shadow-app
                img(src='@/assets/curso/tema4/3.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Asesoría veterinaria
                p.text-center Para garantizar condiciones sanitarias y seguras.
              .bg-color-8.p-5.h-100.shadow-app
                img(src='@/assets/curso/tema4/4.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Evaluación de salud y edad
                p.text-center Prevenir riesgos durante la gestación y parto.
              .bg-color-8.p-5.h-100.shadow-app
                img(src='@/assets/curso/tema4/5.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Atención prenatal, perinatal y posnatal
                p.text-center Asegurar el bienestar de la madre y las crías.
              .bg-color-8.p-5.h-100.shadow-app
                img(src='@/assets/curso/tema4/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Destino responsable de las crías
                p.text-center Evitar abandono, comercio o entrega irresponsable.
              .bg-color-8.p-5.h-100.shadow-app
                img(src='@/assets/curso/tema4/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
                h4.text-center.mb-4 Abstenerse si no se cumplen condiciones
                p.text-center La prevención es una forma de protección.
          .col-lg-4.order-lg-1
            figure
              img(src='@/assets/curso/tema4/2.png', alt='')
    
    p.mb-5 En la mayoría de los casos de tenencia doméstica, la esterilización constituye la opción más responsable, ética y efectiva para evitar sufrimiento y sobrepoblación.

    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Riesgos de la reproducción no controlada
    
    p.mb-5 La reproducción no controlada es una de las principales causas de abandono, maltrato y eutanasia en Colombia. Afecta no solo a los animales directamente involucrados, sino también a la sociedad y al entorno.

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
      .div(titulo="Riesgos para la madre")
        p Permitir la reproducción sin preparación ni acompañamiento profesional puede comprometer gravemente la salud de la hembra. Se presentan riesgos como desnutrición, que ocasiona pérdida de peso y debilidad general; infecciones uterinas, incluyendo metritis, piometra y cuadros sépticos; complicaciones del parto, como distocia y partos prolongados o bloqueados; hemorragias, que representan un riesgo vital inmediato; estrés crónico, con afectación del sistema inmune y del comportamiento; y mortalidad materna, derivada de complicaciones evitables asociadas a la falta de control veterinario.
      .div(titulo="Riesgos para las crías")
        p Las crías nacidas en contextos no controlados tienen un alto índice de vulnerabilidad. Entre los principales riesgos se encuentran la alta mortalidad neonatal, con muerte en los primeros días por causas prevenibles; malformaciones congénitas, relacionadas con problemas genéticos o estructurales; enfermedades infecciosas, transmitidas por la ausencia de controles veterinarios; abandono temprano, con crías entregadas sin condiciones adecuadas o abandonadas; y falta de atención médica, evidenciada en la ausencia de vacunación, desparasitación y seguimiento clínico.
      .div(titulo="Riesgos sociales y sanitarios")
        p La reproducción irresponsable no solo afecta a los animales, también compromete el bienestar colectivo. Genera sobrepoblación animal, con saturación de calles, refugios y hogares; incremento de animales en condición de calle, lo que aumenta accidentes, mordeduras y conflictos; mayor riesgo de zoonosis, con enfermedades transmisibles a la población humana; conflictos vecinales, asociados a ruido, agresividad o contaminación; y saturación de servicios, provocando el colapso de albergues y redes de rescate.
      .div(titulo="Riesgos en mascotas no convencionales")
        p En estas especies, la reproducción suele estar desaconsejada por el alto nivel de complejidad y sensibilidad biológica. Se presentan mortalidad embrionaria, por fallos en incubación, desarrollo o nacimiento; canibalismo, con madres que devoran a sus crías debido a estrés o hambre; deficiencias nutricionales, ocasionadas por la falta de nutrientes esenciales durante la gestación; estrés extremo, que altera el comportamiento y favorece enfermedades asociadas; reproducción incontrolada, que genera grandes cantidades de animales sin destino definido; y comercio ilegal, vinculado a la venta de especies prohibidas o vulnerables. En muchos casos, permitir la reproducción sin conocimiento técnico ni criterio ético constituye

    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Esterilización
    
    p.mb-5 La esterilización es un procedimiento médico-veterinario que elimina o controla la capacidad reproductiva de un animal. Es una de las principales herramientas para promover el bienestar animal, prevenir el abandono y controlar la sobrepoblación, con beneficios comprobados en salud pública y sanidad animal.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Beneficios de la esterilización
    
    p.mb-5 Los efectos positivos de la esterilización se evidencian tanto en animales convencionales como no convencionales.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/8.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Mascotas convencionales
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Prevención de camadas no deseadas.   
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Reducción del abandono. 
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Menor riesgo de tumores mamarios y testiculares.  
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Prevención de piometra y enfermedades prostáticas. 
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Disminución de conductas de marcaje, fuga y agresividad.
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Mejora de la expectativa y calidad de vida.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/9.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Mascotas no convencionales
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Prevención de reproducción descontrolada. 
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Reducción del estrés reproductivo.  
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Reducción del estrés reproductivo. 
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Prevención del comercio y tráfico ilegal.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Consideraciones éticas y sanitarias
    
    p.mb-5 La esterilización no debe ser vista como castigo ni como una intervención antinatural, sino como una acción ética y médica con protocolos bien establecidos.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.p-4.rounded-top
            h4.mb-0.text-center Ejecución profesional
          p.mb-0.p-4 Debe ser realizada por un médico veterinario.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.p-4.rounded-top
            h4.mb-0.text-center Evaluación previa
          p.mb-0.p-4 Se requiere examen clínico antes del procedimiento.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.p-4.rounded-top
            h4.mb-0.text-center Bienestar postoperatorio
          p.mb-0.p-4 Implica uso de analgesia y seguimiento.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.p-4.rounded-top
            h4.mb-0.text-center Enfoque ético
          p.mb-0.p-4 No constituye maltrato, sino protección preventiva.
    
    p.mb-5 La esterilización es una forma de responsabilidad, no una privación de derechos.

    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Prácticas responsables e ilegales
    
    p.mb-5 En el manejo reproductivo, no todas las prácticas están permitidas o son éticamente aceptables. Distinguir entre prácticas responsables y aquellas que atentan contra el bienestar animal es esencial para una tenencia consciente.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/10.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Prácticas responsables
              p.mb-0 Estas acciones garantizan un enfoque ético, legal y sanitario de la reproducción animal. Incluyen la esterilización, orientada a prevenir la sobrepoblación y el sufrimiento; la reproducción planificada, realizada bajo asesoría profesional y control veterinario; la selección ética, basada en criterios de salud y no en estética extrema; el cuidado integral, que garantiza el bienestar de la madre y las crías durante todo el proceso; el registro y seguimiento, que permite el control sobre el destino de los animales; y la educación del tutor, orientada a promover decisiones conscientes y responsables.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema4/11.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Prácticas ilegales o no éticas
              p.mb-0 Estas conductas están prohibidas o desaconsejadas por su impacto negativo en el bienestar animal y la salud pública. Comprenden la cría indiscriminada, que genera abandono, maltrato y sobrepoblación; la venta informal, sin control sanitario ni trazabilidad; los cruces forzados, que atentan contra el bienestar emocional y físico; la separación temprana, que afecta el desarrollo y la socialización de las crías; el comercio de especies prohibidas, que constituye un delito ambiental; y la reproducción de animales enfermos, que implica un alto riesgo genético y sanitario. Estas prácticas pueden constituir maltrato animal, delitos contra la salud pública y delitos ambientales.
    
    separador
    
    #t_4_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.5 Normativa aplicable en Colombia
    
    p.mb-5 reproducción La reproducción responsable está respaldada por un marco legal amplio que protege a los animales y regula la tenencia, el comercio y la reproducción de especies domésticas y silvestres.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Normas principales
    
    p.mb-5 Estas son las disposiciones legales más relevantes que orientan la práctica responsable en Colombia:

    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Normas principales
        
        .tabla-a.color-acento-contenido.mb-5.tabl
          table
            thead
              tr
                th.bg-color-9 Norma
                th.bg-color-9 Contenido o aplicación
            tbody
              tr
                td Ley 84 de 1989
                td Estatuto Nacional de Protección Animal.
              tr.bg-color-sintesis
                td Ley 1774 de 2016
                td Reconocimiento de los animales como seres sintientes.
              tr
                td Ley 2455 de 2025 (Ley Ángel)
                td Endurece sanciones por maltrato, negligencia y cría irresponsable.
              tr.bg-color-sintesis
                td Decreto 1071 de 2015
                td Regulación del bienestar animal en actividades agropecuarias.
              tr
                td Decreto 2113 de 2017
                td Protección de animales domésticos y callejeros.
              tr.bg-color-sintesis
                td Normativa del ICA
                td Sanidad animal, control reproductivo, comercio y cría.
              tr
                td Normativa ambiental
                td Regulación sobre fauna silvestre y especies exóticas.
              tr.bg-color-sintesis
                td Ordenanzas municipales
                td Esterilización obligatoria, campañas de control poblacional.

    

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Consecuencias del incumplimiento
    
    p.mb-5 Infringir estas normas puede generar consecuencias legales para el tutor o responsable.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Multas económicas
          p.mb-0.p-4 Por infracciones administrativas o sanitarias.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Decomiso de animales
          p.mb-0.p-4 En caso de riesgo, maltrato o reproducción ilegal.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Inhabilidades legales
          p.mb-0.p-4 Inhabilidades legales
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Procesos penales
          p.mb-0.p-4 En casos graves de maltrato, reincidencia o comercio ilícito.



</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    // variables de vue
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
