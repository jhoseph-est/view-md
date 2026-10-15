---
title: "Momentos de Inercia de Áreas"
orden: 12
---

# Momentos de Inercia de Áreas

## 1. Segundo momento de área y parámetros derivados

Los momentos de inercia de áreas (también conocidos como segundos momentos de área) son propiedades geométricas fundamentales que miden la resistencia de una sección transversal a la flexión y a la torsión.

### Definición física y matemática de momentos de inercia de áreas ($I_x, I_y$)

El segundo momento de área se define matemáticamente como la integral del cuadrado de la distancia a un eje multiplicada por el elemento diferencial de área ($dA$). Con respecto a los ejes cartesianos $x$ e $y$ en el plano:

* **Momento de inercia respecto al eje $x$ ($I_x$):**
  
  $$
  I_x = \int y^2 \, dA
  $$

* **Momento de inercia respecto al eje $y$ ($I_y$):**
  
  $$
  I_y = \int x^2 \, dA
  $$

Físicamente, un valor elevado de $I$ indica que gran parte del área de la sección transversal se encuentra alejada del eje de referencia, lo que confiere una mayor rigidez y resistencia ante la flexión.

### Determinación por integración directa en áreas simples y cálculo por descomposición en áreas compuestas

* **Integración directa:** Se selecciona un elemento diferencial de área $dA$ (como una franja horizontal $dA = b(y) dy$ o vertical $dA = h(x) dx$) y se evalúa la integral definida respectiva dentro de los límites de la figura geométrica.

* **Áreas compuestas y Teorema de los Ejes Paralelos (Steiner):**
  Para secciones transversales complejas compuestas de formas estándar, el momento de inercia total respecto a un eje externo se calcula sumando los momentos de inercia individuales de cada subárea trasladados mediante el teorema de Steiner:
  
  $$
  I_x = \bar{I}_x + A d_y^2
  $$
  
  Donde $\bar{I}_x$ es el momento de inercia respecto al eje centroidal de la subárea, $A$ es su área y $d_y$ es la distancia perpendicular entre el eje centroidal y el eje de referencia.

### Momento polar de inercia ($J_O$) y relación con los momentos rectangulares

El **momento polar de inercia** $J_O$ mide la resistencia de un área frente a la torsión con respecto a un polo o eje perpendicular al plano ($z$):

$$
J_O = \int r^2 \, dA = \int (x^2 + y^2) \, dA
$$

Aplicando la propiedad lineal de la integral, se obtiene la relación directa entre el momento polar y los momentos de inercia rectangulares:

$$
J_O = I_x + I_y
$$

### Radio de giro ($k_x, k_y, k_O$)

El **radio de giro** es una distancia geométrica equivalente a la cual se concentraría toda el área para producir el mismo momento de inercia. Se expresa formalmente como:

$$
k_x = \sqrt{\frac{I_x}{A}}, \quad k_y = \sqrt{\frac{I_y}{A}}, \quad k_O = \sqrt{\frac{J_O}{A}}
$$

Este parámetro es ampliamente utilizado en el diseño de columnas y elementos estructurales sometidos a pandeo.

### Producto de inercia de un área ($I_{xy}$): definición, cálculo y significado de la simetría

El **producto de inercia** es un parámetro geométrico mixto definido con respecto a un par de ejes ortogonales:

$$
I_{xy} = \int x y \, dA
$$

* **Significado de la simetría:** Si una sección transversal posee al menos **un eje de simetría** respecto a los ejes coordenados (ya sea paralelo al eje $x$ o al eje $y$), el producto de inercia con respecto a dichos ejes centroidales es **estrictamente cero** ($I_{xy} = 0$). Esta propiedad simplifica notablemente el cálculo de los ejes principales de inercia.