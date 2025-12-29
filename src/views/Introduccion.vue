<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .bg-full-width.bg-fondo-1
      .px-4.px-md-5
        p.mb-5 La tenencia responsable de animales es un compromiso ético, legal y social que va más allá de brindar alimento y refugio. Implica comprender y respetar las necesidades físicas, emocionales y conductuales de cada especie, asegurando su bienestar integral en todos los contextos.

        .bloque-texto-a.color-acento-contenido.bg-color-13.p-4.p-md-5.mb-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0.order-lg-2
              figure
                img(src="@/assets/curso/intro/1.png", style="max-width: 224px")
            .col-lg-8.order-lg-1
              .bloque-texto-a__texto.p-5
                p.mb-0 Este componente formativo  aborda temas fundamentales como el comportamiento animal, la protección jurídica, el manejo adecuado, la convivencia en entornos humanos y la reproducción responsable. Cada uno de estos aspectos está respaldado por normativa vigente en Colombia, orientada a garantizar que los animales vivan libres de sufrimiento evitable.

        p Además, se resalta el papel del tutor como figura clave en la vida del animal. Su educación, responsabilidad y decisiones cotidianas influyen directamente en la calidad de vida de sus mascotas y en el impacto ambiental y social que genera su cuidado.


</template>

<script>
export default {
  name: 'Introduccion',
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
