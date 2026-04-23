# Overview CSS - Material de Aula

## SINTAXE BÁSICA

```css
seletor {
  propriedade: valor;
}
```

## SELETORES

elemento

```css
p {
}
```

classe

```css
.classe {
}
```

id

```css
#id {
}
```

descendente

```css
div p {
}
```

```css
múltiplos seletores h1,
h2,
h3 {
}
```

classe específica

```css
p.texto {
}
```

## CORES

nome

```css
color: red;
```

hex

```css
color: #ff0000;
```

## TEXTO

propriedades:

```css
color
font-size
font-family
font-weight
line-height
text-align
text-decoration
```

exemplo

```css
p {
  font-size: 16px;
  text-align: center;
}
```

## FONTES

```css
font-family: Arial, sans-serif;

font-size: 16px;

font-weight: bold;

font-style: italic;
```

## BOX MODEL

```css
content
padding
border
margin
```

exemplo

```css
div {
  padding: 10px;
  border: 1px solid black;
  margin: 20px;
}
```

7. WIDTH E HEIGHT

```css
width: 300px;

height: 200px;

max-width: 100%;

min-height: 100px;
```

## DISPLAY

```css
display: block;

display: inline;

display: inline-block;

display: none;

display: flex;
```

## BACKGROUND

```css
background-color: blue;

background-image: url("img.jpg");

background-size: cover;

background-position: center;
```

## BORDER

```css
border: 1px solid black;

border-radius: 5px;
```

# LISTAS

```css
list-style: none;

list-style-type: square;
```

## OPACITY

```css
opacity: 0.5;
```

## TRANSITION

```css
transition: all 0.3s;
```

exemplo

```css
button {
  transition: background 0.3s;
}

button:hover {
  background: blue;
}
```

## PSEUDO CLASSES

```css
:hover
:focus
:active
```

exemplo

```css
a:hover {
  color: red;
}
```
