---
title: "Momento de Inercia de Masa"
orden: 14
---

# Momento de Inercia de Masa

## 1. Inercia rotacional en cuerpos tridimensionales

El momento de inercia de masa representa la medida cuantitativa de la resistencia que opone un cuerpo rígido a cualquier cambio en su estado de movimiento rotacional (aceleración angular), desempeñando en la dinámica rotacional un papel análogo al que cumple la masa inercial en la dinámica de traslación.

### Definición del momento de inercia de masa ($I_{xx}, I_{yy}, I_{zz}$) y su rol dinámico

Sea un cuerpo rígido continuo de masa total $m$ y densidad volumétrica $\rho(x, y, z)$. El momento de inercia con respecto a un eje se define como la integral del cuadrado de la distancia perpendicular de cada elemento diferencial de masa $dm$ hacia dicho eje:

* **Respecto al eje $x$ ($I_{xx}$):** La distancia perpendicular de un punto $(x, y, z)$ al eje $x$ es $r_x = \sqrt{y^2 + z^2}$, por lo que:

  $$
  I_{xx} = \int (y^2 + z^2) \, dm = \int_V (y^2 + z^2) \rho \, dV
  $$

* **Respecto al eje $y$ ($I_{yy}$):** Con distancia perpendicular $r_y = \sqrt{x^2 + z^2}$:

  $$
  I_{yy} = \int (x^2 + z^2) \, dm = \int_V (x^2 + z^2) \rho \, dV
  $$

* **Respecto al eje $z$ ($I_{zz}$):** Con distancia perpendicular $r_z = \sqrt{x^2 + y^2}$:

  $$
  I_{zz} = \int (x^2 + y^2) \, dm = \int_V (x^2 + y^2) \rho \, dV
  $$

#### Rol dinámico

En la rotación plana alrededor de un eje fijo $z$, la segunda ley de Newton para la rotación se expresa como:

$$
M_z = I_{zz} \alpha_z
$$

Donde $M_z$ es el momento neto aplicado y $\alpha_z$ es la aceleración angular resultante. De igual manera, la energía cinética de rotación de un sólido rígido respecto a dicho eje es:

$$
T_{\text{rot}} = \frac{1}{2} I_{zz} \omega^2
$$

### Determinación por integración analítica para geometrías básicas y cálculo en cuerpos compuestos

Para determinar el momento de inercia de geometrías regulares mediante integración directa, se selecciona un elemento de volumen infinitesimal $dV$ que conserve la simetría del cuerpo:

* **Varilla delgada homogénea de longitud $L$ y masa $m$:**
  * Respecto a un eje perpendicular que pasa por su centro de masa: $I_{G} = \frac{1}{12} m L^2$
  * Respecto a un eje perpendicular que pasa por un extremo: $I_{O} = \frac{1}{3} m L^2$

* **Cilindro macizo homogéneo o disco de radio $R$, altura $h$ y masa $m$:**
  * Respecto a su eje longitudinal de simetría ($z$): $I_{zz} = \frac{1}{2} m R^2$
  * Respecto a ejes transversales centroidales ($x, y$): $I_{xx} = I_{yy} = \frac{1}{4} m R^2 + \frac{1}{12} m h^2$

* **Esfera maciza homogénea de radio $R$ y masa $m$:**
  * Respecto a cualquier eje que pase por su centro: $I = \frac{2}{5} m R^2$

#### Cálculo en cuerpos compuestos

Para un sistema constituido por $k$ subsólidos simples de masas $m_i$ y momentos de inercia conocidos:

$$
I_{\text{total}} = \sum_{i=1}^{k} I_i
$$

Si el cuerpo presenta huecos o cavidades, la inercia del hueco se resta directamente del total, asumiendo una densidad homogénea equivalente.

### Momentos de inercia de masa para placas delgadas y láminas planas

Para una lámina o placa plana de espesor despreciable contenida en el plano $xy$ ($z \approx 0$):

$$
I_{xx} = \int y^2 \, dm, \quad I_{yy} = \int x^2 \, dm
$$

$$
I_{zz} = \int (x^2 + y^2) \, dm
$$

De estas relaciones surge de forma natural el **teorema de los ejes perpendiculares** para placas planas:

$$
I_{zz} = I_{xx} + I_{yy}
$$

Adicionalmente, si la densidad superficial $\sigma$ es constante, existe una relación directa entre los momentos de inercia de masa y los segundos momentos de área geométricos ($I^A$):

$$
I_{xx} = \sigma I_x^A, \quad I_{yy} = \sigma I_y^A, \quad I_{zz} = \sigma J_O^A
$$

---

## 2. Tensores y ejes principales de inercia de masa

Cuando un sólido rígido experimenta una rotación tridimensional general sin un eje de simetría fijo, el vector de momento angular $\vec{H}_O$ y el vector de velocidad angular $\vec{\omega}$ no son necesariamente colineales. La relación lineal entre ambos viene gobernada por el **tensor de inercia**.

### Teorema de los ejes paralelos aplicado a masas (Teorema de Steiner para masas)

El teorema de Steiner permite trasladar los momentos y productos de inercia desde un sistema de ejes centroidales $(x', y', z')$ con origen en el centro de masa $G$, hacia un sistema paralelo $(x, y, z)$ cuyo origen dista $(\bar{x}, \bar{y}, \bar{z})$ respecto a $G$:

* **Para momentos de inercia:**

  $$
  I_{xx} = \bar{I}_{x'x'} + m (d_y^2 + d_z^2)
  $$

  $$
  I_{yy} = \bar{I}_{y'y'} + m (d_x^2 + d_z^2)
  $$

  $$
  I_{zz} = \bar{I}_{z'z'} + m (d_x^2 + d_y^2)
  $$

  Donde $d_x, d_y, d_z$ representan las distancias ortogonales entre los ejes paralelos respectivos.

* **Para productos de inercia:**

  $$
  I_{xy} = \bar{I}_{x'y'} + m d_x d_y
  $$

  $$
  I_{yz} = \bar{I}_{y'z'} + m d_y d_z
  $$

  $$
  I_{zx} = \bar{I}_{z'x'} + m d_z d_x
  $$

### Productos de inercia de masa ($I_{xy}, I_{yz}, I_{zx}$)

Los productos de inercia miden la asimetría dinámica de la distribución de masa con respecto a los planos coordenados:

$$
I_{xy} = I_{yx} = \int x y \, dm
$$

$$
I_{yz} = I_{zy} = \int y z \, dm
$$

$$
I_{zx} = I_{xz} = \int z x \, dm
$$

* **Criterio de simetría:** Si el cuerpo rígido posee un plano de simetría geométrica y de densidad (por ejemplo, el plano $xy$ con $z = 0$), los productos de inercia asociados a la coordenada perpendicular se anulan idénticamente:

  $$
  I_{yz} = 0, \quad I_{zx} = 0
  $$

### Ejes principales de inercia de masa y diagonalización elemental del tensor de inercia

En un punto dado $O$, el estado de inercia tridimensional se describe mediante la matriz simétrica representativa del **tensor de inercia** $\mathbf{I}$:

$$
\mathbf{I} = \begin{bmatrix}
I_{xx} & -I_{xy} & -I_{xz} \\
-I_{yx} & I_{yy} & -I_{yz} \\
-I_{zx} & -I_{zy} & I_{zz}
\end{bmatrix}
$$

*(Nota: en formulación matricial dinámica se adopta el convenio de signos negativos en los elementos fuera de la diagonal para que $\vec{H}_O = \mathbf{I} \vec{\omega}$).*

#### Diagonalización y cálculo de momentos principales

Existen tres direcciones ortogonales mutuamente perpendiculares denominadas **ejes principales de inercia** $(1, 2, 3)$, para las cuales todos los productos de inercia se anulan simultáneamente. 

Los momentos principales de inercia correspondientes ($I_1, I_2, I_3$) son los autovalores (*eigenvalues*) de la matriz del tensor de inercia, obtenidos al resolver la ecuación característica:

$$
\det(\mathbf{I} - \lambda \mathbf{I}_{3\times3}) = 0
$$

$$
\begin{vmatrix}
I_{xx} - \lambda & -I_{xy} & -I_{xz} \\
-I_{yx} & I_{yy} - \lambda & -I_{yz} \\
-I_{zx} & -I_{zy} & I_{zz} - \lambda
\end{vmatrix} = 0
$$

Las tres raíces reales $\lambda_1 = I_1$, $\lambda_2 = I_2$, $\lambda_3 = I_3$ corresponden a los momentos principales de inercia. Los autovectores asociados definen los vectores directores unitarios de los ejes principales de inercia. 

Cuando el sistema coordenado se alinea con estos ejes principales, el tensor de inercia adopta su forma diagonal canónica:

$$
\mathbf{I}_{\text{principal}} = \begin{bmatrix}
I_1 & 0 & 0 \\
0 & I_2 & 0 \\
0 & 0 & I_3
\end{bmatrix}
$$

Bajo este sistema de referencia principal, si el cuerpo gira con velocidad angular $\vec{\omega}$ orientada a lo largo de uno de sus ejes principales, el momento angular $\vec{H}$ resulta estrictamente paralelo a $\vec{\omega}$, eliminando los momentos dinámicos parásitos sobre los cojinetes o apoyos del eje de rotación.