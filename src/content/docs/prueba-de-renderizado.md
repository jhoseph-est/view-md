---
title: "Suite de Inspección: Todos los Diagramas Mermaid"
tags: ["mermaid", "inspeccion"]
---

## 1. Flowchart (Diagramas de Flujo con Subgráficos)
```mermaid
flowchart TB
    Start([Inicio]) --> Step1[Paso Rectangular]
    Step1 --> Decision{¿Permisos?}
    Decision -- Sí --> SubSys
    Decision -- No --> Error[/Acceso Denegado/]
    
    subgraph SubSys [Subsistema Protegido]
        direction LR
        A[Carga] ==> B[[Worker]]
    end
    
    SubSys --> Finish(((Fin)))
    
    style Start fill:#10b981,stroke:#059669,color:#fff
    style Finish fill:#8b5cf6,stroke:#7c3aed,color:#fff

```

## 2. Sequence Diagram (Diagrama de Secuencia con Bucles y Notas)

```mermaid
sequenceDiagram
    autonumber
    actor U as Usuario
    participant FE as Frontend
    participant API as Backend
    
    U->>+FE: Clic en Guardar
    FE->>+API: POST /api/data
    
    alt Datos Válidos
        API-->>FE: 201 Creado
        FE-->>U: Mostrar Éxito
    else Datos Inválidos
        API-->>FE: 400 Error
        FE-->>U: Mostrar Alerta
    end
    
    loop Sincronización
        API-)FE: Ping de estado
    end

```

## 3. Class Diagram (Diagrama de Clases POO)

```mermaid
classDiagram
    class EntidadBase {
        +T id
        +Date createdAt
        #validar() Boolean
    }
    class Usuario {
        -String email
        +login()
    }
    EntidadBase <|-- Usuario : Herencia

```

## 4. State Diagram (Máquina de Estados con Concurrencia)

```mermaid
stateDiagram-v2
    [*] --> Inactivo
    Inactivo --> Autenticando : Login
    
    state Autenticando {
        [*] --> Verificando
        Verificando --> TokenOK : Valido
    }
    
    Autenticando --> SesionActiva : Éxito
    SesionActiva --> Inactivo : Logout

```

## 5. ER Diagram (Entidad-Relación de Base de Datos)

```mermaid
erDiagram
    USUARIO ||--o{ DOCUMENTO : redacta
    DOCUMENTO ||--|{ ETIQUETA : contiene

    USUARIO {
        uuid id PK
        string email UK
    }
    DOCUMENTO {
        uuid id PK
        string titulo
    }

```

## 6. Gantt Chart (Cronogramas de Proyecto)

```mermaid
gantt
    title Plan Maestro Anual
    dateFormat YYYY-MM-DD
    section Fase 1
    Diseño de BD :done, db1, 2026-01-01, 2026-01-15
    Desarrollo API :active, api1, after db1, 30d
    section Fase 2
    Pruebas E2E :crit, test1, after api1, 15d

```

## 7. GitGraph (Historial de Ramas Git)

```mermaid
gitGraph
    commit id: "Init"
    branch develop
    checkout develop
    commit id: "Feature 1"
    checkout main
    merge develop id: "Release 1.0" tag: "v1.0"

```

## 8. Quadrant Chart (Matriz de Cuadrantes)

```mermaid
quadrantChart
    title Análisis de Esfuerzo vs Impacto
    x-axis "Bajo Esfuerzo" --> "Alto Esfuerzo"
    y-axis "Bajo Impacto" --> "Alto Impacto"
    quadrant-1 "Prioridad Alta"
    quadrant-2 "Planificar"
    quadrant-3 "Descartar"
    quadrant-4 "Rápidas"
    
    "Optimizar Script": [0.2, 0.8]
    "Migrar Base de Datos": [0.8, 0.9]

```

## 9. Mindmap (Mapa Mental Jerárquico)

```mermaid
mindmap
  root((Ecosistema))
    Frontend
      Astro
      React
    Backend
      NestJS
      Database

```

## 10. Pie Chart (Gráfico Circular / Pastel)

```mermaid
pie title Distribución del Proyecto
    "Astro & MDX" : 45
    "TypeScript" : 25
    "CSS Estilos" : 20
    "Configuración" : 10

```


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
flowchart TB
    Start([Inicio del Pipeline]) --> AuthCheck{¿Usuario Autenticado?}

    AuthCheck -- No --> ErrorAuth[/Denegar Acceso / 401/]
    AuthCheck -- Sí --> SubSystem

    subgraph SubSystem [Núcleo de Procesamiento Asíncrono]
        direction LR
        Ingest[(Cola Redis)] ==> WorkerNode[[Worker Pool]]
        
        subgraph Workers [Validación y Transformación]
            direction TB
            WorkerNode -.-> Parse[\Normalizar Datos\]
            WorkerNode -.-> Validate[/Verificar Esquema Zod/]
        end

        Ingest --> Workers
    end

    SubSystem --> DB[(Base de Datos PostgreSQL)]
    DB --> Success(((Ejecución Exitosa)))
    ErrorAuth ==> Success

    classDef verde fill:#10b981,stroke:#059669,stroke-width:2px,color:#fff;
    classDef rojo fill:#ef4444,stroke:#dc2626,stroke-width:2px,color:#fff;
    classDef azul fill:#3b82f6,stroke:#1d4ed8,stroke-width:2px,color:#fff;

    class Start,Success verde;
    class ErrorAuth rojo;
    class AuthCheck,WorkerNode azul;
```