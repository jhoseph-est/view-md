---
title: "Sistemas de transmisión de potencia - engranajes"
orden: 4
---

# Sistemas de Transmisión de Potencia: Engranajes

## 1. Cinemática y componentes de transmisión mecánica

### 1.1. Principios generales de los sistemas mecánicos de transmisión de potencia

Un **sistema mecánico de transmisión de potencia** tiene como función transferir energía mecánica desde un elemento motriz (motor eléctrico, turbina, motor de combustión) hacia un elemento conducido (máquina operadora), modificando generalmente la **velocidad angular** ($\omega$ o $n$), el **par torsor** ($T$) y, en muchos casos, el **plano o dirección del movimiento**.

#### Ecuaciones fundamentales de potencia y relación de transmisión

En ausencia de pérdidas por fricción ($\eta = 100\%$), la potencia mecánica transmitida $P$ permanece constante entre el árbol conductor (subíndice $1$) y el conducido (subíndice $2$):

$$
P = T_1 \cdot \omega_1 = T_2 \cdot \omega_2 \quad [\text{W}]
$$

Considerando el rendimiento mecánico real del sistema ($\eta \in (0, 1]$):

$$
P_{\text{salida}} = \eta \cdot P_{\text{entrada}} \qquad \Longrightarrow \qquad T_2 = \eta \cdot i \cdot T_1
$$

Donde la **relación de transmisión** ($i$) se define como el cociente entre la velocidad angular de entrada y la velocidad angular de salida:

$$
i = \frac{\omega_1}{\omega_2} = \frac{n_1}{n_2} = \frac{z_2}{z_1} = \frac{d_2}{d_1}
$$

* **Sistema reductor (**$i > 1$**):** Disminuye la velocidad de giro ($n_2 < n_1$) y multiplica proporcionalmente el par torsor ($T_2 > T_1$). Es la configuración más habitual en maquinaria industrial.

* **Sistema multiplicador (**$i < 1$**):** Aumenta la velocidad de giro ($n_2 > n_1$) reduciendo el par disponible ($T_2 < T_1$).

* **Inversión de giro:** Un par de ruedas dentadas exteriores invierte el sentido de rotación entre ejes paralelos; un engranaje interior (corona dentada) conserva el mismo sentido de giro.

```
flowchart TD
    A[Sistemas de Transmisión Mecánica] --> B[Por Rozamiento / Fricción]
    A --> C[Por Obstáculo Mecánico / Engranaje]
    
    B --> B1[Ruedas de Fricción: Baja potencia, deslizamiento]
    B --> B2[Correas Planas y Trapeciales: Ejes distantes, silencioso]
    
    C --> C1[Correas Dentadas Sincrónicas]
    C --> C2[Cadenas y Catarinas: Grandes distancias, relación exacta]
    C --> C3[Engranajes: Alta potencia, compacto, relación exacta]
    
    C3 --> D1[Ejes Paralelos: Cilíndricos Rectos y Helicoidales]
    C3 --> D2[Ejes Concurrentes: Cónicos]
    C3 --> D3[Ejes que se Cruzan: Tornillo Sin Fin - Corona]

```

| Mecanismo | Distancia entre Ejes | Relación de Transmisión | Capacidad de Carga | Rendimiento ($\eta$) | Ruido y Mantenimiento | 
| ----- | ----- | ----- | ----- | ----- | ----- | 
| **Engranajes** | Muy corta / Compacta | Exacta (sin deslizamiento) | Muy alta | $96\% - 99\%$ | Medio-alto / Requiere lubricación continua | 
| **Cadenas** | Media a larga | Exacta (poligonal) | Alta | $95\% - 98\%$ | Alto / Requiere tensado y lubricación | 
| **Correas Trapeciales** | Media a larga | Variable (leve deslizamiento) | Media | $90\% - 95\%$ | Muy bajo / Absorbe vibraciones, sin lubricación | 
| **Tornillo Sin Fin** | Corta (ejes a $90^\circ$) | Muy alta reducción ($10:1$ a $100:1$) | Media-alta | $50\% - 85\%$ | Muy silencioso / Posible irreversibilidad | 

> \[!NOTE\]
> **Terminología fundamental en pares engranados:** En todo par de ruedas dentadas que engranan entre sí, la rueda de **menor número de dientes** se denomina **Piñón** ($z_1$) y la rueda de **mayor número de dientes** se denomina **Rueda** o **Corona** ($z_2$), independientemente de cuál actúe como conductora o conducida.

## 2. Engranajes cilíndricos

### 2.1. Definición y clasificación: engranajes cilíndricos de dientes rectos y helicoidales

Los **engranajes cilíndricos** son ruedas dentadas cuya superficie primitiva de rodadura es un cilindro circular recto. Se emplean principalmente para transmitir potencia entre **ejes paralelos** (aunque los helicoidales también pueden conectar ejes que se cruzan en el espacio).

#### 1. Engranajes cilíndricos de dientes rectos

* **Geometría:** Los flancos de los dientes son paralelos al eje de rotación de la rueda. El perfil transversal estándar sigue la curva **evolvente de círculo** (norma ISO 53), garantizando que la relación de velocidades instantánea permanezca estrictamente constante durante todo el engranaje.

* **Dinámica de contacto:** Cada pareja de dientes entra y sale de contacto simultáneamente a lo largo de toda su anchura ($b$), generando un impacto periódico en cada engrane.

* **Cargas generadas:** Producen exclusivamente **fuerzas radiales** ($F_r$) y **tangenciales** ($F_t$); **no generan empuje axial** ($F_a = 0$).

* **Aplicación:** Velocidades periféricas bajas a medias, cajas de cambio deslizantes (donde los piñones se desplazan axialmente para engranar) y mecanismos de posicionamiento sencillo.

#### 2. Engranajes cilíndricos de dientes helicoidales

* **Geometría:** Los dientes están tallados siguiendo una hélice cilíndrica inclinada un **ángulo de hélice** ($\beta$, típicamente entre $10^\circ$ y $30^\circ$) respecto al eje de rotación.

* **Condición de engrane:** Para que dos ruedas helicoidales engranen en ejes paralelos deben tener exactamente el **mismo módulo normal** ($m_n$), el **mismo ángulo de presión** ($\alpha_n$), el **mismo ángulo de hélice** ($\beta$), pero **sentidos de hélice opuestos** (una hélice a derechas y otra a izquierdas).

* **Dinámica de contacto:** El contacto entre dientes comienza progresivamente en un extremo y avanza diagonalmente a través del ancho del diente, logrando un funcionamiento mucho más suave, silencioso y con mayor capacidad de carga (mayor grado de recubrimiento).

* **Cargas generadas:** Debido a la inclinación $\beta$, generan una **fuerza axial de empuje** ($F_a = F_t \cdot \tan \beta$) que obliga a emplear rodamientos de contacto angular o cónicos. Para anular este empuje manteniendo las ventajas helicoidales se utilizan **engranajes bihelicoidales (doble hélice o espina de pescado / Chevron)**.

| Característica Técnica | Cilíndricos de Dientes Rectos | Cilíndricos de Dientes Helicoidales | 
| ----- | ----- | ----- | 
| **Orientación del diente** | Paralelo al eje ($\beta = 0^\circ$). | Inclinado respecto al eje ($\beta > 0^\circ$). | 
| **Empuje axial (**$F_a$**)** | Nulo ($F_a = 0$). | Presente ($F_a = F_t \tan \beta$). | 
| **Nivel de ruido y vibración** | Alto a elevadas RPM (engrane brusco). | Muy bajo (engrane gradual y continuo). | 
| **Capacidad de transmisión** | Moderada a alta. | Superior (mayor longitud de contacto). | 
| **Desplazamiento axial bajo carga** | Posible (cajas desplazables). | Imposible (requieren sincronizadores). | 
| **Costo de fabricación** | Estándar / Económico. | Superior (tallado helicoidal complejo). | 

### 2.2. Representación técnica normalizada, nomenclatura de dientes y parámetros geométricos fundamentales bajo normas ISO (módulo, paso, diámetro primitivo, adendo, dedendo)

#### Representación técnica normalizada (ISO 2203)

En planos técnicos industriales, los dientes de los engranajes **nunca se dibujan individualmente** en las vistas principales (salvo en sectores parciales de ampliación o en engranajes de muy pocos dientes):

1. **Diámetro exterior o de cabeza (**$d_a$**):** Se dibuja con **línea continua gruesa** tanto en la vista frontal como en el corte longitudinal.

2. **Diámetro primitivo (**$d$**):** Se traza con **línea fina de trazo largo y punto** (línea de eje) en ambas vistas.

3. **Diámetro interior o de pie (**$d_f$**):**

   * En vistas exteriores sin cortar: se representa con **línea continua fina** (o se omite en representaciones simplificadas).

   * En vistas seccionadas (corte axial): se dibuja con **línea continua gruesa** como contorno de la masa del cuerpo de la rueda.

4. **Regla de no seccionamiento de dientes:** Por convención **ISO 128-40**, en un corte axial que pase por el eje del engranaje, **los dientes no se rayan** (se representan en vista exterior sin achurar, separando la corona rayada del diente blanco mediante la línea gruesa del diámetro de pie $d_f$).

5. **Orientación de dientes helicoidales (en vistas exteriores):** Se indican mediante **tres líneas continuas finas** paralelas inclinadas según el sentido de la hélice en el centro de la vista frontal sin cortar.

6. **Engranajes acoplados (en conjunto):** En la zona de engrane de dos ruedas, ninguna se oculta tras la otra (ambos diámetros exteriores $d_{a1}$ y $d_{a2}$ se dibujan con línea continua gruesa cruzándose), excepto si una rueda está situada delante de otra en proyección, donde prevalece la delantera.

<div align="center">
  <svg width="540" height="190" viewBox="0 0 540 190" xmlns="http://www.w3.org/2000/svg">
    <!-- VISTA EN CORTE AXIAL (IZQUIERDA) -->
    <text x="150" y="20" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a">Vista en Corte Axial (ISO 2203)</text>
    <!-- Eje de rotación -->
    <line x1="30" y1="120" x2="270" y2="120" stroke="#dc2626" stroke-width="1" stroke-dasharray="12,3,2,3"/>
    <!-- Cuerpo de la rueda rayado (solo hasta df) -->
    <!-- Parte superior del cuerpo -->
    <path d="M 105 55 L 195 55 L 195 75 L 180 75 L 180 95 L 120 95 L 120 75 L 105 75 Z" fill="url(#hatchGear)" stroke="#0f172a" stroke-width="2"/>
    <!-- Parte inferior del cuerpo -->
    <path d="M 105 185 L 195 185 L 195 165 L 180 165 L 180 145 L 120 145 L 120 165 L 105 165 Z" fill="url(#hatchGear)" stroke="#0f172a" stroke-width="2"/>
    <!-- Diente superior SIN RAYAR (entre df y da) -->
    <rect x="105" y="38" width="90" height="17" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
    <!-- Diente inferior SIN RAYAR (entre df y da) -->
    <rect x="105" y="185" width="90" height="17" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
    <!-- Líneas primitivas (trazo y punto fina) -->
    <line x1="95" y1="46" x2="205" y2="46" stroke="#dc2626" stroke-width="1" stroke-dasharray="10,2,2,2"/>
    <line x1="95" y1="194" x2="205" y2="194" stroke="#dc2626" stroke-width="1" stroke-dasharray="10,2,2,2"/>
    <!-- Etiquetas de diámetros en corte -->
    <text x="88" y="40" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="end" fill="#0f172a">da (Gruesa)</text>
    <text x="88" y="50" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="end" fill="#dc2626">d (Trazo-pto)</text>
    <text x="88" y="61" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="end" fill="#2563eb">df (Gruesa)</text>
    <text x="150" y="225" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#475569">Los dientes NO se rayan en corte axial</text>
    <!-- VISTA FRONTAL SIMPLIFICADA (DERECHA) -->
    <text x="415" y="20" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a">Vista Frontal Simplificada</text>
    <!-- Ejes centrales -->
    <line x1="320" y1="120" x2="510" y2="120" stroke="#dc2626" stroke-width="1" stroke-dasharray="12,3,2,3"/>
    <line x1="415" y1="30" x2="415" y2="210" stroke="#dc2626" stroke-width="1" stroke-dasharray="12,3,2,3"/>
    <!-- Círculo exterior da (gruesa) -->
    <circle cx="415" cy="120" r="82" fill="none" stroke="#0f172a" stroke-width="2"/>
    <!-- Círculo primitivo d (trazo y punto fina) -->
    <circle cx="415" cy="120" r="74" fill="none" stroke="#dc2626" stroke-width="1" stroke-dasharray="10,3,2,3"/>
    <!-- Círculo de pie df (fina) -->
    <circle cx="415" cy="120" r="65" fill="none" stroke="#2563eb" stroke-width="1"/>
    <!-- Cubo y agujero con chavetero -->
    <circle cx="415" cy="120" r="45" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="415" cy="120" r="25" fill="none" stroke="#0f172a" stroke-width="2"/>
    <!-- Chavetero superior -->
    <polyline points="410,95.5 410,89 420,89 420,95.5" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <text x="415" y="225" font-family="sans-serif" font-size="10" text-anchor="middle" fill="#475569">df se dibuja con línea fina (o se omite)</text>
  </svg>
</div>

#### Nomenclatura de dientes y parámetros geométricos fundamentales (ISO 53 / ISO 54)

Todo engranaje cilíndrico normalizado se construye a partir de tres parámetros base: el **número de dientes** ($z$), el **módulo** ($m$) y el **ángulo de presión** ($\alpha$, normalizado en $\alpha = 20^\circ$).

* **Módulo (**$m$**):** Relación entre el diámetro primitivo (en milímetros) y el número de dientes. Es el parámetro fundamental de dimensionamiento que define el tamaño del diente; para que dos ruedas engranen, **deben tener obligatoriamente el mismo módulo**. Los valores del módulo están estandarizados por la norma **ISO 54** (Serie I preferente: $1, 1.25, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10, 12, 16, 20\text{ mm}$).
  

  $$
  m = \frac{d}{z} = \frac{p}{\pi} \quad [\text{mm}]
  $$

* **Paso Circular (**$p$**):** Distancia medida sobre la circunferencia primitiva entre dos puntos homólogos de dientes consecutivos.
  

  $$
  p = \pi \cdot m = s + e \quad [\text{mm}]
  $$

* **Diámetro Primitivo (**$d$**):** Diámetro de la circunferencia imaginaria sobre la cual ruedan sin deslizar los dos engranajes en contacto.
  

  $$
  d = m \cdot z \quad [\text{mm}]
  $$

* **Adendo o Altura de Cabeza (**$h_a$**):** Distancia radial comprendida entre la circunferencia primitiva y la circunferencia exterior (de cabeza).
  

  $$
  h_a = 1 \cdot m \quad [\text{mm}]
  $$

* **Dedendo o Altura de Pie (**$h_f$**):** Distancia radial comprendida entre la circunferencia primitiva y la circunferencia interior (de pie o raíz). Incluye la holgura de fondo ($c = 0.25 \cdot m$) para evitar que la cabeza de un diente choque contra el fondo del diente opuesto.
  

  $$
  h_f = 1.25 \cdot m \quad [\text{mm}]
  $$

* **Altura Total del Diente (**$h$**):** Suma radial del adendo y del dedendo.
  

  $$
  h = h_a + h_f = 2.25 \cdot m \quad [\text{mm}]
  $$

* **Diámetro Exterior o de Cabeza (**$d_a$**):**
  

  $$
  d_a = d + 2 \cdot h_a = m \cdot (z + 2) \quad [\text{mm}]
  $$

* **Diámetro Interior o de Pie (**$d_f$**):**
  

  $$
  d_f = d - 2 \cdot h_f = m \cdot (z - 2.5) \quad [\text{mm}]
  $$

* **Espesor Circular del Diente (**$s$**) y Anchura del Vanos (**$e$**):** Medidos sobre la circunferencia primitiva (sin juego entre flancos):
  

  $$
  s = e = \frac{p}{2} = \frac{\pi \cdot m}{2} \approx 1.5708 \cdot m \quad [\text{mm}]
  $$

* **Distancia entre Centros (**$a$**):** Separación exacta entre los ejes de rotación de dos engranajes exteriores acoplados:
  

  $$
  a = \frac{d_1 + d_2}{2} = \frac{m \cdot (z_1 + z_2)}{2} \quad [\text{mm}]
  $$

<div align="center">
  <svg width="540" height="190" viewBox="0 0 540 190" xmlns="http://www.w3.org/2000/svg">
    <!-- Arcos de circunferencia -->
    <!-- Cabeza da -->
    <path d="M 80 55 Q 260 25 440 55" fill="none" stroke="#0f172a" stroke-width="1.5" stroke-dasharray="6,4"/>
    <!-- Primitiva d -->
    <path d="M 80 95 Q 260 65 440 95" fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="12,3,2,3"/>
    <!-- Pie df -->
    <path d="M 80 145 Q 260 115 440 145" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="6,4"/>
    <!-- Perfil de dos dientes -->
    <path d="M 95 142 L 130 137 C 135 115, 142 75, 148 45 L 182 45 C 188 75, 195 115, 200 137 L 265 137 C 270 115, 277 75, 283 45 L 317 45 C 323 75, 330 115, 335 137 L 415 142" fill="none" stroke="#0f172a" stroke-width="2.5"/>
    <!-- Cotas de Adendo (ha) y Dedendo (hf) -->
    <line x1="232" y1="41" x2="232" y2="80" stroke="#16a34a" stroke-width="1.5"/>
    <line x1="227" y1="41" x2="237" y2="41" stroke="#16a34a" stroke-width="1.5"/>
    <line x1="227" y1="80" x2="237" y2="80" stroke="#16a34a" stroke-width="1.5"/>
    <text x="223" y="64" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="end" fill="#16a34a">ha = m</text>
    <line x1="232" y1="80" x2="232" y2="130" stroke="#2563eb" stroke-width="1.5"/>
    <line x1="227" y1="130" x2="237" y2="130" stroke="#2563eb" stroke-width="1.5"/>
    <text x="223" y="109" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="end" fill="#2563eb">hf = 1.25m</text>
    <!-- Cota Altura Total h -->
    <line x1="365" y1="41" x2="365" y2="130" stroke="#0f172a" stroke-width="1.5"/>
    <line x1="360" y1="41" x2="370" y2="41" stroke="#0f172a" stroke-width="1.5"/>
    <line x1="360" y1="130" x2="370" y2="130" stroke="#0f172a" stroke-width="1.5"/>
    <text x="373" y="90" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="start" fill="#0f172a">h = 2.25m</text>
    <!-- Espesor s y Vano e sobre primitiva -->
    <line x1="143" y1="82" x2="187" y2="82" stroke="#dc2626" stroke-width="2"/>
    <text x="165" y="75" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#dc2626">s = p/2</text>
    <line x1="187" y1="82" x2="278" y2="82" stroke="#7c3aed" stroke-width="2"/>
    <text x="232" y="152" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#7c3aed">e = p/2 (Vano)</text>
    <!-- Paso circular p -->
    <path d="M 143 168 L 278 168" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <line x1="143" y1="82" x2="143" y2="173" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
    <line x1="278" y1="82" x2="278" y2="173" stroke="#94a3b8" stroke-width="1" stroke-dasharray="3,2"/>
    <text x="210" y="182" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a">Paso Circular p = π · m</text>
  </svg>
</div>

#### Formulario comparativo: Cilíndricos Rectos vs. Cilíndricos Helicoidales

En los **engranajes helicoidales**, debido al ángulo de hélice $\beta$, se distinguen los parámetros **normales** (perpendiculares al diente, subíndice $n$, que corresponden a la herramienta de corte normalizada) y los parámetros **aparentes o frontales** (medidos en el plano transversal de la rueda, subíndice $t$):

| Parámetro Geométrico | Engranaje Cilíndrico Recto ($\beta = 0^\circ$) | Engranaje Cilíndrico Helicoidal ($\beta > 0^\circ$) | 
| ----- | ----- | ----- | 
| **Módulo aparente (**$m_t$**)** | $m$ | $m_t = \dfrac{m_n}{\cos \beta}$ | 
| **Paso aparente (**$p_t$**)** | $p = \pi \cdot m$ | $p_t = \dfrac{p_n}{\cos \beta} = \pi \cdot m_t$ | 
| **Diámetro primitivo (**$d$**)** | $d = m \cdot z$ | $d = m_t \cdot z = \dfrac{m_n \cdot z}{\cos \beta}$ | 
| **Adendo (**$h_a$**)** | $h_a = m$ | $h_a = m_n$ | 
| **Dedendo (**$h_f$**)** | $h_f = 1.25 \cdot m$ | $h_f = 1.25 \cdot m_n$ | 
| **Diámetro exterior (**$d_a$**)** | $d_a = d + 2m = m(z + 2)$ | $d_a = d + 2m_n = m_n \left(\dfrac{z}{\cos \beta} + 2\right)$ | 
| **Diámetro interior (**$d_f$**)** | $d_f = d - 2.5m = m(z - 2.5)$ | $d_f = d - 2.5m_n = m_n \left(\dfrac{z}{\cos \beta} - 2.5\right)$ | 
| **Distancia entre centros (**$a$**)** | $a = \dfrac{m(z_1 + z_2)}{2}$ | $a = \dfrac{m_n(z_1 + z_2)}{2 \cos \beta}$ | 

> \[!WARNING\]
> **Trampa frecuente en planos de fabricación de engranajes:** En todo plano de fabricación de un engranaje cilíndrico debe incluirse obligatoriamente un **cuadro de datos de dentado** (generalmente en la esquina superior derecha) que especifique: Número de dientes ($z$), Módulo ($m$ o $m_n$), Ángulo de presión ($\alpha$), Ángulo y sentido de hélice ($\beta$, derechas/izquierdas), Diámetro primitivo ($d$), Espesor cordal del diente y Rueda conjugada. **Nunca** se acota la altura individual de un diente sobre el dibujo.

## 3. Engranajes cónicos

### 3.1. Definición y características geométricas de engranajes cónicos

Los **engranajes cónicos** transmiten potencia entre **ejes que se cortan (concurrentes)** en un punto común llamado **vértice de los conos**, generalmente formando un ángulo entre ejes $\Sigma = 90^\circ$ (aunque pueden diseñarse para cualquier ángulo $\Sigma \neq 90^\circ$).

#### Principio geométrico de rodadura

* Las superficies primitivas de rodadura no son cilindros, sino **troncos de cono** cuyos vértices coinciden exactamente en el punto de intersección de ambos ejes de rotación.

* **Sección variable del diente:** Debido a la convergencia hacia el vértice del cono, el espesor, la altura y el módulo del diente **disminuyen continuamente** desde el extremo exterior (base mayor del cono) hacia el extremo interior (base menor).

* **Convención de referencia ISO (ISO 677 / ISO 23509):** Todos los parámetros nominales (módulo $m$, diámetro primitivo $d$, adendo $h_a$, dedendo $h_f$) se definen y miden exclusivamente en la **cara exterior (base mayor)** del cono primitivo.

* **Tipos principales según la traza del diente:**

  1. **Cónicos de dientes rectos:** Las generatrices de los dientes convergen en línea recta hacia el vértice del cono. Son económicos pero ruidosos a altas velocidades periféricas ($v > 5\text{ m/s}$).

  2. **Cónicos de dientes espirales (Gleason / Klingelnberg):** Dientes curvos e inclinados que engranan progresivamente; soportan altas velocidades y cargas elevadas con bajo ruido (ej. diferenciales automotrices).

  3. **Engranajes hipoides:** Variante cónica curva cuyos ejes **no se cortan** (están descentrados), permitiendo piñones más robustos y reducción de altura en transmisiones vehiculares.

### 3.2. Representación gráfica del engranaje cónico en su vista frontal y sección correspondiente

Según la norma **ISO 2203**, la representación de un engranaje cónico consta habitualmente de una **vista en corte axial** (o semicorte) y una **vista frontal** (proyectada perpendicularmente al eje, observando desde la cara exterior de los dientes):

1. **Vista en Corte Axial:**

   * Se trazan las **generatrices del cono primitivo** con **línea fina de trazo largo y punto**, haciéndolas converger exactamente en el punto de intersección con el eje de rotación (vértice del cono).

   * El **cono complementario (cono posterior)**, perpendicular a la generatriz del cono primitivo en su extremo exterior, define los límites de la cabeza ($h_a$) y del pie ($h_f$) del diente.

   * Los dientes cortados por el plano axial **se dibujan sin rayar** (misma regla que en cilíndricos), delimitados por la línea gruesa del cono exterior (de cabeza) y la línea gruesa del cono interior (de pie).

   * Se acota el **diámetro exterior** ($d_a$), la distancia de montaje desde el plano de referencia hasta el vértice del cono (**distancia de montaje** $L_{\text{montaje}}$ o cota de asiento), el ángulo del cono exterior ($\delta_a$) y el ancho de diente ($b$).

2. **Vista Frontal (vista desde la base mayor):**

   * Se dibujan tres círculos concéntricos correspondientes al extremo exterior:

     * **Círculo exterior mayor (**$d_a$**):** Línea continua gruesa.

     * **Círculo primitivo exterior (**$d$**):** Línea fina de trazo largo y punto.

     * **Círculo de pie exterior (**$d_f$**):** Línea continua fina (o se omite en dibujo simplificado).

   * En el interior se muestra la proyección del extremo menor del diente con línea continua gruesa.

<div align="center">
  <svg width="540" height="190" viewBox="0 0 540 190" xmlns="http://www.w3.org/2000/svg">
    <!-- Eje horizontal de rotación -->
    <line x1="25" y1="150" x2="355" y2="150" stroke="#dc2626" stroke-width="1" stroke-dasharray="14,3,2,3"/>
    <!-- Vértice del cono O -->
    <circle cx="315" cy="150" r="3" fill="#dc2626"/>
    <text x="323" y="145" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626">O (Vértice)</text>
    <!-- Generatrices primitivas (trazo y punto) hacia O(315,150) -->
    <line x1="90" y1="45" x2="315" y2="150" stroke="#dc2626" stroke-width="1" stroke-dasharray="10,2,2,2"/>
    <line x1="90" y1="255" x2="315" y2="150" stroke="#dc2626" stroke-width="1" stroke-dasharray="10,2,2,2"/>
    <!-- Diente superior SIN RAYAR -->
    <polygon points="94,36 162,68 152,90 84,58" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
    <!-- Diente inferior SIN RAYAR -->
    <polygon points="94,264 162,232 152,210 84,242" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
    <!-- Cuerpo rayado del engranaje cónico -->
    <path d="M 84 58 L 152 90 L 152 120 L 65 120 L 65 85 L 84 85 Z" fill="url(#hatchBevel)" stroke="#0f172a" stroke-width="2"/>
    <path d="M 84 242 L 152 210 L 152 180 L 65 180 L 65 215 L 84 215 Z" fill="url(#hatchBevel)" stroke="#0f172a" stroke-width="2"/>
    <!-- Agujero interior sin rayar -->
    <line x1="65" y1="120" x2="152" y2="120" stroke="#0f172a" stroke-width="2"/>
    <line x1="65" y1="180" x2="152" y2="180" stroke="#0f172a" stroke-width="2"/>
    <!-- Cotas geométricas clave -->
    <!-- Diámetro primitivo d -->
    <line x1="45" y1="45" x2="45" y2="255" stroke="#dc2626" stroke-width="1.2"/>
    <line x1="40" y1="45" x2="90" y2="45" stroke="#dc2626" stroke-width="0.8" stroke-dasharray="3,2"/>
    <line x1="40" y1="255" x2="90" y2="255" stroke="#dc2626" stroke-width="0.8" stroke-dasharray="3,2"/>
    <text x="40" y="145" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="end" fill="#dc2626">d</text>
    <!-- Diámetro exterior da -->
    <line x1="25" y1="36" x2="25" y2="264" stroke="#0f172a" stroke-width="1.2"/>
    <line x1="20" y1="36" x2="94" y2="36" stroke="#0f172a" stroke-width="0.8" stroke-dasharray="3,2"/>
    <line x1="20" y1="264" x2="94" y2="264" stroke="#0f172a" stroke-width="0.8" stroke-dasharray="3,2"/>
    <text x="20" y="145" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="end" fill="#0f172a">da</text>
    <!-- Ángulo primitivo delta -->
    <path d="M 245 150 A 70 70 0 0 1 251 120" fill="none" stroke="#2563eb" stroke-width="1.5"/>
    <text x="235" y="138" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="end" fill="#2563eb">δ</text>
    <!-- Generatriz del cono R -->
    <text x="215" y="92" font-family="sans-serif" font-size="11" font-weight="bold" fill="#dc2626" transform="rotate(25 215,92)">R (Generatriz)</text>
    <!-- VISTA FRONTAL (DERECHA) -->
    <text x="445" y="20" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a">Vista Frontal (Base Mayor)</text>
    <line x1="365" y1="150" x2="525" y2="150" stroke="#dc2626" stroke-width="1" stroke-dasharray="10,3,2,3"/>
    <line x1="445" y1="65" x2="445" y2="235" stroke="#dc2626" stroke-width="1" stroke-dasharray="10,3,2,3"/>
    <!-- Círculo da (gruesa) -->
    <circle cx="445" cy="150" r="72" fill="none" stroke="#0f172a" stroke-width="2"/>
    <!-- Círculo primitivo d (trazo y punto) -->
    <circle cx="445" cy="150" r="65" fill="none" stroke="#dc2626" stroke-width="1" stroke-dasharray="10,3,2,3"/>
    <!-- Círculo df (fina) -->
    <circle cx="445" cy="150" r="57" fill="none" stroke="#2563eb" stroke-width="1"/>
    <!-- Círculo interior de cabeza menor (gruesa) -->
    <circle cx="445" cy="150" r="42" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <!-- Agujero central -->
    <circle cx="445" cy="150" r="22" fill="none" stroke="#0f172a" stroke-width="2"/>
  </svg>
</div>

### 3.3. Formulación matemática para el cálculo y dimensionamiento de parámetros según normas ISO

Para un par de engranajes cónicos de dientes rectos (piñón $1$ y rueda $2$) con **ángulo entre ejes** $\Sigma$ y **módulo exterior** $m$:

#### 1. Ángulos de los conos primitivos ($\delta_1, \delta_2$)

La suma de los semiángulos de los conos primitivos debe ser igual al ángulo entre los ejes de transmisión ($\Sigma = \delta_1 + \delta_2$):

* **Caso general (ángulo entre ejes** $\Sigma$ **cualquiera):**
  

  $$
  \tan \delta_1 = \frac{\sin \Sigma}{\dfrac{z_2}{z_1} + \cos \Sigma} \qquad ; \qquad \delta_2 = \Sigma - \delta_1
  $$

* **Caso estándar de ejes ortogonales (**$\Sigma = 90^\circ$**):**
  

  $$
  \tan \delta_1 = \frac{z_1}{z_2} = \frac{1}{i} \qquad ; \qquad \tan \delta_2 = \frac{z_2}{z_1} = i \qquad ; \qquad \delta_1 + \delta_2 = 90^\circ
  $$

#### 2. Diámetros primitivos exteriores ($d_1, d_2$) y longitud de generatriz ($R$)

* **Diámetros primitivos en la base mayor:**
  

  $$
  d_1 = m \cdot z_1 \qquad ; \qquad d_2 = m \cdot z_2
  $$

* **Longitud de la generatriz del cono primitivo (**$R$**):** Distancia desde el vértice del cono hasta la circunferencia primitiva exterior (común a ambas ruedas):
  

  $$
  R = \frac{d_1}{2 \cdot \sin \delta_1} = \frac{d_2}{2 \cdot \sin \delta_2} = \frac{m}{2} \sqrt{z_1^2 + z_2^2} \quad (\text{para } \Sigma = 90^\circ)
  $$

#### 3. Alturas del diente en la cara exterior y ángulos de diente

* **Adendo exterior (**$h_a$**):** $h_a = 1 \cdot m$

* **Dedendo exterior (**$h_f$**):** $h_f = 1.25 \cdot m$ *(o* $1.2 \cdot m$ *según sistema de tallado)*

* **Ángulo de cabeza (**$\theta_a$**):** Ángulo formado entre la generatriz del cono primitivo y la del cono exterior:
  

  $$
  \tan \theta_a = \frac{h_a}{R} = \frac{m}{R}
  $$

* **Ángulo de pie (**$\theta_f$**):** Ángulo formado entre la generatriz del cono primitivo y la del cono de raíz:
  

  $$
  \tan \theta_f = \frac{h_f}{R} = \frac{1.25 \cdot m}{R}
  $$

* **Ángulo del cono exterior / de cabeza (**$\delta_a$**):** Ángulo de torneado de la pieza en bruto antes de tallar los dientes:
  

  $$
  \delta_{a1} = \delta_1 + \theta_a \qquad ; \qquad \delta_{a2} = \delta_2 + \theta_a
  $$

* **Ángulo del cono interior / de pie (**$\delta_f$**):** Ángulo de inclinación de la fresa o cuchilla durante el tallado:
  

  $$
  \delta_{f1} = \delta_1 - \theta_f \qquad ; \qquad \delta_{f2} = \delta_2 - \theta_f
  $$

#### 4. Diámetros exteriores ($d_{a1}, d_{a2}$) y longitud máxima del diente ($b$)

* **Diámetros exteriores (de cabeza):** Dado que el adendo $h_a$ se mide perpendicularmente a la generatriz del cono primitivo (sobre el cono complementario), su proyección radial se multiplica por $\cos \delta$:
  

  $$
  d_{a1} = d_1 + 2 \cdot h_a \cdot \cos \delta_1 = m \cdot (z_1 + 2 \cos \delta_1)
  $$

  $$
  d_{a2} = d_2 + 2 \cdot h_a \cdot \cos \delta_2 = m \cdot (z_2 + 2 \cos \delta_2)
  $$

* **Ancho de diente (**$b$**):** Para evitar dientes excesivamente frágiles en el extremo menor, la norma limita la longitud del diente a:
  

  $$
  b \le \frac{R}{3} \qquad \text{y} \qquad b \le 10 \cdot m
  $$

* **Número de dientes virtual (Aproximación de Tredgold):** Para calcular la resistencia o seleccionar la fresa de módulo en cónicos rectos, se utiliza el número de dientes equivalente de un engranaje cilíndrico virtual de radio igual a la generatriz del cono complementario:
  

  $$
  z_v = \frac{z}{\cos \delta}
  $$

> \[!EXAMPLE\]
> **Cálculo completo de un par cónico ortogonal (**$\Sigma = 90^\circ$**):**
> Dimensionar un par de engranajes cónicos de dientes rectos con módulo $m = 4\text{ mm}$, piñón de $z_1 = 20$ dientes y rueda de $z_2 = 40$ dientes:
>
> 1. **Relación de transmisión:** $i = \dfrac{40}{20} = 2$ (reductor $2:1$).
>
> 2. **Diámetros primitivos exteriores:**
>    $d_1 = 4 \cdot 20 = 80\text{ mm}$ ; $d_2 = 4 \cdot 40 = 160\text{ mm}$.
>
> 3. **Ángulos de los conos primitivos:**
>    $\delta_1 = \arctan\left(\dfrac{20}{40}\right) = \arctan(0.5) = 26.57^\circ$ ($26^\circ 34'$).
>    $\delta_2 = 90^\circ - 26.57^\circ = 63.43^\circ$ ($63^\circ 26'$).
>
> 4. **Longitud de generatriz (**$R$**):**
>    $R = \dfrac{80}{2 \cdot \sin(26.57^\circ)} = \dfrac{40}{0.4472} = 89.44\text{ mm}$.
>
> 5. **Ángulos de cabeza y pie:**
>    $\theta_a = \arctan\left(\dfrac{4}{89.44}\right) = 2.56^\circ$ ($2^\circ 34'$).
>    $\theta_f = \arctan\left(\dfrac{5}{89.44}\right) = 3.20^\circ$ ($3^\circ 12'$).
>
> 6. **Ángulos de torneado exterior (**$\delta_a$**):**
>    $\delta_{a1} = 26.57^\circ + 2.56^\circ = 29.13^\circ$ ; $\delta_{a2} = 63.43^\circ + 2.56^\circ = 65.99^\circ$.
>
> 7. **Diámetros exteriores (**$d_a$**):**
>    $d_{a1} = 80 + 2(4)\cos(26.57^\circ) = 80 + 7.16 = 87.16\text{ mm}$.
>    $d_{a2} = 160 + 2(4)\cos(63.43^\circ) = 160 + 3.58 = 163.58\text{ mm}$.
>
> 8. **Ancho máximo de diente recomendado:** $b_{\max} = \dfrac{89.44}{3} \approx 29.8\text{ mm} \rightarrow \text{Adoptar } b = 28\text{ mm}$.