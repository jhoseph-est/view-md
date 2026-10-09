---
title: "temario de Álgebra Lineal"
orden: 0
---

## Matrices y Determinantes
- **Álgebra de matrices y transformaciones elementales**
  - Definición formal, dimensiones y propiedades operativas de matrices.
  - Álgebra de matrices cuadradas: multiplicación, potencias enteras y polinomios matriciales.
  - Tipologías de matrices especiales: simétrica, antisimétrica, nilpotente, periódica, idempotente, involutiva y ortogonal.
  - Matrices escalonadas y matriz canónica reducida por filas.
  - Relación de equivalencia por filas y operaciones elementales por filas y columnas.
  - Matrices elementales y aplicaciones a la invertibilidad de matrices: criterios y propiedades.
- **Teoría de determinantes e inversión matricial**
  - Definición formal y recursiva del determinante mediante permutaciones.
  - Propiedades fundamentales de la función determinante.
  - Menores complementarios, cofactores y cálculo por expansión de Laplace.
  - Determinantes especiales: matriz y determinante de Vandermonde.
  - Matriz adjunta clásica de una matriz cuadrada y cálculo analítico de la matriz inversa.

## Sistemas de Ecuaciones Lineales
- **Estructura y clasificación de sistemas lineales**
  - Definición analítica de un sistema de ecuaciones lineales y representación matricial ($A\mathbf{x} = \mathbf{b}$).
  - Clasificación de sistemas: homogéneos y no homogéneos.
  - Tipos de soluciones: solución general, solución particular y relación estructural entre soluciones.
  - Equivalencia de sistemas y transformaciones mediante operaciones elementales entre ecuaciones.
- **Métodos directos de resolución y análisis de compatibilidad**
  - Algoritmo de eliminación Gaussiana y Gauss-Jordan.
  - Concepto de rango de una matriz: determinación mediante operaciones elementales por filas y cálculo por determinantes (menores principales).
  - Caracterización de tipos de solución según el rango y determinación de variables libres (Teorema de Rouché-Frobenius).
  - Regla de Cramer para sistemas cuadrados compatibles determinados.
  - Factorización y descomposición matricial $LU$ aplicada a la resolución de sistemas de ecuaciones lineales.

## Aplicaciones de Matrices, Determinantes y Sistemas de Ecuaciones Lineales (Valores y Vectores Propios)
- **Espectro matricial y diagonalización**
  - Definición de valores propios (autovalores), vectores propios (autovectores) y propiedades espectrales.
  - Polinomio característico y Teorema de Cayley-Hamilton.
  - Matrices semejantes y semejanza de matrices.
  - Condiciones de diagonalización de matrices en bases propias.
- **Ortogonalidad y simetría**
  - Proceso de ortogonalización de Gram-Schmidt para obtención de bases ortonormales.
  - Teorema espectral: diagonalización ortogonal de matrices simétricas reales.
- **Modelado aplicado**
  - Aplicación de sistemas de ecuaciones lineales y análisis matricial a problemas del contexto real.

## Espacios Vectoriales
- **Estructura algebraica de espacio y subespacio vectorial**
  - Definición formal de espacio vectorial sobre un cuerpo, axiomas y propiedades algebraicas.
  - Subespacios vectoriales: caracterización y teorema fundamental de subespacios.
  - Formas de descripción de subespacios: representación implícita y ecuaciones paramétricas.
- **Independencia lineal, bases y dimensión**
  - Combinación lineal de vectores.
  - Dependencia e independencia lineal: criterios y propiedades fundamentales.
  - Sistemas de generadores, conjuntos equivalentes y espacios vectoriales de dimensión finita.
  - Conceptos de base y dimensión: teoremas de completitud y unicidad.
  - Matriz de cambio de base (matriz de transición) y transformación de coordenadas.
- **Operaciones algebraicas con subespacios**
  - Relación de inclusión entre subespacios.
  - Intersección de subespacios y suma de subespacios.
  - Suma directa de subespacios vectoriales y teorema de la dimensión de la suma.

## Vectores y Rectas en R2
- **Álgebra vectorial euclidiana en el plano**
  - Sistema cartesiano bidimensional, operaciones con pares ordenados y espacio vectorial $\mathbb{R}^2$.
  - Representación geométrica: vectores de posición, vectores libres, paralelismo y vectores colineales.
  - Magnitud: norma euclidiana, propiedades de la norma y cálculo de distancia entre dos puntos.
  - Normalización: vector unitario, vectores ortogonales y conjuntos ortonormales en $\mathbb{R}^2$.
  - Dependencia e independencia lineal en el plano y combinaciones lineales.
- **Geometría métrica en R2**
  - Producto escalar: propiedades analíticas, ángulo de inclinación y ángulo entre dos vectores.
  - Proyecciones geométricas: vector proyección ortogonal y componente ortogonal.
  - Determinación de la bisectriz de un ángulo.
  - Aplicaciones a áreas geométricas: área del paralelogramo y área del triángulo.
- **La Recta en el plano**
  - Definición geométrica y analítica de la recta en $\mathbb{R}^2$.
  - Ecuaciones de la recta: vectorial, paramétrica, simétrica, normal, general (implícita) y forma simétrica por interceptos.
  - Propiedades geométricas: ángulo de inclinación, pendiente y forma punto-pendiente.
  - Segmentos: longitud, distancia entre punto y recta, y división de un segmento en una razón dada.
  - Posiciones relativas: rectas paralelas, rectas ortogonales, ángulo entre dos rectas e intersección.
  - Familias o haces de rectas y cálculo del área del triángulo determinado por rectas.

## Vectores, Rectas y Planos en R3
- **Álgebra vectorial euclidiana en el espacio**
  - Sistema cartesiano tridimensional, operaciones con ternas ordenadas y estructura de $\mathbb{R}^3$.
  - Vectores en el espacio: vectores de posición, vectores libres, paralelismo y puntos colineales.
  - Norma euclidiana en $\mathbb{R}^3$, propiedades métricas y distancia entre puntos.
  - Segmentos rectilíneos y coordenadas del baricentro.
  - Base canónica (vectores fundamentales), combinaciones lineales y dependencia/independencia lineal.
- **Productos vectoriales y aplicaciones métricas espaciales**
  - Producto escalar en $\mathbb{R}^3$: propiedades, ángulo entre vectores y vectores unitarios.
  - Ángulos directores, cosenos directores y números directores de un vector.
  - Proyección ortogonal, componente ortogonal y sus relaciones.
  - Bisectriz de un ángulo en el espacio.
  - Producto vectorial: propiedades analíticas, cálculo determinante e interpretación geométrica (área de superficies).
  - Triple producto escalar (producto mixto): propiedades, interpretación del volumen del paralelepípedo y volumen del tetraedro.
- **La Recta en el espacio**
  - Definición y representaciones: ecuación vectorial, ecuaciones paramétricas, forma simétrica y casos especiales.
  - Posiciones relativas y distancias: rectas paralelas, ortogonales y rectas que se cruzan en el espacio.
  - Ángulo entre dos rectas, distancia entre rectas paralelas y distancia mínima entre rectas alabeadas.
  - Proyección ortogonal de un punto sobre una recta en $\mathbb{R}^3$.
- **El Plano en el espacio y relaciones afines**
  - Definición geométrica del plano y vector normal.
  - Ecuaciones del plano: vectorial, paramétrica, normal, general (cartesiana) y formas incompletas.
  - Posiciones relativas entre planos: paralelismo, ortogonalidad, intersección de planos y familia (haz) de planos.
  - Ecuación biplanar de la recta (recta como intersección de planos).
  - Interacciones entre recta y plano: posiciones relativas, puntos de intersección y ángulo entre recta y plano.
  - Métricas espaciales: distancia de un punto a un plano, distancia entre planos paralelos, proyección ortogonal de un punto sobre un plano y proyección ortogonal de una recta sobre un plano.

## Secciones Cónicas
- **La Circunferencia**
  - Definición geométrica como lugar geométrico y elementos característicos.
  - Formas de la ecuación: ordinaria (canónica), general y casos particulares.
  - Recta tangente a la circunferencia, cuerda de contacto y familias de circunferencias.
- **Transformación de coordenadas cartesianas**
  - Traslación de ejes coordenados.
  - Rotación de ejes coordenados y eliminación de términos mixtos ($xy$).
  - Transformación combinada: traslación y rotación simultánea de ejes.
- **La Parábola**
  - Definición geométrica, foco, directriz, vértice y lado recto.
  - Representaciones analíticas: ecuación vectorial, forma cartesiana ordinaria y ecuación general.
  - Recta tangente, recta normal, cuerda de contacto y propiedades ópticas/geométricas de la parábola.
- **La Elipse**
  - Definición geométrica como lugar geométrico, focos, vértices, ejes y excentricidad.
  - Ecuaciones de la elipse: representación vectorial, cartesiana canónica y forma general.
  - Recta tangente, recta normal y propiedades reflectivas y focales de la elipse.
- **La Hipérbola**
  - Definición geométrica como lugar geométrico, focos, vértices, eje transverso, conjugado y excentricidad.
  - Ecuaciones de las asíntotas y ecuaciones analíticas de la hipérbola (vectorial, cartesiana y general).
  - Hipérbolas equiláteras y relación con hipérbolas conjugadas.
  - Recta tangente a una hipérbola y propiedades geométricas.