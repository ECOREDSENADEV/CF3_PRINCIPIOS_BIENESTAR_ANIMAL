<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
  
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  
  </template>

<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Tenencia responsable y bienestar animal: principios éticos, normativos y prácticos',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> identificar los conceptos clave sobre comportamiento animal, bienestar, protección legal, manejo responsable y principios éticos en la tenencia de animales de compañía, según la normativa colombiana.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Cuál es uno de los principales objetivos del adiestramiento en animales de compañía?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Complacer al tutor.', esCorrecta: false },
            { id: 'b', texto: 'Dominar al animal.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Facilitar la convivencia y el manejo responsable.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Incrementar la productividad del animal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué ley en Colombia reconoce a los animales como seres sintientes?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Ley 84 de 1989.', esCorrecta: false },
            { id: 'b', texto: 'Ley 1774 de 2016.', esCorrecta: true },
            { id: 'c', texto: 'Ley 1801 de 2016.', esCorrecta: false },
            { id: 'd', texto: 'Ley 2113 de 2017.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué tipo de comunicación utilizan los animales a través de feromonas y secreciones?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Corporal.', esCorrecta: false },
            { id: 'b', texto: 'Vocal.', esCorrecta: false },
            { id: 'c', texto: 'Química.', esCorrecta: true },
            { id: 'd', texto: 'Visual.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Cuál es una manifestación clara de falta de bienestar en animales no convencionales?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Interacción social frecuente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Conductas repetitivas o estereotipias.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Hidratación constante.', esCorrecta: false },
            { id: 'd', texto: 'Vocalización moderada.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué condición debe cumplirse antes de iniciar un entrenamiento especializado?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Evaluación veterinaria previa.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Tener una transportadora adecuada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Contar con una mascota esterilizada.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Adiestramiento básico en obediencia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué entidad colombiana puede imponer sanciones penales por maltrato animal grave?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Inspección de Policía.', esCorrecta: false },
            { id: 'b', texto: 'Secretaría de Salud.', esCorrecta: false },
            {
              id: 'c',
              texto: 'Fiscalía General de la Nación.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'Ministerio de Ambiente.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de los siguientes es un principio del transporte humanitario de animales?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Usar jaulas genéricas.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Permitir movimientos libres en el vehículo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Mantener ventilación suficiente.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Viajar con el animal en el platón del carro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            '¿Cuál es una práctica ilegal en la reproducción de animales de compañía?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Registro y seguimiento de crías.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Venta informal sin control sanitario.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Evaluación veterinaria previa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Planificación reproductiva con controlí control técnico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué comportamiento es un indicador de posible enfermedad en una mascota?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Juego constante.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Apatía o aislamiento persistente.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Alimentación normal.', esCorrecta: false },
            { id: 'd', texto: 'Exploración del entorno.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué es considerado maltrato por omisión según la normativa colombiana?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Visitas frecuentes al veterinario.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Negar atención médica o alimentación adecuada.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Vacunación periódica.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Alojamiento limpio y seguro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'La esterilización es una práctica recomendada para evitar la sobrepoblación y el maltrato animal.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'El entrenamiento es un proceso aplicable a cualquier especie sin restricciones.',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Las mascotas no convencionales requieren condiciones ambientales específicas para su bienestar.',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Las señales vocales en animales siempre indican alegría o satisfacción.',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: true },
            { id: 'b', texto: 'Verdadero.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'La Ley 2455 de 2025 en Colombia fortalece las sanciones frente al maltrato animal.',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Falso.', esCorrecta: false },
            { id: 'b', texto: 'Verdadero.', esCorrecta: true },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
