---
title: "Equilibrio en Tres Dimensiones"
orden: 5
---

# Equilibrio en Tres Dimensiones

## 1. Condiciones generales de equilibrio espacial

El análisis del equilibrio espacial o tridimensional (3D) se vuelve necesario cuando las fuerzas que actúan sobre un cuerpo rígido no se encuentran contenidas en un solo plano, requiriendo el uso completo del álgebra vectorial y sistemas de coordenadas cartesianas $(x, y, z)$.

### Reacciones en apoyos, rótulas, cojinetes y conexiones en tres dimensiones

En el espacio tridimensional, los apoyos restringen tanto traslaciones como rotaciones en diferentes combinaciones, generando fuerzas y pares de reacción:

* **Superficie lisa y rodillo:** Restringen el movimiento únicamente en una dirección perpendicular a la superficie de contacto (1 incógnita de fuerza).
* **Cable flexible o eslabón:** Impide el alejamiento a lo largo de su línea de acción (1 incógnita de fuerza).
* **Rótula esférica (Ball and socket):** Permite la rotación libre en cualquier dirección, pero impide el desplazamiento lineal en las tres direcciones $x, y, z$ (3 incógnitas de fuerza: $R_x, R_y, R_z$).
* **Cojinete liso o chumacera (Journal bearing):** Impide el desplazamiento radial y axial (dependiendo del tipo) y permite la rotación alrededor del eje del cojinete (genera entre 2 y 3 reacciones de fuerza).
* **Empotramiento espacial:** Impide cualquier traslación y cualquier rotación en el espacio, generando tres fuerzas de reacción y tres momentos de par independientes (6 incógnitas: $R_x, R_y, R_z, M_x, M_y, M_z$).

### Formulación escalar y vectorial de las seis ecuaciones de equilibrio en el espacio

Para que un cuerpo rígido tridimensional se encuentre en estado de equilibrio estático completo, deben cumplirse simultáneamente dos condiciones vectoriales fundamentales:

$$
\sum \vec{F} = \vec{0}, \quad \sum \vec{M}_O = \vec{0}
$$

Desarrollando estas expresiones en sus componentes cartesianas, se obtienen las **seis ecuaciones escalares independientes** de equilibrio espacial:

$$
\sum F_x = 0, \quad \sum F_y = 0, \quad \sum F_z = 0
$$

$$
\sum M_x = 0, \quad \sum M_y = 0, \quad \sum M_z = 0
$$

### Técnicas analíticas para la solución de problemas de equilibrio en tres dimensiones

1. **Uso de vectores unitarios:** Expresar las fuerzas espaciales a partir de sus puntos de aplicación inicial y final utilizando vectores de posición normalizados:

   $$
   \vec{F} = F \cdot \left( \frac{\vec{r}_{AB}}{\vert{}\vec{r}_{AB}\vert{}} \right)
   $$

2. **Cálculo sistemático de momentos por determinantes:** Emplear el producto vectorial en forma de determinante para calcular los momentos respecto a un punto $O$ o un eje específico:

   $$
   \sum \vec{M}_O = \sum (\vec{r}_i \times \vec{F}_i) = \sum \begin{vmatrix} \hat{i} & \hat{j} & \hat{k} \\ x_i & y_i & z_i \\ F_{xi} & F_{yi} & F_{zi} \end{vmatrix} = \vec{0}
   $$

3. **Estrategia de selección del polo:** Elegir como punto de referencia para la suma de momentos aquel donde concurra el mayor número de reacciones desconocidas, eliminándolas de las ecuaciones de momento.

## 2. Casos especiales y análisis de vínculos

### Casos especiales de equilibrio: elementos sometidos a dos y tres fuerzas en el espacio

* **Elementos de dos fuerzas (*Two-force members*):** Si un elemento está sometido a fuerzas aplicadas solamente en dos puntos (sin momentos de par acoplados), para que esté en equilibrio, dichas fuerzas deben ser de igual magnitud, colineales y de sentidos opuestos a lo largo de la línea que une ambos puntos de aplicación.
* **Elementos de tres fuerzas (*Three-force members*):** Si un elemento se encuentra en equilibrio bajo la acción de tres fuerzas coplanares o concurrentes, sus líneas de acción deben concurrir en un único punto o ser estrictamente paralelas entre sí.

### Estabilidad y restricción completa de un cuerpo rígido (vínculos propios e impropios)

Para garantizar que un cuerpo rígido no se mueva en el espacio, sus restricciones deben estar dispuestas de forma geométrica adecuada:

* **Vínculos propios:** Las reacciones están distribuidas de manera que impiden efectivamente todas las formas posibles de traslación y rotación libre del cuerpo.
* **Vínculos impropios:** Ocurren cuando, aunque el número total de reacciones coincida con el número de grados de libertad, la geometría de los apoyos hace que sean concurrentes o paralelas en una dirección que permite el giro libre o la inestabilidad (por ejemplo, apoyos dispuestos de forma que las líneas de acción de las reacciones intersecten todas un mismo eje).

### Análisis de grados de libertad, indeterminación estática e hiperestaticidad frente a sistemas isostáticos

* **Sistemas isostáticos:** Son aquellos en los que el número de incógnitas de reacción independientes es exactamente igual al número de ecuaciones de equilibrio disponibles ($n = 6$ en el espacio tridimensional general). Sus ecuaciones se pueden resolver enteramente con los principios de la estática.
* **Sistemas hiperestáticos (indeterminados estáticamente):** Ocurren cuando el número de reacciones de apoyo excede al número de ecuaciones de equilibrio disponibles ($n > 6$). Para resolverlos, es necesario incorporar ecuaciones adicionales basadas en las deformaciones elásticas del material y la compatibilidad geométrica (mecánica de materiales).