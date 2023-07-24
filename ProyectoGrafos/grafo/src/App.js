import './App.css';
import  {  Graphviz  }  from  'graphviz-react' ;

/*Los siguientes apoyos están disponibles para el componente:
 punto: ¿ 
 opciones de cadena ?: GraphvizOptions 
 className?: cadena
*/

function App() {
  return (
    <div className="App">
      <h1>Ejemplo 1</h1>
<Graphviz dot={`graph {
  grandparent -- "parent A";
  child;
  "parent B" -- child;
  grandparent --  "parent B";
}`} />
<h1>Ejemplo 2 </h1>
<Graphviz dot={`digraph {
  a -> b;
  c;
  d -> c;
  a -> d;
}`} />

<h1>Ejemplo 3</h1>

<Graphviz dot={`digraph {
  HTML -> CSS;
  HTML -> JAVASCRIPT -> REACT;
  REACT -> ANGULAR;
  ANGULAR ->  VUE
}`} />



    </div>
  );
}

export default App;

/*dot es necesario para todas las instancias del componente. Espera una cadena que contenga una definición de gráfico válida utilizando el lenguaje Graphviz DOT. Los detalles del lenguaje DOT se pueden encontrar aquí . Tenga en cuenta que ni el componente ni el renderizador subyacente verifican la validez de la cadena DOT.

optionses una matriz opcional de opciones de representación para el componente. Está alineado con las opciones aceptadas por el renderizador d3-graphviz (consulte la API para obtener más detalles). Los siguientes valores se establecen de forma predeterminada:

ajuste: verdadero 
altura: 500 
ancho: 500 
zoom: falso
Todas las opciones proporcionadas se tratan como adicionales a las opciones predeterminadas. Es decir, los valores anteriores no se sobrescribirán con las opciones proporcionadas a menos que se haga explícitamente.

classNameadjunta un classatributo HTML al nivel superior del componente para facilitar el estilo.*/





/*y como se colorea de distinto color los grafos?
ChatGPT
Para colorear los nodos y conexiones de un grafo en Dot, puedes usar características específicas para modificar el estilo visual de los elementos. Los atributos que surgen del color de los nudos y conexiones son:

node: Este atributo define el estilo para los nudos. Puedes especificar diferentes propiedades, como forma, color de relleno, tamaño, entre otros. Para cambiar el color de un nudo, puedes utilizar el atributo fillcolor.

edge: Este atributo define el estilo para las conexiones. Al igual que con los nodos, puede especificar diversas propiedades, como estilo de línea, color, etiquetas, etc. Para cambiar el color de una conexión, puede utilizar el atributo color.

Aquí tienes un ejemplo de cómo colorear los nodos y conexiones de un grafo en Dot:

punto

Copiar código
digraph G {
    // Atributos globales
    graph [bgcolor="#ffffff*/