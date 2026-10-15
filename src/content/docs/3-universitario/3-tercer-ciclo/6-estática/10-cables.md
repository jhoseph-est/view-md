---
title: "Cables"
orden: 10
---

# Cables

## 1. Cables flexibles sometidos a diversas cargas

Los cables son elementos estructurales flexibles diseñados para soportar exclusivamente fuerzas de tensión a lo largo de su eje longitudinal. Debido a su flexibilidad, no pueden resistir momentos flectores ni fuerzas de compresión o cortante, adaptando su geometría de manera óptima para transmitir las cargas aplicadas hacia los apoyos.

### Hipótesis fundamentales sobre cables perfectamente flexibles e inextensibles

Para simplificar el modelado analítico de los cables en estática, se establecen las siguientes hipótesis ideales:

1. **Perfectamente flexible:** El cable no ofrece ninguna resistencia a la flexión; por lo tanto, el vector de la fuerza interna en cualquier punto del cable siempre es tangente a su curva directriz.

2. **Inextensible:** La longitud total del cable permanece constante bajo la acción de las cargas (módulo de elasticidad infinito), lo que evita deformaciones elásticas complejas durante el equilibrio estático elemental.

### Análisis de cables sometidos a cargas concentradas discretas

Cuando un cable soporta un conjunto de cargas puntuales $P_1, P_2, \dots, P_n$ en puntos específicos, el cable adopta la forma de una poligonal funicular. 

* **Metodología de resolución:**
  Se aplican las ecuaciones de equilibrio estático ($\sum F_x = 0$, $\sum F_y = 0$, $\sum M_O = 0$) a cada segmento rectilíneo del cable entre cargas consecutivas, considerando que la componente horizontal de la tensión ($T_x = H$) es constante en todo el cable si no existen cargas horizontales aplicadas.

## 2. Modelos continuos de cables

### Cables sometidos a cargas uniformemente distribuidas horizontalmente: cable parabólico

Cuando un cable soporta una carga distribuida cuya intensidad es uniforme con respecto a la proyección horizontal (como el tablero de un puente colgante ligero), la forma geométrica que adopta el cable es una **parábola**.

* **Ecuación de la parábola:**
  Tomando el origen de coordenadas en el punto más bajo (vértice) del cable, la relación entre la altura $y$ y la distancia horizontal $x$ está dada por:
  
  $$
  y = \frac{w_0}{2H} x^2
  $$
  
  Donde $w_0$ es la intensidad de la carga por unidad de longitud horizontal y $H$ es la tensión horizontal constante.

* **Cálculo de tensiones y flechas:**
  La tensión máxima en el cable ocurre en los apoyos y se determina combinando las componentes horizontal y vertical:
  
  $$
  T_{\max} = \sqrt{H^2 + V_{\max}^2}
  $$

### Cables sometidos a su propio peso distribuido a lo largo de su longitud: ecuación de la catenaria y cálculo de tensiones y flechas

Cuando un cable cuelga libremente bajo la acción exclusiva de su propio peso, la carga distribuida es uniforme con respecto a la longitud real del cable (y no a su proyección horizontal). En este caso, la curva geométrica resultante ya no es una parábola, sino una **catenaria**.

* **Ecuación analítica de la catenaria:**
  Utilizando un sistema de coordenadas cartesiano donde el origen se sitúa a una distancia bajo el punto más bajo del cable, la curva se rige por funciones hiperbólicas:
  
  $$
  y = c \cosh\left(\frac{x}{c}\right)
  $$
  
  Donde $c = \frac{H}{w}$ representa el parámetro de catenaria (relación entre la tensión horizontal $H$ y el peso por unidad de longitud $w$).

* **Cálculo de tensiones y flechas:**
  La tensión en cualquier punto del cable es directamente proporcional a su altura vertical medida desde la directriz:
  
  $$
  T = w \cdot y
  $$
  
  La longitud del arco $s$ y la flecha máxima se calculan mediante integrales que involucran funciones seno hiperbólico ($\sinh$), permitiendo dimensionar con precisión la resistencia requerida para cables de alta tensión, líneas de transmisión y puentes colgantes tradicionales.