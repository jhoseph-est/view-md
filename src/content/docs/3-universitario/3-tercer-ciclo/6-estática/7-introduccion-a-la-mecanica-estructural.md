---
title: "Introducción a la Mecánica Estructural"
orden: 7
---

# Introducción a la Mecánica Estructural

## 1. Clasificación y análisis de sistemas estructurales planos

La mecánica estructural estudia el comportamiento de las estructuras compuestas por múltiples elementos interconectados bajo la acción de cargas externas, garantizando que permanezcan estáticas y estables.

### Definición y tipología: armaduras articuladas, entramados (bastidores) y máquinas planas

* **Armaduras articuladas (Trusses):** Estructuras formadas exclusivamente por elementos rectos delgados unidos entre sí en sus extremos mediante pasadores lisos (nudos). Las cargas y reacciones se aplican únicamente en los nudos, lo que provoca que cada elemento funcione como un **elemento de dos fuerzas** (sometido puramente a tensión o compresión axial).

* **Entramados o bastidores (Frames):** Estructuras diseñadas para soportar cargas estáticas que contienen al menos un elemento sometido a múltiples fuerzas (elementos de tres o más fuerzas). A diferencia de las armaduras, los entramados son generalmente estacionarios y rígidos.

* **Máquinas (Machines):** Estructuras diseñadas para transmitir o modificar fuerzas o movimientos (por ejemplo, pinzas, gatos hidráulicos o grúas articuladas). Contienen partes móviles y elementos sometidos a múltiples fuerzas, analizándose bajo las leyes de equilibrio estático.

### Determinación de las reacciones externas en apoyos y ligaduras

Antes de realizar cualquier análisis interno en una estructura compuesta, es obligatorio determinar todas las fuerzas de reacción externas en los apoyos de la estructura completa utilizando las ecuaciones globales de equilibrio coplanar ($\sum F_x = 0$, $\sum F_y = 0$, $\sum M_O = 0$).

## 2. Análisis de fuerzas internas en miembros

### Método de los nudos (equilibrio de partículas en nudos)

El **método de los nudos** consiste en aislar cada uno de los nudos de una armadura como una partícula independiente en equilibrio, aplicando las ecuaciones de equilibrio de fuerzas concurrentes en el plano:

$$
\sum F_x = 0, \quad \sum F_y = 0
$$

* **Estrategia de resolución:** Se debe iniciar el análisis en un nudo que contenga como máximo dos incógnitas de fuerza (elementos cuyas fuerzas internas no se conocen). Tradicionalmente se asume que todos los elementos saliendo del nudo están a tensión (tirando del nudo); si el resultado algebraico es positivo, el elemento está en tensión, y si es negativo, se encuentra en compresión.

### Miembros de fuerza nula e identificación preliminar (Zero-force members)

La identificación visual de **miembros de fuerza nula** simplifica drásticamente el cálculo de armaduras sin necesidad de resolver ecuaciones complejas. Se reconocen bajo dos reglas geométricas fundamentales:

1. **Regla de los dos elementos:** Si dos elementos no colineales forman un nudo donde no se aplican cargas externas ni reacciones, ambos elementos son de fuerza nula ($F = 0$).

2. **Regla de los tres elementos colineales:** Si tres elementos concurren en un nudo sin cargas externas, y dos de ellos son perfectamente colineales entre sí, el tercer elemento (el que no es colineal) tiene una fuerza interna nula ($F = 0$).

### Método de las secciones o método de Ritter (equilibrio de secciones cortadas)

Cuando solo se requiere conocer la fuerza interna de unos cuantos elementos específicos en el interior de una armadura grande, el **método de las secciones** es mucho más eficiente que el método de los nudos.

* **Procedimiento analítico:**

  1. Calcular las reacciones externas en los apoyos de toda la armadura.

  2. Imaginar un corte imaginario (línea de sección) que divida la armadura en dos partes separadas, cruzando como máximo tres elementos cuyas fuerzas internas sean desconocidas (asegurándose de que no sean concurrentes en un mismo punto).

  3. Aislar una de las dos porciones resultantes y trazar su diagrama de cuerpo libre, incluyendo las fuerzas externas originales y las fuerzas internas expuestas por el corte.

  4. Plantear las ecuaciones de momento ($\sum M_A = 0$) con respecto a puntos estratégicos de intersección para despejar directamente cada una de las fuerzas internas de manera independiente.