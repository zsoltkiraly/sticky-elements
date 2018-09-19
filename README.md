# Sticky elements v1.0.5

<a href="https://zsoltkiraly.com/developments/sticky-elements/" target="_blank">DEMO PAGE</a>

<img src="https://zsoltkiraly.com/developments/_images/sticky-elements-001.jpg">

## SETTINGS

```html
<script>
stickyElements.app(
    config = {
        wrapper: 'sticky-wrapper',
        wrapperPadding: 20,

        width: {
            desktop: 400,
            tablet: 280,
            landscapeMobile: 230,
            portraitMobile: 150,
        },

        breakpoints: {
            desktop: 998,
            tablet: 768,
            landscapeMobile: 576
        }
    }
);
</script>
```
Breakpoints | matchMedia |
----------- | ---------- |
Desktop | (min-width: 999px)
Tablet | (min-width: 769px) and (max-width: 998px)
landscapeMobile | (min-width: 577px) and (max-width: 768px)
portraitMobile | only screen and (max-width: 576)

### Set wrapper padding
<img src="https://zsoltkiraly.com/developments/_images/sticky-elements-002.jpg">

### Set wrapper name
```html
<section class="sticky-wrapper">
```

<br />

<b>GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007</b>

Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.
