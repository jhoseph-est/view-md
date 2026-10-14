---
title: "Intervalos de Confianza y Pruebas de Hipótesis"
orden: 4
---

# Intervalos de Confianza y Pruebas de Hipótesis

Este documento desarrolla de manera formal y rigurosa cada uno de los puntos correspondientes a la cuarta parte del temario, utilizando notación matemática en LaTeX.

## 1. Inferencia paramétrica: estimación por intervalos de confianza

### Conceptos fundamentales

* **Nivel de confianza (**$1-\alpha$**):** Probabilidad de que el intervalo construido contenga el verdadero valor del parámetro poblacional en muestreos repetidos.

* **Nivel de significancia (**$\alpha$**):** Probabilidad de que el intervalo no contenga al parámetro, donde $\alpha = 1 - (1-\alpha)$.

* **Margen de error (**$E$**):** Mitad de la amplitud del intervalo, que determina la precisión de la estimación.

### Intervalos de confianza para una sola población

* **Media poblacional (**$\mu$**):**

  * *Varianza conocida (Distribución Normal):*
    

    $$
    \bar{X} \pm Z_{\alpha/2} \frac{\sigma}{\sqrt{n}}
    $$

  * *Varianza desconocida (Distribución t de Student con* $n-1$ *grados de libertad):*
    

    $$
    \bar{X} \pm t_{\alpha/2, n-1} \frac{S}{\sqrt{n}}
    $$

* **Varianza poblacional (**$\sigma^2$**):** Utilizando la distribución Chi-cuadrado ($\chi^2_{n-1}$):
  

  $$
  \left[ \frac{(n-1)S^2}{\chi^2_{\alpha/2, n-1}}, \quad \frac{(n-1)S^2}{\chi^2_{1-\alpha/2, n-1}} \right]
  $$

### Intervalos de confianza para comparar dos poblaciones independientes

* **Diferencia de medias (**$\mu_1 - \mu_2$**):**

  * *Varianzas conocidas:*
    

    $$
    (\bar{X}_1 - \bar{X}_2) \pm Z_{\alpha/2} \sqrt{\frac{\sigma_1^2}{n_1} + \frac{\sigma_2^2}{n_2}}
    $$

  * *Varianzas desconocidas pero iguales (*$\sigma_1^2 = \sigma_2^2 = \sigma^2$*):*
    

    $$
    (\bar{X}_1 - \bar{X}_2) \pm t_{\alpha/2, n_1+n_2-2} S_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}
    $$

    
    donde $S_p^2$ es la varianza ponderada (pooled variance).

  * *Varianzas desconocidas y desiguales (Corrección de Welch):*
    

    $$
    (\bar{X}_1 - \bar{X}_2) \pm t_{\alpha/2, \nu} \sqrt{\frac{S_1^2}{n_1} + \frac{S_2^2}{n_2}}
    $$

    
    con grados de libertad $\nu$ ajustados por la fórmula de Welch.

* **Razón de varianzas poblacionales (**$\sigma_1^2 / \sigma_2^2$**):** Mediante la distribución $F$ de Snedecor/Fisher con $n_1-1$ y $n_2-1$ grados de libertad:
  

  $$
  \left[ \frac{S_1^2}{S_2^2} \frac{1}{F_{\alpha/2, n_1-1, n_2-1}}, \quad \frac{S_1^2}{S_2^2} F_{\alpha/2, n_2-1, n_1-1} \right]
  $$

## 2. Inferencia paramétrica: pruebas de hipótesis estadísticas

### Estructura general de una prueba de hipótesis

* **Hipótesis nula (**$H_0$**):** Afirmación de status quo o ausencia de efecto (ej. $\mu = \mu_0$).

* **Hipótesis alternativa (**$H_1$**):** Afirmación que se desea contrastar o demostrar (ej. $\mu \neq \mu_0$, $\mu > \mu_0$, $\mu < \mu_0$).

* **Errores estadísticos:**

  * *Error Tipo I (*$\alpha$*):* Rechazar $H_0$ siendo verdadera (falso positivo).

  * *Error Tipo II (*$\beta$*):* No rechazar $H_0$ siendo falsa (falso negativo).

* \**Potencia de la prueba (*$1-\beta$*):* Probabilidad de rechazar correctamente $H_0$ cuando es falsa.

* \**Valor p (p-value):* Probabilidad de obtener un resultado igual o más extremo que el observado, bajo el supuesto de que $H_0$ es cierta.

### Pruebas de hipótesis para una sola población

* **Prueba para la media poblacional (**$\mu$**):**

  * *Estadístico Z* (varianza conocida): $Z_{\text{calc}} = \frac{\bar{X} - \mu_0}{\sigma/\sqrt{n}}$

  * *Estadístico t* (varianza desconocida): $t_{\text{calc}} = \frac{\bar{X} - \mu_0}{S/\sqrt{n}}$

* **Prueba para la varianza poblacional (**$\sigma^2$**):**

  * *Estadístico Chi-cuadrado:* $\chi^2_{\text{calc}} = \frac{(n-1)S^2}{\sigma_0^2}$

### Pruebas de hipótesis para dos poblaciones independientes

* **Prueba de igualdad de varianzas (**$\sigma_1^2$ **vs** $\sigma_2^2$**):**

  * *Estadístico F:* $F_{\text{calc}} = \frac{S_1^2}{S_2^2}$ contrastado con $F_{\alpha/2, n_1-1, n_2-1}$.

* **Prueba para la diferencia de medias (**$\mu_1 - \mu_2$**):**

  * Se aplica el estadístico $t$ adecuado según la homogeneidad o heterogeneidad de las varianzas poblacionales evaluada previamente.