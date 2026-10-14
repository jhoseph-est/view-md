---
title: "Análisis de Regresión y Correlación Lineal"
orden: 5
---

# Análisis de Regresión y Correlación Lineal

Este documento desarrolla de forma rigurosa y formal los puntos correspondientes a la quinta parte del temario, utilizando notación matemática en LaTeX.

## 1. Modelado de regresión lineal

### Modelo de regresión lineal simple y supuestos de MCO

* **Modelo poblacional:** 
  
  $$
  Y_i = \beta_0 + \beta_1 X_i + \varepsilon_i
  $$

  donde $\beta_0$ es el intercepto, $\beta_1$ la pendiente y $\varepsilon_i$ el término de error aleatorio.

* **Supuestos de Mínimos Cuadrados Ordinarios (MCO):**
  
  1. *Linealidad:* La relación entre la esperanza de $Y$ y $X$ es lineal en los parámetros.
  2. *Independencia de residuos:* Los errores $\varepsilon_i$ no están autocorrelacionados ($\text{Cov}(\varepsilon_i, \varepsilon_j) = 0$).
  3. *Homocedasticidad:* La varianza del error es constante para todo $X$ ($\text{Var}(\varepsilon_i) = \sigma^2$).
  4. *Normalidad:* Los errores se distribuyen normalmente ($\varepsilon_i \sim \text{N}(0, \sigma^2)$).

### Estimación de coeficientes de regresión

* Las fórmulas de MCO para la pendiente ($\hat{\beta}_1$) y el intercepto ($\hat{\beta}_0$) se obtienen minimizando la suma de cuadrados de los errores:
  
  $$
  \hat{\beta}_1 = \frac{\sum_{i=1}^n (X_i - \bar{X})(Y_i - \bar{Y})}{\sum_{i=1}^n (X_i - \bar{X})^2}, \quad \hat{\beta}_0 = \bar{Y} - \hat{\beta}_1 \bar{X}
  $$

### Introducción al modelo de regresión lineal múltiple

* **Formulación matricial:** 
  
  $$
  \mathbf{Y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\varepsilon}
  $$

* **Estimador por MCO:** 
  
  $$
  \hat{\boldsymbol{\beta}} = (\mathbf{X}^T \mathbf{X})^{-1} \mathbf{X}^T \mathbf{Y}
  $$

## 2. Evaluación y bondad de ajuste del modelo

### Descomposición de la variabilidad

* La suma de cuadrados total ($SCT$) se descompone en suma de cuadrados de la regresión ($SCR$) y suma de cuadrados del error ($SCE$):
  
  $$
  \sum_{i=1}^n (Y_i - \bar{Y})^2 = \sum_{i=1}^n (\hat{Y}_i - \bar{Y})^2 + \sum_{i=1}^n (Y_i - \hat{Y}_i)^2
  $$
  
  es decir: $\text{SCT} = \text{SCR} + \text{SCE}$.

### Análisis de Varianza (ANOVA) y pruebas de inferencia

* **Prueba F (Significancia global):** Contrasta $H_0: \beta_1 = 0$ mediante el estadístico $F = \frac{\text{SCR}/k}{\text{SCE}/(n-k-1)}$.
* **Prueba t de Student:** Evalúa la significancia de coeficientes individuales ($\beta_j$) mediante el estadístico $t = \frac{\hat{\beta}_j - \beta_{j0}}{\text{EE}(\hat{\beta}_j)}$.

## 3. Medidas de relación y determinación lineal

### Coeficiente de correlación lineal de Pearson ($r$)

* Mide la fuerza y el sentido de la asociación lineal entre dos variables cuantitativas:
  
  $$
  r = \frac{\sum_{i=1}^n (X_i - \bar{X})(Y_i - \bar{Y})}{\sqrt{\sum_{i=1}^n (X_i - \bar{X})^2 \sum_{i=1}^n (Y_i - \bar{Y})^2}}, \quad -1 \le r \le 1
  $$

### Coeficiente de determinación ($R^2$ y $R^2$ ajustado)

* **$R^2$ (Coeficiente de determinación):** Proporción de la variabilidad total de $Y$ explicada por el modelo de regresión:
  
  $$
  R^2 = \frac{\text{SCR}}{\text{SCT}} = 1 - \frac{\text{SCE}}{\text{SCT}}
  $$

* **$R^2$ ajustado:** Penaliza la inclusión de variables innecesarias en modelos múltiples:
  
  $$
  R^2_{\text{adj}} = 1 - \frac{\text{SCE}/(n - k - 1)}{\text{SCT}/(n - 1)}
  $$