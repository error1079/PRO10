var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["8532961d-754a-418f-bc4f-6be666e39f03","e964f324-1bd1-411e-8d51-f2444a91c77d","3739a442-9bdb-4815-a251-d14543014621","ccaf437c-71d5-4744-927f-06bdf0267647","c1bf2885-94ac-4e16-8aa8-70a1fa43e31b"],"propsByKey":{"8532961d-754a-418f-bc4f-6be666e39f03":{"name":"robot2","sourceUrl":null,"frameSize":{"x":44,"y":81},"frameCount":1,"looping":true,"frameDelay":12,"version":"4OTmv5ZYy4ZcdfPEJp_eqzW5WPAKI3pk","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":44,"y":81},"rootRelativePath":"assets/8532961d-754a-418f-bc4f-6be666e39f03.png"},"e964f324-1bd1-411e-8d51-f2444a91c77d":{"name":"robot1","sourceUrl":null,"frameSize":{"x":42,"y":62},"frameCount":1,"looping":true,"frameDelay":12,"version":"qt8G4IwY6bZtnHOqh_PSnq1k0w8.8v9R","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":42,"y":62},"rootRelativePath":"assets/e964f324-1bd1-411e-8d51-f2444a91c77d.png"},"3739a442-9bdb-4815-a251-d14543014621":{"name":"robot","sourceUrl":null,"frameSize":{"x":47,"y":56},"frameCount":1,"looping":true,"frameDelay":12,"version":"BtdHfV0QXv4wYrL38WoKt_94TsBEbTym","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":47,"y":56},"rootRelativePath":"assets/3739a442-9bdb-4815-a251-d14543014621.png"},"ccaf437c-71d5-4744-927f-06bdf0267647":{"name":"player","sourceUrl":null,"frameSize":{"x":49,"y":37},"frameCount":1,"looping":true,"frameDelay":12,"version":"SkBx0WxoUrKKJliUWUiim00l_2MCrCmD","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":49,"y":37},"rootRelativePath":"assets/ccaf437c-71d5-4744-927f-06bdf0267647.png"},"c1bf2885-94ac-4e16-8aa8-70a1fa43e31b":{"name":"space","sourceUrl":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qoFFPgWiydir6HZwldQy.Fmh8NmNhTI9/category_backgrounds/background_space.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var b = createSprite(200,200);
b.setAnimation("space"); 
var win=createSprite(200,10,100,10);
win.shapeColor=("red");
var player=createSprite(200,350,20,20);
player.setAnimation("player");
var enemy1=createSprite(100,300,30,30);
enemy1.setAnimation("robot");
var enemy2=createSprite(300,200,30,30);
enemy2.setAnimation("robot1");
var enemy3=createSprite(200,100,30,30);
enemy3.setAnimation("robot2");
enemy1.velocityX=randomNumber(5,8);
enemy2.velocityX=randomNumber(4,9);
enemy3.velocityX=randomNumber(6,10);
function draw (){
drawSprites();
createEdgeSprites();

enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);

if(keyDown("up")){
  player.velocityY=-3;
} 
if(keyWentUp("up")){
player.velocityY=0;
}
if(keyDown("down")){
  player.velocityY=3;
} 
if(keyWentUp("down")){
player.velocityY=0;
}
if(keyDown("right")){
  player.velocityX=3;
}
if(keyWentUp("right")){
player.velocityX=0;
}
if(keyDown("left")){
  player.velocityX=-3;
}
if(keyWentUp("left")){
player.velocityX=0;
}
//
if(player.isTouching(win)){
  player.x=200;
  player.y=350;
  playSound("assets/category_hits/puzzle_game_magic_item_unlock_4.mp3",false);
}
if(player.isTouching(enemy1)){
 player.x=200;
 player.y=380; 
 playSound("assets/category_explosion/8bit_explosion.mp3",false);
}
if(player.isTouching(enemy3)){
 player.x=200;
 player.y=380; 
 playSound("assets/category_explosion/8bit_explosion.mp3",false);
}
if(player.isTouching(enemy2)){
 player.x=200;
 player.y=380; 
 playSound("assets/category_explosion/8bit_explosion.mp3",false);
}
//
enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);
player.collide(edges);
player.collide(win);
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
