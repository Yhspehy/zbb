## 注意

因为使用了weex-ui,并且他内置的组件还需要拓展，因为使用的时候请在下面组件中添加部分内容：
1. eros-zbb/node_modules/weex-ui/packages/wxc-tab-page/index.vue中添加阴影的相关代码：

```js

    <scroller></scroller>中的style添加boxShadow,boxShadow: tabStyles.boxShadow



    tabStyles: {
        type: Object,
        default: () => ({
          bgColor: '#FFFFFF',
          titleColor: '#666666',
          activeTitleColor: '#3D3D3D',
          activeBgColor: '#FFFFFF',
          isActiveTitleBold: true,
          iconWidth: 70,
          iconHeight: 70,
          width: 160,
          height: 120,
          fontSize: 24,
          hasActiveBottom: true,
          activeBottomColor: '#FFC900',
          activeBottomWidth: 120,
          activeBottomHeight: 6,
          textPaddingLeft: 10,
          textPaddingRight: 10,
          leftOffset: 0,
          boxShadow: ''
        })

```
