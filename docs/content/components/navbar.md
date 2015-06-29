---
title: Navbar
priority: 2
template: collections.html
---
{% import "macros/ui.html" as ui %}

# Navbar

<div class="docs-example">
  {{ ui.navbar() }}
</div>

```html
{{ ui.navbar() }}
```

Inverted

<div class="docs-example">
  {{ ui.navbar(inverse='true') }}
</div>

```html
{{ ui.navbar(example='true', inverse='true') }}
```