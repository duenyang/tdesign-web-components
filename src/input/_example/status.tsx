// import 'tdesign-icons-omi/browse-off';
// import 'tdesign-icons-omi/lock-on';
import 'tdesign-web-components/input';
import 'tdesign-web-components/space';

import { Component } from 'omi';

export default class InputStatus extends Component {
  inputValue = '';

  render() {
    return (
      <t-space size={50}>
        <t-space direction="vertical" size={28}>
          <t-input
            placeholder="禁用状态"
            disabled
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value;
              this.update();
            }}
          />
          <t-input
            placeholder="只读状态"
            readonly
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value;
              this.update();
            }}
          />
        </t-space>
        <t-space direction="vertical" size={28}>
          <t-input
            placeholder="成功状态"
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value;
              this.update();
            }}
            status="success"
          />
          <t-input
            placeholder="警告状态"
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value;
              this.update();
            }}
            status="warning"
          />
          <t-input
            placeholder="错误状态"
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value;
              this.update();
            }}
            status="error"
          />
        </t-space>
        <t-space direction="vertical" size={28}>
          <t-input
            placeholder="普通状态"
            tips="这是普通文本提示"
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value;
              this.update();
            }}
          />
          <t-input
            placeholder="成功状态"
            tips="校验通过文本提示"
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value;
              this.update();
            }}
            status="success"
          />
          <t-input
            placeholder="警告状态"
            tips="校验不通过文本提示"
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value;
              this.update();
            }}
            status="warning"
          />
          <t-input
            placeholder="错误状态"
            tips="校验存在严重问题文本提示"
            value={this.inputValue}
            onChange={(value) => {
              this.inputValue = value;
              this.update();
            }}
            status="error"
          />
        </t-space>
      </t-space>
    );
  }
}
