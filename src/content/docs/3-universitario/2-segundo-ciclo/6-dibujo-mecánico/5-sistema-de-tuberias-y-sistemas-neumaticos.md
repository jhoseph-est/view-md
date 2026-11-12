---
title: "Sistema de tuberías y sistemas neumáticos"
orden: 5
---

# Sistema de Tuberías y Sistemas Neumáticos

## 1. Instalaciones de tuberías industriales

### 1.1. Simbología para instalaciones de tuberías: forma, grupos y estándares de representación

En ingeniería de procesos y plantas industriales, la representación de redes de tuberías se rige principalmente por las normas **ISO 10628** (diagramas de flujo), **ISO 14617** (símbolos gráficos para diagramas), **ASME Y32.2.3** y **ANSI/ISA-5.1** (instrumentación y control).

* **Tipos de representación gráfica:**
  1. **Representación monofilar (línea única / esquemática):** El eje de la tubería se traza mediante una **línea continua gruesa**, independientemente de su diámetro real. Los accesorios y válvulas se dibujan mediante símbolos normalizados superpuestos sobre dicha línea. Es el estándar en esquemas de flujo, planos de conjunto e isométricos de taller.
  2. **Representación bifilar (doble línea / real):** Se dibujan las dos paredes exteriores de la tubería a escala real. Se utiliza únicamente en tuberías de gran diámetro ($\text{DN} \ge 300\text{ mm}$), salas de máquinas congestionadas o estudios de interferencia espacial.

* **Grupos funcionales de simbología:**
  * **Líneas de conducción:** Tubería principal (gruesa), tubería secundaria o auxiliar (media), línea de señal/instrumentación (fina o discontinua), tubería con aislamiento térmico (línea principal rodeada de rectángulos o trazos paralelos) y tubería encamisada o calefactada.
  * **Conexiones y uniones:** Uniones bridadas (dos trazos perpendiculares paralelos), uniones roscadas (un trazo corto perpendicular), uniones soldadas a tope (punto relleno o cruz en la junta) y uniones enchufadas/pegadas.
  * **Cambios de dirección y derivaciones:** Codos a $90^\circ$ y $45^\circ$, tes rectas, tes reductoras, cruces y reducciones concéntricas o excéntricas.
  * **Válvulas y órganos de control:** Válvulas de bloqueo, regulación, retención y seguridad.

### 1.2. Representación gráfica de tuberías en proyección isométrica y en vistas diédricas principales con simbología normalizada

#### Proyección Ortogonal (Vistas Diédricas — ISO 6412-1)

* **Tramos paralelos al plano de proyección:** Se proyectan en verdadera magnitud mediante línea continua gruesa.
* **Tramos perpendiculares al plano de proyección (hacia el observador o alejándose):**
  * **Tubería que viene hacia el observador (sube o sale):** Se representa con un **círculo pequeño con un punto central** ($\odot$).
  * **Tubería que se aleja del observador (baja o entra):** Se representa con un **círculo pequeño con una cruz inscrita** ($\otimes$) o círculo vacío en monofilar simple.
* **Cruce de tuberías sin conexión:** Cuando dos tuberías se cruzan en proyección pero están a distinta cota (no conectadas), se interrumpe ligeramente la línea de la tubería que pasa por detrás, o bien se dibuja un pequeño puente semicircular sobre la línea continua.

#### Proyección Isométrica (ISO 6412-2)

* Los ejes principales $X$ (Norte-Sur) e $Y$ (Este-Oeste) forman ángulos de $30^\circ$ respecto a la horizontal, mientras que el eje $Z$ (Elevación / Vertical) es estrictamente vertical ($90^\circ$).
* **Desviaciones oblicuas (cambios de plano):** Cuando una tubería gira simultáneamente en dos ejes (ej. cambio de elevación y desplazamiento horizontal mediante codos a $45^\circ$), se dibuja un **triángulo o paralelogramo de orientación (rayado de plano)** con línea continua fina para indicar inequívocamente el plano espacial en el que ocurre la desviación (horizontal, vertical Norte-Sur o vertical Este-Oeste).

<div align="center">
  <svg width="560" height="230" viewBox="0 0 560 230" xmlns="http://www.w3.org/2000/svg">
    <rect width="560" height="230" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <!-- SECCIÓN IZQUIERDA: VISTAS DIÉDRICAS -->
    <text x="135" y="22" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a">Proyección Ortogonal (Planta)</text>
    <!-- Tramo horizontal -->
    <line x1="40" y1="80" x2="140" y2="80" stroke="#0f172a" stroke-width="3"/>
    <!-- Codo que sube (hacia observador) -->
    <circle cx="140" cy="80" r="6" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
    <circle cx="140" cy="80" r="2" fill="#0f172a"/>
    <text x="140" y="65" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#2563eb">Sube (Hacia obs.)</text>
    <!-- Tramo que baja (se aleja) -->
    <line x1="140" y1="150" x2="220" y2="150" stroke="#0f172a" stroke-width="3"/>
    <circle cx="140" cy="150" r="6" fill="#ffffff" stroke="#0f172a" stroke-width="2"/>
    <line x1="136" y1="146" x2="144" y2="154" stroke="#0f172a" stroke-width="1.5"/>
    <line x1="144" y1="146" x2="136" y2="154" stroke="#0f172a" stroke-width="1.5"/>
    <text x="140" y="172" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#dc2626">Baja (Se aleja)</text>
    <!-- Cruce sin conexión -->
    <line x1="65" y1="120" x2="65" y2="195" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="35" y1="150" x2="58" y2="150" stroke="#0f172a" stroke-width="2.5"/>
    <line x1="72" y1="150" x2="100" y2="150" stroke="#0f172a" stroke-width="2.5"/>
    <text x="65" y="212" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#475569">Cruce sin unión (cota distinta)</text>
    <!-- SEPARADOR -->
    <line x1="270" y1="15" x2="270" y2="215" stroke="#cbd5e1" stroke-width="1" stroke-dasharray="4,4"/>
    <!-- SECCIÓN DERECHA: ISOMÉTRICO CON DESVIACIÓN OBLICUA -->
    <text x="415" y="22" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a">Isométrico (Desviación Espacial 45°)</text>
    <!-- Rosa de orientación Norte -->
    <line x1="510" y1="55" x2="535" y2="40" stroke="#dc2626" stroke-width="1.5"/>
    <polygon points="535,40 527,41 531,47" fill="#dc2626"/>
    <text x="540" y="40" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">N</text>
    <!-- Tubería isométrica -->
    <!-- Tramo inicial vertical -->
    <line x1="315" y1="190" x2="315" y2="135" stroke="#0f172a" stroke-width="3"/>
    <!-- Tramo horizontal eje X (30°) -->
    <line x1="315" y1="135" x2="385" y2="95" stroke="#0f172a" stroke-width="3"/>
    <!-- Desviación oblicua en plano horizontal (X + Y) -->
    <line x1="385" y1="95" x2="465" y2="95" stroke="#0f172a" stroke-width="3"/>
    <!-- Triángulo de proyección horizontal (hatch) -->
    <polygon points="385,95 425,72 465,95" fill="#dbeafe" stroke="#2563eb" stroke-width="1" stroke-dasharray="3,2"/>
    <line x1="405" y1="84" x2="405" y2="95" stroke="#2563eb" stroke-width="1"/>
    <line x1="425" y1="72" x2="425" y2="95" stroke="#2563eb" stroke-width="1"/>
    <line x1="445" y1="84" x2="445" y2="95" stroke="#2563eb" stroke-width="1"/>
    <!-- Tramo final vertical -->
    <line x1="465" y1="95" x2="465" y2="45" stroke="#0f172a" stroke-width="3"/>
    <!-- Brida final -->
    <line x1="457" y1="45" x2="473" y2="45" stroke="#0f172a" stroke-width="2.5"/>
    <text x="425" y="122" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#2563eb">Rayado indica desviación horizontal</text>
  </svg>
</div>


### 1.3. Representación de válvulas, conexiones y accesorios de tubería

La simbología de válvulas combina un cuerpo geométrico básico (que indica la función hidráulica) con un símbolo superior que define el **tipo de actuador** (volante manual, palanca, diafragma neumático, motor eléctrico o solenoide):

| Elemento / Accesorio | Símbolo Normalizado (Descripción Gráfica) | Función en la Red de Tuberías |
| :--- | :--- | :--- |
| **Válvula de Compuerta** | Dos triángulos opuestos por el vértice ($\bowtie$) con barra vertical central. | Aislamiento total (abierta/cerrada); mínima pérdida de carga; **no apta para regular caudal**. |
| **Válvula de Globo (Asiento)** | Dos triángulos opuestos con un **círculo relleno** en el vértice común. | Regulación precisa de caudal y estrangulamiento; genera alta caída de presión. |
| **Válvula de Bola / Esfera** | Dos triángulos opuestos con un **círculo vacío** en el centro. | Apertura/cierre rápido de cuarto de vuelta ($90^\circ$) y estanqueidad hermética. |
| **Válvula de Mariposa** | Dos barras verticales paralelas unidas por una línea diagonal con círculo central. | Aislamiento y regulación en tuberías de gran diámetro con bajo espacio axial. |
| **Válvula de Retención (Check)** | Línea inclinada con flecha o bola entre dos trazos perpendiculares ($\text{N}$ invertida con flecha). | Permite el flujo en **un solo sentido** y bloquea automáticamente el retroceso. |
| **Válvula de Seguridad / Alivio** | Dos triángulos en ángulo de $90^\circ$ (entrada inferior, descarga lateral) con resorte. | Descarga automática de sobrepresión para proteger recipientes y líneas. |
| **Filtro en Y (Strainer)** | Triángulo o apéndice inclinado hacia abajo bajo la línea principal. | Retención de partículas sólidas antes de bombas, contadores y válvulas de control. |
| **Reducción Concéntrica / Excéntrica** | Trapecio simétrico (concéntrica) o trapecio con base plana inferior/superior (excéntrica). | Cambio de diámetro nominal ($\text{DN}_1 \rightarrow \text{DN}_2$). La excéntrica evita bolsas de aire en aspiración de bombas. |

### 1.4. Uso e interpretación de código de colores en transporte de fluidos industriales

Para prevenir errores operativos y garantizar la seguridad industrial, las tuberías se identifican mediante colores normalizados según el fluido transportado (**ASME A13.1** / **DIN 2403** / **UNE 1063**):

| Fluido Transportado | Color Base (Norma DIN 2403 / UNE) | Color Base (Norma ASME A13.1) | Color de Letras / Flechas de Flujo |
| :--- | :--- | :--- | :--- |
| **Agua potable / industrial** | **Verde** | **Verde** | Blanco |
| **Vapor de agua** | **Rojo** | **Gris plateado / Gris** (o Amarillo según presión) | Blanco / Negro |
| **Aire comprimido** | **Azul** | **Azul** | Blanco |
| **Gases combustibles / Inflamables** | **Amarillo** (con franja roja) | **Amarillo** | Negro |
| **Líquidos combustibles / Aceites** | **Marrón / Pardo** | **Marrón** | Blanco |
| **Ácidos y álcalis corrosivos** | **Naranja / Violeta** | **Naranja** | Negro |
| **Agua contra incendios** | **Rojo seguridad** | **Rojo** | Blanco |

> [!TIP]
> **Regla de señalización en planta:** El código de colores debe aplicarse mediante bandas adhesivas o pintura en puntos críticos: junto a cada válvula, en ambos lados de muros o tabiques atravesados, en derivaciones (tes) y cada $10\text{ m} - 15\text{ m}$ en tramos rectos largos, acompañado siempre de una **flecha que indique el sentido de circulación** y el nombre o fórmula química del fluido.

### 1.5. Casos prácticos de transporte y distribución de fluidos en plantas industriales

* **Red de distribución de vapor y retorno de condensados:** Requiere pendiente descendente continua ($0.5\%$ a $1\%$) en el sentido del flujo hacia los **purgadores de condensado** (trampas de vapor), incorporando liras o juntas de dilatación térmica para absorber la expansión lineal ($\Delta L = \alpha \cdot L \cdot \Delta T$).
* **Anillo cerrado de aire comprimido:** Se diseña en circuito cerrado (bucle) con pendiente de $1\%$ a $2\%$ hacia puntos bajos con purgas automáticas. Las tomas secundarias hacia los puestos de trabajo **deben salir siempre por la parte superior** de la tubería principal (cuello de cisne) para evitar arrastrar condensados líquidos hacia las herramientas neumáticas.

---

## 2. Diagramas y documentación técnica de tuberías

### 2.1. Diagramas de flujo de procesos e instrumentación: definición, características y simbología ISO/ANSI

El desarrollo de una planta industrial sigue una jerarquía documental progresiva desde el concepto químico-termodinámico hasta el montaje mecánico:

1. **BFD (Block Flow Diagram — Diagrama de Bloques):** Muestra operaciones unitarias principales mediante rectángulos y flujos de materia/energía básicos.
2. **PFD (Process Flow Diagram — Diagrama de Flujo de Proceso — ISO 10628):** Representa los equipos principales (reactores, bombas, intercambiadores, columnas), las corrientes principales de proceso numeradas y los balances de masa, presión y temperatura. Omite válvulas menores, drenajes y tuberías auxiliares.
3. **P&ID (Piping and Instrumentation Diagram — Diagrama de Tuberías e Instrumentación — ISA-5.1):** Es el documento maestro de ingeniería de detalle. Contiene **todas** las tuberías (con diámetro, especificación de material `spec` y aislamiento), **todas** las válvulas, equipos mecánicos, lazos de control e instrumentación.

#### Identificación de Instrumentos (Norma ANSI/ISA-5.1)

Cada instrumento se representa mediante un círculo (globo) dividido por una línea horizontal (si es accesible al operador en sala de control) y un código alfanumérico (**Tag**):

$$\underbrace{\text{P}}_{\text{Variable medida}} \underbrace{\text{I C}}_{\text{Función}} - \underbrace{104}_{\text{Lazo de control}}$$

* **Primera letra (Variable medida):** `F` = Caudal (*Flow*), `L` = Nivel (*Level*), `P` = Presión (*Pressure*), `T` = Temperatura (*Temperature*), `A` = Análisis.
* **Letras sucesivas (Función):** `I` = Indicador, `R` = Registrador, `C` = Controlador, `T` = Transmisor, `V` = Válvula, `A` = Alarma, `S` = Interruptor (*Switch*).
* **Tipos de líneas de señal:**
  * Línea discontinua (`- - - -`): Señal eléctrica o electrónica ($4 - 20\text{ mA}$).
  * Línea continua con doble barra inclinada (`-//-`): Señal neumática ($0.2 - 1.0\text{ bar}$ o $3 - 15\text{ psi}$).
  * Línea con círculos pequeños (`-o-o-`): Enlace de software / bus de datos digital.

### 2.2. Planos de detalle y dibujo de montaje de sistemas de tuberías: definición y especificaciones técnicas

* **Planos de Implantación / Arreglo General de Tuberías (*Piping Layout / General Arrangement*):** Vistas en planta y elevación a escala ($1:20$, $1:25$, $1:50$) que muestran la ubicación espacial exacta de las líneas respecto a las coordenadas estructurales de la planta (ejes de columnas, niveles de piso terminado `EL +4.500`), distancias libres de mantenimiento y ubicación de soportes (*pipe racks*, guías, anclajes).
* **Especificación de Tuberías (*Piping Class / Spec*):** Código asignado a cada línea que define su presión nominal (`Class 150#`, `PN16`), material (acero al carbono `ASTM A106 Gr.B`, acero inoxidable `316L`), cédula o espesor de pared (`SCH 40`, `SCH 80`) y tipo de juntas.
  * *Ejemplo de etiqueta de línea:* `4"-CW-1025-A1A` $\rightarrow$ Diámetro $4\text{"}$, Fluido: Agua de enfriamiento (*Cooling Water*), Línea Nº `1025`, Especificación de material `A1A`.

### 2.3. Dibujo isométrico de tuberías (*spool*): características, acotación y ejemplos de aplicación

El **isométrico de tuberías (*spool drawing*)** es un plano de fabricación individual (sin escala estricta, pero proporcionado) correspondiente a una única línea o subconjunto prefabricable en taller (*spool*), diseñado para ser transportado y ensamblado en campo mediante bridas o soldaduras de montaje (*Field Welds - FW*).

#### Características y reglas de acotación de un *Spool*

* **Orientación:** Siempre incluye la **flecha del Norte de Planta** orientada hacia la esquina superior derecha o superior izquierda.
* **Acotación de longitudes:** Se acotan siempre **de centro a centro** de accesorios (codos, tes, válvulas) o de centro a cara de brida, indicando las coordenadas espaciales ($N, E, EL$) en los puntos de inicio y conexión con equipos.
* **Diferenciación de soldaduras:**
  * **Soldadura de taller (*Shop Weld - SW*):** Punto relleno sobre la línea (ejecutada bajo ambiente controlado en taller).
  * **Soldadura de campo (*Field Weld - FW*):** Bandera o círculo con cruz (ejecutada durante el montaje final en planta).
* **Lista de Materiales (*BOM - Bill of Materials*):** Tabla integrada en el mismo plano que desglosa longitud total de tubo recto, cantidad exacta de codos, tes, bridas, espárragos y empaquetaduras necesarios para fabricar ese *spool*.

---

## 3. Componentes de potencia y control en sistemas neumáticos

### 3.1. Elementos de acondicionamiento de aire: unidad de mantenimiento (filtro, regulador, lubricador - FRL)

El aire atmosférico aspirado por el compresor contiene humedad, polvo en suspensión y aceite degradado. Antes de ingresar a las válvulas y actuadores debe tratarse mediante la **Unidad de Mantenimiento (FRL)**:

1. **Filtro de aire comprimido (F):** Retiene partículas sólidas (típicamente de $5\ \mu\text{m}$ a $40\ \mu\text{m}$) mediante un cartucho sinterizado y separa el agua condensada por centrifugado (deflector helicoidal) hacia un vaso inferior con **purga manual o automática**.
2. **Regulador de presión (R):** Mantiene constante la presión de trabajo secundaria (típicamente $6\text{ bar}$) independientemente de las fluctuaciones de la red primaria y del consumo de los actuadores. Incorpora un **manómetro** y un orificio de escape secundario (*relieving*) para despresurizar excesos aguas abajo.
3. **Lubricador (L):** Pulveriza una fina niebla de aceite mineral de baja viscosidad en la corriente de aire (proporcional al caudal mediante efecto Venturi) para reducir la fricción y el desgaste en cilindros y válvulas de corredera. *(Nota: En sistemas modernos con componentes autolubricados o industria alimentaria/farmacéutica se omite el lubricador, empleando solo unidades **FR**).*

### 3.2. Elementos de distribución y control direccional: válvulas de distribución

Las **válvulas distribuidoras** gobiernan el arranque, parada y sentido del flujo de aire hacia los actuadores. Según la norma **ISO 1219-1**, se designan mediante dos cifras separadas por una barra:

$$\text{Número de Vías (orificios útiles)} \ /\ \text{Número de Posiciones de conmutación}$$

#### Reglas de representación normalizada (ISO 1219-1)

* Cada posición de la válvula se dibuja como un **cuadrado contiguo**.
* Dentro de cada cuadrado, las **flechas** indican el sentido de circulación del aire, y los trazos transversales en forma de **`T`** indican vías **bloqueadas (cerradas)**.
* Las conexiones exteriores (tuberías) se dibujan siempre unidas al cuadrado correspondiente a la **posición de reposo (inicial)** de la válvula.
* **Identificación normalizada de vías:**

| Vía (ISO 5599 - Numérica) | Vía (CETOP - Alfabética) | Función de la Conexión |
| :---: | :---: | :--- |
| **`1`** | **`P`** | Alimentación de aire a presión (Presión). |
| **`2` , `4`** | **`B` , `A`** | Vías de trabajo / utilización conectadas al actuador. |
| **`3` , `5`** | **`R` , `S`** | Escapes / evacuación de aire a la atmósfera (con o sin silenciador). |
| **`12` , `14`** | **`Y` , `Z`** | Señales de pilotaje neumático (la señal `14` comunica vía `1` con `4`; la `12` comunica `1` con `2`). |

* **Válvulas distribuidoras estándar:**
  * **`2/2`:** Dos vías, dos posiciones (abre o cierra el paso; actúa como llave de paso).
  * **`3/2`:** Tres vías, dos posiciones. Se emplea para gobernar **cilindros de simple efecto** y como válvulas de señal (pulsadores, finales de carrera). Pueden ser **Normalmente Cerradas (NC)** o **Normalmente Abiertas (NA)**.
  * **`4/2` y `5/2`:** Cuatro o cinco vías, dos posiciones. Se emplean para gobernar **cilindros de doble efecto** (una vía llena una cámara mientras la otra vacía la cámara opuesta). Las `5/2` permiten regular independientemente la velocidad de avance y retroceso mediante estranguladores en los escapes `3` y `5`.
  * **`5/3`:** Cinco vías, tres posiciones (posición central de centros cerrados, centros a escape o centros a presión para paradas intermedias de emergencia).

### 3.3. Válvulas lógicas y de bloqueo: válvula selectora (función OR), válvula de simultaneidad (función AND) y válvulas de bloqueo/retención

* **Válvula Antirretorno (de retención / bloqueo):** Libera el paso del aire en un sentido (levantando una bola o cono contra un resorte suave) y lo bloquea herméticamente en el sentido contrario.
* **Válvula Selectora de Circuito (Función Lógica `OR` — Selector O):** Posee dos entradas ($X, Y$) y una salida ($A$). Cuando entra aire por $X$ **o** por $Y$ (o por ambas), la corredera interna bloquea el lado sin presión y permite el paso hacia $A$. Se usa para accionar un cilindro desde dos puntos distintos (ej. pulsador de marcha en panel y pedal).
  $$A = X + Y$$
* **Válvula de Simultaneidad (Función Lógica `AND` — Selector Y):** Posee dos entradas ($X, Y$) y una salida ($A$). Únicamente entrega señal en $A$ si existe presión simultáneamente en $X$ **y** en $Y$ (si llega una sola señal, la corredera cierra ese paso; si llegan a distinta presión, pasa la de menor presión). Es obligatoria en **mandos bimanuales de seguridad** (prensas, guillotinas).
  $$A = X \cdot Y$$
* **Válvula de Escape Rápido:** Se monta directamente sobre la cámara del cilindro; durante el escape evacúa el aire directamente a la atmósfera sin pasar por las tuberías largas ni la válvula distribuidora, incrementando drásticamente la velocidad del émbolo.

### 3.4. Válvulas de regulación de caudal y válvulas de presión (limitadoras, reductoras)

* **Válvula Estranguladora Unidireccional (Reguladora de caudal):** Combina en paralelo un estrangulamiento regulable y una válvula antirretorno. Estrangula el flujo en **un solo sentido** y permite el paso libre en el sentido opuesto.
  * **Regulación a la salida (estrangulamiento del aire de escape):** Es el método **estándar y obligatorio** para cilindros de doble efecto, ya que mantiene ambas cámaras presurizadas ("colchón de aire"), evitando saltos bruscos (*stick-slip*) cuando la carga varía.
* **Válvula Limitadora de Presión (de seguridad):** Permanece cerrada por un resorte calibrado hasta que la presión del sistema supera el valor límite ajustado, momento en que abre y descarga el exceso a la atmósfera.
* **Válvula de Secuencia:** Similar a la limitadora, pero en lugar de descargar a la atmósfera, envía una **señal neumática de salida** cuando la presión en la línea alcanza el umbral preajustado (útil para garantizar fuerza de apriete antes de iniciar el siguiente movimiento).

### 3.5. Temporizadores neumáticos y módulos de retardo

Un **temporizador neumático** es un bloque compacto compuesto por tres elementos integrados:
1. Una **válvula estranguladora unidireccional** regulable.
2. Un **depósito acumulador** de volumen fijo.
3. Una **válvula distribuidora `3/2`** pilotada neumáticamente con retorno por resorte.

* **Funcionamiento (Retardo a la conexión — NC):** Al llegar la señal de pilotaje $Z$, el aire pasa lentamente a través del estrangulador hacia el depósito acumulador. Cuando la presión en el depósito alcanza el umbral de conmutación (aprox. $3 - 4\text{ bar}$), la válvula `3/2` conmuta y entrega señal de salida en `2`. El tiempo de retardo $t$ es proporcional al volumen del depósito y inversamente proporcional a la apertura del estrangulador.

<div align="center">
  <svg width="560" height="210" viewBox="0 0 560 210" xmlns="http://www.w3.org/2000/svg">
    <rect width="560" height="210" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <!-- 1. VÁLVULA SELECTORA (OR) -->
    <text x="95" y="22" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a">1. Selectora (OR)</text>
    <rect x="45" y="55" width="100" height="45" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <!-- Líneas internas OR -->
    <line x1="25" y1="77" x2="65" y2="77" stroke="#0f172a" stroke-width="1.5"/>
    <line x1="125" y1="77" x2="165" y2="77" stroke="#0f172a" stroke-width="1.5"/>
    <line x1="95" y1="35" x2="95" y2="77" stroke="#0f172a" stroke-width="1.5"/>
    <!-- Asientos en V y bola -->
    <polyline points="72,68 65,77 72,86" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <polyline points="118,68 125,77 118,86" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="80" cy="77" r="6" fill="#2563eb"/>
    <text x="30" y="70" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a">X</text>
    <text x="155" y="70" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a">Y</text>
    <text x="103" y="45" font-family="sans-serif" font-size="10" font-weight="bold" fill="#2563eb">A</text>
    <text x="95" y="118" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#475569">A = X + Y (Bola móvil)</text>
    <!-- 2. VÁLVULA DE SIMULTANEIDAD (AND) -->
    <text x="280" y="22" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a">2. Simultaneidad (AND)</text>
    <rect x="230" y="55" width="100" height="45" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <!-- Corredera H -->
    <line x1="210" y1="77" x2="255" y2="77" stroke="#0f172a" stroke-width="1.5"/>
    <line x1="305" y1="77" x2="350" y2="77" stroke="#0f172a" stroke-width="1.5"/>
    <line x1="280" y1="35" x2="280" y2="77" stroke="#0f172a" stroke-width="1.5"/>
    <!-- Tope doble -->
    <line x1="255" y1="67" x2="255" y2="87" stroke="#dc2626" stroke-width="2"/>
    <line x1="305" y1="67" x2="305" y2="87" stroke="#dc2626" stroke-width="2"/>
    <line x1="255" y1="77" x2="305" y2="77" stroke="#dc2626" stroke-width="2"/>
    <text x="215" y="70" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a">X</text>
    <text x="340" y="70" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a">Y</text>
    <text x="288" y="45" font-family="sans-serif" font-size="10" font-weight="bold" fill="#dc2626">A</text>
    <text x="280" y="118" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#475569">A = X · Y (Seguridad bimanual)</text>
    <!-- 3. ESTRANGULADOR UNIDIRECCIONAL -->
    <text x="465" y="22" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a">3. Regulador Caudal</text>
    <!-- Línea principal con estrangulamiento -->
    <line x1="400" y1="77" x2="530" y2="77" stroke="#0f172a" stroke-width="1.5"/>
    <path d="M 445 69 Q 465 76 485 69" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <path d="M 445 85 Q 465 78 485 85" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <!-- Flecha diagonal de regulación -->
    <line x1="452" y1="90" x2="478" y2="63" stroke="#16a34a" stroke-width="1.5"/>
    <polygon points="478,63 471,65 475,70" fill="#16a34a"/>
    <!-- Bypass con antirretorno -->
    <polyline points="430,77 430,50 500,50 500,77" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <polyline points="462,43 454,50 462,57" fill="none" stroke="#0f172a" stroke-width="1.5"/>
    <circle cx="461" cy="50" r="4" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <text x="465" y="118" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#475569">Estrangula → | Libre ←</text>
    <!-- 4. UNIDAD FRL SIMPLIFICADA (INFERIOR) -->
    <text x="280" y="148" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a">4. Símbolo Simplificado Unidad de Mantenimiento (FRL - ISO 1219)</text>
    <line x1="150" y1="175" x2="220" y2="175" stroke="#0f172a" stroke-width="2"/>
    <rect x="220" y="160" width="120" height="30" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
    <!-- Filtro (triángulo + puntos) -->
    <line x1="240" y1="160" x2="240" y2="190" stroke="#0f172a" stroke-width="1"/>
    <line x1="230" y1="160" x2="230" y2="190" stroke="#0f172a" stroke-width="1" stroke-dasharray="3,2"/>
    <polygon points="227,184 233,184 230,189" fill="#0f172a"/>
    <!-- Regulador (flecha vertical + manómetro) -->
    <line x1="280" y1="160" x2="280" y2="190" stroke="#0f172a" stroke-width="1.5"/>
    <polygon points="280,162 276,169 284,169" fill="#0f172a"/>
    <circle cx="280" cy="149" r="7" fill="#ffffff" stroke="#0f172a" stroke-width="1.2"/>
    <line x1="277" y1="152" x2="283" y2="146" stroke="#dc2626" stroke-width="1.2"/>
    <!-- Lubricador (línea vertical inferior) -->
    <line x1="320" y1="160" x2="320" y2="190" stroke="#0f172a" stroke-width="1"/>
    <line x1="330" y1="160" x2="330" y2="172" stroke="#2563eb" stroke-width="2"/>
    <line x1="340" y1="175" x2="410" y2="175" stroke="#0f172a" stroke-width="2"/>
  </svg>
</div>

### 3.6. Ejemplos de aplicación y montaje de elementos neumáticos

* **Control directo vs. Control indirecto:**
  * En **control directo**, un pulsador `3/2` alimenta directamente un cilindro de simple efecto de pequeño diámetro.
  * En **control indirecto**, las válvulas de mando y finales de carrera trabajan a baja sección (líneas de control de $4\text{ mm}$ o $6\text{ mm}$) para pilotar una válvula distribuidora de potencia (`5/2` biestable o monoestable) ubicada lo más cerca posible del cilindro, minimizando el volumen muerto y acelerando la respuesta.

---

## 4. Diseño, lectura y esquematización de circuitos neumáticos

### 4.1. Representación gráfica normalizada de esquemas neumáticos

Para garantizar claridad universal en planos neumáticos (**ISO 1219-2**), los componentes se distribuyen verticalmente en niveles jerárquicos de flujo de energía y señal (de abajo hacia arriba), dibujando **todos los elementos en su estado inicial (reposo)**:

1. **Nivel 0 (Base):** Fuente de energía neumática (compresor, acumulador y unidad de mantenimiento FRL).
2. **Nivel 1 (Entrada de señales):** Pulsadores de marcha/paro, selectores, finales de carrera de rodillo y sensores de proximidad.
3. **Nivel 2 (Procesamiento lógico):** Válvulas selectoras (`OR`), válvulas de simultaneidad (`AND`), temporizadores y válvulas de secuencia.
4. **Nivel 3 (Órganos de gobierno / Potencia):** Válvulas distribuidoras principales (`5/2`, `4/2`, `3/2`) pilotadas.
5. **Nivel 4 (Cima):** Actuadores lineales (cilindros) y rotativos (motores neumáticos), acompañados de sus reguladores de caudal.

> [!NOTE]
> **Representación de finales de carrera (captadores de posición):** Para evitar cruces caóticos de líneas, los rodillos o finales de carrera (`1S1`, `1S2`, `2S1`, `2S2`) se dibujan en el **Nivel 1** (zona inferior de mando), mientras que su ubicación física real en los extremos de carrera del cilindro se indica mediante **marcas de posición** verticales dibujadas sobre la prolongación del vástago en el **Nivel 4**.

### 4.2. Diagrama de situación o disposición espacial de actuadores y elementos

El **diagrama de situación** (croquis tecnológico o esquema de máquina) muestra la disposición geométrica real de los cilindros, piezas, tolvas y sensores en la máquina, permitiendo comprender la función mecánica del proceso (sujetar, perforar, expulsar, doblar) antes de traducirlo a lógica neumática.

### 4.3. Diagramas de funcionamiento: diagramas espacio-fase y diagramas espacio-tiempo (análisis de carrera, velocidad y tiempo)

Cuando intervienen dos o más actuadores en una secuencia automática, su comportamiento cronológico se representa mediante diagramas normalizados (**VDI 3260**):

* **Diagrama Espacio-Fase:** Representa el estado (carrera) de cada actuador en función de las **fases o pasos secuenciales** ($1, 2, 3, \dots, n$), asignando un ancho igual a cada fase sin considerar su duración real en segundos.
  * El estado **`0`** (abajo) indica vástago **retraído** ($A-$).
  * El estado **`1`** (arriba) indica vástago **extendido** ($A+$).
  * Las **líneas de señal** (flechas que unen el final de una carrera con el inicio de otra) muestran qué final de carrera dispara el siguiente movimiento.
* **Diagrama Espacio-Tiempo:** El eje horizontal representa el **tiempo real (**$t$**)** a escala. La pendiente de la recta de desplazamiento ($\tan \alpha = \Delta s / \Delta t$) permite visualizar directamente la **velocidad de avance y retroceso** de cada cilindro (mayor pendiente = mayor velocidad) y los tiempos de espera o temporización (tramos horizontales).

<div align="center">
  <svg width="560" height="235" viewBox="0 0 560 235" xmlns="http://www.w3.org/2000/svg">
    <rect width="560" height="235" rx="8" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="280" y="22" font-family="sans-serif" font-size="12" font-weight="bold" text-anchor="middle" fill="#0f172a">Diagrama Espacio-Fase — Secuencia: A+  B+  B-  A-</text>
    <!-- Cuadrícula de Fases (1 a 5) -->
    <!-- Líneas verticales -->
    <line x1="120" y1="38" x2="120" y2="195" stroke="#94a3b8" stroke-width="1"/>
    <line x1="205" y1="38" x2="205" y2="195" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
    <line x1="290" y1="38" x2="290" y2="195" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
    <line x1="375" y1="38" x2="375" y2="195" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
    <line x1="460" y1="38" x2="460" y2="195" stroke="#94a3b8" stroke-width="1" stroke-dasharray="4,3"/>
    <line x1="530" y1="38" x2="530" y2="195" stroke="#94a3b8" stroke-width="1"/>
    <!-- Números de Fase -->
    <text x="162" y="48" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#475569">Fase 1</text>
    <text x="247" y="48" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#475569">Fase 2</text>
    <text x="332" y="48" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#475569">Fase 3</text>
    <text x="417" y="48" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#475569">Fase 4</text>
    <text x="495" y="48" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="middle" fill="#475569">Fase 5=1</text>
    <!-- CILINDRO A (Sujeción) -->
    <text x="55" y="88" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a">Cilindro 1A</text>
    <text x="55" y="101" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#64748b">(Sujeción)</text>
    <text x="110" y="68" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="end" fill="#0f172a">1</text>
    <text x="110" y="112" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="end" fill="#0f172a">0</text>
    <line x1="120" y1="64" x2="530" y2="64" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="120" y1="108" x2="530" y2="108" stroke="#cbd5e1" stroke-width="1"/>
    <!-- Traza Cilindro A: Sube en F1, mantiene F2-F3, baja en F4 -->
    <polyline points="120,108 205,64 375,64 460,108 530,108" fill="none" stroke="#2563eb" stroke-width="2.5"/>
    <!-- CILINDRO B (Taladrado / Estampado) -->
    <text x="55" y="163" font-family="sans-serif" font-size="11" font-weight="bold" text-anchor="middle" fill="#0f172a">Cilindro 2A</text>
    <text x="55" y="176" font-family="sans-serif" font-size="9" text-anchor="middle" fill="#64748b">(Trabajo)</text>
    <text x="110" y="143" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="end" fill="#0f172a">1</text>
    <text x="110" y="187" font-family="sans-serif" font-size="10" font-weight="bold" text-anchor="end" fill="#0f172a">0</text>
    <line x1="120" y1="139" x2="530" y2="139" stroke="#cbd5e1" stroke-width="1"/>
    <line x1="120" y1="183" x2="530" y2="183" stroke="#cbd5e1" stroke-width="1"/>
    <!-- Traza Cilindro B: Reposo F1, sube F2, baja F3, reposo F4 -->
    <polyline points="120,183 205,183 290,139 375,183 530,183" fill="none" stroke="#16a34a" stroke-width="2.5"/>
    <!-- LÍNEAS DE SEÑAL (CAPTADORES) -->
    <!-- Pulsador Start S1 -> A+ -->
    <circle cx="120" cy="108" r="3.5" fill="#dc2626"/>
    <text x="134" y="121" font-family="sans-serif" font-size="9" font-weight="bold" fill="#dc2626">Start (0S1)</text>
    <!-- Final carrera 1S2 -> dispara B+ -->
    <circle cx="205" cy="64" r="3.5" fill="#dc2626"/>
    <path d="M 205 64 L 205 183" fill="none" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,2"/>
    <polygon points="205,183 201,175 209,175" fill="#dc2626"/>
    <text x="210" y="58" font-family="sans-serif" font-size="9" font-weight="bold" fill="#dc2626">1S2</text>
    <!-- Final carrera 2S2 -> dispara B- -->
    <circle cx="290" cy="139" r="3.5" fill="#dc2626"/>
    <text x="290" y="131" font-family="sans-serif" font-size="9" font-weight="bold" text-anchor="middle" fill="#dc2626">2S2</text>
    <!-- Final carrera 2S1 -> dispara A- -->
    <circle cx="375" cy="183" r="3.5" fill="#dc2626"/>
    <path d="M 375 183 L 375 64" fill="none" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,2"/>
    <polygon points="375,64 371,72 379,72" fill="#dc2626"/>
    <text x="380" y="195" font-family="sans-serif" font-size="9" font-weight="bold" fill="#dc2626">2S1</text>
    <!-- Final carrera 1S1 -> Fin ciclo -->
    <circle cx="460" cy="108" r="3.5" fill="#dc2626"/>
    <text x="465" y="121" font-family="sans-serif" font-size="9" font-weight="bold" fill="#dc2626">1S1</text>
  </svg>
</div>

### 4.4. Esquema funcional del sistema neumático: definición, características y designación de componentes

Según la norma **ISO 1219-2**, cada componente en el esquema funcional recibe un código identificador compuesto por:

$$\underbrace{1}_{\text{Nº de circuito / grupo}} \ \underbrace{\text{A}}_{\text{Código de componente}} \ \underbrace{1}_{\text{Nº correlativo}}$$

* **Código alfabético del tipo de componente:**
  * **`A`:** Actuadores (cilindros, motores neumáticos: `1A1`, `2A1`).
  * **`V`:** Válvulas distribuidoras, reguladoras y lógicas (`1V1` = válvula principal de potencia del actuador 1; `1V2` = estrangulador).
  * **`S`:** Captadores de señal / sensores / pulsadores (`1S1` = final de carrera retraído del cilindro 1; `1S2` = final de carrera extendido del cilindro 1; `0S1` = pulsador general de marcha).
  * **`Z`:** Elementos de preparación y acondicionamiento (`0Z1` = unidad FRL).
  * **`P`:** Fuente de presión / compresor (`0P1`).

### 4.5. Aplicaciones, resolución de ejercicios integrales y diseño de esquemas neumáticos secuenciales

#### El Problema de las Señales Permanentes (Contrapresión / Bloqueo)

Cuando se diseña un circuito secuencial con válvulas distribuidoras biestables (con memoria), si un cilindro debe avanzar y retroceder dentro del mismo ciclo (ej. $A+\ B+\ B-\ A-$), el final de carrera `1S2` permanece pisado mecánicamente mientras el cilindro `2A` avanza y retrocede. Si `1S2` mantiene aire permanente en el pilotaje de avance de `2V1` (`14`), bloqueará el pilotaje de retroceso (`12`) cuando `2S2` intente hacer regresar al cilindro `2A`.

#### Métodos sistemáticos de resolución de secuencias

1. **Método Intuitivo (con finales de carrera escamoteables / unidireccionales):** Se reemplaza el rodillo fijo por un **rodillo abatible** que solo emite un pulso fugaz en un sentido de paso (al avanzar o al retroceder), evitando señales permanentes. Válido para secuencias simples de 2 cilindros.
2. **Método Paso a Paso (Anulación secuencial):** Cada fase de la secuencia posee su propia memoria neumática (`3/2` biestable). Cada paso activa el siguiente y **anula (resetea) el paso anterior**, garantizando que solo exista presión en una línea de grupo a la vez.
3. **Método de Cascada (Eliminación de señales bloqueantes):**

```
flowchart LR
    P1[1. Escribir secuencia algebraica: A+ B+ B- A-] --> P2[2. Dividir en grupos sin repetir letra]
    P2 --> P3[Grupo I: A+ B+ | Grupo II: B- A-]
    P3 --> P4[3. Asignar n - 1 válvulas de memoria 5/2]
    P4 --> P5[4. Conectar cambios de grupo y finales de carrera]
```

> [!EXAMPLE]
> **Diseño integral mediante Método de Cascada — Secuencia $A+\ B+\ B-\ A-$:**
> 1. **División en grupos (sin que ningún actuador se repita dentro de un mismo grupo):**
>    * **Grupo I:** $A+\ B+$
>    * **Grupo II:** $B-\ A-$
>    * Total: $n = 2\text{ grupos} \implies \text{Se requiere } n - 1 = 1\text{ válvula de memoria } 5/2\text{ biestable}$ para alimentar alternadamente la **Línea de Presión I ($L_1$)** y la **Línea de Presión II ($L_2$)**.
> 2. **Primer movimiento de cada grupo (alimentado directamente desde su línea de grupo):**
>    * Inicio de **Grupo I** ($A+$): Cuando $L_1$ recibe aire, pilota directamente la vía `14` de la válvula principal `1V1` $\rightarrow$ **Cilindro `1A` avanza ($A+$)**.
>    * Inicio de **Grupo II** ($B-$): Cuando $L_2$ recibe aire, pilota directamente la vía `12` de la válvula principal `2V1` $\rightarrow$ **Cilindro `2A` retrocede ($B-$)**.
> 3. **Movimientos internos dentro de cada grupo (condicionados por finales de carrera alimentados desde su grupo):**
>    * Dentro del **Grupo I** ($B+$): El final de carrera `1S2` (alimentado desde $L_1$) pilota la vía `14` de `2V1` $\rightarrow$ **Cilindro `2A` avanza ($B+$)**.
>    * Dentro del **Grupo II** ($A-$): El final de carrera `2S1` (alimentado desde $L_2$) pilota la vía `12` de `1V1` $\rightarrow$ **Cilindro `1A` retrocede ($A-$)**.
> 4. **Cambio de grupo (último final de carrera de cada grupo conmuta la válvula de cascada):**
>    * Fin del **Grupo I** (`2S2`, alimentado desde $L_1$) pilota la válvula de cascada para cortar aire en $L_1$ y dar presión a $L_2$ (eliminando instantáneamente la señal permanente de `1S2`).
>    * Fin del **Grupo II** (`1S1`, alimentado desde $L_2$, en serie con el pulsador de marcha `0S1` mediante una válvula `AND`) conmuta la válvula de cascada para activar nuevamente $L_1$ e iniciar el siguiente ciclo.