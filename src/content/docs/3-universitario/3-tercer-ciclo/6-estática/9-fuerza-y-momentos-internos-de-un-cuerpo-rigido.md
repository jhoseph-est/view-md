---
title: "Fuerzas y Momentos Internos de un Cuerpo Rígido"
orden: 9
---

# Fuerzas y Momentos Internos de un Cuerpo Rígido

## 1. Tipología de vigas y convenios de signos

Para garantizar la integridad estructural de los elementos sometidos a cargas externas, es indispensable conocer las fuerzas y momentos internos que se desarrollan a lo largo de su sección transversal.

### Definición, función estructural y clasificación de vigas según su sustentación y geometría

Una viga es un elemento estructural diseñado principalmente para soportar cargas transversales a su eje longitudinal. Dependiendo de sus apoyos y condiciones de contorno, se clasifican en:

* **Vigas estáticamente determinadas (isostáticas):**
  * *Viga simplemente apoyada:* Apoyada en un extremo por un pasador (articulación) y en el otro por un rodillo o apoyo simple.
  * *Viga voladiza (cantiliever):* Empotrada firmemente en un extremo y libre en el otro.
  * *Viga con voladizo:* Simplemente apoyada pero que se extiende más allá de uno o ambos apoyos.

* **Vigas estáticamente indeterminadas (hiperestáticas):** Presentan un número de reacciones de apoyo superior al número de ecuaciones de equilibrio estático disponibles (por ejemplo, vigas continuas, empotradas en ambos extremos o empotradas-apoyadas).

### Determinación analítica de esfuerzos seccionales

Mediante el **método de las secciones** (corte imaginario a una distancia $x$ del origen), se expone la resultante de las fuerzas y momentos internos que actúan sobre la sección transversal para mantener el equilibrio de la porción aislada:

1. **Esfuerzo normal o axial ($N$):** Fuerza perpendicular a la sección transversal, causante de tracción o compresión pura.
2. **Fuerza cortante ($V$):** Fuerza resultante contenida en el plano de la sección transversal, que tiende a deslizar una parte del elemento respecto a la otra.
3. **Momento flector ($M$):** Momento de par cuyo vector es perpendicular al eje longitudinal de la viga y paralelo al plano de la sección, causante de la flexión del elemento.
4. **Momento de torsión ($T$):** Momento de par cuyo vector es colineal con el eje longitudinal del elemento, generando torsión.

## 2. Diagramas de solicitaciones internas

### Relaciones diferenciales entre carga distribuida, fuerza cortante y momento flector

Para vigas rectas con cargas transversales coplanares, existen relaciones diferenciales fundamentales que gobiernan el comportamiento de los esfuerzos internos:

* **Relación entre carga y fuerza cortante:**
  La tasa de cambio de la fuerza cortante con respecto a la posición $x$ es igual a menos la intensidad de la carga distribuida $w(x)$:
  
  $$
  \frac{dV}{dx} = -w(x)
  $$

* **Relación entre fuerza cortante y momento flector:**
  La tasa de cambio del momento flector con respecto a la posición $x$ es igual a la fuerza cortante $V(x)$:
  
  $$
  \frac{dM}{dx} = V(x)
  $$

### Elaboración e interpretación de diagramas de fuerza axial, cortante, momento flector y momento torsor

Los diagramas de solicitaciones son representaciones gráficas que muestran la variación de $N$, $V$, $M$ y $T$ a lo largo de toda la longitud del elemento estructural:

1. **Determinación de reacciones:** Calcular todas las fuerzas externas y reacciones en los apoyos de la viga completa.
2. **Definición de tramos:** Dividir la viga en intervalos definidos por los puntos donde se aplican cargas concentradas, reacciones o cambios en la geometría de la carga distribuida.
3. **Funciones de sección:** Aplicar el equilibrio estático en una sección genérica a distancia $x$ de cada tramo para obtener las ecuaciones algebraicas de $V(x)$ y $M(x)$.
4. **Trazado de curvas:** Representar gráficamente los valores máximos, mínimos, nulos y pendientes de acuerdo con las ecuaciones diferenciales (por ejemplo, una carga distribuida lineal genera una cortante parabólica y un momento flector cúbico).

### Fuerzas internas en vigas curvas y elementos de directriz no recta

En elementos estructurales cuya directriz no es una línea recta (como arcos, ganchos de grúa o marcos curvos), las ecuaciones de equilibrio se deben plantear utilizando coordenadas polares o paramétricas, proyectando las fuerzas internas tangencialmente, radialmente y en el plano del momento flector, ya que la curvatura introduce acoplamientos directos entre el esfuerzo normal y el momento flector.