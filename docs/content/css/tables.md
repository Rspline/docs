---
title: Tables
priority: 1
template: collections.html
---
{% import "macros/ui.html" as ui %}

# Table

<div class="docs-example">
  {{ ui.table() }}
</div>

```html
{{ ui.table(example='true') }}
```

## Striped

<div class="docs-example">
  {{ ui.table('table-striped') }}
</div>

```html
{{ ui.table('table-striped', example='true') }}
```

## Bordered

<div class="docs-example">
  {{ ui.table('table-bordered') }}
</div>

```html
{{ ui.table('table-bordered', example='true') }}
```

## Hover

<div class="docs-example">
  {{ ui.table('table-hover') }}
</div>

```html
{{ ui.table('table-hover', example='true') }}
```

## Condensed

<div class="docs-example">
  {{ ui.table('table-condensed') }}
</div>

```html
{{ ui.table('table-condensed', example='true') }}
```

## Contextual

<div class="docs-example">
  {{ ui.table(contextual='true') }}
</div>

```html
<!-- On rows -->
<tr class="active">...</tr>
<tr class="success">...</tr>
<tr class="warning">...</tr>
<tr class="danger">...</tr>
<tr class="info">...</tr>

<!-- On cells (`td` or `th`) -->
<tr>
  <td class="active">...</td>
  <td class="success">...</td>
  <td class="warning">...</td>
  <td class="danger">...</td>
  <td class="info">...</td>
</tr>
```