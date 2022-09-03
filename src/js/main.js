import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';
import Difference from './modules/difference';

window.addEventListener('DOMContentLoaded', () => {
   'use strict';

   const slider = new MainSlider({ page: '.page', btns: '.next' });
   slider.render();

   const player = new VideoPlayer('.showup .play', '.overlay');
   player.init();

   new Difference('.officerold', '.officernew', '.officer__card-item').init();
});