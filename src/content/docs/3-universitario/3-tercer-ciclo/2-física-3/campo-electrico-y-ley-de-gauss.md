---
title: "Campo Eléctrico y Ley de Gauss"
orden: 2
---

# Campo Eléctrico y Ley de Gauss
- **Concepto y descripción vectorial del campo eléctrico**
  - Definición física e intensidad del campo eléctrico ($\vec{E}$).
  - Unidades en el S.I.
  - Principio de superposición para campos eléctricos.
  - Cálculo de la intensidad de campo eléctrico:
    - Sistemas discretos de partículas cargadas.
    - Distribuciones continuas de carga: alambre rectilíneo finito e infinito, anillo, disco circular, lámina plana infinita y cilindro cargado.
- **Visualización y dipolo eléctrico**
  - Líneas de fuerza electrostática: definición, propiedades y densidad geométrica de líneas.
  - El dipolo eléctrico:
    - Momento dipolar eléctrico ($\vec{p}$).
    - Torque y fuerzas sobre un dipolo en un campo eléctrico uniforme y no uniforme.
    - Energía potencial electrostática asociada al dipolo.
- **Flujo eléctrico y Ley de Gauss**
  - Concepto geométrico de ángulo sólido y sus propiedades.
  - Definición matemática de flujo del campo eléctrico ($\Phi_E$) y propiedades de superficie cerrada.
  - Formulación integral de la Ley de Gauss.
  - Aplicaciones con alta simetría:
    - Alambre rectilíneo infinito.
    - Lámina infinita no conductora.
    - Cascarón esférico conductor/no conductor.
    - Esfera sólida cargada (uniforme y no uniforme).
    - Cilindro infinito y coaxial.
- **Aplicaciones atómicas**
  - Comparativa de modelos nucleares clásicos bajo la perspectiva electrostática (modelos de Thomson y Rutherford).


# Campo Eléctrico y Ley de Gauss

## 1. Concepto y descripción vectorial del campo eléctrico

### Definición física e intensidad del campo eléctrico ($\vec{E}$)
El campo eléctrico es un campo vectorial que modifica el espacio alrededor de cualquier carga eléctrica, de tal manera que otra carga de prueba situada en dicho espacio experimenta una fuerza electrostática. 

* **Definición formal:** La intensidad del campo eléctrico $\vec{E}$ en un punto del espacio se define como la fuerza electrostática $\vec{F}$ que experimenta una carga de prueba positiva y infinitesimal $q_0$ colocada en ese punto, dividida por la magnitud de dicha carga de prueba:
  
  $$
  \vec{E} = \frac{\vec{F}}{q_0}
  $$

* **Campo creado por una carga puntual:** A partir de la Ley de Coulomb, el campo eléctrico creado por una carga puntual $q$ a una distancia $r$ viene dado por:
  
  $$
  \vec{E} = \frac{1}{4\pi\varepsilon_0} \frac{q}{r^2} \hat{r}
  $$
  
  donde $\hat{r}$ es el vector unitario dirigido desde la carga fuente hacia el punto de estudio.

### Unidades en el S.I.
En el Sistema Internacional de Unidades, el campo eléctrico se mide en **Newtons por Coulomb** ($\text{N/C}$) o, de manera equivalente, en **Volts por metro** ($\text{V/m}$).

### Principio de superposición para campos eléctricos
El campo eléctrico total generado por un sistema de múltiples cargas es la suma vectorial de los campos eléctricos individuales creados por cada carga en ausencia de las demás:

$$
\vec{E}_{\text{total}} = \vec{E}_1 + \vec{E}_2 + \vec{E}_3 + \dots = \sum_{i=1}^{n} \vec{E}_i
$$

### Cálculo de la intensidad de campo eléctrico

#### A. Sistemas discretos de partículas cargadas
Se calcula aplicando directamente el principio de superposición mediante sumas vectoriales de los campos producidos por cada carga puntual individual sobre el punto de interés.

#### B. Distribuciones continuas de carga
Se emplea el cálculo integral descomponiendo el objeto cargado en elementos diferenciales de carga $dq$ y sumando (integrando) sus contribuciones vectoriales:

$$
\vec{E} = \frac{1}{4\pi\varepsilon_0} \int \frac{dq}{r^2} \hat{r}
$$

* **Alambre rectilíneo finito:** Para un segmento de longitud $L$ con densidad lineal $\lambda$, el campo a una distancia perpendicular $y$ combina componentes simétricas resolviéndose mediante sustituciones trigonométricas.
* **Alambre rectilíneo infinito:** Utilizando simetría cilíndrica, el campo a una distancia radial $r$ es puramente radial y su magnitud es:
  
  $$
  E = \frac{\lambda}{2\pi\varepsilon_0 r}
  $$

* **Anillo cargado:** En el eje central de un anillo de radio $R$ y carga total $Q$, a una distancia $z$ del centro, el campo apunta exclusivamente a lo largo del eje:
  
  $$
  E_z = \frac{1}{4\pi\varepsilon_0} \frac{Qz}{(R^2 + z^2)^{3/2}}
  $$

* **Disco circular:** Integrando anillos concéntricos de radio $r$ y área superficial, el campo a lo largo del eje central de un disco con densidad superficial $\sigma$ es:
  
  $$
  E_z = \frac{\sigma}{2\varepsilon_0} \left( 1 - \frac{z}{\sqrt{R^2 + z^2}} \right)
  $$

* **Lámina plana infinita:** Como caso límite del disco cuando el radio $R \to \infty$, el campo eléctrico es uniforme en magnitud y perpendicular a la superficie, independiente de la distancia:
  
  $$
  E = \frac{\sigma}{2\varepsilon_0}
  $$

* **Cilindro cargado:** Para un cilindro largo o infinito con densidad superficial o volumétrica, el campo en el exterior se comporta como si toda la carga estuviera concentrada en el eje central ($E = \frac{\lambda}{2\pi\varepsilon_0 r}$), mientras que en el interior de un cilindro sólido conductor el campo es nulo, y en un aislante varía linealmente con el radio interno.

---

## 2. Visualización y dipolo eléctrico

### Líneas de fuerza electrostática: definición, propiedades y densidad geométrica
Las líneas de campo eléctrico (o líneas de fuerza) son curvas imaginarias trazadas de tal modo que la tangente a cualquier punto de ellas indica la dirección del vector campo eléctrico $\vec{E}$ en ese punto.

* **Propiedades principales:**
  1. Nacen en las cargas positivas y mueren en las cargas negativas (o en el infinito).
  2. Nunca se cruzan entre sí (el campo eléctrico en un punto es único).
  3. Su **densidad geométrica** (número de líneas por unidad de área perpendicular) es directamente proporcional a la magnitud de la intensidad del campo eléctrico en esa región.

### El dipolo eléctrico

#### Momento dipolar eléctrico ($\vec{p}$)
Un dipolo eléctrico está constituido por dos cargas puntuales de igual magnitud pero signos opuestos ($+q$ y $-q$) separadas por una distancia fija $\vec{d}$. El **momento dipolar eléctrico** $\vec{p}$ es un vector dirigido desde la carga negativa hacia la carga positiva, definido como:

$$
\vec{p} = q \cdot \vec{d}
$$

#### Torque y fuerzas sobre un dipolo en un campo eléctrico
* **En un campo eléctrico uniforme:** La fuerza neta sobre el dipolo es cero ($\vec{F}_{\text{neto}} = 0$). Sin embargo, las fuerzas individuales sobre cada carga generan un torque $\vec{\tau}$ que tiende a alinear el dipolo con el campo:
  
  $$
  \vec{\tau} = \vec{p} \times \vec{E}
  $$

* **En un campo eléctrico no uniforme:** Además del torque, el dipolo experimenta una fuerza neta debido a la diferencia de intensidad del campo entre los extremos de la separación física.

#### Energía potencial electrostática asociada al dipolo
La energía potencial $U$ de un dipolo alineado o desalineado en un campo eléctrico uniforme depende de su orientación relativa y se calcula mediante el producto punto:

$$
U = -\vec{p} \cdot \vec{E} = -p E \cos\theta
$$

---

## 3. Flujo eléctrico y Ley de Gauss

### Concepto geométrico de ángulo sólido y sus propiedades
El ángulo sólido ($\Omega$), medido en **esteradianes** ($\text{sr}$), es la generalización tridimensional del ángulo plano. Representa el área aparente que cubre un objeto visto desde un punto central sobre la superficie de una esfera de radio unitario:

$$
\Omega = \iint \frac{\hat{r} \cdot d\vec{A}}{r^2}
$$

Para una esfera completa, el ángulo sólido total abarcado alrededor de un punto central es siempre $4\pi$ esteradianes.

### Definición matemática de flujo del campo eléctrico ($\Phi_E$)
El flujo eléctrico $\Phi_E$ es una medida de la cantidad de campo eléctrico que atraviesa una superficie dada. Para una superficie abierta arbitraria inmersa en un campo eléctrico, se define como la integral de superficie del producto escalar del campo $\vec{E}$ y el vector diferencial de área $d\vec{A}$:

$$
\Phi_E = \iint_{S} \vec{E} \cdot d\vec{A}
$$

En el caso de una **superficie cerrada**, el flujo total representa la diferencia neta entre las líneas de campo que salen y las que entran.

### Formulación integral de la Ley de Gauss
La Ley de Gauss establece que el flujo eléctrico total a través de cualquier superficie cerrada (superficie gaussiana) es igual a la carga total encerrada $q_{\text{encerrada}}$ dividida por la permitividad del vacío $\varepsilon_0$:

$$
\Phi_E = \oint_S \vec{E} \cdot d\vec{A} = \frac{q_{\text{encerrada}}}{\varepsilon_0}
$$

### Aplicaciones con alta simetría
Gracias a la Ley de Gauss, es posible calcular campos eléctricos complejos aprovechando las simetrías espaciales para simplificar la integral de flujo:

* **Alambre rectilíneo infinito:** Usando una superficie gaussiana cilíndrica coaxial de radio $r$ y longitud $l$, se obtiene $E(2\pi r l) = \frac{\lambda l}{\varepsilon_0} \implies E = \frac{\lambda}{2\pi\varepsilon_0 r}$.
* **Lámina infinita no conductora:** Empleando una superficie gaussiana en forma de cilindro o caja rectangular que atraviesa la lámina, se deduce que $E = \frac{\sigma}{2\varepsilon_0}$.
* **Cascarón esférico (conductor o no conductor):**
  * Para $r < R$ (interior): Si es conductor en equilibrio, el campo interior es cero; si es un cascarón aislante delgado con carga superficial, la carga encerrada es cero ($E = 0$).
  * Para $r > R$ (exterior): Se comporta como una carga puntual concentrada en el centro: $E = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}$.
* **Esfera sólida cargada:**
  * **Uniforme:** Interior ($r < R$): $E = \frac{Q r}{4\pi\varepsilon_0 R^3}$. Exterior ($r > R$): $E = \frac{1}{4\pi\varepsilon_0}\frac{Q}{r^2}$.
  * **No uniforme:** Si la densidad volumétrica $\rho(r)$ varía con el radio, la carga encerrada se calcula integrando el volumen: $q_{\text{encerrada}} = \int_0^r \rho(r) 4\pi r^2 dr$.
* **Cilindro infinito y coaxial:** Aplicando superficies cilíndricas gaussianas adaptadas a los radios interiores y exteriores de los conductores coaxiales.

---

## 4. Aplicaciones atómicas

### Comparativa de modelos nucleares clásicos bajo la perspectiva electrostática

* **Modelo atómico de J. J. Thomson ("Budín de pasas"):**
  * Propuso que el átomo consistía en una esfera uniforme de carga positiva en la cual los electrones (con carga negativa) se encontraban incrustados como pasas en un pudín.
  * Bajo la electrostática, si un electrón sufría un desplazamiento pequeño respecto al centro de la esfera positiva, experimentaba una fuerza de restitución lineal (armónica), lo que predecía oscilaciones y frecuencias de emisión de radiación electromagnética acordes con los espectros ópticos conocidos en su época. Sin embargo, este modelo fue descartado experimentalmente.

* **Modelo atómico de Ernest Rutherford:**
  * Tras el experimento de dispersión de partículas alfa ($\alpha$) sobre láminas delgadas de oro, Rutherford demostró que la carga positiva no está distribuida en todo el volumen, sino concentrada en un núcleo central diminuto y denso.
  * Desde la perspectiva de la interacción electrostática pura, las partículas alfa (núcleos de helio, con carga $+2e$) experimentan una intensa fuerza de repulsión coulombiana al acercarse al núcleo masivo positivo, lo cual explica las grandes desviaciones angulares observadas y sentó las bases para la física atómica moderna.