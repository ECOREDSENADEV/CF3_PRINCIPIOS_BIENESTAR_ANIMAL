<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Convivencia responsable

    p.mb-5 La convivencia responsable implica una serie de conductas, decisiones y compromisos que aseguran una relación armónica entre los animales, sus tutores, las personas, otros animales y el entorno. No se trata solo de tener una mascota, sino de asumir una responsabilidad ética, social y legal.

    .bg-color-1.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto.mb-3.mb-lg-0.mb-3.mb-lg-0
          figure
            img(src='@/assets/curso/tema3/1.png', alt='')
        .col-lg
          .p-4
            p.mb-0(data-aos="fade-up") Este principio aplica tanto a mascotas convencionales (como perros y gatos), como a mascotas no convencionales (aves, roedores, lagomorfos, reptiles, peces, entre otras especies permitidas), y debe adaptarse a las necesidades particulares de cada animal.

    p.mb-5 El cuidado que un tutor proporciona no solo afecta al animal directamente, sino que tiene repercusiones más amplias en la sociedad y el ambiente.

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Bienestar animal
          p.mb-0.p-4.text-center Sufrimiento físico o emocional, estrés, enfermedades
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Seguridad de terceros
          p.mb-0.p-4.text-center Mordeduras, accidentes de tránsito, ataques entre animales.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Salud pública
          p.mb-0.p-4.text-center Propagación de zoonosis, acumulación de residuos orgánicos.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Equilibrio ambiental
          p.mb-0.p-4.text-center Escape de especies exóticas, impacto en fauna silvestre.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Convivencia comunitaria
          p.mb-0.p-4.text-center Conflictos vecinales, ruido, suciedad en espacios públicos.

    p.mb-5 En Colombia, la convivencia responsable está alineada con la legislación sobre protección animal, control de riesgos y respeto por la comunidad. Su incumplimiento puede derivar en sanciones legales, conflictos sociales y formas de maltrato por omisión, incluso si no hay intención directa de causar daño.

    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1 Riesgos domésticos
    
    p.mb-5 Los hogares no siempre están preparados para garantizar un entorno seguro a las mascotas. Los riesgos domésticos son una causa común de emergencias, lesiones y enfermedades, y su prevención forma parte esencial de la tenencia responsable.

    AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-6")
      .div(titulo="Riesgos en mascotas convencionales")
        p Perros y gatos, debido a su curiosidad natural y a su desplazamiento libre dentro del hogar, se encuentran expuestos a múltiples peligros domésticos. Entre los más frecuentes se incluyen la intoxicación por ingestión de medicamentos humanos, venenos o productos de limpieza; el consumo de alimentos tóxicos como chocolate, cebolla, ajo o uvas; caídas desde balcones, ventanas o terrazas sin protección; electrocución por mordedura de cables eléctricos expuestos; asfixia por ingestión de objetos pequeños como juguetes, tapas o bolsas; quemaduras por contacto con estufas, velas o líquidos calientes; y ataques entre animales derivados de la falta de socialización, supervisión o control durante la convivencia.
      .div(titulo="Riesgos en mascotas no convencionales")
        p Las mascotas no convencionales dependen de manera directa de condiciones ambientales específicas, por lo que errores en su manejo o alojamiento pueden comprometer gravemente su salud. Los riesgos más comunes incluyen temperaturas inadecuadas, que provocan hipotermia o hipertermia en reptiles, aves y roedores; falta o exceso de humedad, asociada con problemas respiratorios o dérmicos; iluminación incorrecta, como la ausencia de luz UV en reptiles, que afecta el metabolismo óseo; jaulas inadecuadas, generadoras de estrés, frustración, lesiones físicas o apatía; corrientes de aire, responsables de afecciones respiratorias en aves; agua contaminada, que puede causar enfermedades o muerte en peces ornamentales; manipulación excesiva, que desencadena estrés o agresividad; y escape del animal, con riesgo de muerte por depredación, atropellamiento o impacto ecológico.
    
    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Prevención de riesgos
    
    p.mb-5 La prevención es el pilar de la convivencia responsable. Anticiparse a los peligros permite adaptar el entorno y reducir la posibilidad de accidentes, enfermedades, conflictos o formas de maltrato, incluso cuando no hay intención de daño.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Medidas generales de prevención
    
    p.mb-5 Estas son acciones básicas que todos los tutores deberían aplicar para proteger a sus mascotas y al entorno:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Evaluación del entorno
          p.mb-0.p-4.text-center Observar el hogar desde la perspectiva del animal.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Control de sustancias peligrosas
          p.mb-0.p-4.text-center Guardar medicamentos, productos químicos y objetos pequeños fuera de su alcance.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Seguridad estructural
          p.mb-0.p-4.text-center Instalar mallas o barreras en balcones, ventanas y patios.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Supervisión de interacciones
          p.mb-0.p-4.text-center Vigilar el contacto con niños, adultos mayores y otros animales.
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Rutinas estables
          p.mb-0.p-4.text-center Mantener horarios regulares de alimentación, descanso y actividad.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Enriquecimiento ambiental
          p.mb-0.p-4.text-center Incorporar estímulos adecuados según especie y personalidad.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Salud preventiva
          p.mb-0.p-4.text-center Visitas periódicas al veterinario, vacunación y desparasitación.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Prevención según el tipo de mascota
    
    p.mb-5 Las medidas de prevención deben adaptarse al tipo de mascota, considerando sus características físicas, emocionales y ambientales.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/2.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Mascotas convencionales
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Uso de correas, arneses y bozales según normativa.  
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Identificación con placa o microchip. 
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Esterilización para prevenir conductas de riesgo.  
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Educación básica y refuerzo positivo. 
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Supervisión constante en paseos o visitas.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/3.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Mascotas no convencionales
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Diseño de hábitat adecuado (espacio, temperatura, humedad, luz). 
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Uso de equipos seguros (termómetros, lámparas, filtros). 
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Dieta específica según especie. 
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Minimizar manipulación innecesaria. 
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Evitar contacto con fauna silvestre. 
                li.mb-0.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Cumplir normativas sobre especies permitidas.

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Normas de convivencia
    
    p.mb-5 Las normas de convivencia regulan el comportamiento de tutores y animales en el entorno social y comunitario. Su cumplimiento permite prevenir conflictos, sanciones y riesgos para la salud pública.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Normas básicas de convivencia
    
    p.mb-5 Estas reglas son fundamentales para mantener una relación armoniosa entre las mascotas, las personas y los espacios compartidos:

    .row.justify-content-center.align-items-stretch.mb-3
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Evitar ruidos molestos
          p.mb-0.p-4.text-center Controlar ladridos o vocalizaciones excesivas.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Recoger excretas
          p.mb-0.p-4.text-center Garantizar la limpieza en áreas públicas.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center No permitir deambulación sin control
          p.mb-0.p-4.text-center Prevenir accidentes, pérdidas o ataques.
    
    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Prevenir mordeduras
          p.mb-0.p-4.text-center Prevenir mordeduras
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Respetar espacios comunes y privados
          p.mb-0.p-4.text-center Evitar daños en jardines, vehículos o inmuebles ajenos.
      .col-lg-4.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Cumplir reglamentos locales
          p.mb-0.p-4.text-center Acatar normativas municipales y de propiedad horizontal.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Convivencia según el tipo de mascota
    
    p.mb-5 Cada tipo de mascota requiere un enfoque distinto para asegurar su integración responsable en la comunidad.

    .bg-full-width.bg-fondo-slider.mb-5
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white.tarjeta.p-4
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/4.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Mascotas convencionales
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Pasear siempre con correa.   
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Control estricto de animales potencialmente peligrosos. 
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Garantizar una adecuada socialización.  
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Evitar que invadan espacios de terceros.
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.order-2
              figure
                img(src="@/assets/curso/tema3/5.png")
            .col-lg-7.order-1.mb-3.mb-lg-0
              h5.mb-5 Mascotas no convencionales
              ul.lista-ul--color
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Prevenir escapes.  
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 No exhibir especies que generen temor o riesgo. 
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Controlar olores, ruidos y residuos. 
                li.mb-2.d-flex
                  i.fas.fa-circle-check.bg-color-3
                  p.mb-0 Respetar leyes sobre tenencia de especies exóticas o silvestres.
    
    p.mb-5 El incumplimiento de estas normas puede acarrear sanciones económicas, decomisos del animal e incluso procesos legales, además de deteriorar la percepción social de la tenencia animal.

    separador
    
    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.4 Seguro de responsabilidad civil
    
    p.mb-5 El seguro de responsabilidad civil es una herramienta legal y financiera que protege tanto al tutor como a terceros ante cualquier daño causado por una mascota.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Coberturas principales del seguro
    
    p.mb-5 Este tipo de seguro puede cubrir diversas situaciones que deriven en perjuicio a otras personas o bienes:

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Lesiones a personas
          p.mb-0.p-4.text-center Mordeduras, empujones, caídas causadas por el animal.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Daños materiales
          p.mb-0.p-4.text-center Destrozos en propiedad privada, rotura de objetos, accidentes domésticos.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-16.h-100
          .bg-color-6.px-4.px-lg-5.py-3.rounded-top
            h4.mb-0.text-center Gastos derivados
          p.mb-0.p-4.text-center Atención médica, veterinaria o legal tras un incidente.
    
    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Importancia y obligatoriedad
    
    p.mb-5 Contar con un seguro puede marcar la diferencia en caso de accidente, especialmente cuando existen implicaciones legales o económicas.

    .row.justify-content-center.align-items-stretch.mb-5
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Protección económica
          p.mb-0.p-4.text-center Evita que el tutor deba asumir gastos elevados.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Atención a víctimas
          p.mb-0.p-4.text-center Garantiza una respuesta efectiva y responsable.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Disminución de conflictos
          p.mb-0.p-4.text-center Facilita la resolución de situaciones legales.
      .col-lg-3.mb-3.mb-lg-0
        .bg-color-2.h-100
          .bg-color-15.p-3.rounded-top
            h4.mb-0.text-center Obligatorio en algunos casos
          p.mb-0.p-4.text-center Requerido por ley para razas consideradas potencialmente peligrosas.

    p.mb-5  El tutor sigue siendo responsable legalmente, aun sin tener seguro contratado.

    separador
    
    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.5 El tutor sigue siendo responsable legalmente, aun sin tener seguro contratado.
    
    p.mb-5 La tenencia irresponsable de animales tiene consecuencias que van más allá del hogar. Puede generar efectos negativos graves en el entorno natural, la fauna silvestre y la salud pública.

    .titulo-con-imagen.mb-5(data-aos="fade-right")
      .titulo-con-imagen__fondo
        img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
        h3.titulo-con-imagen__texto Impactos ambientales más frecuentes
    
    p.mb-5 Estos son los principales efectos de una gestión negligente o desinformada de animales de compañía:

    .bg-full-width.bg-fondo-1
      .p-4.p-md-5
        SlyderF(columnas="col-12 col-lg-6 col-xl-4").mb-5
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/6.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Abandono de mascotas
            p.text-center Genera sobrepoblación, enfermedades, accidentes.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/7.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Contaminación por excretas
            p.text-center Afecta suelos, cuerpos de agua y espacios públicos.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/8.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Reproducción no controlada
            p.text-center Colapsa refugios, incrementa el abandono.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/9.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Introducción de especies exóticas
            p.text-center Desplaza fauna nativa y desequilibra ecosistemas.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/10.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Depredación de fauna silvestre
            p.text-center Pérdida de biodiversidad, desequilibrio ecológico.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/11.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Comercio ilegal de animales
            p.text-center Aumenta el riesgo de extinción y explotación de especies.
          .bg-color-white.p-4.h-100.shadow-app
            img(src='@/assets/curso/tema3/12.svg' alt='AvatarTop' , style="max-width: 90px").mx-auto.mb-3
            h4.text-center.mb-4 Uso excesivo de recursos
            p.text-center Impacto sobre agua, energía y alimentos.

        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/componentes/1.png")
            h3.titulo-con-imagen__texto Impactos según tipo de mascota
    
        p Los efectos pueden variar según se trate de especies convencionales o no convencionales:

    .tarjeta--container.row.mb-5
      .col-lg.tarjeta.color-primario.bg-color-1.p-5
        .row.justify-content-center.mb-4.align-items-end
          .col-3
            figure
              img(src='@/assets/curso/tema3/13.svg', alt='Texto descriptivo 1')
          .col-9
            h2.text-center Mascotas convencionales
        p.mb-0 Perros y gatos ferales afectan fauna silvestre. 
        p.mb-0 Sus excretas contaminan el ambiente. 
        p.mb-0 La reproducción no controlada genera abandono masivo.

    
      .col-lg.tarjeta.color-primario.bg-color-7.p-5
        .row.justify-content-center.mb-4.align-items-end
          .col-3
            figure
              img(src='@/assets/curso/tema3/14.svg', alt='Texto descriptivo 2')
          .col-9
            h2.text-center Mascotas no convencionales
        p.mb-0 Liberación de especies altera ecosistemas locales. 
        p.mb-0 Transmiten enfermedades a la fauna nativa. 
        p.mb-0 El manejo inadecuado causa mortalidad masiva.

    
      



</template>

<script>
export default {
  name: 'Tema3',
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
