var $ = go.GraphObject.make;
var myDiagram =
  $(go.Diagram, "myDiagramDiv",
    {
      initialContentAlignment: go.Spot.Center, // Center Diagram contents
      "undoManager.isEnabled": true // enable Ctrl-Z to undo and Ctrl-Y to redo
    });

myDiagram.nodeTemplate =
  $(go.Node, "Horizontal", {background: "#44CCFF"},
    $(go.Picture,
      //giving a white background will make it visibile if no picture is present
      {margin: 10, width: 50, height: 50, background: "white" },
      //picture is bound to source attribute of model data
      new go.Binding("source")),
    $(go.TextBlock,
      //initial value for text block, will be replaced if relevant value exists in model
      "Default Text",
      //initial style values for text
      { margin: 12, stroke: "white", font: "bold 16px sans-serif" },
      //the text will be bound to the text attribute in the model
      new go.Binding("text", "name"))
);

// //creates a directed link graph
// //nodes are linked according to their keys
// var model = $(go.GraphLinksModel);
// model.nodeDataArray = [
//   { key: "A", name: "Don Meow", source: "cat1.png" },
//   { key: "B", name: "Copricat", source: "cat2.jpg" },
//   { key: "C", name: "Demeter", source: "cat2.png" },
//   { /* Empty data */ }
// ];
// model.linkDataArray = [
//   { from: "A", to: "B" },
//   { from: "B", to: "C" }
// ];

//Tree model creates a tree using the nodes
//nodes are specified using the key attribute and the parent attribute can refer to a key which is the parent of a node.
var model = $(go.TreeModel);
model.nodeDataArray = [
  { key: "1",                name: "Don Meow",   source: "cat1.png" },
  { key: "2", parent: "1",  name: "Demeter",    source: "cat2.jpg" },
  { key: "3", parent: "1",  name: "Copricat",   source: "cat2.png" },
  { key: "4", parent: "3",  name: "Jellyorum",  source: "cat3.jpg" },
  { key: "5", parent: "3",  name: "Alonzo"                         },
  { key: "6", parent: "2",  name: "Munkustrap" }
];

myDiagram.model = model;

//Adding a tree layout to the diagram
var layout = $(go.TreeLayout, { angle: 0, layerSpacing: 35 });
myDiagram.layout = layout;

var linkTemplate =
$(go.Link,
  //Default routing is go.Link.Normal
  //Default corner is 0
  { routing: go.Link.Orthogonal, corner: 5 },
  //the shape of the link
  $(go.Shape, {strokeWidth: 3, stroke: "#555"})
  //An arrow head could be added with the followin code:
  // ,$(go.Shape, { toArrow: "Standard", stroke: null })
);

myDiagram.linkTemplate = linkTemplate;
