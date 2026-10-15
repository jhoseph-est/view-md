---
title: "Estructuras Espaciales"
orden: 8
---

# Estructuras Espaciales

## 1. Armaduras y entramados tridimensionales

Las estructuras espaciales permiten soportar cargas tridimensionales complejas distribuidas en el espacio, requiriendo un análisis vectorial riguroso para determinar el equilibrio y los esfuerzos internos de sus componentes.

### Armaduras espaciales: definición de celosías tridimensionales y tetraedros básicos

* **Armadura espacial (Celosía tridimensional):** Es una estructura reticular tridimensional compuesta por elementos rectos unidos mediante rótulas o pasadores esféricos en sus nudos, de tal manera que soporta cargas espaciales aplicadas exclusivamente en los nudos.

* **Tetraedro básico:** La unidad estructural indeformable más simple en el espacio tridimensional es el tetraedro, el cual está compuesto por 4 nudos unidos entre sí por 6 elementos. A partir de este módulo fundamental básico, se pueden construir armaduras espaciales estables añadiendo tres nuevos elementos y un nudo adicional de manera sucesiva (relación de estabilidad isostática: $m = 3n - 6$, donde $m$ es el número de elementos y $n$ es el número de nudos).

### Determinación de esfuerzos en miembros mediante el método de los nudos espaciales y el método de las secciones espaciales

* **Método de los nudos espaciales:**
  Consiste en aislar cada nudo como una partícula en el espacio tridimensional y plantear las tres ecuaciones de equilibrio vectorial o escalar para fuerzas concurrentes:

  $$
  \sum F_x = 0, \quad \sum F_y = 0, \quad \sum F_z = 0
  $$
  
  Dado que un nudo espacial solo proporciona tres ecuaciones independientes, es conveniente iniciar el análisis en nudos donde converjan como máximo tres elementos cuyas fuerzas sean desconocidas. Las fuerzas internas se expresan utilizando vectores unitarios basados en la geometría espacial de cada barra.

* **Método de las secciones espaciales:**
  Se emplea cuando se requiere calcular los esfuerzos internos de elementos específicos sin resolver toda la armadura. Se realiza un corte imaginario a través de la armadura espacial y se plantean las **seis ecuaciones generales de equilibrio espacial** ($\sum \vec{F} = 0$ y $\sum \vec{M}_O = 0$) para una de las porciones aisladas.

### Entramados tridimensionales y miembros con múltiples fuerzas en el espacio

A diferencia de las armaduras (donde cada barra es un elemento de dos fuerzas), los **entramados espaciales** contienen elementos rígidos sometidos a múltiples fuerzas y pares de momentos tridimensionales. Para su análisis se requiere:

1. Desarticular el sistema y aislar cada miembro individualmente.
2. Plantear el diagrama de cuerpo libre (DCL) completo para cada elemento, respetando la tercera ley de Newton en las conexiones compartidas.
3. Resolver el sistema de ecuaciones acopladas aplicando las seis condiciones de equilibrio espacial por cada elemento rígido.

## 2. Mecanismos espaciales y práctica

### Análisis de equilibrio y transmisión de esfuerzos en máquinas en el espacio

Las máquinas espaciales son estructuras móviles diseñadas para modificar o transmitir fuerzas en tres dimensiones (como mecanismos de dirección, brazos robóticos o articulaciones mecánicas industriales). 

* Su análisis estático se aborda considerando que, aunque transmiten movimiento, se encuentran en una posición de equilibrio instantáneo bajo la acción de las cargas aplicadas y las reacciones en sus soportes.
* Se desensamblan los componentes móviles y se estudian las fuerzas de interacción en las uniones mecánicas (chumaceras, rótulas, pasadores cilíndricos y guías espaciales).

### Problemas y ejercicios integrales de estructuras espaciales

La resolución integral de problemas de estructuras espaciales consolida todos los conceptos previos del curso:
* Uso de álgebra vectorial avanzada (productos cruz y punto).
* Planteamiento matricial o algebraico de sistemas de ecuaciones simultáneas para resolver las incógnitas de reacción y fuerzas internas.
* Verificación de la rigidez geométrica y ausencia de mecanismos internos de movimiento libre.