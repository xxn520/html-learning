## 全局事件

### `onabort`

当一个资源加载失败被终止时会触发 `abort` 事件。

试了 FireFox、Chrome、Safari，都没有触发。Google 了一下，得到下面的解释。

> The onabort event handler is not supported in Chrome, Firefox, Opera, or Safari; it is only supported in Internet Explorer.

### `onload`

`load` 事件是在当一个资源和与其依赖资源加载完成后触发的。

### `onerror`

当一个资源加载失败时会触发 `error` 事件。

### `onfocus`

当一个元素得到焦点的时候 `focus` 事件被触发。它和 `focusin` 事件的主要区别是 `focusin` 支持冒泡。FireFox 不支持 `focusin` 事件，此时如果要做事件代理，那么需要设置 `addEventListener` 的第三个 `useCapture` 参数为 `true`。

### `onblur`

当一个元素失去焦点的时候 `blur` 事件被触发。它和 `focusout` 事件的主要区别是 `focusout` 支持冒泡。FireFox 不支持 `focusout` 事件，此时如果要做事件代理，那么需要设置 `addEventListener` 的第三个 `useCapture` 参数为 `true`。

### `onkeydown`、`onkeypress`、`onkeyup`

没什么好写，要注意的是获取按键的方式在不同浏览器下不同。

### 放弃

事件太多了，而且很多描述不清，不写了。


