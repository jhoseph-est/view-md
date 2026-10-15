---
title: "Trabajo Virtual"
orden: 15
---

# Trabajo Virtual

## 1. Principio del trabajo virtual y equilibrio

El método del trabajo virtual constituye una formulación alternativa y analítica a la estática vectorial newtoniana. En lugar de estudiar el equilibrio mediante el balance explícito de fuerzas y momentos en diagramas de cuerpo libre separados, el método evalúa las variaciones energéticas del sistema frente a pequeños desplazamientos hipotéticos compatibles con sus restricciones.

### Concepto de desplazamiento virtual, trabajo virtual ($\delta U$) y ligaduras o restricciones ideales

* **Desplazamiento virtual ($\delta \vec{r}$, $\delta \theta$):**
  Es un cambio diferencial puramente imaginario o hipotético en la posición o configuración de un sistema, que ocurre en un instante de tiempo fijo ($\delta t = 0$). Debe ser compatible con las restricciones cinemáticas impuestas por los enlaces y apoyos del sistema. A diferencia del diferencial real de trayectoria ($d\vec{r}$), no implica el paso del tiempo ni la existencia de una velocidad real.

* **Trabajo virtual ($\delta U$):**
  Es el trabajo escalar desarrollado por una fuerza $\vec{F}$ o un momento de par $\vec{M}$ al actuar a lo largo de un desplazamiento virtual lineal $\delta \vec{r}$ o angular $\delta \vec{\theta}$:

  $$
  \delta U = \vec{F} \cdot \delta \vec{r} + \vec{M} \cdot \delta \vec{\theta}
  $$

  En coordenadas cartesianas bidimensionales:

  $$
  \delta U = F_x \delta x + F_y \delta y + M \delta \theta
  $$

* **Ligaduras o restricciones ideales:**
  Son conexiones cinemáticas donde las fuerzas de reacción internas o de sustentación no realizan trabajo virtual total cuando el sistema experimenta desplazamientos virtuales compatibles con dichas ligaduras. Ejemplos clásicos incluyen:
  * Apoyos fijos, articulaciones lisas y pernos sin fricción.
  * Rodillos sobre superficies lisas (la fuerza normal es ortogonal al vector $\delta \vec{r}$).
  * Cables inextensibles y barras rígidas en articulaciones internas (las fuerzas de acción y reacción son colineales y opuestas, cancelándose sus aportes: $\delta U_{\text{int}} = 0$).
  * Rodadura pura sin deslizamiento (el punto de contacto instantáneo tiene velocidad nula).

### Principio del trabajo virtual para un cuerpo rígido y sistemas de cuerpos rígidos interconectados

El principio fundamental establece que:

> **Condición de equilibrio:** Un cuerpo rígido o un sistema de cuerpos rígidos interconectados con ligaduras ideales se encuentra en equilibrio estático si y solo si el trabajo virtual total realizado por todas las fuerzas y momentos externos activos es igual a cero para cualquier desplazamiento virtual admisible:

$$
\delta U = \sum \vec{F}_i \cdot \delta \vec{r}_i + \sum \vec{M}_j \cdot \delta \vec{\theta}_j = 0
$$

La principal ventaja metodológica de este principio es que elimina de forma automática todas las fuerzas de enlace internas y reacciones de apoyos ideales del análisis algebraico, concentrándose únicamente en las fuerzas aplicadas que realmente producen trabajo.

---

## 2. Métodos energéticos y estabilidad

### Método de los desplazamientos virtuales para la determinación de fuerzas de equilibrio y reacciones

Para determinar una fuerza incógnita o una reacción específica utilizando el método de los desplazamientos virtuales:

1. **Definición de coordenadas generalizadas ($q$):**
   Se identifica el número de grados de libertad (GDL) del sistema y se elige una coordenada angular o lineal conveniente (por ejemplo, un ángulo $\theta$ o una posición $x$).

2. **Expresión cinemática de posiciones:**
   Se determinan las posiciones vectoriales $\vec{r}_i$ de todos los puntos de aplicación de las fuerzas activas en función de la coordenada generalizada:

   $$
   \vec{r}_i = \vec{r}_i(q)
   $$

3. **Cálculo de variaciones diferenciales:**
   Se calcula la derivada respecto a $q$ para obtener los desplazamientos virtuales:

   $$
   \delta \vec{r}_i = \frac{d\vec{r}_i}{dq} \delta q
   $$

4. **Planteamiento de la ecuación de trabajo nulo:**
   Se sustituyen en la ecuación de $\delta U = 0$:

   $$
   \delta U = \left[ \sum \vec{F}_i \cdot \frac{d\vec{r}_i}{dq} + \sum \vec{M}_j \cdot \frac{d\vec{\theta}_j}{dq} \right] \delta q = 0
   $$

   Dado que $\delta q \neq 0$ es una variación arbitraria, el término entre corchetes debe anularse, permitiendo despejar directamente la fuerza o carga de equilibrio requerida.

*Para hallar una reacción en un soporte:* Se suprime temporalmente la restricción física que genera dicha reacción y se sustituye por la fuerza de reacción incógnita correspondiente, permitiendo así que el sistema experimente un desplazamiento virtual a lo largo de esa dirección.

### Criterio de la energía potencial: formulación de la función de energía potencial ($V$)

Cuando todas las fuerzas activas que actúan sobre el sistema son **fuerzas conservativas** (como el peso gravitacional o la restitución elástica de resortes mecánicos), el trabajo virtual realizado por dichas fuerzas equivale al decremento de la energía potencial total del sistema:

$$
\delta U = -\delta V
$$

Por lo tanto, la condición de equilibrio se reescribe como:

$$
\delta V = 0 \iff \frac{dV}{dq} = 0
$$

#### Componentes de la energía potencial total ($V = V_g + V_e$):

* **Energía potencial gravitatoria ($V_g$):**
  Para un cuerpo o conjunto de partículas respecto a un nivel de referencia o cota cero ($y = 0$):

  $$
  V_g = \sum m_i g y_i = W \bar{y}
  $$

  *(Positiva si el centro de masa se encuentra por encima del plano de referencia y negativa si está por debajo).*

* **Energía potencial elástica ($V_e$):**
  Para resortes lineales de constante elástica $k$ sometidos a una elongación o compresión $s$:

  $$
  V_e = \frac{1}{2} k s^2
  $$

### Análisis de la estabilidad del equilibrio mediante derivadas sucesivas de la energía potencial

El signo de la segunda derivada de la función de energía potencial total evaluada en la posición de equilibrio ($q = q_0$) determina la naturaleza de dicho estado:

| Condición analítica en $q_0$ | Naturaleza del equilibrio | Comportamiento físico frente a una perturbación |
| :--- | :--- | :--- |
| **$\frac{d^2V}{dq^2} > 0$** | **Equilibrio Estable** | La energía potencial es un **mínimo local**. El sistema genera fuerzas restauradoras que lo devuelven a su posición original. |
| **$\frac{d^2V}{dq^2} < 0$** | **Equilibrio Inestable** | La energía potencial es un **máximo local**. Cualquier pequeña perturbación aparta definitivamente al sistema del equilibrio. |
| **$\frac{d^2V}{dq^2} = 0$** | **Equilibrio Indiferente (o Neutro)** | Se requiere evaluar las derivadas de orden superior ($\frac{d^3V}{dq^3}$, $\frac{d^4V}{dq^4}$). |

#### Criterio general para derivadas de orden superior:

Si $\frac{d^2V}{dq^2} = 0$, se continúa derivando hasta encontrar la primera derivada no nula de orden $n$:

1. Si $n$ es **impar** ($\frac{d^nV}{dq^n} \neq 0$), el equilibrio es **inestable** (punto de inflexión).
2. Si $n$ es **par**:
   * Si $\frac{d^nV}{dq^n} > 0$, el equilibrio es **estable** (mínimo local).
   * Si $\frac{d^nV}{dq^n} < 0$, el equilibrio es **inestable** (máximo local).
3. Si todas las derivadas sucesivas son nulas en un entorno abierto, la energía potencial es constante ($V = \text{cte}$) y el equilibrio es **estrictamente indiferente** (neutro).