---
title: "Variable Aleatoria. Distribuciones de Probabilidad"
orden: 2
---

# Variable Aleatoria y Distribuciones de Probabilidad

Este documento desarrolla de forma formal cada uno de los puntos correspondientes a la segunda parte del temario, utilizando notación matemática estricta.

## 1. Concepto y caracterización de variables aleatorias

### Definición matemática de variable aleatoria y clasificación

- **Variable aleatoria (**$X$**):** Es una función medible $X: \Omega \to \mathbb{R}$ que asigna un número real a cada resultado elemental de un espacio muestral $\Omega$.

- **Clasificación:**

  * *Discretas:* El conjunto de valores posibles es finito o infinito numerable.

  * *Continuas:* El conjunto de valores posibles comprende un intervalo continuo de números reales.

### Variables aleatorias discretas

* **Función de probabilidad (o masa de probabilidad):** $P(X = x_i) = p_i$, cumpliendo que $p_i \ge 0$ y $\sum_i p_i = 1$.

* **Función de distribución acumulada:** $F(x) = P(X \le x) = \sum_{x_i \le x} P(X = x_i)$.

* **Esperanza matemática (Media):**
  

  $$
  E[X] = \mu = \sum_i x_i \cdot P(X = x_i)
  $$

* **Varianza:**
  

  $$
  Var(X) = \sigma^2 = E[(X - \mu)^2] = \sum_i (x_i - \mu)^2 \cdot P(X = x_i) = E[X^2] - (E[X])^2
  $$

### Variables aleatorias continuas

* **Función de densidad de probabilidad (**$f(x)$**):** Función no negativa tal que el área bajo la curva en todo su dominio es igual a 1 ($\int_{-\infty}^{\infty} f(x) dx = 1$) y $P(a \le X \le b) = \int_{a}^{b} f(x) dx$.

* **Función de distribución acumulada:**
  

  $$
  F(x) = P(X \le x) = \int_{-\infty}^{x} f(t) dt
  $$

* **Esperanza matemática (Media):**
  

  $$
  E[X] = \mu = \int_{-\infty}^{\infty} x \cdot f(x) dx
  $$

* **Varianza:**
  

  $$
  Var(X) = \sigma^2 = \int_{-\infty}^{\infty} (x - \mu)^2 \cdot f(x) dx = E[X^2] - (E[X])^2
  $$

## 2. Distribuciones de probabilidad de variables discretas

* **Ensayo y distribución de Bernoulli:** Experimento con dos únicos resultados (éxito o fracaso). Si $X \sim \text{Bernoulli}(p)$, entonces $P(X = 1) = p$ y $P(X = 0) = 1-p$. $E[X] = p$, $Var(X) = p(1-p)$.

* **Distribución Binomial:** Modela el número total de éxitos en $n$ ensayos de Bernoulli independientes. Si $X \sim \text{Binomial}(n, p)$:
  

  $$
  P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, 1, \dots, n
  $$

  
  $E[X] = np$, $Var(X) = np(1-p)$.

* **Proceso y distribución de Poisson:** Modela el número de eventos que ocurren en un intervalo continuo de tiempo o espacio con una tasa media constante $\lambda$. Si $X \sim \text{Poisson}(\lambda)$:
  

  $$
  P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}, \quad k = 0, 1, 2, \dots
  $$

  
  $E[X] = \lambda$, $Var(X) = \lambda$.

* **Propiedad reproductiva de la Poisson:** La suma de $k$ variables aleatorias de Poisson independientes $X_i \sim \text{Poisson}(\lambda_i)$ sigue una distribución de Poisson con parámetro igual a la suma de las tasas: $\sum X_i \sim \text{Poisson}\left(\sum \lambda_i\right)$.

## 3. Distribuciones de probabilidad de variables continuas

* **Distribución Uniforme continua:** Todos los subintervalos de igual longitud dentro de un rango $[a, b]$ tienen la misma probabilidad. $f(x) = \frac{1}{b-a}$ para $a \le x \le b$.

* **Distribución Exponencial:** Modela el tiempo entre eventos en un proceso de Poisson con parámetro $\lambda$. $f(x) = \lambda e^{-\lambda x}$ para $x \ge 0$. Posee la *propiedad de pérdida de memoria*: $P(X > s + t \mid X > s) = P(X > t)$.

* **Distribución Normal (**$\mu, \sigma^2$**):** Curva simétrica en forma de campana de Gauss. Su estandarización a la variable normal estándar $Z \sim \text{N}(0, 1)$ se logra mediante $Z = \frac{X - \mu}{\sigma}$. Posee propiedad reproductiva lineal de sumas de normales independientes.

* **Teoremas de aproximación:** Aproximación de la Binomial a la Normal cuando $np \ge 5$ y $n(1-p) \ge 5$, requiriendo el uso de la *corrección por continuidad* ($\pm 0.5$).

* **Distribuciones derivadas del muestreo normal:**

  * *Chi-cuadrado (*$\chi^2$*):* Suma de cuadrados de $k$ variables normales estándar independientes. Posee propiedad reproductiva respecto a los grados de libertad ($k$).

  * *t de Student:* Surgen al estimar la media de una población normal con varianza desconocida. Su parámetro principal son los grados de libertad ($n-1$), presentando colas más pesadas que la normal.

  * *F de Snedecor/Fisher:* Cociente de dos variables Chi-cuadrado independientes divididas entre sus respectivos grados de libertad, útil para comparar varianzas.

  * *Weibull:* Ampliamente utilizada en ingeniería para modelar tiempos de falla y análisis de confiabilidad ante tasas de falla variables.