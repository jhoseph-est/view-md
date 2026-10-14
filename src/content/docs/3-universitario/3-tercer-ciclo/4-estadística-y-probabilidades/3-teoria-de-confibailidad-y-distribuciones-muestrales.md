---
title: "Teoría de Confiabilidad y Distribuciones Muestrales"
orden: 3
---

# Teoría de Confiabilidad y Distribuciones Muestrales

Este documento desarrolla de forma rigurosa y formal los puntos de la tercera parte del temario, incorporando notación matemática en LaTeX.

## 1. Fundamentos de la teoría de confiabilidad

### Concepto de confiabilidad aplicada a productos, componentes y sistemas

* **Confiabilidad (**$R(t)$**):** Probabilidad de que un producto, componente o sistema cumpla su función prevista de manera satisfactoria bajo condiciones de operación especificadas durante un intervalo de tiempo $[0, t]$.

### Función de supervivencia y función de riesgo

* **Función de supervivencia (o de confiabilidad):** Representa la probabilidad de que el tiempo hasta la falla $T$ sea mayor que un tiempo $t$:

  $$
  R(t) = P(T > t) = 1 - F(t) = \int_{t}^{\infty} f(x) dx
  $$

  donde $f(x)$ es la función de densidad de probabilidad del tiempo de falla.

* **Función de riesgo (tasa instantánea o razón de fallas** $\lambda(t)$**):** Probabilidad condicional de que un componente falle en el intervalo infinitesimal $[t, t+dt]$, dado que ha sobrevivido hasta el tiempo $t$:

  $$
  \lambda(t) = \frac{f(t)}{R(t)} = -\frac{d}{dt} \ln[R(t)]
  $$

### Modelos probabilísticos de tiempos de fallas

* **Modelo con distribución Exponencial:** Asume una tasa de falla constante ($\lambda(t) = \lambda = \text{constante}$). La supervivencia es $R(t) = e^{-\lambda t}$, típica de la vida útil útil o electrónica aleatoria.

* **Modelo con distribución Weibull:** Modela tasas de fallas variables mediante sus parámetros de forma ($\beta$) y escala ($\eta$). Su tasa de riesgo es $\lambda(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta-1}$:

  * Si $\beta < 1$: Tasa de falla decreciente (fallas tempranas de infancia).

  * Si $\beta = 1$: Tasa de falla constante (modelo exponencial).

  * Si $\beta > 1$: Tasa de falla creciente (desgaste por envejecimiento).

  * Estas fases conforman la clásica *curva de la bañera*.

## 2. Teoría del muestreo y estimación

### Muestreo y métodos

* **Conceptos generales:** Población, marco muestral (lista de unidades accesibles) y representatividad estadística.

* **Tipos de muestreo:**

  * *Probabilístico:* Aleatorio simple, sistemático, estratificado (subgrupos homogéneos) y por conglomerados (grupos naturales).

  * *No probabilístico:* Por conveniencia, por cuotas o intencional.

### Determinación del tamaño óptimo de muestra

* Fórmulas basadas en el error máximo admisible ($E$), el nivel de confianza ($1-\alpha$, valor $Z_{\alpha/2}$) y la varianza poblacional ($\sigma^2$ o proporción $p$):

  * Para medias: $n = \frac{Z_{\alpha/2}^2 \cdot \sigma^2}{E^2}$

  * Para proporciones: $n = \frac{Z_{\alpha/2}^2 \cdot p(1-p)}{E^2}$

### Estadísticas vs. Parámetros y Estimación Puntual

* **Parámetro:** Medida numérica que describe una característica de la población (ej. $\mu, \sigma^2$).

* **Estadística:** Medida calculada a partir de los datos muestrales (ej. $\bar{X}, S^2$).

* **Propiedades de los estimadores puntuales:**

  * *Insesgadez:* Su esperanza matemática coincide con el parámetro poblacional ($E[\hat{\theta}] = \theta$).

  * *Consistencia:* Converge en probabilidad al parámetro a medida que el tamaño de muestra $n$ crece.

  * *Eficiencia:* Menor varianza entre los estimadores insesgados posibles.

* **Métodos de estimación:**

  * *Método de momentos:* Iguala los momentos muestrales a los momentos poblacionales.

  * *Método de máxima verosimilitud:* Maximiza la función de verosimilitud $L(\theta)$ para encontrar el estimador más probable.

## 3. Distribuciones muestrales fundamentales

### Distribución muestral de la media muestral ($\bar{X}$)

* **Bajo poblaciones normales:** Si $X_i \sim \text{N}(\mu, \sigma^2)$, entonces la media muestral se distribuye exactamente como:

  $$
  \bar{X} \sim \text{N}\left(\mu, \frac{\sigma^2}{n}\right)
  $$

* **Teorema del Límite Central (TLC):** Si $X_1, X_2, \dots, X_n$ provienen de cualquier población con media $\mu$ y varianza finita $\sigma^2$, para muestras grandes ($n \ge 30$), la distribución de la media muestral se aproxima a una distribución normal:

  $$
  \bar{X} \xrightarrow{d} \text{N}\left(\mu, \frac{\sigma^2}{n}\right)
  $$

### Distribución muestral de la varianza muestral ($S^2$)

* Para una muestra aleatoria de una población normal, la estadística de la varianza muestral guarda una relación exacta con la distribución Chi-cuadrado ($\chi^2$) con $n-1$ grados de libertad:

  $$
  \frac{(n-1)S^2}{\sigma^2} \sim \chi_{n-1}^2
  $$