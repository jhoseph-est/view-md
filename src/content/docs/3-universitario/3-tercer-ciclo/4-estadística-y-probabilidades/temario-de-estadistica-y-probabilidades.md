---
title: "temario de Estadística y Probabilidades"
orden: 0
---

## Estadística Descriptiva y Probabilidad
- **Fundamentos y estadística descriptiva unidimensional y bidimensional**
  - Conceptos básicos: población, muestra, unidad elemental, variables y escalas de medición.
  - Organización y presentación de datos: tablas de frecuencias unidimensionales y bidimensionales.
  - Representación gráfica según el tipo de variable (barras, sectores, histograma, polígono de frecuencias, ojiva).
  - Medidas de resumen estadístico:
    - Medidas de tendencia central: media aritmética, mediana y moda.
    - Medidas de posición no central: cuartiles, deciles y percentiles.
    - Medidas de dispersión: rango, varianza, desviación estándar y coeficiente de variación.
    - Medidas de forma: coeficientes de asimetría y curtosis.
  - Análisis exploratorio de datos: diagrama de tallo y hoja, diagrama de caja y bigotes (boxplot) y detección de datos atípicos.
  - Aplicación práctica: análisis e interpretación de datos a partir de un artículo científico de investigación en la especialidad.
- **Teoría de probabilidades y cálculo combinatorio**
  - Experimentos aleatorios, espacio muestral y álgebra de eventos (operaciones de unión, intersección, complemento).
  - Técnicas de conteo: principio multiplicativo, principio aditivo, permutaciones y combinaciones.
  - Definición de probabilidad: enfoques clásico, frecuentista y axiomático (Kolmogorov).
  - Propiedades y teoremas fundamentales del cálculo de probabilidades.
- **Probabilidad condicional e independencia**
  - Definición y cálculo de la probabilidad condicional.
  - Representación mediante diagramas de árbol para secuencias de eventos.
  - Regla o teorema de la multiplicación.
  - Partición del espacio muestral y Teorema de la Probabilidad Total.
  - Teorema de Bayes y cálculo de probabilidades a posteriori.
  - Independencia de eventos: definición, criterios y propiedades.

## Variable Aleatoria. Distribuciones de Probabilidad
- **Concepto y caracterización de variables aleatorias**
  - Definición matemática de variable aleatoria y clasificación (discretas y continuas).
  - Variables aleatorias discretas:
    - Función de probabilidad o masa de probabilidad $P(X = x)$.
    - Función de distribución acumulada $F(x)$.
    - Parámetros de posición y dispersión: esperanza matemática (media) y varianza.
  - Variables aleatorias continuas:
    - Función de densidad de probabilidad $f(x)$.
    - Función de distribución acumulada $F(x)$.
    - Parámetros de posición y dispersión: esperanza matemática (media) y varianza.
- **Distribuciones de probabilidad de variables discretas**
  - Ensayo y distribución de Bernoulli.
  - Distribución Binomial: modelado de conteos y propiedades.
  - Proceso y distribución de Poisson: tasa de ocurrencia y modelado de eventos raros.
  - Propiedad reproductiva de la distribución de Poisson.
- **Distribuciones de probabilidad de variables continuas**
  - Distribución Uniforme continua.
  - Distribución Exponencial: relación y modelado de tiempos de espera en un proceso de Poisson, propiedad de pérdida de memoria.
  - Distribución Normal: propiedades de la campana de Gauss, estandarización ($Z$) y propiedad reproductiva.
  - Teoremas de aproximación: aproximación de la distribución Binomial a la Normal (corrección por continuidad).
  - Distribuciones continuas derivadas del muestreo normal:
    - Distribución Chi-cuadrado ($\chi^2$) y su propiedad reproductiva.
    - Distribución $t$ de Student: características y grados de libertad.
    - Distribución $F$ de Snedecor/Fisher: razones de varianzas y aplicaciones.
    - Distribución de Weibull: modelado de tiempos y tasas de falla variables.

## Teoría de Confiabilidad y Distribuciones Muestrales
- **Fundamentos de la teoría de confiabilidad**
  - Concepto de confiabilidad aplicada a productos, componentes y sistemas.
  - Función de supervivencia y función de riesgo (tasa instantánea o razón de fallas $\lambda(t)$).
  - Modelos probabilísticos de tiempos de fallas:
    - Modelo con distribución Exponencial (tasa de falla constante).
    - Modelo con distribución Weibull (tasas de fallas crecientes o decrecientes; curvas de la bañera).
- **Teoría del muestreo y estimación**
  - Muestreo: conceptos generales, representatividad y marco muestral.
  - Métodos y tipos de muestreo: probabilístico (aleatorio simple, sistemático, estratificado, por conglomerados) y no probabilístico.
  - Determinación del tamaño óptimo de muestra para estimación de medias y proporciones.
  - Estadísticas vs. parámetros poblacionales.
  - Estimadores puntuales: propiedades deseables (insesgadez, consistencia, eficiencia).
  - Métodos de estimación puntual (método de momentos y método de máxima verosimilitud).
- **Distribuciones muestrales fundamentales**
  - Distribución muestral de la media muestral ($\bar{X}$):
    - Comportamiento bajo poblaciones normales.
    - Teorema del Límite Central (TLC) para muestras grandes y poblaciones arbitrarias.
  - Distribución muestral de la varianza muestral ($S^2$) y su relación con la distribución Chi-cuadrado.

## Intervalos de Confianza y Pruebas de Hipótesis
- **Inferencia paramétrica: estimación por intervalos de confianza**
  - Conceptos de nivel de confianza ($1-\alpha$), nivel de significancia ($\alpha$) y margen de error.
  - Intervalos de confianza para una sola población:
    - Media poblacional ($\mu$) con varianza conocida (distribución Normal) y varianza desconocida (distribución $t$ de Student).
    - Varianza poblacional ($\sigma^2$) mediante la distribución Chi-cuadrado.
  - Intervalos de confianza para comparar dos poblaciones independientes:
    - Diferencia de medias poblacionales ($\mu_1 - \mu_2$) bajo varianzas conocidas, varianzas desconocidas iguales y varianzas desconocidas desiguales (corrección de Welch).
    - Razón de varianzas poblacionales ($\sigma_1^2 / \sigma_2^2$) mediante la distribución $F$ de Fisher.
- **Inferencia paramétrica: pruebas de hipótesis estadísticas**
  - Estructura general de una prueba de hipótesis: hipótesis nula ($H_0$), hipótesis alternativa ($H_1$), errores Tipo I ($\alpha$) y Tipo II ($\beta$), potencia de la prueba y valor $p$.
  - Pruebas de hipótesis para una sola población:
    - Prueba para la media poblacional ($\mu$) usando estadísticos $Z$ y $t$.
    - Prueba para la varianza poblacional ($\sigma^2$) usando estadístico Chi-cuadrado.
  - Pruebas de hipótesis para dos poblaciones independientes:
    - Prueba de igualdad o comparación de varianzas poblacionales ($\sigma_1^2$ vs $\sigma_2^2$) mediante estadístico $F$.
    - Prueba para la diferencia de medias poblacionales ($\mu_1 - \mu_2$) según la homogeneidad o heterogeneidad de varianzas.

## Análisis de Regresión y Correlación Lineal
- **Modelado de regresión lineal**
  - Modelo de regresión lineal simple: supuestos del modelo de mínimos cuadrados ordinarios (linealidad, homocedasticidad, normalidad e independencia de residuos).
  - Estimación de coeficientes de regresión (pendiente e intercepto) e interpretación analítica.
  - Introducción al modelo de regresión lineal múltiple: formulación y ajuste matricial básico.
- **Evaluación y bondad de ajuste del modelo**
  - Descomposición de la variabilidad: suma de cuadrados total, de regresión y del error.
  - Análisis de Varianza (ANOVA) aplicado a la significancia global del modelo de regresión lineal (prueba $F$).
  - Inferencia sobre los coeficientes individuales de regresión (pruebas $t$ de Student).
- **Medidas de relación y determinación lineal**
  - Coeficiente de correlación lineal de Pearson ($r$): fuerza, sentido de la relación e inferencia estadística.
  - Coeficiente de determinación ($R^2$ y $R^2$ ajustado): proporción de variabilidad explicada por el modelo.