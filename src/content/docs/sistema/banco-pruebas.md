---
title: "Banco Maestro de Pruebas y Calibración Editorial"
subtitulo: "Evaluación integral de renderizado: Jerarquías, KaTeX, Callouts, Shiki, Mermaid y Media"
header: "true"
institucion: "UNIVERSIDAD NACIONAL DE INGENIERÍA"
facultad: "FACULTAD DE INGENIERÍA MECÁNICA"
escuela: "Escuela Profesional de Ingeniería Mecánica"
docente: "ING. CARLOS MENDOZA"
ciudad: "LIMA — PERÚ"
anio: 2026
logo: "/assets/logos/logo-uni.png"
mostrarIndice: true
orden: 1
integrantes:
  - nombre: "PAREDES TELLO, OWIN RENATO"
    codigo: "20152554C"
    rol: "Coordinador / Simulación CFD"
  - nombre: "SÁNCHEZ DÍAZ, JHOSEPH"
    codigo: "20181234A"
    rol: "Modelado Analítico"
  - nombre: "GÓMEZ RIVERA, CARLOS"
    codigo: "20194567B"
    rol: "Adquisición de Datos"
contributors:
---

# 1. Jerarquía Tipográfica y Prosa Editorial

Este bloque evalúa el espaciado vertical, interlineado base y transformaciones de texto tanto en vista web como en exportación a papel.

## 1.1 Formato de Caracteres y Énfasis

Texto regular con variaciones: **negrita de contraste**, *cursiva formal*, ***negrita cursiva***, <del>tachado correctivo</del>, <u>subrayado nativo</u>, <mark>resaltado</mark>, `código inline monospaciado` y combinaciones numéricas como $H_2O$ y $X^{n+1}$.

### Subnivel H3: Subsección Estructural
Texto de párrafo demostrativo para evaluar alineación de márgenes y sangría de primera línea.

#### Subnivel H4: Subdivisión de Párrafo
Texto continuo para comprobar que los márgenes superiores e inferiores no colapsen en cascada.

##### Subnivel H5: Encabezado Menor
Párrafo complementario para verificar tamaños de fuente proporcionales.

###### Subnivel H6: Nivel Mínimo de Profundidad
Cierre del árbol jerárquico de títulos sin solapamientos.

> Cita formal en bloque estándar. Diseñada para evaluar el margen izquierdo de sangría, la barra lateral de acento cromático y la opacidad tipográfica del cuerpo citado.

---

# 2. Formulación Matemática con KaTeX

Evaluación de límites visuales, matrices, operadores y comportamiento responsivo con scroll horizontal.

## 2.1 Ecuaciones en Línea (Inline)

El cálculo del flujo diferencial evalúa gradientes $\nabla \cdot \mathbf{u} = 0$, constantes $\pi \approx 3.14159$, relaciones de energía $E = mc^3$, raíces $\sqrt{a^2 + b^2}$, operadores parciales $\frac{\partial T}{\partial x}$, fracciones forzadas $\dfrac{1}{2}$ y series $\displaystyle \sum_{k=1}^n k = \frac{n(n+1)}{2}$ sin desfasar la altura de línea de la prosa circundante.

## 2.2 Ecuaciones en Bloque (Display)

Integral fundamental de transferencia y límites asintóticos:

$$
\int_{0}^{\infty} \frac{x^3}{e^x - 1} \, dx = \frac{\pi^4}{15}, \qquad \lim_{x \to 0} \left( \frac{\sin x}{x} \right) = 1 \tag{1}
$$

Sistema multilínea alineado con operador condicional por tramos:

$$
\begin{aligned}
\mathbf{\tau}_{ij} &= \mu \left( \frac{\partial u_i}{\partial x_j} + \frac{\partial u_j}{\partial x_i} \right) - \frac{2}{3}\mu (\nabla \cdot \mathbf{u}) \delta_{ij} \\
f(x) &= \begin{cases}
\dfrac{-b \pm \sqrt{b^2 - 4ac}}{2a} & \text{si } x \ge 0 \\
\left[ \sum_{i=1}^m \prod_{j=1}^n a_{ij} \right]^2 & \text{si } x < 0
\end{cases}
\end{aligned} \tag{2}
$$

Álgebra matricial y tensores de deformación:

$$
\mathbf{M}_{3 \times 3} = \begin{bmatrix}
\sigma_{xx} & \tau_{xy} & \tau_{xz} \\
\tau_{yx} & \sigma_{yy} & \tau_{yz} \\
\tau_{zx} & \tau_{zy} & \sigma_{zz}
\end{bmatrix}, \qquad 
\det(\mathbf{M}) = \begin{vmatrix}
a & b \\
c & d
\end{vmatrix} = ad - bc \tag{3}
$$

Ecuación extendida para validación de scroll horizontal (evita rotura de layout):

$$
\frac{\partial^2 \psi}{\partial x^2} + \frac{\partial^2 \psi}{\partial y^2} + \frac{\partial^2 \psi}{\partial z^2} + \frac{2m}{\hbar^2} \left( E - V(x,y,z) - \frac{e^2}{4\pi\epsilon_0 \sqrt{x^2+y^2+z^2}} + \sum_{k=1}^{12} \alpha_k \beta_k \gamma_k \delta_k \right) \psi = 0 \tag{4}
$$

---

# 3. Tabulación y Componentes Estructurales

## 3.1 Tablas Markdown (Normalizadas y Matemáticas)

| ID Sensor | Magnitud Medida | Formulación Local | Tolerancia ($IT$) | Estado Operativo |
| :---: | :--- | :---: | ---: | :---: |
| **S-01** | Presión diferencial | $\Delta P = \frac{1}{2} \rho v^2$ | $\pm 0.05\ \text{kPa}$ | Operativo |
| **S-02** | Flujo de calor | $\dot{q} = -k \nabla T$ | $\pm 1.20\ \text{W/m}^2$ | Calibrado |
| **S-03** | Tensor viscoso | $\mu \left(\frac{\partial u}{\partial y}\right)$ | $\pm 0.01\ \text{Pa}\cdot\text{s}$ | Nominal |

## 3.2 Tabla Compleja en HTML (Fusiones de Celdas)

<table>
  <thead>
    <tr>
      <th>Subsistema</th>
      <th>Parámetro</th>
      <th>Rango Nominal</th>
      <th>Protocolo de Ensayo</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Circuito Hidráulico</td>
      <td>Presión de Línea</td>
      <td>6.0 - 8.5 bar</td>
      <td rowspan="3">Validación ASTM E220 en banco de pruebas automatizado</td>
    </tr>
    <tr>
      <td>Caudal Volumétrico</td>
      <td>120 - 150 L/min</td>
    </tr>
    <tr>
      <td>Unidad de Potencia</td>
      <td>Consumo Trifásico</td>
      <td>4.5 - 5.2 kW</td>
    </tr>
  </tbody>
</table>

## 3.3 Listas y Bloques Desplegables

1. Procedimiento de Inspección Metrológica:
   1. Verificación de presiones residuales.
   2. Ajuste de transductores:
      * Calibración de cero.
      * Ajuste de ganancia a plena escala.
2. Protocolo de Tareas:
   - [x] Purgado del circuito de refrigeración
   - [x] Sincronización del reloj de adquisición (1000 Hz)
   - [ ] Descarga de telemetría a almacenamiento persistente

<details>
<summary>Detalles de configuración de red y puertos</summary>

Configuración interna de bus Modbus TCP: Baudrate 115200 bps, Paridad Ninguna, Puerto 502 habilitado.

</details>

---

# 4. Catálogo de Callouts Obsidian y Casos Especiales

## 4.1 Tipologías de Callouts Nativos

> [!note] Nota Informativa
> Contenedor para anotaciones secundarias y aclaraciones de apoyo.

> [!abstract] Resumen / Abstract
> Síntesis analítica de los objetivos y parámetros del ensayo.

> [!info] Información de Sistema
> Registro de telemetría sincronizado bajo protocolo IEEE 112.

> [!todo] Tarea Pendiente
> Ajustar las dimensiones de la celda de prueba en la etapa de re-mallado.

> [!tip] Consejo Práctico
> Mantener un factor de relajación sub-relajado ($\alpha = 0.3$) para evitar divergencias numéricas en el solver.

> [!important] Requisito Obligatorio
> Todas las sondas de temperatura requieren aislamiento galvánico certificado.

> [!success] Validación Exitosa
> El error residual converge por debajo del umbral de tolerancia fijado ($10^{-6}$).

> [!question] Duda Metodológica
> ¿Es viable transicionar hacia formulaciones implícitas de segundo orden?

> [!warning] Advertencia Operativa
> Sobrepasar el número de Courant ($\text{CFL} > 2.0$) causará inestabilidad en la solución.

> [!failure] Falla de Conexión
> Pérdida de paquetes detectada en la interfaz RS-485 del banco dinamométrico.

> [!danger] Parámetro Crítico
> Riesgo de cavitación si la presión cae por debajo de la presión de vapor del fluido ($2.34\ \text{kPa}$).

> [!bug] Excepción en Rutina
> Desbordamiento de memoria por indexación en arreglos no dimensionados.

> [!example] Caso Práctico
> Motor asíncrono jaula de ardilla $P_n = 5.5\ \text{kW}$, $V_n = 380\ \text{V}$, $I_n = 11.2\ \text{A}$.

> [!quote] Referencia Bibliográfica
> "Los modelos numéricos son representaciones formales que demandan validación física directa."

## 4.2 Casos Especiales de Callouts (Anidación, Tablas y KaTeX)

> [!info] Contenedor de Alta Densidad
> Esta sección verifica que el contenedor no deforme elementos internos complejos.
> 
> $$
> \oint_{\partial \Omega} (\mathbf{u} \cdot \mathbf{n}) \, dA = 0
> $$
> 
> | Variable | Lectura | Estado |
> | :--- | :---: | :---: |
> | Tensión $V_{rms}$ | 380.2 V | Conforme |
> | Corriente $I_{linea}$ | 6.85 A | Conforme |
> 
> > [!warning] Callout Anidado (Recursividad de 2º Nivel)
> > Los fondos, bordes laterales y sangrías internas deben mantener independencia visual sin desbordar.

---

# 5. Bloques de Código Fuente (Shiki)

## 5.1 Python Científico

```python
import numpy as np

def solver_transporte_energia(nx: int, ny: int, max_iter: int = 500, tol: float = 1e-6):
    """Calcula la distribución estacionaria de temperatura por diferencias finitas."""
    T = np.zeros((nx, ny))
    T[-1, :] = 100.0  # Frontera superior caliente (Dirichlet)
    
    for it in range(max_iter):
        T_ant = T.copy()
        T[1:-1, 1:-1] = 0.25 * (T[2:, 1:-1] + T[:-2, 1:-1] + T[1:-1, 2:] + T[1:-1, :-2])
        if np.max(np.abs(T - T_ant)) < tol:
            return T, it
    return T, max_iter
```

## 5.2 Formato JSON Estructurado

```json
{
  "sistema": "Banco-CFD",
  "version": "1.0.0",
  "parametros": {
    "malla": "no-estructurada",
    "nodos": 150000,
    "convergencia": 1e-6
  },
  "sensoresActivos": [101, 102, 103, 104]
}
```

## 5.3 Shell / Bash con Desbordamiento Horizontal

```bash
curl -X POST https://api.laboratorio-mecanica.edu.pe/v1/telemetria/ensayos --header "Authorization: Bearer token_seguro_super_largo_de_prueba_para_validar_el_scroll_horizontal_del_bloque_de_codigo" --data '{"sensor": "PT-100", "estado": "calibrado", "muestreo_hz": 1000}'
```

---

# 6. Suite Completa de Diagramas Mermaid (10 Tipologías)

## 6.1 Flowchart con Subgrafos

```mermaid
%%width: 500%%
flowchart TB
    Start([Inicio del Proceso]) --> Step1[Adquisición Señal]
    Step1 --> Decision{"¿Supera Umbral?"}

    Decision -- Sí --> SubSystemA
    Decision -- No --> ErrorNode[/Alerta de Presión/]
    Decision -. Reintentar .-> Retry((R))

    subgraph SubSystemA [Núcleo de Filtrado]
        direction LR
        subgraph Ingestion [Capa Entrada]
            direction TB
            Queue[(Buffer Circular)] ==> Worker1[[Worker DSP]]
        end

        subgraph Processing [Filtros Activos]
            direction TB
            Worker1 -.-> TaskA[\Filtro Butterworth\]
            Worker1 -.-> TaskB[/Transformada FFT/]
        end

        Ingestion --> Processing
    end

    SubSystemA --> Finish(((Convergencia)))
    ErrorNode ==> Finish
    Retry --> Step1

    style Start fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff
    style Finish fill:#8b5cf6,stroke:#7c3aed,stroke-width:2px,color:#fff
    style ErrorNode fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff
```

## 6.2 Sequence Diagram con Grupos Rect y Loop

```mermaid
sequenceDiagram
    autonumber
    actor Ing as Ingeniero
    participant UI as Dashboard Astro
    participant API as Gateway REST
    participant PLC as Controlador PLC

    Ing->>+UI: Iniciar Registro
    UI->>UI: Validar Frontmatter (Zod)

    alt Configuración Válida
        UI->>+API: POST /api/ensayo/iniciar
        rect rgba(139, 92, 246, 0.12)
            Note over API,PLC: Enlace Seguro Modbus TCP
            API->>+PLC: Disparar Muestreo (100 Hz)
            PLC-->>-API: Estado 200 OK (Buffers Listos)
        end
        API-->>-UI: Sesión Confirmada
        UI-->>Ing: Notificación en Pantalla
    else Configuración Inválida
        UI-->>Ing: Alerta de Validación
    end

    loop Transmisión Periódica
        PLC-)API: Ping de Telemetría
    end
```

## 6.3 Class Diagram (Herencia y Modificadores de Acceso)

```mermaid
classDiagram
    class ModuloSensor~T~ {
        +T id
        +Date calibracion
        #tolerancia double
        +leerValor() double*
    }

    class TermoparK {
        -double juntaFria
        +compensarJunta() void
        +leerValor() double
    }

    class TransductorPresion {
        -double offsetZero
        +calibrarZero() void
        +leerValor() double
    }

    class GestorDatos {
        <<Service>>
        +guardar(ModuloSensor s)$ void
    }

    ModuloSensor <|-- TermoparK : Herencia
    ModuloSensor <|-- TransductorPresion : Herencia
    GestorDatos ..> ModuloSensor : Agregación
```

## 6.4 State Diagram (Máquina de Estados Concurrente)

```mermaid
stateDiagram-v2
    [*] --> Standby

    Standby --> Autenticando : Petición En Marcha
    
    state Autenticando {
        [*] --> ComprobandoToken
        ComprobandoToken --> TokenValido : OK
    }

    state SesionActiva {
        [*] --> Monitoreo
        
        -- Concurrencia
        state "Escucha de Red" as Red
        [*] --> Red
        Red --> EnvioTelemetria : Paquete
        
        --
        state "Registro Disco" as Disco
        [*] --> Disco
        Disco --> EscrituraBinaria : Flush
    }

    SesionActiva --> Standby : Paro Seguro
    Autenticando --> Fallo : Rechazo 401
    Fallo --> Standby : Reset
```

## 6.5 Entity-Relationship Diagram (Bases Relacionales) Directiva Pan-X

```mermaid
%%layout: pan-x%%
erDiagram
    ENSAYO ||--o{ REGISTRO : captura
    ENSAYO {
        uuid id PK
        string titulo
        date fecha_ejecucion
        string operador
    }

    REGISTRO ||--|{ CANAL : contiene
    REGISTRO {
        uuid id PK
        uuid ensayo_id FK
        timestamp marca_tiempo
    }

    CANAL {
        int pin_id PK
        string magnitud
        float valor_escalar
    }
```

## 6.6 Gantt Chart Extenso Directiva Pan-X

```mermaid
%%layout: pan-y%%
gantt
    title Cronograma de Implementación y Ensayos
    dateFormat YYYY-MM-DD
    axisFormat %d/%m
    tickInterval 2day

    section Módulo Analítico
    Diseño del Modelo CFD       :done,    des_1, 2026-01-01, 2026-01-05
    Validación de Independencia :done,    des_2, 2026-01-06, 2026-01-10

    section Banco Físico
    Montaje de Termopares       :active,  exp_1, 2026-01-09, 2026-01-16
    Pruebas a Plena Carga       :crit,    exp_2, 2026-01-17, 2026-01-24

    section Reporte Final
    Consolidación de Métricas   :         rep_1, after exp_2, 5d
```

## 6.7 GitGraph (Flujo de Ramas y Versiones)

```mermaid
gitGraph
    commit id: "Init Repo"
    commit id: "Setup Astro"
    branch develop
    checkout develop
    commit id: "Layout CSS"
    branch feature/mermaid
    checkout feature/mermaid
    commit id: "Soporte Temas"
    checkout develop
    merge feature/mermaid id: "Merge PR #4"
    checkout main
    merge develop id: "Release v1.0" tag: "v1.0.0"
```

## 6.8 Quadrant Chart (Matriz Estratégica)

```mermaid
quadrantChart
    title Evaluación de Modelos y Costo Computacional
    x-axis "Bajo Costo CPU" --> "Alto Costo CPU"
    y-axis "Baja Precisión" --> "Alta Precisión"
    quadrant-1 "Ideal (LES)"
    quadrant-2 "Analítico Puro"
    quadrant-3 "Descartar"
    quadrant-4 "Rápido (k-epsilon)"
    "k-epsilon Estándar": [0.25, 0.40]
    "k-omega SST": [0.45, 0.75]
    "LES Completo": [0.85, 0.90]
    "DNS Teórico": [0.95, 0.98]
```

## 6.9 Mindmap (Mapa Mental de Arquitectura)

```mermaid
mindmap
  root((Ecosistema Editorial))
    Frontend Astro
      Lectura Web
      Visor Paged.js
      Diapositivas Reveal.js
    Lógica de Estilos
      estilos-base.json
      plantillas-impresion.json
      caratulas.json
      componentes.json
      diagramas-mermaid.json
    Motor de Renderizado
      KaTeX Math
      Shiki Syntax
      Mermaid Vectorial
```

## 6.10 Pie Chart (Distribución de Recursos)

```mermaid
pie title Distribución de Componentes de Prueba
    "Tipografía y Prosa" : 20
    "Fórmulas KaTeX" : 25
    "Callouts Obsidian" : 25
    "Diagramas Mermaid" : 20
    "Código y Media" : 10
```

## 6.11 Mermaid con Inyección %%{init}%% Directa

```mermaid
%%{init: {
  "theme": "base",
  "themeVariables": {
    "primaryColor": "#10b981",
    "primaryTextColor": "#ffffff",
    "primaryBorderColor": "#059669",
    "lineColor": "#94a3b8",
    "secondaryColor": "#3b82f6",
    "tertiaryColor": "#1e293b",
    "mainBkg": "#0f172a",
    "nodeBorder": "#334155",
    "clusterBkg": "#1e293b",
    "clusterBorder": "#475569"
  }
}}%%
flowchart LR
    A([Init Personalizado]) --> B[Cluster de Control]
    subgraph Cluster de Control [Entorno Protegido]
        direction TB
        B --> C{¿Token Válido?}
        C -- Sí --> D[Ejecución Local]
        C -- No --> E[Bloqueo]
    end
    D --> F([Fin])

    classDef exito fill:#10b981,stroke:#059669,color:#fff;
    classDef alerta fill:#ef4444,stroke:#dc2626,color:#fff;
    class A,D,F exito;
    class E alerta;
```

---

# 7. Recursos Multimedia y Vectores Nativos

## 7.1 Reproducción de Audio y Video

<video 
  controls 
  width="720" 
  poster="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  src="https://www.w3schools.com/html/mov_bbb.mp4">
</video>

<audio controls src="/assets/apuntes/mi-grabacion.mp3"></audio>

## 7.2 Gráfico SVG Animado con Estilos Embebidos

<div style="display: flex; justify-content: center; align-items: center; margin: 2rem auto;">
  <svg width="200" height="200" viewBox="0 0 200 200">
    <defs>
      <style>
        .radar-pulse-core { fill: #8b5cf6; }
        .radar-pulse-ring {
          fill: none;
          stroke: #38bdf8;
          stroke-width: 2.5;
          opacity: 0.8;
          animation: pulsoTest 2s infinite cubic-bezier(0.215, 0.61, 0.355, 1);
          transform-origin: center;
        }
        @keyframes pulsoTest {
          0% { r: 10px; opacity: 1; }
          100% { r: 80px; opacity: 0; }
        }
      </style>
    </defs>
    <circle class="radar-pulse-ring" cx="100" cy="100" r="10" />
    <circle class="radar-pulse-core" cx="100" cy="100" r="14" />
  </svg>
</div>

## 7.3 Disposición en Columnas Multicanal

<div class="columnas-2">
  <div>
    <strong>Canal Alfa (Adquisición Analógica):</strong> Sensores de efecto Hall y sondas diferenciales de voltaje con aislamiento galvanizado a 1000 V.
  </div>
  <div>
    <strong>Canal Beta (Adquisición Digital):</strong> Módulos optoacoplados de entrada directa para sincronización de pulsos encoders a 50 kHz.
  </div>
</div>