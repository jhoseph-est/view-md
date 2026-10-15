---
title: "Equilibrio en Dos Dimensiones"
orden: 4
---

# Equilibrio en Dos Dimensiones

## 1. Principios y modelado del equilibrio coplanar

El estudio del equilibrio estático en dos dimensiones (coplanares) constituye una de las aplicaciones más importantes de la mecánica de cuerpos rígidos, permitiendo analizar estructuras sometidas a fuerzas que actúan en un mismo plano.

### Definición física de equilibrio estático frente a equilibrio dinámico

* **Equilibrio estático:** Un cuerpo se encuentra en equilibrio estático cuando tanto su aceleración lineal como su aceleración angular son exactamente nulas con respecto a un sistema de referencia inercial. Esto implica que el cuerpo se encuentra en reposo o con velocidad constante, siendo el reposo absoluto el caso de estudio principal de la estática.
* **Equilibrio dinámico:** Ocurre cuando el cuerpo experimenta movimiento acelerado, requiriendo la aplicación de las leyes de la cinética (Segunda Ley de Newton, $\sum \vec{F} = m\vec{a}$) donde las fuerzas de inercia entran en juego. En estática, la aceleración es cero, por lo que las ecuaciones se reducen a sumatorias nulas.

### Construcción y análisis riguroso del diagrama de cuerpo libre (DCL)

El **Diagrama de Cuerpo Libre (DCL)** es la herramienta gráfica y analítica más crítica para resolver problemas de estática. Consiste en aislar un cuerpo (o un sistema de cuerpos) de su entorno y representar todas las fuerzas externas, pesos, momentos aplicados y reacciones que actúan sobre él.

*Pasos para construir un DCL riguroso:*
1. **Aislamiento:** Separar el cuerpo u objeto de interés de sus soportes, conexiones y cuerpos circundantes.
2. **Representación de dimensiones y geometría:** Indicar claramente los ángulos, cotas y puntos de aplicación de las fuerzas.
3. **Identificación de fuerzas activas:** Dibujar las fuerzas conocidas, tales como cargas aplicadas, fuerzas electromagnéticas y la fuerza de gravedad (peso) actuando directamente sobre el centro de gravedad del cuerpo.
4. **Sustitución de restricciones por reacciones:** Reemplazar cada apoyo, cable o conexión por las fuerzas o pares de reacción correspondientes que impiden el movimiento del cuerpo.

## 2. Condiciones de equilibrio y sustentación plana

### Tipos de apoyos, enlaces y conexiones en dos dimensiones y modelado de sus reacciones

Dependiendo del grado de restricción al movimiento que imponga un vínculo mecánico en el plano ($xy$), este generará un número específico de reacciones incógnitas:

* **Cable flexible o eslabón:** Impide el movimiento alejándose del punto de conexión. Genera una sola fuerza desconocida dirigida a lo largo del cable o eslabón (1 incógnita).
* **Apoyo simple, superficie lisa o rodillo:** Impide el movimiento en una dirección perpendicular a la superficie de contacto. Genera una fuerza de reacción perpendicular a la superficie (1 incógnita).
* **Articulación o pasador liso (Pin):** Impide tanto el desplazamiento horizontal como el vertical, pero permite la libre rotación. Genera dos componentes de reacción rectangulares independientes ($R_x$ y $R_y$, 2 incógnitas).
* **Empotramiento o empotrado fijo:** Impide cualquier tipo de desplazamiento (horizontal y vertical) así como la rotación. Genera dos fuerzas de reacción y un momento de par resistente ($R_x$, $R_y$ y $M$, 3 incógnitas).

### Ecuaciones fundamentales de equilibrio coplanar

Para que un cuerpo rígido sometido a un sistema de fuerzas coplanares permanezca en equilibrio estático, se deben satisfacer simultáneamente tres ecuaciones escalares independientes:

$$
\sum F_x = 0, \quad \sum F_y = 0, \quad \sum M_O = 0
$$

* **Formas alternativas de las ecuaciones de equilibrio:**
  Aunque el conjunto anterior es el más común, se pueden utilizar sistemas alternativos de ecuaciones siempre y cuando no se vuelvan dependientes linealmente:
  1. $\sum F_x = 0$, $\sum M_A = 0$, $\sum M_B = 0$ (donde la línea que une $A$ y $B$ no es perpendicular al eje $x$).
  2. $\sum M_A = 0$, $\sum M_B = 0$, $\sum M_C = 0$ (donde los puntos $A$, $B$ y $C$ no son colineales).

### Técnicas, estrategias analíticas y resolución sistemática de problemas en 2D

Para abordar con éxito cualquier problema de equilibrio en dos dimensiones, se recomienda seguir una metodología estructurada:

1. **Planteamiento inicial:** Leer detenidamente el enunciado e identificar claramente qué se busca (reacciones en apoyos, fuerzas en elementos internos, etc.).
2. **Selección del sistema:** Decidir si se analiza el cuerpo completo o si es necesario seccionarlo (como en armaduras o estructuras compuestas).
3. **Elaboración del DCL:** Dibujar el diagrama de cuerpo libre con extremo cuidado, asegurándose de no omitir ninguna fuerza ni reacción.
4. **Aplicación estratégica de momentos:** Iniciar planteando la suma de momentos respecto a un punto estratégico (preferiblemente donde concurran dos incógnitas), lo que permite eliminar dichas variables y despejar directamente otra incógnita.
5. **Comprobación dimensional y de signos:** Utilizar las sumatorias de fuerzas restantes ($\sum F_x = 0$ y $\sum F_y = 0$) para verificar los resultados y asegurar la coherencia estática del sistema.