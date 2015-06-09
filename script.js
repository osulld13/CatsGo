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

var model = $(go.Model);
model.nodeDataArray = [
  { name: "Don Meow", source: "cat1.png" },
  { name: "Copricat", source: "cat2.jpg" },
  { name: "Demeter", source: "cat2.png" },
  { /*name: "Kool Kat", source: "cat3.jpg"*/ }
];

myDiagram.model = model;
