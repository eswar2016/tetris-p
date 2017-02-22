import React from 'react';
import classnames from 'classnames';

import style from './css.less';

import Decorate from '../components/decorate';
import { transform } from '../unit/const';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      w: document.documentElement.clientWidth,
      h: document.documentElement.clientHeight,
    };
  }


  render() {
    let filling = 0;
    const size = (() => {
      const w = this.state.w;
      const h = this.state.h;
      const ratio = h / w;
      let scale;
      let css = {};
      if (ratio < 1.5) {
        scale = h / 960;
      } else {
        scale = w / 640;
        filling = (h - (960 * scale)) / scale / 3;
        css = {
          paddingTop: Math.floor(filling) + 42,
          paddingBottom: Math.floor(filling),
          marginTop: Math.floor(-480 - (filling * 1.5)),
        };
      }
      css[transform] = `scale(${scale})`;
      return css;
    })();
    return (
      <div
        className={style.app}
        style={size}
      >
        <div className={classnames({ [style.rect]: true })}>
          <Decorate />
          <div className={style.screen}>
            <div className={style.panel}>Mtrix
              <div className={style.state}>State
                <div className={style.bottom}>bottom</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
