var $ = go.GraphObject.make;
var myDiagram =
  $(go.Diagram, "myDiagramDiv",
    {
      initialContentAlignment: go.Spot.Center, // Center Diagram contents
      "undoManager.isEnabled": true // enable Ctrl-Z to undo and Ctrl-Y to redo
    });

myDiagram.nodeTemplate =
  $(go.Node, "Horizontal", {background: "#44CCFF"},
    $(go.Picture, {margin: 10, width: 50, height: 50, background: "white" }, new go.Binding("source")),
    $(go.TextBlock, "Default Text", { margin: 12, stroke: "white", font: "bold 16px sans-serif" }, new go.Binding("text", "name"))
);

var model = $(go.Model);
model.nodeDataArray = [
  { name: "Don Meow", source: "cat1.png" },
  { name: "Copricat", source: "cat2.jpg" },
  { name: "Demeter", source: "cat2.png" },
  { name: "Kool Kat", source: "cat3.jpg" }
];

myDiagram.model = model;
