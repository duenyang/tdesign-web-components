import 'tdesign-web-components/card';
import 'tdesign-web-components/button';
import 'tdesign-web-components/divider';
import 'tdesign-web-components/grid';
import 'tdesign-web-components/avatar';
import 'tdesign-icons-web-components/esm/components/thumb-up-1';
import 'tdesign-icons-web-components/esm/components/chat';
import 'tdesign-icons-web-components/esm/components/share';
import 'tdesign-icons-web-components/esm/components/more';

import { Component } from 'omi';
import { MessagePlugin } from 'tdesign-web-components/message/message';

interface Option {
  content: string;
  value: number;
}
type ClickHandler = (data: Option) => void;

export default class Button extends Component {
  options: Option[] = [
    {
      content: '操作一',
      value: 1,
    },
    {
      content: '操作二',
      value: 2,
    },
  ];

  clickHandler: ClickHandler = (data) => {
    MessagePlugin.info(`选中【${data.value}】`);
  };

  render() {
    return (
      <t-card
        title="标题"
        description="卡片内容"
        actions={
          <t-col flex="auto" align="middle">
            <t-dropdown options={this.options} onClick={this.clickHandler}>
              <t-button variant="text" shape="square">
                <t-icon-more />
              </t-button>
            </t-dropdown>
          </t-col>
        }
        bordered
        cover="https://tdesign.gtimg.com/site/source/card-demo.png"
        style={{ width: '400px' }}
        avatar={<t-avatar size="40px" image="https://tdesign.gtimg.com/site/avatar-boy.jpg"></t-avatar>}
        footer={
          <t-row style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
            <t-col>
              <t-button theme="default" variant="text">
                <t-icon-thumb-up-1 />
              </t-button>
            </t-col>
            <t-divider layout="vertical"></t-divider>
            <t-col>
              <t-button theme="default" variant="text">
                <t-icon-chat />
              </t-button>
            </t-col>
            <t-divider layout="vertical"></t-divider>
            <t-col>
              <t-button theme="default" variant="text">
                <t-icon-share />
              </t-button>
            </t-col>
          </t-row>
        }
      ></t-card>
    );
  }
}
