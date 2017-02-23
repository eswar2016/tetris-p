import React from 'react';
import style from './css.less';
import Button from './button';

export default class Keyboard extends React.Component {
  render() {
    return (
      <div
        className={style.keyboard}
        style={{
          marginTop: 20 + this.props.filling,
        }}
      >
        <Button
          color="blue"
          size="s1"
          top={0}
          left={374}
          label="rotation"
          arrow="translate(0, 63px)"
          position
          ref={(c) => { this.dom_rotate = c; }}
        />
        <Button
          color="blue"
          size="s1"
          top={180}
          left={374}
          label="down"
          arrow="translate(0,-71px) rotate(180deg)"
          ref={(c) => { this.dom_down = c; }}
        />
        <Button
          color="blue"
          size="s1"
          top={90}
          left={284}
          label="left"
          arrow="translate(60px, -12px) rotate(270deg)"
          ref={(c) => { this.dom_left = c; }}
        />
        <Button
          color="blue"
          size="s1"
          top={90}
          left={464}
          label="right"
          arrow="translate(-60px, -12px) rotate(90deg)"
          ref={(c) => { this.dom_right = c; }}
        />
        <Button
          color="blue"
          size="s0"
          top={100}
          left={52}
          label="(SPACE)"
          ref={(c) => { this.dom_space = c; }}
        />
        <Button
          color="red"
          size="s2"
          top={0}
          left={196}
          label="(R)"
          ref={(c) => { this.dom_r = c; }}
        />
        <Button
          color="green"
          size="s2"
          top={0}
          left={106}
          label="(S)"
          ref={(c) => { this.dom_s = c; }}
        />
        <Button
          color="green"
          size="s2"
          top={0}
          left={16}
          label="(P)"
          ref={(c) => { this.dom_p = c; }}
        />
      </div>
    );
  }
}

Keyboard.propTypes = {
  filling: React.PropTypes.number.isRequired,
};
