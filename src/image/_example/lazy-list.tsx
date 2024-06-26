import 'tdesign-web-components/image';
import 'tdesign-web-components/space';
import 'tdesign-web-components/button';

import { Component } from 'omi';

export default class ImageLazyList extends Component {
  loadCount = 0;

  handleReload = () => {
    this.loadCount += 1;
    this.update();
  };

  render() {
    return (
      <t-space direction="vertical" key={this.loadCount}>
        <t-space breakLine style={{ height: 240, overflowY: 'scroll' }}>
          {Array.from({ length: 24 }).map((_, index) => (
            <t-image
              key={index}
              src="https://tdesign.gtimg.com/demo/demo-image-1.png"
              style={{ width: 230, height: 120 }}
              lazy
            />
          ))}
        </t-space>
        <t-button variant="outline" icon={<t-icon-refresh />} onClick={this.handleReload}>
          重演 lazy load
        </t-button>
      </t-space>
    );
  }
}
