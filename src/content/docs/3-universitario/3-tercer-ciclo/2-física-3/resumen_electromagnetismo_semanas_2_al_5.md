---
title: "resumen 2-5"
---
# MATERIAL DE RESUMEN: ELECTROMAGNETISMO (SEMANAS 2 A 5)

Este material sintetiza de manera rigurosa la teoría fundamental, las expresiones matemáticas y las aplicaciones prácticas correspondientes a las semanas 2 a 5 del curso.

---

## 📅 SEMANA N° 02: Campo Eléctrico e Intensidad de Campo Eléctrico

### 1. Concepto e Intensidad de Campo Eléctrico
* **Concepto:** El campo eléctrico es una modificación que experimenta el espacio alrededor de cualquier carga eléctrica, de modo que otra carga situada en él experimenta una fuerza eléctrica sin necesidad de contacto físico.
* **Intensidad de Campo Eléctrico ($\vec{E}$):** Es una magnitud vectorial definida como la fuerza eléctrica $\vec{F}$ que experimenta una carga de prueba positiva $q_0$ colocada en dicho punto:
  $$\vec{E} = \frac{\vec{F}}{q_0}$$
* **Unidades en el SI:** Newton sobre culombio ($\text{N/C}$) o equivalente Voltio sobre metro ($\text{V/m}$).

### 2. Principio de Superposición
El campo eléctrico total creado por un sistema de cargas puntuales en un punto del espacio es la suma vectorial de los campos eléctricos individuales creados por cada carga en ausencia de las demás:
$$\vec{E}_{\text{total}} = \vec{E}_1 + \vec{E}_2 + \dots + \vec{E}_n = \sum_{i=1}^{n} \vec{E}_i$$

### 3. Distribución Discreta y Continua de Cargas
* **Discreta:** Suma vectorial de campos debidos a cargas puntuales discretas:
  $$\vec{E} = k \sum \frac{q_i}{r_i^2} \hat{r}_i$$
* **Continua:** Se calcula mediante integración sobre elementos infinitesimales de carga $dq$:
  $$\vec{E} = \int \frac{k \cdot dq}{r^2} \hat{r}$$
  * Dependiendo de la geometría, se emplean las densidades de carga:
    * Lineal: $\lambda = \frac{dq}{dl} \implies dq = \lambda \, dl$
    * Superficial: $\sigma = \frac{dq}{dS} \implies dq = \sigma \, dS$
    * Volumétrica: $\rho = \frac{dq}{dV} \implies dq = \rho \, dV$

### 4. Aplicaciones y Geometrías Específicas
* **Alambre rectilíneo (infinito):** 
  $$E = \frac{k \cdot 2\lambda}{r}$$
* **Anillo (en su eje central a distancia $x$):** 
  $$E = \frac{k \cdot q \cdot x}{(x^2 + a^2)^{3/2}}$$
* **Disco (en su eje central):** 
  $$E = \frac{\sigma}{2\varepsilon_0} \left(1 - \frac{x}{\sqrt{x^2 + R^2}}\right)$$
* **Lámina plana infinita:** 
  $$E = \frac{\sigma}{2\varepsilon_0} \quad \text{(campo uniforme)}$$
* **Cilindro (largo):** Fuera del cilindro se comporta como si toda la carga residiera en el eje central:
  $$E = \frac{2k\lambda}{r}$$

### 5. Líneas de Fuerza y Dipolo Eléctrico
* **Líneas de fuerza:** Trayectorias tangentes al vector campo eléctrico en cada punto. Salen de las cargas positivas y entran en las negativas. Su densidad espacial es proporcional a la intensidad del campo.
* **Dipolo Eléctrico:** Sistema formado por dos cargas puntuales de igual magnitud y signos opuestos ($+q$ y $-q$) separadas por una distancia pequeña $d$.
* **Momento dipolar eléctrico ($\vec{p}$):** Vector dirigido desde la carga negativa hacia la positiva:
  $$p = q \cdot d$$
* **Torque sobre un dipolo en un campo externo:**
  $$\vec{\tau} = \vec{p} \times \vec{E}$$
* **Energía potencial del dipolo:**
  $$U = -\vec{p} \cdot \vec{E}$$

---

## 📅 SEMANA N° 03: Ley de Gauss y Modelos Nucleares

### 1. Ángulo Sólido y Flujo del Campo Eléctrico
* **Ángulo Sólido ($\Omega$):** Extensión tridimensional de un ángulo plano, medido en estereorradianes ($\text{sr}$).
* **Flujo del campo eléctrico ($\Phi_E$):** Medida del número de líneas de campo eléctrico que atraviesan una superficie determinada:
  $$\Phi_E = \int \vec{E} \cdot d\vec{A}$$

### 2. Ley de Gauss
Establece que el flujo eléctrico total a través de cualquier superficie cerrada (superficie gaussiana) es estrictamente igual a la carga neta encerrada ($q_{\text{encerrada}}$) dividida entre la permitividad del vacío ($\varepsilon_0$):
$$\oint \vec{E} \cdot d\vec{A} = \frac{q_{\text{encerrada}}}{\varepsilon_0}$$

### 3. Aplicaciones de la Ley de Gauss (Simetrías)
* **Alambre infinito:** 
  $$E = \frac{\lambda}{2\pi\varepsilon_0 r}$$
* **Lámina no conductora infinita:** 
  $$E = \frac{\sigma}{2\varepsilon_0}$$
* **Cascarón esférico de radio $R$ y carga total $Q$:**
  * Exterior ($r > R$): $E = \frac{kQ}{r^2}$
  * Interior ($r < R$): $E = 0$
* **Esfera sólida aislante de radio $R$ (con carga uniforme $Q$):**
  * Exterior ($r > R$): $E = \frac{kQ}{r^2}$
  * Interior ($r < R$): $E = \frac{kQr}{R^3}$

### 4. Modelos Nucleares Históricos
* **Modelo de Thomson ("Budín de pasas"):** Proponía que el átomo consistía en una esfera difusa de carga positiva con electrones incrustados. Fue refutado experimentalmente.
* **Modelo de Rutherford:** Estableció que la carga positiva y casi toda la masa se concentran en un núcleo central diminuto, con los electrones orbitando a su alrededor (evidenciado por la dispersión de partículas alfa).

---

## 📅 SEMANA N° 04: Potencial Eléctrico y Energía Electroestática

### 1. Potencial Eléctrico y Diferencia de Potenciales
* **Potencial eléctrico ($V$) de una carga puntual:** Trabajo necesario por unidad de carga para traer una carga de prueba desde el infinito hasta dicho punto:
  $$V = \frac{k \cdot q}{r}$$
* **Diferencia de potencial ($\Delta V$):** Trabajo por unidad de carga requerido para mover una carga entre dos puntos $A$ y $B$:
  $$V_B - V_A = -\int_{A}^{B} \vec{E} \cdot d\vec{l}$$
* **Unidades en el SI:** Voltios ($\text{V} = \text{J/C}$).

### 2. Superficies y Curvas Equipotenciales
* **Superficies equipotenciales:** Lugares geométricos de los puntos de un campo eléctrico que poseen exactamente el mismo valor de potencial eléctrico.
* **Propiedades clave:**
  * Las líneas de campo eléctrico son siempre perpendiculares a las superficies equipotenciales.
  * El trabajo realizado al mover una carga sobre una superficie equipotencial es cero ($\Delta W = 0$).

### 3. Relación entre Campo y Potencial (Gradiente)
* El campo eléctrico es igual al negativo del gradiente del potencial eléctrico:
  $$\vec{E} = -\nabla V \quad \left( E_x = -\frac{\partial V}{\partial x}, \; E_y = -\frac{\partial V}{\partial y}, \; E_z = -\frac{\partial V}{\partial z} \right)$$
* Forma integral:
  $$V_B - V_A = -\int_{A}^{B} E \cdot dl$$

---

## 📅 SEMANA N° 05: Aplicaciones del Potencial y Conductores

### 1. Principio de Superposición y Distribuciones de Potencial
* Al ser el potencial eléctrico una magnitud escalar (a diferencia del campo que es vectorial), el potencial total de un sistema se calcula mediante suma algebraica directa:
  $$V = \sum \frac{k \cdot q_i}{r_i}$$
* **Para distribuciones continuas:**
  $$V = \int \frac{k \cdot dq}{r}$$

### 2. Aplicaciones de Cálculo de Potencial
* **Anillo (en su eje):** 
  $$V = \frac{k \cdot q}{\sqrt{x^2 + a^2}}$$
* **Disco (en su eje):** 
  $$V = 2\pi k \sigma \left(\sqrt{x^2 + R^2} - x\right)$$
* **Esfera conductora cargada de radio $R$:**
  * Superficie e interior ($r \le R$): $V = \frac{kQ}{R}$
  * Exterior ($r > R$): $V = \frac{kQ}{r}$

### 3. Energía Potencial Electroestática de un Sistema de Cargas
Representa el trabajo necesario para ensamblar un sistema de cargas puntuales desde el infinito:
$$U = k \sum_{i < j} \frac{q_i q_j}{r_{ij}}$$

### 4. Propiedades de los Cuerpos Conductores en Equilibrio Electroestático
1. El campo eléctrico en el interior de un conductor en equilibrio electroestático es nulo ($E = 0$).
2. Todo el volumen y la superficie de un conductor forman una región equipotencial.
3. El campo eléctrico justo en la superficie de un conductor es perpendicular a ella y su magnitud vale $E = \frac{\sigma}{\varepsilon_0}$.
4. Toda la carga neta de un conductor en equilibrio se distribuye exclusivamente en su superficie exterior.

### 5. Aplicaciones Tecnológicas e Industriales de la Electrostática
* **Xerografía:** Copiadoras e impresoras láser que emplean cargas electroestáticas selectivas para atraer partículas de tóner (tinta en polvo) sobre el papel.
* **Impresora a chorro de tinta:** Gotas microscópicas de tinta reciben cargas eléctricas específicas para ser desviadas con precisión mediante placas deflectoras electrostáticas hacia el papel.
* **Separador electrostático (precipitador):** Dispositivo industrial utilizado para filtrar gases contaminantes en chimeneas o separar minerales según sus propiedades eléctricas intrínsecas.
