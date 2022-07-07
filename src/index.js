import Player from '@vimeo/player';

const container = document.querySelector('#made-in-ny');

console.log('container :>> ', container);

const player = new Player(container, {
  id: 19231868,
  width: 640,
});

player.on('pause', e => {
  console.log('e_Pause :>> ', e);
});

player.on('play', e => {
  console.log('e_Play :>> ', e);
});

// console.log(player);
