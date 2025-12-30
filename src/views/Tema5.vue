<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Principios éticos del tutor
    
    p.mb-5 Ser tutor de una mascota no es un acto de propiedad, sino una responsabilidad ética, legal y social permanente, sustentada en el reconocimiento del animal como ser sintiente, capaz de experimentar emociones, dolor, placer, estrés y vínculos afectivos.

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema5/1.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 Estos principios éticos orientan todas las decisiones del tutor, desde la adopción hasta el final de la vida del animal, y están respaldados en Colombia por normas como la Ley 1774 de 2016, la Ley 2455 de 2025 (Ley Ángel) y el Estatuto Nacional de Protección Animal.
    
    separador
    
    #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.1 Responsabilidad del tutor
    
    p.mb-5 La responsabilidad del tutor es continua, integral y no puede delegarse, aun en situaciones difíciles como cambios económicos, familiares o de vivienda. Implica deberes positivos hacia el animal, la comunidad y el entorno.

    TabsC.color-acento-contenido(data-aos="zoom-in").mb-5
      .p-4(titulo="Bienestar físico")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Bienestar físico
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Alimentación suficiente y balanceada. 
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Agua potable permanente. 
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Alojamiento seguro y limpio. 
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Protección climática. 
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Atención veterinaria preventiva y curativa
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema5/2.png', alt='Texto que describa la imagen')
      .p-4(titulo="Bienestar emocional y comportamental")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Bienestar emocional y comportamental
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Estimulación adecuada. 
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Estimulación adecuada. 
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Fomentar comportamientos naturales. 
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Manejo sin violencia. 
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Prevención del miedo y el estrés crónico.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema5/3.png', alt='Texto que describa la imagen')
      .p-4(titulo="Responsabilidad sanitaria")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Responsabilidad sanitaria
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Vacunación y desparasitación. 
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Control reproductivo. 
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Prevención de zoonosis. 
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Manejo higiénico de excretas y residuos. 
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Atención en casos de enfermedad.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema5/4.png', alt='Texto que describa la imagen')
      .p-4(titulo="Responsabilidad legal y social")
        .row.justify-content-center.align-items-center
          .col-lg-8.mb-4.mb-md-0.order-2
            h4 Responsabilidad legal y social
            ul.lista-ul--color.mb-0
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Cumplir con las normas vigentes. 
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Prevenir daños a tercero. 
              li.mb-2.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Evitar abandono.
              li.mb-0.d-flex
                i.fas.fa-circle-check.bg-color-3
                p.mb-0 Asumir consecuencias legales de actos u omisiones.
          .col-lg-4.order-1.mb-3.mb-lg-0
            figure
              img(src='@/assets/curso/tema5/5.png', alt='Texto que describa la imagen')

    p.mb-5 La omisión en cualquiera de estas dimensiones puede constituir maltrato por negligencia o abandono, con consecuencias legales.

    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Capacitación del tutor
    
    p.mb-5 La capacitación es un principio ético esencial. Tener una mascota sin conocer sus necesidades reales puede derivar en maltrato por desconocimiento. Estar informado es parte de la responsabilidad del tutor.

    .row.align-items-start.mb-5
      .col-lg-3.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema5/6.png", alt="").mb-4.mb-lg-0
      .col-lg-9
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          .div(titulo="Importancia de capacitarse como tutor")
            p Capacitarse permite actuar con conocimiento y prevenir situaciones perjudiciales para el animal, el entorno y el tutor mismo, fortaleciendo el cumplimiento de deberes éticos, sanitarios y legales asociados a la tenencia responsable.
          .div(titulo="Reconocer necesidades biológicas y etológicas")
            p Permite brindar un cuidado específico según la especie y la etapa de vida, respetando requerimientos físicos, conductuales y ambientales propios de cada animal.
          .div(titulo="Interpretar señales de comunicación")
            p Facilita una mejor relación humano-animal al comprender signos de estrés, miedo, dolor, bienestar o necesidad, reduciendo conflictos y situaciones de riesgo.
          .div(titulo="Prevenir enfermedades y accidentes")
            p Conduce a la disminución de riesgos sanitarios mediante prácticas adecuadas de manejo, prevención, higiene y atención oportuna.
    
    .row.align-items-start.mb-5
      .col-lg-3.mb-3.mb-lg-0.order-lg-2
        figure
          img(src="@/assets/curso/tema5/7.png", alt="").mb-4.mb-lg-0
      .col-lg-9.order-lg-1
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
          .div(titulo="Evitar prácticas inadecuadas")
            p Reduce errores derivados de la ignorancia, como manejos incorrectos, reproducción irresponsable, alimentación inadecuada o condiciones ambientales deficientes.
          .div(titulo="Tomar decisiones responsables")
            p Orienta decisiones relacionadas con adopción, alimentación, salud, manejo cotidiano y bienestar integral del animal. La ignorancia no exime de responsabilidad legal, especialmente cuando existen consecuencias para el animal o terceros.
          .div(titulo="Capacitación en mascotas convencionales")
            p Requiere conocer las etapas del desarrollo, garantizar una socialización adecuada, aplicar manejo respetuoso y entrenamiento básico, prevenir conductas agresivas y cumplir normas de convivencia urbana.
          .div(titulo="Capacitación en mascotas no convencionales")
            p Exige comprender su altísima sensibilidad ambiental, cumplir requisitos específicos de temperatura, luz y dieta, respetar conductas naturales complejas, reconocer el mayor riesgo sanitario y ambiental, y conocer la legalidad y los costos reales asociados. Adquirir una mascota no convencional sin información técnica puede causar sufrimiento grave y daño ambiental.
    
    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Adopción responsable
    
    p.mb-5 La adopción responsable es un acto ético y consciente, no impulsivo ni temporal. Implica asumir voluntariamente la custodia de un animal y comprometerse a garantizar su bienestar durante toda su vida.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Principios de la adopción responsable
    
    p.mb-5 Antes de adoptar, el tutor debe analizar su capacidad real para asumir el compromiso.

    .row.justify-content-center.mb-3
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/8.svg', style="max-width: 42px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .bg-color-2.h-100
            .bg-color-15.p-3.rounded-top
              p.mb-0.text-center Capacidad económica, emocional y de tiempo.
            p.mb-0.p-4.text-center Para garantizar atención integral constante.
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/8.svg', style="max-width: 42px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .bg-color-2.h-100
            .bg-color-15.p-3.rounded-top
              p.mb-0.text-center Espacio físico disponible.
            p.mb-0.p-4.text-center Adecuación del entorno al tamaño y necesidades del animal.
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/8.svg', style="max-width: 42px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .bg-color-2.h-100
            .bg-color-15.p-3.rounded-top
              p.mb-0.text-center Compatibilidad familiar.
            p.mb-0.p-4.text-center Compatibilidad familiar.
    .row.justify-content-center.mb-5
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/8.svg', style="max-width: 42px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .bg-color-2.h-100
            .bg-color-15.p-3.rounded-top
              p.mb-0.text-center Expectativa de vida del animal.
            p.mb-0.p-4.text-center Prepararse para una relación de largo plazo.
      .col-md-6.col-lg-3.mb-3.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/tema5/8.svg', style="max-width: 42px" alt='AvatarTop')
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .bg-color-2.h-100
            .bg-color-15.p-3.rounded-top
              p.mb-0.text-center Compromiso permanente.
            p.mb-0.p-4.text-center Evitar devoluciones, negligencia o abandono.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Responsabilidades posteriores a la adopción
    
    p.mb-5 La adopción no termina al recibir al animal: inicia una etapa de atención activa.

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        SlyderF(columnas="col-12 col-lg-6 col-xl-4").mb-5
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema5/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Atención veterinaria inmediata
            p.text-center Revisión general, vacunación, desparasitación.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema5/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Cumplimiento de protocolos sanitarios
            p.text-center Seguimiento continuo de la salud.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema5/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Esterilización
            p.text-center Prevención de camadas no deseadas.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema5/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Facilitación de la adaptación
            p.text-center Acompañamiento en el proceso de ajuste.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema5/13.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 No devolución ni abandono
            p.text-center Compromiso ético y legal duradero.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Adopción de mascotas no convencionales
        
        p Estos casos requieren aún mayor rigurosidad, debido a su complejidad biológica y legal.
    
    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Legalidad de la especie
          p.mb-0.p-4.text-center Verificar que esté permitida
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Origen del animal
          p.mb-0.p-4.text-center Confirmar procedencia legal y ética.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Condiciones de hábitat
          p.mb-0.p-4.text-center Cumplir requisitos ambientales estrictos.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Prevención de liberación
          p.mb-0.p-4.text-center No abandonar especies exóticas en ecosistemas locales.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Evitar comercio ilegal
          p.mb-0.p-4.text-center No alimentar redes de tráfico de fauna.


    .bg-color-15.mb-5.tarjeta
      .p-4
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/tema5/14.svg", style="max-width: 90px").mx-auto
          .col-lg
            h5.mb-0 Adoptar sin preparación técnica puede derivar en maltrato involuntario, abandono y daño ambiental irreversible.


</template>

<script>
export default {
  name: 'Tema5',
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
