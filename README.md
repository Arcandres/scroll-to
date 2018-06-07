# Animated Scroll-to

This is a simple Js script to animate scrolling to an element. It works with any link that has a hash and an element to scroll to.
## How to
Its use is pretty simple, just call the function with event listener after calling the plugin or inside the plugin if you want.

```html
<script>
  addEventListener('click', e => {
    if (e.target.href && e.target.hash) {
      e.preventDefault();
      scroll(e);
    }
  });
</script>
```
Now you just need a link and an element
```html
<div id="elem-1">
  <!-- content -->
</div>

<div id="elem-2">
  <!-- content -->
</div>

<div id="elem-3">
  <!-- content -->
</div>

<a href="#elem-1">Element One</a>
<a href="#elem-2">Element Two</a>
<a href="#elem-3">Element Three</a>
```
## Sticky Menu
If you use a sticky menu, you have to add its height as an argument, in order to don't hide part of the element.

```js
scroll(e,60);
```
---
[Demo](https://arcandres.github.io/scroll-to/)

