/* ============================================================
   ARCHIVO DE CONFIGURACIÓN — Acordes
   ============================================================
   Edita los valores de abajo para personalizar la aplicación.
   Este archivo se carga antes que la app; guarda y recarga la
   página para ver los cambios.
   ============================================================ */

window.APP_CONFIG = {

  /* ---- NOMBRE DE LA APLICACIÓN ----
     Texto que aparece en la pantalla de inicio y en el PDF. */
  appName: 'Musigatari',

  /* ---- SUBTÍTULO ----
     Texto pequeño debajo del nombre. */
  subtitle: 'Aprendiendo canciones',

  /* ---- NOMBRE COMO IMAGEN SVG (OPCIONAL) ----
     Si quieres usar un logotipo SVG en lugar del texto del
     nombre, pon aquí la ruta (por ejemplo 'config/nombre.svg')
     y se usará en vez del texto. Déjalo en null para usar texto.
     Medida recomendada: 600 × 120 px (se escala a lo ancho). */
  appNameSvgPath: null,

  /* ---- ICONO ----
     Ruta del icono de la pantalla de inicio.
     Formatos: .svg, .png o .jpg
     MEDIDA RECOMENDADA: 256 × 256 píxeles (cuadrado).
     Reemplaza el archivo config/icon.svg por el tuyo, o cambia
     la ruta aquí. */
  iconPath: 'config/icon.svg',

  /* ---- CÓDIGO QR ----
     Imagen SVG del código QR (pantalla de inicio → Código QR).
     MEDIDA RECOMENDADA: cuadrado, mínimo 512 × 512 px.
     Reemplaza config/qr.svg cuando tengas el QR definitivo. */
  qrSvgPath: 'config/qr.svg',

  /* Texto que aparece debajo del código QR. */
  qrText: 'Compartir Musigatari.',

  /* ---- EXPLICACIÓN ----
     Ruta del archivo con la explicación de uso. El botón
     «Ver explicación» de la ayuda abre este archivo. */
  explanationPath: 'config/explicacion.html',

  /* ---- TAMAÑO DE LAS NOTAS (figuras rítmicas) ----
     base:       tamaño en píxeles de negra, blanca, corchea y
                 semicorchea.
     wholeScale: multiplicador SOLO para la redonda
                 (2 = el doble del resto).
     halfScale:  multiplicador SOLO para la blanca
                 (1 = igual que el resto). */
  notes: {
    base: 30,
    wholeScale: 1,
    halfScale: 1,
  },

  /* ---- SONIDOS DEL METRÓNOMO (OPCIONAL) ----
     Si quieres reemplazar el «bip» del metrónomo por archivos
     de audio (.mp3, .wav, .ogg), pon aquí sus rutas.
     accentSoundPath: sonido del PRIMER tiempo del compás.
     clickSoundPath:  sonido del resto de los tiempos.
     Déjalos en null para usar el sonido incorporado. */
  metronome: {
    accentSoundPath: null,
    clickSoundPath: null,
  },
};
