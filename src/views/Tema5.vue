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
