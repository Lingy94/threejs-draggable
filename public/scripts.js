var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );


var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 100;

var objects = [];
function init() {
	var ambientLight = new THREE.AmbientLight(0x0f0f0f)
	scene.add(ambientLight)

	var light = new THREE.SpotLight( 0xffffff, 1.5 )
	scene.add(light)

	var geometry = new THREE.SphereGeometry( 40, 40, 40)
	for (let i = 0; i < 100 ; i++ ) {
		var object = new THREE.Mesh( geometry, new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } ) );
 
		object.position.x = Math.random() * 1000 - 500;
		object.position.y = Math.random() * 600 - 300;
		object.position.z = Math.random() * 800 - 400;
	
		object.castShadow = true;
		object.receiveShadow = true;
	
		scene.add( object );
	
		objects.push( object );

	}
	var controls = new THREE.DragControls( objects, camera, renderer.domElement );
}


scene.background = new THREE.Color( 0xf0f0f0 );

var animate = function () {
	requestAnimationFrame( animate );

	cube.rotation.x += 0.1;
	cube.rotation.y += 0.1;

	renderer.render(scene, camera);
};
init();
animate();