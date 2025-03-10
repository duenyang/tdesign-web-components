---
title: 主题配置
spline: explain
---

### 使用 CSS Variables 进行主题配置

TDesign 通用的 Design Token 均使用 CSS Variables 声明，我们推荐使用替换 CSS Variables 的方式来进行个性化的主题配置。

TDesign 提供五大类 Design Token，包括`颜色`、`字体`、`圆角`、`阴影`及`尺寸`，你可以在自己的项目中声明同名 CSS Variables来覆盖他们的值，如：

```CSS
--td-brand-color: orange;
--td-warning-color: yellow;
--td-error-color: red;
--td-success-color: green;
```

完整的 Token 列表见 [TDesign Design Token](https://github.com/Tencent/tdesign-common/blob/develop/style/web/theme)。


### 使用 less 变量 针对组件进行精细化定制

如果你的项目也使用 less 技术栈，且对组件有更精细的定制需求，我们也抽离了大部分组件实现过程中用到的变量，以 less 变量的方式提供出来，

```CSS
// 以 Button 为例

@btn-height-s: 24px;
@btn-height-default: 32px;
@btn-height-l: 40px;

@btn-border-radius: @border-radius-default;

```

要修改这些 less 变量，需要改为从 npm ESM 产物中引入组件库：

```js
// tdesign-npm-name 替换为当前在使用的包名称，component-name替换为正在使用的组件名称
import "tdesign-npm-name/esm/component-name";
// 引入组件库全局样式资源
import "tdesign-npm-name/esm/style/index.js";
```

关于各类构建产物的差别可以参考 [构建产物规范](https://github.com/Tencent/tdesign-common/blob/develop/develop-install.md)。

之后，你可以在自己的项目自行修改这些变量的值，比如使用 modifyVars ：

```js
{
    loaderOptions: {
        less: {
            lessOptions: {
                modifyVars: {
                    '@brand-color': '#ebb105',
                },
                javascriptEnabled: true,
            },
        },
    }
}
```
