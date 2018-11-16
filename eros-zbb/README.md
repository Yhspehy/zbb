## 注意

因为使用了weex-ui,并且他内置的组件还需要拓展，因为使用的时候请在下面组件中添加部分内容：
eros-zbb/node_modules/weex-ui/packages/wxc-tab-page/index.vue中添加阴影的相关代码：

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

根据原生动效，部分tab-page在点击bar的时候是没有animation，手势滑动的时候是有animation，所以在下面组件中添加部分内容：
eros-zbb/node_modules/weex-ui/packages/wxc-tab-page/index.vue

```js
<div class="title-item" @click="setPage(index,v.url, clickAnimation)"></div>

props: {
    clickAnimation: {
        type: Boolean,
        default: true
    }
}
```

根据home headerBar的右边添加频道以及左边box-shadow效果，修改了源代码，添加了rightIcon等参数，具体参考modulesChange中的代码。

---

## 为方便我将改过的组件内容拷贝到了modulesChange文件中，到时候git clone项目后只要将相关文件覆盖node_modules即可。
