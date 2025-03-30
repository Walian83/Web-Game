import * as THREE from 'three';


let upstate;
let downstate;
let forwardstate;
let backwardstate;
let rightstate;
let leftstate;
let rightrot;
let leftrot;
var hp = 100;
var score = 0;


//loading screen with a progress bar
const loadingManager = new THREE.LoadingManager();

loadingManager.onStart = function(url, item, total){
  console.log(`Started loading: ${url}`);
}

const progressBar = document.getElementById('progress-bar');

loadingManager.onProgress = function(url, loaded, total){
  progressBar.value = (loaded / total) * 100;
}

const progressBarContainer = document.querySelector('.progress-bar-container');

loadingManager.onLoad = function(){
  progressBarContainer.style.display = 'none';
}

loadingManager.onError = function(url){
  console.error(`Problem loading: ${url}`);
}



const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 0.1, 100 );

			const renderer = new THREE.WebGLRenderer();
			renderer.setSize( window.innerWidth, window.innerHeight );
			document.body.appendChild( renderer.domElement );

      const material2 = new THREE.MeshPhongMaterial( { color: 0xffffff, emissive:0x313bd1,specular:0x61c975, shininess:90 } );

      //first geometry - box
			const geometry = new THREE.BoxGeometry();
			//const material = new THREE.MeshBasicMaterial( { color: 0xffffff } );
			const cube = new THREE.Mesh( geometry, material2 );
			//scene.add( cube );

      //second geometry - another cube
      const geometry2 = new THREE.BoxGeometry(1, 1, 1);
			//const materialC = new THREE.MeshBasicMaterial( { color: 0xff3333 } );
			const cube2 = new THREE.Mesh( geometry2, material2 );
      cube2.position.set(0, 1, 0);         
			//scene.add( cube2 );

      //cube2 bounding box for player
      let cube2BB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
      cube2BB.setFromObject(cube2);
      

      //little cube, serving as character front
      const geometry3 = new THREE.BoxGeometry(0.1, 0.1, 3);
      const material3 = new THREE.MeshBasicMaterial( { color: 0xff3333 } );
      const cube3 = new THREE.Mesh(geometry3, material3 );
      cube3.position.set(0.4, 0.4, -1);

      //player sword bounding box
      let swordBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
      swordBB.setFromObject(cube3);

      //enemy 
      const enemyGeometry = new THREE.SphereGeometry( 0.7, 32, 16 );
      //const enemyMaterial = new THREE.MeshPhongMaterial({color: 0xffffff, emissive:0x313bd1,specular:0x61c975, shininess:90});
      const enemyTop = new THREE.Mesh(enemyGeometry, material2);
      enemyTop.position.set(-20, 1.3, 20);
      //enemyTop.rotateX(1.58);
      

      //enemy2
      const enemyGeometry2 = new THREE.SphereGeometry( 1, 32, 16 );
      //const enemyMaterial2 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
      const enemyBottom = new THREE.Mesh( enemyGeometry2, material2 );
      enemyBottom.position.set(-20, 0, 20);
      

      //enemy3
      const enemyGeometry3 = new THREE.BoxGeometry(0.7, 0.7, 0.7);
			const enemyMaterial3 = new THREE.MeshPhongMaterial( { color: 0x6e148f, emissive: 0x2b1877, specular: 0x435393, shininess: 30 } );
			const enemyCube = new THREE.Mesh( enemyGeometry3, enemyMaterial3 );
      enemyCube.position.set(-20, 1.3, 20);

      //enemyCube bounding box for enemy
      let enemyCubeBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
      enemyCubeBB.setFromObject(enemyCube);




      //second enemy
      const secondEnemyGeometry = new THREE.SphereGeometry( 0.7, 32, 16 );
      //const enemyMaterial4 = new THREE.MeshPhongMaterial( { color: 0xbb1b1b, emissive: 0x494512, specular: 0x47315e, shininess: 60 } );
      const enemyTop2 = new THREE.Mesh( secondEnemyGeometry, material2);
      enemyTop2.position.set(20, 1.3, 20);
      //enemyTop2.rotateX(1.58);
      

      //second enemy2
      const secondEnemyGeometry2 = new THREE.SphereGeometry( 1, 32, 16 );
      //const enemyMaterial5 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
      const enemyBottom2 = new THREE.Mesh( secondEnemyGeometry2, material2 );
      enemyBottom2.position.set(20, 0, 20);
      

      //second enemy3
      const secondEnemyGeometry3 = new THREE.BoxGeometry(0.7, 0.7, 0.7);
			//const enemyMaterial6 = new THREE.MeshPhongMaterial( { color: 0x6e148f, emissive: 0x2b1877, specular: 0x435393, shininess: 30 } );
			const enemyCube2 = new THREE.Mesh( secondEnemyGeometry3, enemyMaterial3 );
      enemyCube2.position.set(20, 1.3, 20);

      //enemyCube bounding box for enemy
      let enemyCubeBB2 = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
      enemyCubeBB2.setFromObject(enemyCube2);




      //third enemy
      const thirdEnemyGeometry = new THREE.SphereGeometry( 0.7, 32, 16 );
      //const enemyMaterial4 = new THREE.MeshPhongMaterial( { color: 0xbb1b1b, emissive: 0x494512, specular: 0x47315e, shininess: 60 } );
      const enemyTop3 = new THREE.Mesh( thirdEnemyGeometry, material2);
      enemyTop3.position.set(1, 1.3, 20);
      //torus3.rotateX(1.58);
      

      //third enemy2
      const thirdEnemyGeometry2 = new THREE.SphereGeometry( 1, 32, 16 );
      //const enemyMaterial5 = new THREE.MeshBasicMaterial( { color: 0xffffff } );
      const enemyBottom3 = new THREE.Mesh( thirdEnemyGeometry2, material2 );
      enemyBottom3.position.set(1, 0, 20);
      

      //third enemy3
      const thirdEnemyGeometry3 = new THREE.BoxGeometry(0.7, 0.7, 0.7);
			//const enemyMaterial6 = new THREE.MeshPhongMaterial( { color: 0x6e148f, emissive: 0x2b1877, specular: 0x435393, shininess: 30 } );
			const enemyCube3 = new THREE.Mesh( thirdEnemyGeometry3, enemyMaterial3 );
      enemyCube3.position.set(1, 1.3, 20);

      //enemyCube bounding box for enemy
      let enemyCubeBB3 = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
      enemyCubeBB3.setFromObject(enemyCube3);




      //house (object to defend)
      const homeBase = new THREE.BoxGeometry(10, 7, 7);
      const homeTexture = new THREE.TextureLoader(loadingManager).load( '../images/wall.jpg' );
			const homeMaterial = new THREE.MeshBasicMaterial( { map: homeTexture } );
			const home = new THREE.Mesh( homeBase, homeMaterial );
      home.position.set(0, 0, -15)
			//scene.add( home );

      let homeBB = new THREE.Box3(new THREE.Vector3(), new THREE.Vector3());
      homeBB.setFromObject(home);

      //window
      const windowGeometry = new THREE.BoxGeometry(1.2, 1.8, 0.5);
      const windowMaterial = new THREE.MeshPhongMaterial( { color: 0x70d6e1, emissive:0x313bd1,specular:0x61c975, shininess:100 } );
      const homeWindow = new THREE.Mesh (windowGeometry, windowMaterial);
      homeWindow.position.set(-3, 1.8, -11.7);
      //scene.add(homeWindow);
      //second window
      const homeWindow2 = new THREE.Mesh (windowGeometry, windowMaterial);
      homeWindow2.position.set(3, 1.8, -11.7);
      //scene.add(homeWindow2);
      //window ledge
      const wLedgeGeometry = new THREE.BoxGeometry(1.6, 0.2, 0.85);
      const wLedgeMaterial = new THREE.MeshPhongMaterial( { color: 0x191919} );
      const windowLedge = new THREE.Mesh (wLedgeGeometry, wLedgeMaterial);
      windowLedge.position.set(3, 0.8, -11.7);
      //scene.add(windowLedge);
      //second window ledge
      const windowLedge2 = new THREE.Mesh (wLedgeGeometry, wLedgeMaterial);
      windowLedge2.position.set(-3, 0.8, -11.7);
      //scene.add(windowLedge2);

      //roof
      const roofGeometry = new THREE.ConeGeometry( 8, 4, 4 );
      const roofTexture = new THREE.TextureLoader(loadingManager).load('../images/roof.jpg');
      const roofMaterial = new THREE.MeshBasicMaterial( {map: roofTexture} );
      const homeRoof = new THREE.Mesh( roofGeometry, roofMaterial );
      homeRoof.position.set(0, 5.5, -15);
     //scene.add( homeRoof );

      //door  
      const doorGeometry = new THREE.BoxGeometry(1.8, 2.7, 0.5);
      const doorTexture = new THREE.TextureLoader(loadingManager).load('../images/door.jpg');
      const doorMaterial = new THREE.MeshBasicMaterial( { map: doorTexture } )
      const homeDoor = new THREE.Mesh (doorGeometry, doorMaterial);
      homeDoor.position.set(0, 0.6, -11.7);
      //scene.add(homeDoor);




      //trees
      const treeGeometry = new THREE.ConeGeometry( 3, 4.5, 6 );
      const treeTexture = new THREE.TextureLoader(loadingManager).load('../images/snowneedles.jpg');
      const treeMaterial = new THREE.MeshBasicMaterial( {map: treeTexture} );
      const treeTop = new THREE.Mesh( treeGeometry, treeMaterial );
      treeTop.position.set(12, 11.5, -20);
      //scene.add(tree);
      
      const treeGeometry2 = new THREE.ConeGeometry(4.5, 7.2, 6);
      const treeMiddle = new THREE.Mesh(treeGeometry2, treeMaterial);
      treeMiddle.position.set(12, 8.5, -20);
      //scene.add(tree2);
      
      const treeGeometry3 = new THREE.ConeGeometry(6, 6.6, 6);
      const treeBottom = new THREE.Mesh(treeGeometry3, treeMaterial);
      treeBottom.position.set(12, 4.5, -20);
      //scene.add(tree3);
      
      const treeTrunkGeometry = new THREE.CylinderGeometry(2, 2, 3, 8);
      const treeTrunkTexture = new THREE.TextureLoader(loadingManager).load('../images/treetrunk.jpg');
      const treeTrunkMaterial = new THREE.MeshBasicMaterial( {map: treeTrunkTexture} );
      const treeTrunk = new THREE.Mesh( treeTrunkGeometry, treeTrunkMaterial );
      treeTrunk.position.set(12, 0, -20);
      //scene.add(treeTrunk);

      const treeTop2 = new THREE.Mesh(treeGeometry, treeMaterial);
      treeTop2.position.set(-10, 11.5, -35);
      const treeMiddle2 = new THREE.Mesh(treeGeometry2, treeMaterial);
      treeMiddle2.position.set(-10, 8.5, -35);
      const treeBottom2 = new THREE.Mesh(treeGeometry3, treeMaterial);
      treeBottom2.position.set(-10, 4.5, -35);
      const treeTrunk2 = new THREE.Mesh(treeTrunkGeometry, treeTrunkMaterial);
      treeTrunk2.position.set(-10, 0, -35);





      //background buildings
      const iglooGeometry = new THREE.SphereGeometry( 7.5, 16, 14 );
      const iglooTexture = new THREE.TextureLoader(loadingManager).load('../images/igloo.jpg');
      const iglooMaterial = new THREE.MeshBasicMaterial( {map: iglooTexture} );
      const igloo = new THREE.Mesh( iglooGeometry, iglooMaterial );
      igloo.position.set(-35, 0, -40)
      scene.add( igloo );

      const iglooEntranceGeometry = new THREE.BoxGeometry(6, 4, 4)
      const iglooEntrance = new THREE.Mesh(iglooEntranceGeometry, iglooMaterial);
      iglooEntrance.position.set(-29, 0, -40);
      scene.add(iglooEntrance);


      const buildingGeometry = new THREE.BoxGeometry(8, 15, 4);
      const buildingTexture = new THREE.TextureLoader(loadingManager).load('../images/old_building.png');
      const buildingMaterial = new THREE.MeshBasicMaterial({map: buildingTexture});
      const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
      building.position.set(30, 4, -40);
      scene.add(building);

			



      //add floor
      const geometry4 = new THREE.BoxGeometry(100, 0.3, 100);
      const floortexture = new THREE.TextureLoader(loadingManager).load( "../images/snowfloor.jpg" );
      const snowfloormaterial = new THREE.MeshBasicMaterial({
      map: floortexture,
      transparent: true
      });
      
      const floor = new THREE.Mesh(geometry4, snowfloormaterial);
      floor.position.set(0, -0.67, 0);
      scene.add(floor);




      //add light
      const light = new THREE.PointLight(0xffffff, 5, 100);
      light.position.set(30, 50, 5);
      scene.add(light);





      //add as a group 
      const aGroupSample = new THREE.Group();

      //aGroupSample.add(cube, cube2);
      aGroupSample.add(cube);
      aGroupSample.add(cube2);
      aGroupSample.add(cube3);
      scene.add( aGroupSample ); //add this group to scene (not the individul mesh!)
      //end of add group

      //enemy groups
      const enemyGroup = new THREE.Group();

      enemyGroup.add(enemyBottom);
      enemyGroup.add(enemyTop);
      enemyGroup.add(enemyCube);
      scene.add(enemyGroup);

      const enemyGroup2 = new THREE.Group();

      enemyGroup2.add(enemyBottom2);
      enemyGroup2.add(enemyTop2);
      enemyGroup2.add(enemyCube2);
      scene.add(enemyGroup2);

      const enemyGroup3 = new THREE.Group();
      enemyGroup3.add(enemyBottom3);
      enemyGroup3.add(enemyTop3);
      enemyGroup3.add(enemyCube3);
      scene.add(enemyGroup3);

      //home group
      const homeGroup = new THREE.Group();
      homeGroup.add(home);
      homeGroup.add(homeWindow);
      homeGroup.add(homeWindow2);
      homeGroup.add(windowLedge);
      homeGroup.add(windowLedge2);
      homeGroup.add(homeRoof);
      homeGroup.add(homeDoor);
      scene.add(homeGroup);

      //tree groups
      const treeGroup = new THREE.Group();
      treeGroup.add(treeTop);
      treeGroup.add(treeMiddle);
      treeGroup.add(treeBottom);
      treeGroup.add(treeTrunk);
      scene.add(treeGroup);
      
      const treeGroup2 = new THREE.Group();
      treeGroup2.add(treeTop2);
      treeGroup.add(treeMiddle2);
      treeGroup.add(treeBottom2);
      treeGroup.add(treeTrunk2);
      scene.add(treeGroup2);  




      //set camera position
			camera.position.z = 13;
      camera.position.y = 6;


			const animate = function () {
				requestAnimationFrame( animate );

				//cube.rotation.x += 0.01;
				cube.rotation.y -= 0.01;
        cube2.rotation.y += 0.03;
        //cube3.rotation.x += 0.05;
        //cube3.rotation.y += 0.05;
        //aGroupSample.rotation.x += 0.01;
				//aGroupSample.rotation.y += 0.01;
        
        //enemyTop.rotation.x -= 0.02;
        //enemyTop.rotation.y -= 0.02;
        //enemyCube.rotation.x += 0.005;
        
        //enemy move
        enemyGroup.position.z -= 0.01;
        enemyGroup.position.x += 0.005;
        //second enemy move
        enemyGroup2.position.z -= 0.01;
        enemyGroup2.position.x -= 0.005;
        //third enemy move
        enemyGroup3.position.z -= 0.02;
        //player's sword position
        cube3.rotation.x = 1;
        homeRoof.rotation.y = 0.785;

        if(upstate){
          aGroupSample.position.y +=0.04;
        }
        if(downstate){
          aGroupSample.position.y -=0.04;
        }
        if(forwardstate){
          aGroupSample.position.z -=0.03;
        }
        if(backwardstate){
          aGroupSample.position.z +=0.03;
        }
        if(rightstate){
          aGroupSample.position.x +=0.04;
        }
        if(leftstate){
          aGroupSample.position.x -=0.04;
        }
        if(rightrot){
          aGroupSample.rotation.y -=0.04;
        }
        if(leftrot){
          aGroupSample.rotation.y +=0.04;
        }

        gameOver();
        increaseSpeed()

				renderer.render( scene, camera );
			};

			animate();


/*
Resize window 
*/
function onWindowResize() {

        // set the aspect ratio to match the new browser window aspect ratio
        camera.aspect = window.innerWidth / window.innerHeight;

        // update the camera's frustum
        camera.updateProjectionMatrix();

        // update the size of the renderer AND the canvas
        renderer.setSize( window.innerWidth, window.innerHeight );

      }

      window.addEventListener( 'resize', onWindowResize );

//////////////end of resize window



//add background
const loader = new THREE.TextureLoader(loadingManager);
const texture = 
loader.load("../images/winterforest.jpg", ()=>{
  const rt = new THREE.WebGLCubeRenderTarget(texture.image.height);
  rt.fromEquirectangularTexture(renderer, texture);
  scene.background = rt.texture;

});

/**
* Create orbit control main function
*/
/*
const createControls = ()=> {
//initialise orbit control
controls = new OrbitControls(camera, renderer.domElement);
//controls.update() must be called after any manual changes to the camera's transform
controls.update();
}
//use the control function
createControls();
*/


//player controls
//function - runs when an event occurs (in this case, key pressed)
//event - event that happens; info on which key was pressed
document.onkeydown = function (event){
  switch (event.key){
    case "a":
      leftstate = true;
      break;
    case "d":
      rightstate = true;
      break;
    case "w":
      forwardstate = true;
      break;
    case "s":
      backwardstate = true;
      break;
    case "ArrowLeft":
      leftrot = true;
      break;
    case "ArrowRight":
      rightrot = true;
      break;
  }
}
//stop certain movement when key is released
document.onkeyup = function (event){
  switch (event.key){
    case "a":
      leftstate = false;
      break;
    case "d":
      rightstate = false;
      break;
    case "w":
      forwardstate = false;
      break;
    case "s":
      backwardstate = false;
      break;
    case "ArrowLeft":
      leftrot = false;
      break;
    case "ArrowRight":
      rightrot = false;
      break;
  }
}

//snow
const geometry5 = new THREE.SphereGeometry(20, 40, 21);
const snowmap = new THREE.TextureLoader(loadingManager).load('../images/snowflake.png');

const snowmaterial = new THREE.PointsMaterial({
  size: 0.7,
  map: snowmap,
  transparent: true
});
let mesh = new THREE.Points(geometry5, snowmaterial);
scene.add(mesh);


//collision
function checkCollisions(){
  if(cube2BB.intersectsBox(enemyCubeBB)){
     hp = hp - 10;
    document.getElementById("hp").innerText = "Health Points: " + hp;
    enemyGroup.position.z = 0;
    enemyGroup.position.x = 0;
    loseHealthSound.play();
  }
  if(cube2BB.intersectsBox(enemyCubeBB2)){
     hp = hp - 10;
    document.getElementById("hp").innerText = "Health Points: " + hp;
    enemyGroup2.position.z = 0;
    enemyGroup2.position.x = 0;
    loseHealthSound.play();
  }
  if(swordBB.intersectsBox(enemyCubeBB2)){
    enemyGroup2.position.z = 0;
    enemyGroup2.position.x = 0;
    score = score + 100;
    document.getElementById("score").innerText = "Score: " + score;
    killEnemySound.play();
  }
  if(swordBB.intersectsBox(enemyCubeBB)){
    enemyGroup.position.z = 0;
    enemyGroup.position.x = 0;
    score = score + 100;
    document.getElementById("score").innerText = "Score: " + score;
    killEnemySound.play();
  }
  if(homeBB.intersectsBox(enemyCubeBB)){
    hp = hp - 10;
    document.getElementById("hp").innerText = "Health Points: " + hp;
    enemyGroup.position.z = 0;
    enemyGroup.position.x = 0;
    loseHealthSound.play();
  }
  if(homeBB.intersectsBox(enemyCubeBB2)){
    hp = hp - 10;
    document.getElementById("hp").innerText = "Health Points: " + hp;
    enemyGroup2.position.z = 0;
    enemyGroup2.position.x = 0;
    loseHealthSound.play();
  }
  if(homeBB.intersectsBox(enemyCubeBB3)){
    hp = hp - 10;
    document.getElementById("hp").innerText = "Health Points: " + hp;
    enemyGroup3.position.z = 0;
    loseHealthSound.play();
  }
  if(swordBB.intersectsBox(enemyCubeBB3)){
    enemyGroup3.position.z = 0;
    score = score + 100;
    document.getElementById("score").innerText = "Score: " + score;
    killEnemySound.play();
  }
  if(cube2BB.intersectsBox(enemyCubeBB3)){
     hp = hp - 10;
    document.getElementById("hp").innerText = "Health Points: " + hp;
    enemyGroup3.position.z = 0;
    loseHealthSound.play();
  }
  
}

//move bounding box and check collisions
function animateCollision(){
  //Update information on cube's position and send to bounding box
  cube2BB.copy(cube2.geometry.boundingBox).applyMatrix4(cube2.matrixWorld);
  enemyCubeBB.copy(enemyCube.geometry.boundingBox).applyMatrix4(enemyCube.matrixWorld);
  enemyCubeBB2.copy(enemyCube2.geometry.boundingBox).applyMatrix4(enemyCube2.matrixWorld);
  enemyCubeBB3.copy(enemyCube3.geometry.boundingBox).applyMatrix4(enemyCube3.matrixWorld);
  swordBB.copy(cube3.geometry.boundingBox).applyMatrix4(cube3.matrixWorld);

  checkCollisions();

  renderer.render(scene, camera);
  requestAnimationFrame(animateCollision);
}

animateCollision();

function UIValues(){
  document.getElementById("hp").innerText = "Health Points: " + hp;
  document.getElementById("score").innerText = "Score: " + score;
}


console.log(hp);
UIValues();

//audio - sfx and music
const listener = new THREE.AudioListener();
camera.add(listener);

const audioLoader = new THREE.AudioLoader(loadingManager);

const backgroundSound = new THREE.Audio(listener);
audioLoader.load('../audio/winter_battle.mp3', function(buffer){
  backgroundSound.setBuffer(buffer);
  backgroundSound.setLoop(true);
  backgroundSound.setVolume(0.4);
  backgroundSound.play();
});

const killEnemySound = new THREE.Audio(listener);
audioLoader.load('../audio/kill_enemy.mp3', function(buffer){
  killEnemySound.setBuffer(buffer);
  killEnemySound.setLoop(false);
  killEnemySound.setVolume(0.75);
});

const loseHealthSound = new THREE.Audio(listener);
audioLoader.load('../audio/lose_health.mp3', function(buffer){
  loseHealthSound.setBuffer(buffer);
  loseHealthSound.setLoop(false);
  loseHealthSound.setVolume(0.75);
});

var exitButton = document.getElementById("exitButton");

function gameOver(){
  if (hp <= 0){
    exitButton.style.opacity = '1';
    exitButton.style.display = 'block';
    //first enemy move
    enemyGroup.position.z = 0;
    enemyGroup.position.x = 0;
    enemyGroup.position.z -= 0.00;
    enemyGroup.position.x += 0.00;
    //second enemy move
    enemyGroup2.position.z = 0;
    enemyGroup2.position.x = 0;
    enemyGroup2.position.z -= 0.00;
    enemyGroup2.position.x -= 0.00;
    //third enemy move
    enemyGroup3.position.z = 0;
    enemyGroup3.position.z -= 0.00;
    backgroundSound.stop();
  }
}

//increase game difficulty over time by increasing enemies' speed
function increaseSpeed(){
  if (score >= 500){
    enemyGroup.position.z -= 0.004;
    enemyGroup.position.x += 0.002;
    enemyGroup2.position.z -= 0.004;
    enemyGroup2.position.x -= 0.002;
    enemyGroup3.position.z -= 0.005;
  }
  if (score >= 1000){
    enemyGroup.position.z -= 0.004;
    enemyGroup.position.x += 0.002;
    enemyGroup2.position.z -= 0.004;
    enemyGroup2.position.x -= 0.002;
    enemyGroup3.position.z -= 0.005;
  }
  if (score >= 1500){
    enemyGroup.position.z -= 0.004;
    enemyGroup.position.x += 0.002;
    enemyGroup2.position.z -= 0.004;
    enemyGroup2.position.x -= 0.002;
    enemyGroup3.position.z -= 0.005;
  }
  if (score >= 3000){
    enemyGroup.position.z -= 0.004;
    enemyGroup.position.x += 0.002;
    enemyGroup2.position.z -= 0.004;
    enemyGroup2.position.x -= 0.002;
    enemyGroup3.position.z -= 0.005;
  }
  if (score >= 5000){
    enemyGroup.position.z -= 0.004;
    enemyGroup.position.x += 0.002;
    enemyGroup2.position.z -= 0.004;
    enemyGroup2.position.x -= 0.002;
    enemyGroup3.position.z -= 0.005;
  }
  
  
}
