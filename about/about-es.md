Inicié este proyecto como parte de una serie de proyectos que quiero hacer a lo largo del año, iniciando por proyectos que trabajen puramente con vanilla Javascript para ir avanzando a proyectos con distintas librerías.

Algo que me ha interesado mucho siempre han sido las API de HTML5, y quise empezar por una sencilla; en mis años de experiencia me he dado cuenta que muchas veces las cosas masa sencillas son las que nos golpean en la cara con mucha más fuerza, porque las damos por sentadas pero, o bien nuestra base no es tan buena como pensamos, o está oxidada o simplemente estamos muy desactualizados, por eso decidí empezar con la Media API de HTML5.

---

## ¿De qué trata el proyecto, cuál es la meta?

El proyecto es bastante sencillo en su base, es un reproductor de vídeo en HTML5 en el que se deben crear todos los elementos de reproducción desde cero. La idea está en hacerlo del modo más profesional posible, esto implica pasar por todo el proceso creativo y técnico que se espera de un desarrollador experimentado, la meta es aprender y reforzar conceptos más que solo herramientas.

Hay que pensar en qué tecnologías usar, pensar en todo lo que se espera del reproductor, pensar en qué arquitectura utilizar y en hacer que el código sea de verdad legible y entendible por otros. Esa es la meta final, demostrar que se puede hacer algo simple, de forma muy robusta y extensible.

El plan a largo plazo es crear un proyecto base al cual poder volver en un tiempo, cuando se me haya olvidado todo lo que hice y ver si puedo no solo retomarlo sino actualizarlo y extenderlo.

## ¿Cuáles tecnologías usé y por qué?

**Vite**, para empezar y por la sencilla razón de que poco a poco se está convirtiendo en el nuevo estándar de la industria. La realidad es que es una herramienta increíblemente eficiente y rápida tanto en tiempo de procesamiento como en tiempo de implementación, una de las cuestiones más importantes que suelen pasarse por alto. ¿Por qué no WebPack? Pues la verdad es que tampoco habría sido mala idea pero WebPack suele ser más engorroso de configurar y mantener, y el building de assets suele ser bastante lento, eso y que recordando, una de las principales ideas de este pequeño proyecto es aprender a usar nuevas tecnologías basándose en estándares.

**TypeScript** es la segunda piedra fundacional del proyecto, e implementarlo con Vite es muy sencillo. La razón principal para utilizarlo además de aprender más al respecto radica en que realmente puedes crear un código muy limpio y explicativo, la industria y el Frontend sobre todo hoy día lo usan, así que me pareció una gran adición al proyecto.

Y no mucho más, cuando pensaba en si podría agregar qué o cual cosa me di cuenta de que realmente Javascript ya me provee todo lo que necesito para este proyecto, y solo esas dos herramientas antes mencionadas me darían todo lo necesario para trabajar y lograr el objetivo.

---

## ¡Features!

Ok perfecto, sabiendo que tecnologías iba a utilizar era momento de planear todo. Realmente el límite es la imaginación, pero antes de correr hay que caminar y antes de eso gatear.

- El vídeo debe poder pausar y empezar.
- Se debe poder subir y bajar el volumen.
- Se debe poder mutear por completo el video.
- Se debe ver una barra de progreso a medida que pase el tiempo.
- Se debe poder adelantar o retrasar la reproducción con un click en la barra.
- Se debe poder adelantar o retrasar el video 10 segundos con dos botones.

Eso sería lo mínimo necesario para tener una experiencia decente con un reproductor de video, ahora bien hay muchas más cosas que se pueden hacer.

Luego de determinar esa base, pensé en que podía agregarle, y vaya que encontré cosas…

---

## El valor de pensar sin restricciones y la inspiración en otros

La realidad es que la parte fácil fue definir todo lo que antes mencioné, pero luego simplemente ya no sabía qué hacer, ¿Y ahora? Me pregunté, y simplemente tomé una libreta y empecé a escribir ideas al aire; luego de un tiempo empecé a observar youtube, el reproductor de youtube… tiene cosas muy interesantes, y creé una bitácora con ideas que luego simplemente google con preguntas tontas del tipo “cómo hago esto”.

Y rápidamente terminé con un grupo de ideas para “Pluggear” el reproductor.

- Debe poder ponerse en pantalla completa.
- Debe tener manejo por teclas.
- Debe pausar automáticamente si cambias de pestaña.
- Debe pausar automáticamente si haces mucho scroll hacia abajo y pierdes visibilidad en la página.
- Debe poder adelantarse o retrasarse su reproducción desde la barra de progreso.

Fueron las cinco cosas que se me ocurrieron solo viendo. Pensé en más features pero varias de ellas, como por ejemplo poder activar y desactivar las opciones de auto-play y pause requerían ya modelos de reactividad y re-renderizado que son triviales con cosas como React pero en vanilla JS no lo son tanto y no creí que fuese conveniente aplicarlas en este preciso proyecto.

---

## El tema didáctico, más allá de mí mismo.

Ésta es otra de las cuestiones más importantes al respecto en mi caso dado que en mi empresa tengo a mi cargo a varios desarrolladores de Mid level y Junior a quienes mentoreo, por lo cual el hecho de hacer este tipo de proyectos es muy útil. Hace poco antes de publicar todo le pedí a mis mentees que clonaran el repositorio y lo echaran a correr (sin darles instrucciones de como) y les impuse un pequeño reto (uno ya resuelto de forma local por mi): habilitar un botón full-screen en el reproductor.

Esto sirve para varios propósitos, el primero y creo que más importante es evaluar ciertas capacidades de mis pupilos, ya que para implementar el botón de fullscreen primero tienen que hacer correr el proyecto y leer el código.

Lo segundo viene relacionado a mí mismo, y es saber si el código que hice es de hecho accesible y legible para personas con un nivel medio e iniciado en la programación, si mi código puede ser leído fácilmente (y extendido) por desarrolladores de distintos niveles, entonces quiere decir que está bien hecho.

Pienso escribir sobre el proceso de enseñar a mis mentees en otra entrada, por lo tanto no me extenderé mucho aquí.
