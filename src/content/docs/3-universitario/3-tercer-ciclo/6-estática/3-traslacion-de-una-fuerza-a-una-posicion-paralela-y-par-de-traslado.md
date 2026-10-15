---
title: "Traslación de una Fuerza a una Posición Paralela y Par de Traslado"
orden: 3
---

# Traslación de una Fuerza a una Posición Paralela y Par de Traslado

## 1. Reducción general a sistema fuerza-par

En la mecánica de cuerpos rígidos, frecuentemente es necesario simplificar un sistema complejo de fuerzas y momentos que actúan sobre un sólido tridimensional y trasladarlos a un punto de referencia común $O$.

### Traslación de una fuerza a una línea de acción paralela y generación del par de traslado

Si se tiene una fuerza $\vec{F}$ que actúa en un punto $A$ y se desea trasladar su efecto equivalente a un nuevo punto $O$, no es suficiente con simplemente mover el vector a lo largo de su línea de acción (principio de transmisibilidad). Si se cambia la línea de acción a una paralela que pasa por $O$, se altera el momento con respecto a dicho punto.

Para mantener la equivalencia mecánica, la traslación de una fuerza $\vec{F}$ del punto $A$ al punto $O$ requiere añadir un **par de traslado** ($\vec{M}_t$) equivalente al momento que la fuerza original producía respecto a $O$:

$$
\vec{M}_t = \vec{r}_{A/O} \times \vec{F}
$$

Donde $\vec{r}_{A/O}$ es el vector posición desde el punto de referencia $O$ hasta el punto original de aplicación $A$.

### Caso general de reducción de sistemas tridimensionales: fuerza resultante y par resultante en un punto de referencia

Dado un sistema arbitrario de $n$ fuerzas $\vec{F}_1, \vec{F}_2, \dots, \vec{F}_n$ que actúan en los puntos $A_1, A_2, \dots, A_n$, el sistema completo puede reducirse a un **sistema equivalente fuerza-par** en cualquier punto arbitrario $O$:

1. **Fuerza resultante ($\vec{R}$):** Es la suma vectorial de todas las fuerzas del sistema, independiente del punto de reducción:

   $$
   \vec{R} = \sum_{i=1}^{n} \vec{F}_i
   $$

2. **Par resultante ($\vec{M}_O$):** Es la suma de los momentos de todas las fuerzas con respecto al punto de referencia $O$, sumados al momento de los pares libres originales ($\vec{C}_j$) si los hubiera:

   $$
   \vec{M}_O = \sum_{i=1}^{n} (\vec{r}_{i} \times \vec{F}_i) + \sum_{j=1}^{m} \vec{C}_j
   $$

Este par $\vec{M}_O$ junto con la fuerza resultante $\vec{R}$ constituyen la **reducción general** del sistema en el polo $O$.

## 2. Casos particulares de reducción y torsor central

Dependiendo de las características vectoriales de la reducción general $(\vec{R}, \vec{M}_O)$, el sistema puede simplificarse aún más bajo ciertas condiciones geométricas.

### Reducción de un sistema a una fuerza única

Un sistema general se puede reducir a una **única fuerza resultante** (eliminando por completo el par resultante) si y solo si la fuerza resultante $\vec{R}$ y el par resultante $\vec{M}_O$ son vectores **perpendiculares** entre sí. Es decir, su producto escalar debe ser estrictamente cero:

$$
\vec{R} \cdot \vec{M}_O = 0
$$

Cuando esta condición se cumple, existe una línea de acción específica en el espacio donde el momento de la fuerza respecto a cualquier punto de dicha línea es nulo, permitiendo que todo el sistema se reemplace por una sola fuerza $\vec{R}$.

### Reducción al eje central y torsor de Poinsot (wrench)

Cuando $\vec{R}$ y $\vec{M}_O$ **no son perpendiculares** ($\vec{R} \cdot \vec{M}_O \neq 0$), el sistema no puede reducirse a una fuerza única. En este caso, el teorema de Poinsot establece que cualquier sistema de fuerzas tridimensionales puede reducirse a una fuerza $\vec{R}$ y un par $\vec{M}_L$ que son **paralelos** entre sí a lo largo de un eje espacial único conocido como el **eje central** (o *central axis*).

* **Determinación del par mínimo ($\vec{M}_{\min}$):**
  El componente del par que es paralelo a la fuerza resultante representa el valor mínimo posible del par para cualquier punto del espacio. Se calcula proyectando el par resultante de cualquier polo $O$ sobre la dirección de la fuerza resultante:
  
  $$
  M_{\min} = \frac{\vec{R} \cdot \vec{M}_O}{\vert{}\vec{R}\vert{}}
  $$

* **Paso o avance del torsor ($p$):**
  El paso del torsor (*wrench pitch*) es una magnitud escalar característica que relaciona el par paralelo con la fuerza resultante:
  
  $$
  p = \frac{\vec{R} \cdot \vec{M}_O}{\vert{}\vec{R}\vert{}^2}
  $$

* **Deducción y cálculo de la ecuación vectorial y paramétrica del eje central:**
  El eje central es el lugar geométrico de los puntos $P(x, y, z)$ donde el vector momento es paralelo a la fuerza resultante. Satisface la condición vectorial:
  
  $$
  \vec{M}_P = p \cdot \vec{R}
  $$
  
  Sabemos que el momento en cualquier punto genérico $P$ relacionado con el polo $O$ se rige por la ley de cambio de polo:
  
  $$
  \vec{M}_P = \vec{M}_O + \vec{r}_{O/P} \times \vec{R}
  $$
  
  Sustituyendo $\vec{M}_P = p\vec{R}$, se obtiene la ecuación vectorial implícita del eje central:
  
  $$
  \vec{r} \times \vec{R} = \vec{M}_O - p\vec{R}
  $$
  
  Desarrollando esta ecuación en componentes cartesianas $\vec{R} = R_x\hat{i} + R_y\hat{j} + R_z\hat{k}$ y $\vec{M}_O = M_{ox}\hat{i} + M_{oy}\hat{j} + M_{oz}\hat{k}$, se obtienen las **ecuaciones paramétricas** del eje central en función de las coordenadas espaciales $(x, y, z)$, permitiendo trazar exactamente la línea en la cual el sistema ejerce su efecto combinado de fuerza y torsión pura.