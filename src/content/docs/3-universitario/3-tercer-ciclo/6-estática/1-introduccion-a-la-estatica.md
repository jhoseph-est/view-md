---
title: "Introducción a estática"
orden: 1
---

# Introducción a estática

## 1. Introducción: Fundamentos y herramientas vectoriales en estática

La estática es la rama de la mecánica clásica que estudia las condiciones de reposo o equilibrio mecánico de los cuerpos bajo la acción de fuerzas. Dentro de la física y la ingeniería, se ubica como una subdisciplina fundamental de la mecánica de sólidos rígidos, sirviendo de base para el diseño estructural, el análisis de máquinas y la resistencia de materiales.

### 1.1 Principios fundamentales de la estática y ubicación del curso en la mecánica clásica

La mecánica clásica se divide principalmente en:
*   **Estática:** Estudio de sistemas en equilibrio (donde la aceleración es nula, $\sum \vec{F} = 0$ y $\sum \vec{M} = 0$).
*   **Dinámica:** Estudio de cuerpos en movimiento acelerado (cinemática y cinética).

Los pilares de la estática descansan sobre las Leyes de Newton, en particular la primera ley (inercia) y la tercera ley (acción y reacción), así como en el principio de transmisibilidad, que establece que el estado de movimiento o de reposo de un cuerpo rígido no se altera si una fuerza que actúa sobre él se desliza a lo largo de su línea de acción.

---

### 1.2 Repaso de álgebra vectorial aplicada

Las cantidades físicas en estática se dividen en escalares (magnitudes con valor numérico y unidad, como masa o temperatura) y vectoriales (magnitudes que requieren magnitud, dirección y sentido, como fuerza, velocidad y momento).

*   **Operaciones vectoriales básicas:** 
    *   Suma y resta de vectores por componentes cartesianas: $\vec{A} = A_x\hat{i} + A_y\hat{j} + A_z\hat{k}$.
    *   Multiplicación por un escalar.
*   **Producto escalar (o producto punto):** 
    Permite encontrar el ángulo $\theta$ entre dos vectores o la proyección de un vector sobre otro. Se define como:
    $$\vec{A} \cdot \vec{B} = |\vec{A}| |\vec{B}| \cos\theta = A_x B_x + A_y B_y + A_z B_z$$
*   **Producto vectorial (o producto cruz):** 
    Utilizado ampliamente para calcular momentos y torques. Genera un vector perpendicular al plano formado por los vectores operados:
    $$\vec{A} \times \vec{B} = \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ A_x & A_y & A_z \\ B_x & B_y & B_z \end{vmatrix}$$
    Su magnitud es $|\vec{A} \times \vec{B}| = |\vec{A}| |\vec{B}| \sin\theta$.

---

## 2. Momento y sistemas de par

### 2.1 Momento central o momento de una fuerza respecto a un punto

El momento ($\vec{M}_O$) mide la capacidad de una fuerza para hacer girar un cuerpo rígido alrededor de un punto o eje de giro.

*   **En el plano (2D):** Se calcula como el producto de la magnitud de la fuerza por la distancia perpendicular ($d$) desde el punto de giro hasta la línea de acción de la fuerza:
    $$M_O = F \cdot d$$
*   **En el espacio (3D):** Se calcula mediante el producto vectorial del vector posición $\vec{r}$ (desde el punto de aplicación hasta el punto de referencia $O$) y la fuerza $\vec{F}$:
    $$\vec{M}_O = \vec{r} \times \vec{F}$$

---

### 2.2 Teorema de Varignon y principio de momentos

El **Teorema de Varignon** establece que el momento de una fuerza con respecto a un punto es igual a la suma de los momentos de sus componentes rectangulares (o cualquier descomposición de la fuerza) con respecto al mismo punto:
$$\vec{M}_O = \vec{r} \times (\vec{F}_1 + \vec{F}_2) = (\vec{r} \times \vec{F}_1) + (\vec{r} \times \vec{F}_2)$$
Este principio simplifica drásticamente el cálculo de momentos en sistemas complejos al descomponer fuerzas difíciles en componentes más manejables.

---

### 2.3 Momento áxico: momento de una fuerza con respecto a un eje específico

Cuando se requiere analizar la tendencia de rotación alrededor de una línea recta o eje específico en el espacio tridimensional (por ejemplo, el eje de una bisagra), se emplea el **momento axial** o momento con respecto a un eje. 

Se calcula proyectando el vector momento $\vec{M}_O$ sobre el vector unitario $\vec{u}$ que define el eje mediante un producto escalar triple:
$$M_u = \vec{u} \cdot (\vec{r} \times \vec{F})$$

---

### 2.4 Par de fuerzas (torque)

Un **par de fuerzas** (o simplemente par) se define como un sistema formado por dos fuerzas paralelas, de igual magnitud, de sentidos opuestos y cuyas líneas de acción no coinciden.

*   **Propiedades:**
    *   No producen movimiento de traslación neto, ya que la resultante de las fuerzas es cero ($\sum \vec{F} = 0$).
    *   Producen exclusivamente un efecto de rotación puro.
*   **Invariancia del momento:** 
    El momento de un par es independiente del punto de referencia escogido; su valor es constante en todo el espacio y depende únicamente de la magnitud de las fuerzas y de la distancia perpendicular entre sus líneas de acción ($d$):
    $$M = F \cdot d$$