---
title: "Fuerzas de Rozamiento"
orden: 11
---

# Fuerzas de Rozamiento

## 1. Naturaleza del rozamiento y leyes de contacto

El rozamiento es una fuerza de resistencia tangencial que se opone al movimiento relativo (o a la tendencia al movimiento) entre dos superficies en contacto.

### Clases de rozamiento y mecanismos de contacto

* **Rozamiento seco (Coulomb):** Ocurre entre superficies sólidas en contacto directo en ausencia de lubricantes. Se divide en rozamiento estático (antes del inicio del movimiento) y cinético (durante el deslizamiento).
* **Rozamiento húmedo o viscoso:** Ocurre cuando las superficies están separadas por una película continua de fluido lubricante, donde la fricción depende de la viscosidad del fluido y la velocidad de cizalladura.
* **Resistencia a la rodadura:** Ocurre cuando un cuerpo cilíndrico o esférico rueda sobre una superficie deformable, originando una ligera asimetría en la distribución normal de la presión que genera un momento de resistencia al giro.

### Leyes clásicas de Coulomb para el rozamiento seco

1. La fuerza de fricción máxima es directamente proporcional a la fuerza normal $N$ que presiona ambas superficies entre sí.
2. La fricción es independiente del área aparente de contacto entre las superficies.
3. La fuerza de rozamiento cinético es casi independiente de la velocidad de deslizamiento, aunque suele ser ligeramente menor que la fricción estática máxima.

### Coeficientes y ángulos de rozamiento

* **Rozamiento estático ($\mu_s, \phi_s$):** Rige antes de que comience el movimiento. La fuerza máxima de fricción estática es $F_s = \mu_s N$. El ángulo de rozamiento estático $\phi_s$ se define como $\tan \phi_s = \mu_s$.
* **Rozamiento dinámico/cinético ($\mu_k, \phi_k$):** Rige durante el deslizamiento constante. La fuerza es $F_k = \mu_k N$, donde $\mu_k < \mu_s$. El ángulo asociado es $\tan \phi_k = \mu_k$.

## 2. Aplicaciones ingenieriles del rozamiento

### Bloques y cuñas: autobloqueo y empuje

* **Bloques en planos inclinados:** Se analizan utilizando las ecuaciones de equilibrio con la condición límite de deslizamiento inminente ($F = \mu_s N$).
* **Cuñas:** Dispositivos mecánicos sencillos utilizados para elevar cargas pesadas o ajustar tolerancias aplicando pequeñas fuerzas horizontales. El **autobloqueo** ocurre cuando el ángulo de inclinación de la cuña es menor que el ángulo de fricción estática ($\alpha \le \phi_s$), lo que impide que la cuña se deslice hacia atrás por sí sola al retirar la fuerza de empuje.

### Tornillos de potencia con rosca cuadrada

Los tornillos de potencia transforman el movimiento de giro en movimiento lineal axial (como en gatos mecánicos o prensas).

* **Para levantar una carga ($W$):**
  
  $$
  P = W \tan(\theta + \phi_s)
  $$
  
  Donde $\theta$ es el ángulo de avance de la rosca y $\phi_s$ es el ángulo de fricción.

* **Para bajar una carga:**
  
  $$
  P = W \tan(\phi_s - \theta)
  $$
  
  Si $\phi_s > \theta$, el tornillo presenta **autobloqueo** al bajar (requiere fuerza para descender la carga).

### Chumaceras, cojinetes de empuje y discos de fricción

* **Rozamiento de muñón (Chumaceras):** Se analiza considerando el momento de fricción generado por la reacción del eje sobre el cojinete, cuyo radio efectivo se incrementa debido al círculo de fricción de radio $r_f = r \sin \phi_s$.
* **Cojinetes de empuje axial y discos de fricción:** El momento de fricción para superficies anulares planas sometidas a presión uniforme o desgaste uniforme se calcula mediante integración del radio sobre el área de contacto:
  
  $$
  M = \frac{2}{3} \mu P \left( \frac{R_2^3 - R_1^3}{R_2^2 - R_1^2} \right)
  $$

### Ruedas y fajas (correas)

* **Ruedas (rodadura pura frente a deslizamiento inminente):** La resistencia a la rodadura se modela mediante un coeficiente de fricción por rodadura $\delta$ tal que el momento resistente es $M_r = W \cdot \delta$. Si la fuerza impulsora supera la fricción estática, la rueda experimenta deslizamiento en lugar de rodadura pura.
* **Fricción de bandas (Correas planas y trapezoidales):** La relación de tensiones entre el lado tenso ($T_2$) y el lado flojo ($T_1$) de una correa envuelta en un ángulo $\beta$ sobre una polea se rige por la ecuación de Euler-Eytelwein:
  
  $$
  T_2 = T_1 e^{\mu \beta}
  $$