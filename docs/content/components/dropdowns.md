---
title: Dropdowns
priority: 1
template: collections.html
---
{% import "macros/ui.html" as ui %}

# Dropdowns

## Example

<div class="docs-example">
  {{ ui.dropdown(open='true') }}
</div>

```html
{{ ui.dropdown() }}
```
Drop up

<div class="docs-example">
  {{ ui.dropdown("Dropup", open='true',inverse='true') }}
</div>

```html
{{ ui.dropdown("Dropup", inverse='true') }}
```