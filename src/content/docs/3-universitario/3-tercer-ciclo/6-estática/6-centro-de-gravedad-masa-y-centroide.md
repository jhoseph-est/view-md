---
title: "Centros de Gravedad, Masa y Centroides"
orden: 6
---

# Centros de Gravedad, Masa y Centroides

## 1. Conceptos fundamentales de localización de masa y peso

El análisis de la distribución de masa y peso en los cuerpos rígidos es fundamental para calcular momentos de inercia, estabilidad de estructuras y las fuerzas de reacción bajo cargas gravitacionales.

### Centro de gravedad (CG) y centro de masa (CM) de un cuerpo rígido

* **Centro de masa (CM):** Es el punto geométrico que obedece al comportamiento dinámico de la masa total de un cuerpo. Se define vectorialmente como el promedio ponderado de las posiciones de todas las partículas que componen el cuerpo:

  $$
  \vec{r}_{CM} = \frac{\int \vec{r} \, dm}{m}
  $$

* **Centro de gravedad (CG):** Es el punto donde se considera concentrado el peso total del cuerpo para los efectos de la interacción gravitatoria. Si el campo gravitacional g es uniforme y constante en todo el cuerpo, el centro de gravedad coincide exactamente con el centro de masa ($\vec{r}_{CG} = \vec{r}_{CM}$).

### Centroide geométrico: determinación para volúmenes, superficies planas/curvas y líneas

Cuando un cuerpo es homogéneo (densidad uniforme), el centro de masa depende exclusivamente de su geometría. Este punto se denomina **centroide**:

* **Para volúmenes:** 
  
  $$
  \bar{x} = \frac{\int x \, dV}{V}, \quad \bar{y} = \frac{\int y \, dV}{V}, \quad \bar{z} = \frac{\int z \, dV}{V}
  $$

* **Para áreas (superficies planas):** 
  
  $$
  \bar{x} = \frac{\int x \, dA}{A}, \quad \bar{y} = \frac{\int y \, dA}{A}
  $$

* **Para líneas:** 
  
  $$
  \bar{x} = \frac{\int x \, dL}{L}, \quad \bar{y} = \frac{\int y \, dL}{L}
  $$

## 2. Métodos de cálculo y teoremas geométricos

### Determinación de centroides y centros de masa por integración directa

El proceso de integración directa requiere elegir un elemento diferencial adecuado ($dL$, $dA$ o $dV$) según la simetría del problema, plantear las ecuaciones de momento e integrar dentro de los límites de la geometría. La elección adecuada de elementos diferenciales en coordenadas cartesianas, cilíndricas o esféricas simplifica sustancialmente el cálculo analítico.

### Método de cuerpos y figuras compuestas: cálculo por sumatorias discretas

La gran mayoría de las estructuras y piezas de ingeniería no son funciones continuas simples, sino combinaciones de formas geométricas estándar (rectángulos, triángulos, semicírculos, cilindros, etc.). 

Para calcular el centroide de un cuerpo compuesto, el sistema se divide en $n$ partes discretas cuyos pesos o áreas ($A_i$) y coordenadas de centroides individuales ($\bar{x}_i, \bar{y}_i, \bar{z}_i$) son conocidos:

$$
\bar{X} = \frac{\sum (\bar{x}_i \cdot A_i)}{\sum A_i}, \quad \bar{Y} = \frac{\sum (\bar{y}_i \cdot A_i)}{\sum A_i}, \quad \bar{Z} = \frac{\sum (\bar{z}_i \cdot A_i)}{\sum A_i}
$$

### Teoremas de Pappus-Guldinus

Estos teoremas clásicos permiten relacionar la geometría de líneas y áreas planas con las áreas de superficies y volúmenes generados mediante su rotación alrededor de un eje fijo en el espacio.

1. **Primer Teorema (Área de una superficie de revolución):**
   El área $A$ de una superficie de revolución generada al girar una curva plana alrededor de un eje coplanar es igual al producto de la longitud de la curva ($L$) por la distancia recorrida por su centroide ($\bar{y}$) durante la rotación completa:
   
   $$
   A = 2\pi \bar{y} L
   $$

2. **Segundo Teorema (Volumen de un cuerpo de revolución):**
   El volumen $V$ de un cuerpo de revolución generado al girar un área plana alrededor de un eje coplanar que no la corta es igual al producto del área ($A$) por la distancia recorrida por su centroide ($\bar{r}$) en una revolución completa:
   
   $$
   V = 2\pi \bar{r} A
   $$

### Aplicaciones a casos prácticos de ingeniería

El conocimiento preciso de los centroides es indispensable en el diseño mecánico e hidráulico, como en el cálculo de la posición del **centro de presión** en superficies planas sumergidas, donde la fuerza hidrostática resultante se aplica a una profundidad dependiente directamente de los momentos de inercia y áreas calculadas respecto a su eje centroidal.