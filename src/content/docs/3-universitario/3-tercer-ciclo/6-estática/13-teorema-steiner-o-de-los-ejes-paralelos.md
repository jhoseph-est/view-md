---
title: "Teorema Steiner o de los Ejes Paralelos"
orden: 13
---

# Teorema de Steiner o de los Ejes Paralelos

## 1. Teorema de Steiner y traslación de ejes

El Teorema de los Ejes Paralelos (o Teorema de Steiner) permite determinar el momento o producto de inercia de un área plana con respecto a cualquier eje arbitrario, siempre que dicho eje sea paralelo a un eje centroidal del cual ya se conozca el valor correspondiente.

### Enunciado y formulación analítica del teorema de Steiner

Consideremos un área plana de valor total $A$ cuyo centroide $C$ define un sistema de coordenadas centroidales $(\bar{x}, \bar{y})$. Sea $(x, y)$ un sistema paralelo cuyos orígenes se encuentran desplazados por las distancias $d_x$ y $d_y$, de tal manera que las coordenadas de cualquier punto se relacionan por:

$$
x = \bar{x} + d_x, \quad y = \bar{y} + d_y
$$

#### 1. Para momentos rectangulares de inercia
Sustituyendo la relación de coordenadas en la definición de $I_x$:

$$
I_x = \int y^2 \, dA = \int (\bar{y} + d_y)^2 \, dA = \int \bar{y}^2 \, dA + 2d_y \int \bar{y} \, dA + d_y^2 \int dA
$$

Dado que $\bar{y}$ está medido desde el centroide, el primer momento de área centroidal es idénticamente nulo ($\int \bar{y} \, dA = 0$), obteniendo:

$$
I_x = \bar{I}_x + A d_y^2
$$

De forma análoga para el eje $y$:

$$
I_y = \bar{I}_y + A d_x^2
$$

*Donde:*
* $\bar{I}_x, \bar{I}_y$: Momentos de inercia respecto a los ejes centroidales paralelos.
* $A$: Área de la sección transversal.
* $d_x, d_y$: Distancias perpendiculares entre los ejes centroidales y los ejes paralelos evaluados.

#### 2. Para el momento polar de inercia
Dado que $J_O = I_x + I_y$ y la distancia radial entre el polo centroidal $C$ y el nuevo polo $O$ cumple $d^2 = d_x^2 + d_y^2$:

$$
J_O = \bar{J}_C + A d^2
$$

#### 3. Para el producto de inercia
Sustituyendo las coordenadas en la definición de $I_{xy}$:

$$
I_{xy} = \int x y \, dA = \int (\bar{x} + d_x)(\bar{y} + d_y) \, dA = \int \bar{x}\bar{y} \, dA + d_x \int \bar{y} \, dA + d_y \int \bar{x} \, dA + d_x d_y \int dA
$$

Como ambos primeros momentos de área centroidales son nulos:

$$
I_{xy} = \bar{I}_{xy} + A d_x d_y
$$

*Nota de signos en el producto de inercia:* Las distancias $d_x$ y $d_y$ son coordenadas algebraicas con signo respecto a los ejes centroidales; por ende, el término $A d_x d_y$ puede resultar positivo o negativo.

---

### Aplicación del teorema de Steiner a secciones compuestas complejas

Para determinar las propiedades de inercia de perfiles estructurales combinados (perfiles I, T, L, cajón o uniones soldadas):

1. **Descomposición:** Se divide la sección compleja en $n$ figuras geométricas regulares básicas (rectángulos, triángulos, semicírculos).
2. **Ubicación del centroide global ($\bar{X}, \bar{Y}$):**
   
   $$
   \bar{X} = \frac{\sum_{i=1}^n \bar{x}_i A_i}{\sum_{i=1}^n A_i}, \quad \bar{Y} = \frac{\sum_{i=1}^n \bar{y}_i A_i}{\sum_{i=1}^n A_i}
   $$

3. **Cálculo de distancias a los ejes centroidales globales:**
   
   $$
   d_{xi} = \bar{x}_i - \bar{X}, \quad d_{yi} = \bar{y}_i - \bar{Y}
   $$

4. **Suma tabular aplicando Steiner:**
   
   $$
   I_{X,\text{total}} = \sum_{i=1}^n \left( \bar{I}_{xi} + A_i d_{yi}^2 \right)
   $$
   
   $$
   I_{Y,\text{total}} = \sum_{i=1}^n \left( \bar{I}_{yi} + A_i d_{xi}^2 \right)
   $$
   
   $$
   I_{XY,\text{total}} = \sum_{i=1}^n \left( \bar{I}_{xy,i} + A_i d_{xi} d_{yi} \right)
   $$

---

## 2. Transformación de coordenadas y ejes principales

Cuando una sección no simétrica se somete a flexión asimétrica, se requiere evaluar las propiedades de inercia respecto a ejes rotados un ángulo $\theta$ en sentido antihorario.

### Ecuaciones generales de transformación bajo rotación

Sean $(u, v)$ un par de ejes ortogonales inclinados un ángulo $\theta$ respecto a los ejes originales $(x, y)$. Las coordenadas de cualquier diferencial de área satisfacen:

$$
u = x \cos\theta + y \sin\theta
$$

$$
v = -x \sin\theta + y \cos\theta
$$

Integrando y aplicando identidades trigonométricas de ángulo doble, se obtienen las expresiones analíticas de transformación:

$$
I_u = \frac{I_x + I_y}{2} + \frac{I_x - I_y}{2}\cos(2\theta) - I_{xy}\sin(2\theta)
$$

$$
I_v = \frac{I_x + I_y}{2} - \frac{I_x - I_y}{2}\cos(2\theta) + I_{xy}\sin(2\theta)
$$

$$
I_{uv} = \frac{I_x - I_y}{2}\sin(2\theta) + I_{xy}\cos(2\theta)
$$

*Propiedad invariante:* Al sumar $I_u$ e $I_v$ se evidencia que la suma de los momentos rectangulares es constante e independiente de la orientación angular:

$$
I_u + I_v = I_x + I_y = J_O
$$

---

### Determinación de ejes principales de inercia y cálculo de momentos principales

Los **ejes principales de inercia** son aquellos ejes ortogonales para los cuales el producto de inercia se anula por completo:

$$
I_{uv} = 0
$$

Haciendo cero la ecuación de $I_{uv}$:

$$
\frac{I_x - I_y}{2}\sin(2\theta_p) + I_{xy}\cos(2\theta_p) = 0 \implies \tan(2\theta_p) = -\frac{2I_{xy}}{I_x - I_y}
$$

Esta relación define dos raíces en el intervalo $[0, \pi]$, separadas por $90^\circ$, correspondientes a los dos ejes principales ortogonales.

#### Momentos principales de inercia ($I_{\max}, I_{\min}$)
Sustituyendo $\theta_p$ en las ecuaciones de $I_u$, se obtienen los valores extremos absoluto y relativo:

$$
I_{\max,\min} = \frac{I_x + I_y}{2} \pm \sqrt{\left(\frac{I_x - I_y}{2}\right)^2 + I_{xy}^2}
$$

* **Criterio de simetría:** Si un eje es eje de simetría geométrica de la sección, dicho eje y su perpendicular ortogonal son obligatoriamente ejes principales de inercia.

---

### Representación e interpretación gráfica mediante el Círculo de Mohr

El sistema de ecuaciones de transformación define paramétricamente una circunferencia en el plano coordenado donde el eje horizontal representa el momento de inercia ($I$) y el eje vertical representa el producto de inercia ($I_{xy}$):

$$
\left(I_u - I_{\text{prom}}\right)^2 + I_{uv}^2 = R^2
$$

#### Parámetros del Círculo de Mohr:
* **Centro ($C$):**
  
  $$
  C = \left( \frac{I_x + I_y}{2}, \, 0 \right)
  $$

* **Radio ($R$):**
  
  $$
  R = \sqrt{\left(\frac{I_x - I_y}{2}\right)^2 + I_{xy}^2}
  $$

#### Procedimiento de construcción y uso:
1. Se localiza el punto de referencia $X(I_x, I_{xy})$ y el punto $Y(I_y, -I_{xy})$.
2. El segmento que une $X$ e $Y$ pasa a través del centro $C$ sobre el eje horizontal y define el diámetro del círculo.
3. Las intersecciones del círculo con el eje horizontal ($I_{uv} = 0$) determinan de manera directa los valores de los **momentos principales de inercia** ($I_{\max} = C + R$ e $I_{\min} = C - R$).
4. Una rotación física de $\theta$ en la sección transversal real equivale a una rotación de $2\theta$ en el mismo sentido dentro del Círculo de Mohr.