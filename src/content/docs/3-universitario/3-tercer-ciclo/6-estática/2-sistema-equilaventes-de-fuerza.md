---
title: "Sistemas Equivalentes de Fuerzas"
orden: 2
---

# Sistemas Equivalentes de Fuerzas

## 1. Equivalencia y reducción de sistemas de fuerzas concentradas

En el análisis de estructuras y cuerpos rígidos, a menudo resulta conveniente simplificar un sistema complejo de múltiples fuerzas y momentos actuando en diferentes puntos, transformándolo en un sistema más simple pero mecánicamente equivalente.

### Definición y condiciones de sistemas equivalentes de fuerzas

Dos sistemas de fuerzas (y momentos) son **equivalentes** si producen exactamente el mismo efecto externo sobre un cuerpo rígido. Esto significa que ambos sistemas deben satisfacer simultáneamente dos condiciones fundamentales:

1. **Igualdad de la fuerza resultante:** La suma vectorial de todas las fuerzas del primer sistema debe ser igual a la suma vectorial de las fuerzas del segundo sistema:
   
   $$
   \sum \vec{F}_{\text{sistema 1}} = \sum \vec{F}_{\text{sistema 2}} = \vec{R}
   $$

2. **Igualdad del momento resultante:** La suma de los momentos de todas las fuerzas del primer sistema con respecto a cualquier punto arbitrario $O$ debe ser igual a la suma de los momentos del segundo sistema con respecto al mismo punto:
   
   $$
   \sum \vec{M}_{O,\text{sistema 1}} = \sum \vec{M}_{O,\text{sistema 2}} = \vec{M}_R
   $$

La **reducción** de un sistema consiste en desplazar todas las fuerzas a un único punto de referencia $O$, lo que genera una fuerza resultante $\vec{R}$ y un momento de par resultante $\vec{M}_R$ en dicho punto.

---

## 2. Resultante de sistemas de fuerzas puntuales

Dependiendo de la disposición geométrica de las líneas de acción de las fuerzas, los sistemas se pueden clasificar y simplificar de la siguiente manera:

### Sistemas concurrentes
Se presentan cuando las líneas de acción de todas las fuerzas del sistema se intersectan en un único punto común. 
* Como el punto de intersección no genera momento respecto a las fuerzas que pasan por él, el sistema se reduce únicamente a una fuerza resultante:
  
  $$
  \vec{R} = \sum \vec{F}
  $$

* En componentes rectangulares: $R_x = \sum F_x$, $R_y = \sum F_y$, y $R_z = \sum F_z$.

### Sistemas coplanares
Ocurren cuando todas las fuerzas actúan en un mismo plano (por ejemplo, el plano $xy$).
* La resultante se obtiene sumando las componentes escalares en las direcciones ortogonales del plano y el momento resultante perpendicular a dicho plano:
  
  $$
  R_x = \sum F_x, \quad R_y = \sum F_y, \quad M_O = \sum (x F_y - y F_x)
  $$

* El sistema general de fuerzas coplanares puede reducirse a una única fuerza resultante (si $\vec{R} \neq 0$) aplicada a una distancia específica, o bien a un par puro si $\vec{R} = 0$.

### Sistemas de fuerzas paralelas en dos y tres dimensiones
Ocurren cuando las líneas de acción de todas las fuerzas son paralelas entre sí (por ejemplo, orientadas a lo largo del eje $z$).
* **En dos dimensiones (2D):** Las fuerzas son paralelas al eje $y$. La fuerza resultante es la suma algebraica de las magnitudes:
  
  $$
  R = \sum F_y
  $$

  La posición de aplicación $x$ de la fuerza resultante se determina aplicando el principio de momentos (Teorema de Varignon):
  
  $$
  R \cdot x = \sum (x_i \cdot F_i) \implies x = \frac{\sum (x_i \cdot F_i)}{\sum F_i}
  $$

* **En tres dimensiones (3D):** Las fuerzas paralelas se suman algebraicamente para obtener la magnitud de $\vec{R}$, y las coordenadas $(x, y)$ del punto de aplicación de la resultante se calculan mediante las ecuaciones de equilibrio de momentos con respecto a los ejes coordenados:
  
  $$
  x \cdot R = \frac{\sum (y_i \cdot F_i)}{\sum F_i} \quad (\text{según el eje de momento}), \quad \text{etc.}
  $$

---

## 3. Cargas continuas distribuidas

En muchas aplicaciones prácticas de ingeniería, las fuerzas no actúan en puntos discretos, sino que se distribuyen a lo largo de una línea, área o volumen.

### Cargas distribuidas sobre una línea (cargas lineales de intensidad variable)
Se representan comúnmente en vigas sometidas a su propio peso o a presiones uniformes/variables (como la presión del viento o de un fluido en una placa estrecha). La intensidad de la carga $w(x)$ se mide en unidades de fuerza por unidad de longitud ($\text{N/m}$ o $\text{lb/ft}$).

* **Fuerza resultante equivalente ($W$):** Es igual al área bajo la curva de distribución de carga $w(x)$:
  
  $$
  W = \int_{0}^{L} w(x) \, dx
  $$

* **Línea de acción (Centroide de la carga $\bar{x}$):** La fuerza resultante equivalente actúa a través del centroide geométrico de el área de carga:
  
  $$
  \bar{x} = \frac{\int_{0}^{L} x \cdot w(x) \, dx}{\int_{0}^{L} w(x) \, dx}
  $$
  * *Casos comunes:* Para una carga rectangular de altura $w_0$ y longitud $L$, la resultante es $W = w_0 L$ ubicada en $\bar{x} = L/2$. Para una carga triangular de altura máxima $w_0$, la resultante es $W = \frac{1}{2} w_0 L$ ubicada a $\bar{x} = \frac{2}{3}L$ desde el vértice de menor intensidad.

### Cargas distribuidas sobre áreas planas y superficies curvas (presión y empuje)
Cuando un fluido estanco ejerce presión sobre una superficie (como una compuerta hidráulica, un muro de contención o el casco de un barco), la carga actúa sobre un área tridimensional.

* **Presión hidrostática:** Varía linealmente con la profundidad $h$ según la ley fundamental de la hidrostática:
  
  $$
  p = \gamma \cdot h = \rho \cdot g \cdot h
  $$

  Donde $\gamma$ es el peso específico del fluido.

* **Fuerza total de empuje ($F_R$):** Sobre una superficie plana, la fuerza resultante es igual a la presión en el centroide de la área sumergida ($\bar{h}$) multiplicada por el área total $A$:
  
  $$
  F_R = p_c \cdot A = \gamma \cdot \bar{h} \cdot A
  $$

* **Punto de aplicación (Centro de presión):** La fuerza resultante no actúa en el centroide geométrico, sino en un punto inferior llamado **centro de presión** ($y_{cp}$), debido a que la presión aumenta con la profundidad:
  
  $$
  y_{cp} = \bar{y} + \frac{I_{\bar{x}}}{\bar{y} \cdot A}
  $$

  Donde $\bar{y}$ es la distancia al centroide medida desde la superficie libre y $I_{\bar{x}}$ es el momento de inercia de la área con respecto al eje centroidal paralelo a la superficie.