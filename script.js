// Ants by Bennett Feely
// https://codepen.io/bennettfeely/pen/qxxRPX

var text = new Blotter.Text("Hi!", {
	family : "Damion",
	size : 150,
	fill : "#a83662",
});

var material = new Blotter.FliesMaterial();

material.uniforms.uPointCellWidth.value = 0.01;
material.uniforms.uPointRadius.value = .8;
material.uniforms.uSpeed.value = 5;

var blotter = new Blotter(material, { 
	texts : text,
});

var scope = blotter.forText(text);

var target = document.getElementById('text');

scope.appendTo(target);