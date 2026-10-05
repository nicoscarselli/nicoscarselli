---
name: design
version: 1.0
source: "Nico Scarselli — Manual de Marca V1.0"
---

# design.md — Sistema de diseño de Nico Scarselli

Guía operativa para diseñar cualquier pieza de la marca (web, documentos, presentaciones, redes). Deriva del Manual de Marca V1.0. Si algo de este archivo contradice el manual, gana el manual.

---

## 1. Principios

La marca diseña como piensa: **primero entender, después nombrar, después construir.** El diseño no es decoración; es estructura que vuelve claro lo complejo.

**Todo debe poder explicarse, implementarse y sostenerse.**

| Valor | Qué significa al diseñar |
|---|---|
| Criterio | Cada decisión visual tiene un porqué comunicable |
| Honestidad | Diagnóstico directo, sin maquillar |
| Claridad | Se ordena lo complejo, no se disfraza |
| Sistema | Reglas repetibles antes que golpes de talento |
| Oficio | Detalle, materialidad y precisión |
| Implementación | Si no se puede construir, no existe |

**Personalidad visual:** analítica, meticulosa, directa, minimalista, honesta, estratégica, humana, reflexiva.

**La marca NO es:** artística, ornamental ni decorativa. Representa arquitectura digital, sistemas, orden y pensamiento estratégico.

---

## 2. Color

### Paleta

| Rol | Nombre | HEX | RGB | CMYK | HSL | Proporción |
|---|---|---|---|---|---|---|
| Primario | **Carbón** | `#27292A` | 39, 41, 42 | 7, 2, 0, 84 | 200°, 4%, 16% | 60% |
| Secundario | **Musgo** | `#45765C` | 69, 118, 92 | 42, 0, 22, 54 | 150°, 26%, 37% | 10% |
| Terciario | **Bruma** | `#C5CED3` | 197, 206, 211 | 7, 2, 0, 17 | 202°, 15%, 80% | 30% |

- **Carbón:** base de toda comunicación seria. Peso, autoridad, cero ambigüedad.
- **Musgo:** la única señal de intervención. Se usa con moderación.
- **Bruma:** el aire del sistema. Separa, ordena y deja respirar al contenido técnico.
- Blanco (`#FFFFFF`) como superficie base clara, tal como lo usa el sitio.

### Reglas de contacto

1. **El musgo nunca es fondo de sección completa**, salvo en carátulas de capítulo.
2. **Sobre carbón, el texto va en bruma o blanco.** Nunca musgo sobre carbón para texto de lectura (contraste 2.78:1, no alcanza).
3. El musgo funciona como señal (acento, estado, énfasis puntual), no como superficie.

### Contraste verificado (WCAG)

| Combinación | Ratio | Uso |
|---|---|---|
| Carbón sobre blanco | 14.62:1 | Texto de lectura |
| Blanco sobre carbón | 14.62:1 | Texto de lectura |
| Bruma sobre carbón | 9.15:1 | Texto de lectura |
| Carbón sobre bruma | 9.15:1 | Texto de lectura |
| Musgo sobre blanco | 5.25:1 | Texto (AA) y acentos |
| Musgo sobre bruma | 3.29:1 | Solo elementos grandes / no textuales |
| Musgo sobre carbón | 2.78:1 | **Prohibido para texto** |

### Tokens

```css
:root {
  --carbon: #27292A;
  --musgo:  #45765C;
  --bruma:  #C5CED3;
  --white:  #FFFFFF;
}
```

---

## 3. Tipografía

### Manrope — única familia de marca

Geométrica, contemporánea, legible en pantalla en todos los pesos. Se usa **tanto en titulares como en cuerpo**, construyendo jerarquía con peso y tamaño. **Nunca se mezcla con otra familia en texto editorial.**

Pesos: Regular (cuerpo) y Bold (encabezados y subtítulos).

### IBM Plex Mono — funcional complementaria

Solo para etiquetas técnicas, coordenadas, specs de color y tipografía, y datos que se lean como anotación de sistema. **Nunca para texto de lectura corrida.**

### Escala

| Nivel | Tamaño | Uso |
|---|---|---|
| H1 | 64 px | Aperturas |
| H2 | 42 px | Secciones |
| H3 | 28 px | Subtítulos |
| Body | 16 px | Texto |
| Caption | 13 px | Etiquetas / mono |

### Titulares en mayúsculas

- Solo para declaraciones **cortas y contundentes** en escalas grandes: **2 a 6 palabras**.
- Interlineado ajustado; interletrado normal.
- Nunca en cuerpo de texto, subtítulos web ni para introducir pasajes largos.
- Incorrecto: exceso de leading, exceso de tracking, o minúsculas donde corresponde mayúscula.

### Cuerpo de texto

- Línea de **45 a 90 caracteres** (ni muy angosta ni muy larga).
- Saltos de línea completos entre párrafos.
- Encabezados en **Manrope Bold**, sin salto de línea suelto debajo.

```css
body { font-family: 'Manrope', system-ui, sans-serif; }
.mono, code, .spec { font-family: 'IBM Plex Mono', ui-monospace, monospace; }
```

---

## 4. Logo

**Concepto:** cuatro formas en flecha que se conectan en el centro formando un marco. Funciona como una mira: encuadra lo que hay que resolver antes de intervenir. **Nunca se separan las piezas ni se altera el ángulo de conexión.**

### Construcción y espacio

- Se construye sobre una unidad modular **X**; toda proporción, trazo y separación es múltiplo de X.
- **Área de seguridad: 1X** alrededor. Ningún texto, imagen o borde la invade.
- Tamaños mínimos:

| Versión | Digital | Impreso |
|---|---|---|
| Símbolo | 48 px | 24 mm |
| Full logo | 32 px | 16 mm |

### Variantes aprobadas

- Positivo (carbón) sobre blanco y sobre gris claro.
- Negativo (blanco) sobre carbón.
- Versión tonal en bruma.
- Símbolo solo, y símbolo en contenedor redondeado (avatar / app icon).

### Usos prohibidos

- Deformar, estirar o comprimir
- Rotar o inclinar
- Agregar sombras
- Recolorear (por ejemplo en naranja u otro color fuera de paleta)
- Usar bruma sobre fondos claros de bajo contraste
- Invertir el orden (símbolo a la derecha del texto)

---

## 5. Identidad verbal (microcopy y contenido)

Voz **analítica, directa y honesta.** Técnica pero humana, formal sin ser corporativa, **cero temperatura publicitaria.** Explica, no vende.

**Así sí**
1. Nombrá el problema antes que la solución.
2. Usá datos y ejemplos concretos.
3. Escribí como quien explica a un par.
4. Preferí la frase corta y la afirmación.

**Así no**
1. Vender el resultado sin decir por qué existe.
2. Prometer transformaciones mágicas.
3. Escribir como un folleto corporativo.
4. Encadenar adjetivos y superlativos.

**Posicionamiento en una línea:** estrategia de diseño digital que diagnostica antes de ejecutar y entrega sistemas construibles, no piezas decorativas.

---

## 6. Layout y componentes

Criterios tomados del sitio vigente (`index.html`), que ya materializa la marca:

- **Contenedor:** ancho máx. 1320 px, gutters de 64 px (40 px en mobile).
- **Radios:** `0`. Todo es ortogonal y recto; sin esquinas redondeadas (la única excepción es el contenedor del símbolo como avatar).
- **Líneas:** bordes de 1 px con carbón al ~14% de opacidad (`rgba(39,41,42,.14)`); línea fuerte de 2 px en listas de experiencia.
- **Ritmo vertical:** secciones con 88–120 px de padding, separadas por línea fina.
- **Botón primario:** fondo carbón, texto blanco, sin radio, alto mín. 48 px, hover con desplazamiento de −3 px.
- **Enlaces:** subrayado de 1 px, ícono de flecha que se desplaza en hover.
- **Modo oscuro:** carbón como fondo, texto en tono claro; mantener la regla de contacto del musgo.
- **Movimiento:** easing `cubic-bezier(.2,.7,.2,1)`, transiciones de 0.2–0.7 s, respetando `prefers-reduced-motion`.
- **Accesibilidad:** contraste según la tabla de la sección 2, foco visible, tap targets ≥ 44 px.

---

## 7. Checklist antes de entregar

- [ ] Proporción cercana a Carbón 60 / Bruma 30 / Musgo 10
- [ ] Musgo solo como señal; nunca fondo masivo ni texto sobre carbón
- [ ] Solo Manrope en texto; IBM Plex Mono solo para anotaciones técnicas
- [ ] Titulares en mayúsculas: 2–6 palabras, leading ajustado
- [ ] Cuerpo con 45–90 caracteres por línea
- [ ] Logo con área de seguridad 1X y sin ninguno de los usos prohibidos
- [ ] Copy: problema antes que solución, frases cortas, sin superlativos
- [ ] Contraste verificado y radios en 0
