import objectFitImages from 'object-fit-images';

import './Preloader';
import './Header';
import '../sections/Screen';
import './Sliders';
import './Anims';
import './Footer';
// import './Dot';

export class Common {
  /**
   * Cache data, make preparations and initialize common scripts.
   */
  constructor() {
    this.init();
  }
  /**
   * Initialize common scripts.
   */
  init() {
    objectFitImages();
  }
}

/** Export initialized common scripts by default */
export default new Common();