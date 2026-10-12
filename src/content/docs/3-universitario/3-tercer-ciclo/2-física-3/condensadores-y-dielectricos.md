---
title: "Condensadores y Dieléctricos"
orden: 4
---

# Condensadores y Dieléctricos
- **Capacitancia y configuraciones fundamentales**
  - Definición de condensador y concepto de capacidad eléctrica ($C$).
  - Unidades en el S.I. (Faradio).
  - Geometrías clásicas de condensadores al vacío:
    - Condensador plano-paralelo.
    - Condensador cilíndrico coaxial.
    - Condensador esférico y concéntrico.
- **Análisis de circuitos con condensadores**
  - Métodos de asociación: agrupamiento en serie y en paralelo.
  - Métodos de transformación topológica: red estrella-triángulo ($Y-\Delta$).
- **Energía y fuerzas en sistemas electrostáticos**
  - Energía almacenada en el campo electrostático de un condensador.
  - Densidad volumétrica de energía eléctrica ($u_e$).
  - Fuerza electrostática entre armaduras:
    - Análisis bajo condición de carga constante (sistema aislado).
    - Análisis bajo condición de diferencia de potencial constante (conectado a fuente).
- **Dieléctricos y medios materiales**
  - Clasificación y tipos de dieléctricos (polares y no polares).
  - Efecto de los dieléctricos en la capacitancia y rigidez dieléctrica.
  - Mecanismos de polarización atómica/molecular y vector de polarización ($\vec{P}$).
  - Cargas ligadas de polarización superficial y volumétrica.
  - Ley de Gauss generalizada en presencia de dieléctricos.
  - Vector desplazamiento eléctrico ($\vec{D}$) y susceptibilidad/permitividad relativa.
  - Balance de energía y densidad de energía en condensadores con medio dieléctrico.

# Condensadores y Dieléctricos

## 1. Capacitancia y configuraciones fundamentales

### Definición de condensador y concepto de capacidad eléctrica ($C$)

Un condensador (o capacitor) es un dispositivo pasivo capaz de almacenar energía eléctrica mediante la acumulación de carga eléctrica en dos conductores cercanos pero aislados entre sí (denominados armaduras). 

* **Capacidad eléctrica ($C$):** Es la medida de la capacidad de un condensador para almacenar carga por unidad de diferencia de potencial aplicada entre sus armaduras:
  
  $$
  C = \frac{Q}{V}
  $$
  
  donde $Q$ es la magnitud de la carga en cualquiera de las armaduras y $V$ es la diferencia de potencial entre ellas.

### Unidades en el S.I. (Faradio)

La unidad de la capacidad eléctrica en el Sistema Internacional es el **Faradio** ($\text{F}$), definido como un Coulomb por Voltio ($\text{C/V}$). Dado que el Faradio es una unidad extremadamente grande para aplicaciones prácticas, se emplean comúnmente submúltiplos como el microfaradio ($\mu\text{F}$), nanofaradio ($\text{nF}$) y picofaradio ($\text{pF}$).

### Geometrías clásicas de condensadores al vacío

#### A. Condensador plano-paralelo

Consiste en dos placas paralelas de área superficial $A$ separadas por una distancia muy pequeña $d$ en comparación con sus dimensiones lineales. Su capacitancia al vacío es:

$$
C = \varepsilon_0 \frac{A}{d}
$$

#### B. Condensador cilíndrico coaxial

Formado por dos cilindros conductores concéntricos de radios interior $a$, exterior $b$ y longitud $L$ (con $L \gg b$):

$$
C = \frac{2\pi\varepsilon_0 L}{\ln(b/a)}
$$

#### C. Condensador esférico y concéntrico

Constituido por dos cascarones esféricos concéntricos de radio interior $a$ y radio exterior $b$:

$$
C = 4\pi\varepsilon_0 \frac{a b}{b - a}
$$

## 2. Análisis de circuitos con condensadores

### Métodos de asociación: agrupamiento en serie y en paralelo

* **Agrupamiento en paralelo:** Los condensadores comparten los mismos nodos, por lo que la diferencia de potencial en cada uno es la misma. La capacitancia equivalente ($C_{\text{eq}}$) es la suma directa de las capacidades individuales:
  
  $$
  C_{\text{eq}} = C_1 + C_2 + C_3 + \dots = \sum_{i=1}^{n} C_i
  $$

* **Agrupamiento en serie:** Los condensadores están conectados uno a continuación de otro, de modo que la carga en cada condensador es idéntica. La inversa de la capacitancia equivalente es la suma de las inversas individuales:
  
  $$
  \frac{1}{C_{\text{eq}}} = \frac{1}{C_1} + \frac{1}{C_2} + \frac{1}{C_3} + \dots = \sum_{i=1}^{n} \frac{1}{C_i}
  $$

### Métodos de transformación topológica: red estrella-triángulo ($Y-\Delta$)

Cuando un circuito de condensadores presenta una estructura compleja de puente o nodos interconectados que no se puede resolver mediante simples series y paralelos, se aplican transformaciones topológicas:

* **Transformación Triángulo a Estrella ($\Delta \to Y$):** Permite simplificar tres condensadores conectados en bucle cerrado (delta) a una configuración radial con un nodo central (estrella).
* **Transformación Estrella a Triángulo ($Y \to \Delta$):** Realiza el proceso inverso para mallas específicas de análisis circuital. Estas conversiones se basan en la equivalencia de impedancias/reactancias capacitivas (o inversas de capacitancia) vistas desde los terminales externos del circuito.

## 3. Energía y fuerzas en sistemas electrostáticos

### Energía almacenada en el campo electrostático de un condensador

El trabajo necesario para cargar un condensador se almacena como energía potencial electrostática $U$ en el campo eléctrico entre sus armaduras:

$$
U = \frac{1}{2} Q V = \frac{1}{2} C V^2 = \frac{Q^2}{2 C}
$$

### Densidad volumétrica de energía eléctrica ($u_e$)

Representa la energía almacenada por unidad de volumen dentro del campo eléctrico de un medio:

$$
u_e = \frac{1}{2} \varepsilon_0 E^2
$$

### Fuerza electrostática entre armaduras

La fuerza de atracción entre las placas de un condensador se determina analizando la variación de la energía del sistema respecto a un desplazamiento virtual $dx$ de las armaduras:

* **Bajo condición de carga constante (sistema aislado, $Q = \text{constante}$):**
  
  $$
  F = -\left( \frac{\partial U}{\partial x} \right)_Q = \frac{Q^2}{2 \varepsilon_0 A}
  $$

* **Bajo condición de diferencia de potencial constante (conectado a fuente, $V = \text{constante}$):**
  
  $$
  F = +\left( \frac{\partial U}{\partial x} \right)_V = \frac{1}{2} V^2 \frac{dC}{dx}
  $$

## 4. Dieléctricos y medios materiales

### Clasificación y tipos de dieléctricos (polares y no polares)

* **Dieléctricos no polares:** Sus moléculas no poseen un momento dipolar permanente intrínseco en ausencia de campo eléctrico (sus centros de carga positiva y negativa coinciden). Al aplicar un campo externo, sus nubes electrónicas se deforman ligeramente, induciendo un momento dipolar temporal.
* **Dieléctricos polares:** Sus moléculas poseen de forma natural un momento dipolar permanente debido a una distribución asimétrica de carga (como las moléculas de agua). En ausencia de campo eléctrico, estos dipolos están orientados al azar; al aplicar un campo, tienden a alinearse parcialmente.

### Efecto de los dieléctricos en la capacitancia y rigidez dieléctrica

* **Aumento de capacitancia:** Al introducir un medio dieléctrico entre las placas de un condensador, la capacidad aumenta en un factor adimensional denominado **constante dieléctrica** o permitividad relativa ($\kappa$ o $\varepsilon_r$):
  
  $$
  C = \kappa C_0
  $$
  
  donde $C_0$ es la capacitancia inicial al vacío.

* **Rigidez dieléctrica:** Es el valor máximo de campo eléctrico que un material aislante puede soportar sin que ocurra una ruptura eléctrica (ionización y formación de un arco eléctrico o chispa).

### Mecanismos de polarización atómica/molecular y vector de polarización ($\vec{P}$)

El **vector de polarización** $\vec{P}$ describe el estado de polarización del material dieléctrico y se define como el momento dipolar eléctrico neto por unidad de volumen:

$$
\vec{P} = \lim_{\Delta V \to 0} \frac{\sum \vec{p}_i}{\Delta V}
$$

### Cargas ligadas de polarización superficial y volumétrica

Como consecuencia de la polarización, en el interior y en los bordes del dieléctrico aparecen cargas macroscópicas denominadas **cargas ligadas**:

* **Densidad superficial de carga ligada ($\sigma_p$):** 
  
  $$
  \sigma_p = \vec{P} \cdot \hat{n}
  $$

* **Densidad volumétrica de carga ligada ($\rho_p$):** 
  
  $$
  rho_p = -\vec{\nabla} \cdot \vec{P}
  $$

### Ley de Gauss generalizada en presencia de dieléctricos

La Ley de Gauss en presencia de medios dieléctricos relaciona el flujo del vector desplazamiento eléctrico a través de una superficie cerrada únicamente con las **cargas libres** ($q_{\text{libre}}$) encerradas, ignorando las cargas ligadas:

$$
\oint_S \vec{D} \cdot d\vec{A} = q_{\text{libre, encerrada}}
$$

### Vector desplazamiento eléctrico ($\vec{D}$) y susceptibilidad/permitividad relativa

* **Definición de $\vec{D}$:** 
  
  $$
  \vec{D} = \varepsilon_0 \vec{E} + \vec{P} = \varepsilon \vec{E} = \kappa \varepsilon_0 \vec{E}
  $$

* **Permitividad del medio ($\varepsilon$):** $\varepsilon = \kappa \varepsilon_0$.
* **Susceptibilidad eléctrica ($\chi_e$):** Mide el grado de polarizabilidad de un material: $\kappa = 1 + \chi_e$, de modo que $\vec{P} = \varepsilon_0 \chi_e \vec{E}$.

### Balance de energía y densidad de energía en condensadores con medio dieléctrico

En presencia de un medio dieléctrico lineal, homogéneo e isotrópico, la densidad volumétrica de energía almacenada en el campo eléctrico se modifica incorporando la permitividad total del medio:

$$
u_e = \frac{1}{2} \vec{D} \cdot \vec{E} = \frac{1}{2} \varepsilon E^2 = \frac{1}{2} \kappa \varepsilon_0 E^2
$$