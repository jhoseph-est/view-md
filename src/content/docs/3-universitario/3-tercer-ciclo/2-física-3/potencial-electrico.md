---
title: "Potencial Eléctrico"
orden: 3
---

# Potencial Eléctrico
- **Potencial y diferencia de potencial electrostático**
  - Definición de potencial eléctrico ($V$) generado por una carga puntual fija.
  - Diferencia de potencial electrostático ($\Delta V$) y unidades en el S.I. (Voltio).
  - Principio de superposición para potenciales escalares.
- **Geometría del potencial y relación de campo**
  - Superficies y curvas equipotenciales: características y propiedades ortogonales.
  - Relación entre campo eléctrico y potencial:
    - Formulación mediante integral de línea de camino.
    - Relación diferencial: gradiente del potencial ($\vec{E} = -\vec{\nabla} V$).
- **Cálculo del potencial en diferentes distribuciones**
  - Potencial electrostático para distribuciones discretas.
  - Potencial electrostático para distribuciones continuas:
    - Alambre recto infinito.
    - Anillo cargado sobre su eje.
    - Disco uniformemente cargado.
    - Esfera sólida y conductora.
- **Energía electrostática y conductores en equilibrio**
  - Energía potencial electrostática de cargas puntuales individuales y ensambles discretos.
  - Energía de distribuciones continuas de carga.
  - Propiedades electrostáticas de conductores en equilibrio electrostático (campo interno nulo, exceso de carga en superficie, blindaje electrostático).
- **Aplicaciones tecnológicas e industriales de la electrostática**
  - Xerografía y fotocopiado.
  - Funcionamiento de la impresora láser.
  - Impresoras a chorro de tinta (deflexión electrostática).
  - Precipitadores y separadores electrostáticos de partículas industriales.


# Potencial Eléctrico

## 1. Potencial y diferencia de potencial electrostático

### Definición de potencial eléctrico ($V$) generado por una carga puntual fija

El potencial eléctrico en un punto del espacio es una magnitud escalar que representa la energía potencial electrostática por unidad de carga que experimentaría una carga de prueba positiva si se colocara en dicho punto.

* **Fórmula para una carga puntual:** El potencial eléctrico $V$ a una distancia $r$ de una carga puntual $q$ (fijando el potencial en el infinito como cero, $V_{\infty} = 0$) se define matemáticamente como:

  $$
  V = \frac{1}{4\pi\varepsilon_0} \frac{q}{r}
  $$

### Diferencia de potencial electrostático ($\Delta V$) y unidades en el S.I. (Voltio)

* **Definición por trabajo:** La diferencia de potencial eléctrico $\Delta V = V_B - V_A$ entre dos puntos $A$ y $B$ se define como el trabajo por unidad de carga realizado por una fuerza externa para mover una carga de prueba con velocidad constante desde $A$ hasta $B$, o bien como el trabajo negativo realizado por el campo eléctrico:

  $$
  V_B - V_A = -\int_{A}^{B} \vec{E} \cdot d\vec{l}
  $$

* **Unidades en el S.I.:** La unidad de potencial eléctrico es el **Voltio** ($\text{V}$), equivalente a un **Joule por Coulomb** ($\text{J/C}$).

### Principio de superposición para potenciales escalares

A diferencia del campo eléctrico (que requiere sumas vectoriales), el potencial eléctrico es una magnitud escalar. Por lo tanto, el potencial total en un punto debido a un sistema de múltiples cargas puntuales es la suma algebraica de los potenciales individuales generados por cada carga:

$$
V_{\text{total}} = V_1 + V_2 + V_3 + \dots = \sum_{i=1}^{n} \frac{1}{4\pi\varepsilon_0} \frac{q_i}{r_i}
$$

---

## 2. Geometría del potencial y relación de campo

### Superficies y curvas equipotenciales: características y propiedades ortogonales

* **Superficies equipotenciales:** Son lugares geométricos de puntos en el espacio donde el potencial eléctrico tiene el mismo valor numérico ($V = \text{constante}$).

* **Propiedades principales:**

  1. El trabajo realizado al mover una carga a lo largo de una superficie equipotencial es cero, ya que $\Delta V = 0$.

  2. Las líneas de campo eléctrico son siempre **perpendiculares** (ortogonales) a las superficies equipotenciales en cada punto.

  3. El campo eléctrico apunta siempre en la dirección de la máxima disminución del potencial eléctrico.

### Relación entre campo eléctrico y potencial

#### A. Formulación mediante integral de línea

Conociendo el campo eléctrico $\vec{E}$, la diferencia de potencial entre dos puntos se obtiene integrando el campo a lo largo de cualquier trayectoria que los una:

$$
V_B - V_A = -\int_{A}^{B} \vec{E} \cdot d\vec{l}
$$

#### B. Relación diferencial: gradiente del potencial ($\vec{E} = -\vec{\nabla} V$)

En coordenadas cartesianas, el campo eléctrico se expresa como el gradiente negativo del potencial escalar:

$$
\vec{E} = -\left( \frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k} \right) = -\vec{\nabla} V
$$

---

## 3. Cálculo del potencial en diferentes distribuciones

### Potencial electrostático para distribuciones discretas

Se calcula directamente sumando los potenciales escalares de cada carga individual respecto al punto de estudio, teniendo en cuenta las respectivas distancias escalares $r_i$:

$$
V = \frac{1}{4\pi\varepsilon_0} \sum_{i=1}^{n} \frac{q_i}{r_i}
$$

### Potencial electrostático para distribuciones continuas de carga

Se utiliza el cálculo integral sustituyendo las cargas puntuales por elementos diferenciales $dq$ (empleando $\lambda$, $\sigma$ o $\rho$ según corresponda):

$$
V = \frac{1}{4\pi\varepsilon_0} \int \frac{dq}{r}
$$

* **Alambre recto infinito:** Dado que el límite de integración diverge si se toma el cero en el infinito para un alambre infinito, se suele fijar una referencia a una distancia fija $r_0$, obteniéndose logaritmos naturales:

  $$
  V(r) - V(r_0) = -\frac{\lambda}{2\pi\varepsilon_0} \ln\left(\frac{r}{r_0}\right)
  $$

* **Anillo cargado sobre su eje:** A una distancia $z$ del centro de un anillo de radio $R$ y carga total $Q$:

  $$
  V = \frac{1}{4\pi\varepsilon_0} \frac{Q}{\sqrt{R^2 + z^2}}
  $$

* **Disco uniformemente cargado:** Para un disco de radio $R$ y densidad superficial $\sigma$, a una distancia $z$ sobre su eje central:

  $$
  V = \frac{\sigma}{2\varepsilon_0} \left( \sqrt{R^2 + z^2} - z \right)
  $$

* **Esfera sólida y conductora:**

  * **Cascarón esférico conductor o esfera conductora (radio $R$, carga $Q$):**
    * Exterior ($r \ge R$): $V = \frac{1}{4\pi\varepsilon_0} \frac{Q}{r}$
    * Interior ($r < R$): El potencial es constante e igual al de la superficie: $V = \frac{1}{4\pi\varepsilon_0} \frac{Q}{R}$

  * **Esfera sólida aislante con carga distribuida uniformemente ($\rho$):**
    * Exterior ($r \ge R$): $V = \frac{1}{4\pi\varepsilon_0} \frac{Q}{r}$
    * Interior ($r < R$): $V = \frac{Q}{4\pi\varepsilon_0 R} \left( \frac{3}{2} - \frac{r^2}{2R^2} \right)$

---

## 4. Energía electrostática y conductores en equilibrio

### Energía potencial electrostática de cargas puntuales individuales y ensambles discretos

* **Ensamble de dos cargas:** La energía potencial electrostática $U$ requerida para armar un sistema de dos cargas puntuales $q_1$ y $q_2$ separadas por una distancia $r_{12}$ es:

  $$
  U = \frac{1}{4\pi\varepsilon_0} \frac{q_1 q_2}{r_{12}}
  $$

* **Ensamble general discreto:** Para un conjunto de $n$ cargas, la energía total es la suma sobre todos los pares interactuantes únicos:

  $$
  U = \frac{1}{2} \sum_{i=1}^{n} q_i V_i \quad (\text{donde } V_i \text{ es el potencial creado por las demás cargas en la posición de } q_i)
  $$

### Energía de distribuciones continuas de carga

La energía electrostática total almacenada en el espacio donde existe un campo eléctrico $\vec{E}$ se expresa mediante una integral de volumen sobre todo el espacio, utilizando la densidad de energía electrostática $u_E$:

$$
U = \int_{\text{todo el espacio}} u_E \, dV = \frac{1}{2} \varepsilon_0 \int E^2 \, dV
$$

### Propiedades electrostáticas de conductores en equilibrio electrostático

1. **Campo interno nulo:** En el interior de un conductor en equilibrio electrostático, el campo eléctrico es estrictamente cero ($\vec{E} = 0$).

2. **Exceso de carga en la superficie:** Cualquier carga neta aportada a un conductor se distribuye exclusivamente en su superficie exterior.

3. **Superficie equipotencial:** Todo el volumen y la superficie de un conductor en equilibrio forman una superficie equipotencial ($V = \text{constante}$).

4. **Blindaje electrostático:** Una cavidad vacía dentro de un conductor está completamente blindada frente a campos eléctricos externos, ya que las cargas superficiales inducidas reorganizan el campo interno para anularlo (principio de la jaula de Faraday).

---

## 5. Aplicaciones tecnológicas e industriales de la electrostática

* **Xerografía y fotocopiado:** Utiliza un tambor recubierto de un material fotoconductor (que se vuelve conductor al recibir luz). El tambor se carga electrostáticamente de manera uniforme, y al exponerlo a la imagen del documento, las zonas oscuras retienen la carga (formando una imagen latente), la cual atrae partículas de tóner de carga opuesta para luego transferirlas y fijarlas al papel mediante calor.

* **Funcionamiento de la impresora láser:** Similar a la xerografía, emplea un rayo láser controlado digitalmente para "dibujar" con cargas eléctricas sobre un tambor fotoconductor giratorio, atrayendo selectivamente el tóner en polvo para imprimir textos y gráficos de alta precisión.

* **Impresoras a chorro de tinta (deflexión electrostática):** Generan un flujo continuo de microgotas de tinta a las que se les asigna una carga eléctrica específica mediante un electrodo de carga. Al pasar las gotas a través de placas deflectoras cargadas con alto voltaje, el campo eléctrico desvía las gotas con precisión milimétrica hacia el papel formando la imagen deseada, mientras que las gotas no utilizadas se reciclan.

* **Precipitadores y separadores electrostáticos de industrias:** Dispositivos de control de contaminación ambiental empleados en chimeneas industriales. Ionizan los gases y partículas de hollín o ceniza mediante descargas de corona de alto voltaje; las partículas cargadas son atraídas y capturadas por placas colectoras de polaridad opuesta, evitando que sean liberadas a la atmósfera.