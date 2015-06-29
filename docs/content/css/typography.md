---
title: Typography
name: Typography
template: collections.html
---
{% import "macros/ui.html" as ui %}

## Headings

All HTML headings, `<h1>` through `<h6>`, are available. `.h1` through `.h6` classes are also available, for when you want to match the font styling of a heading but still want your text to be displayed inline.

<div class="docs-example">
  {{ ui.h1('h1. Bootstrap heading',secondary="Secondary text") }}
  {{ ui.h2('h2. Bootstrap heading',secondary="Secondary text") }}
  {{ ui.h3('h3. Bootstrap heading',secondary="Secondary text") }}
  {{ ui.h4('h4. Bootstrap heading',secondary="Secondary text") }}
  {{ ui.h5('h5. Bootstrap heading',secondary="Secondary text") }}
  {{ ui.h6('h6. Bootstrap heading',secondary="Secondary text") }}
</div>

```html
{{ ui.h1('h1. Bootstrap heading',secondary="Secondary text") }}
{{ ui.h2('h2. Bootstrap heading',secondary="Secondary text") }}
{{ ui.h3('h3. Bootstrap heading',secondary="Secondary text") }}
{{ ui.h4('h4. Bootstrap heading',secondary="Secondary text") }}
{{ ui.h5('h5. Bootstrap heading',secondary="Secondary text") }}
{{ ui.h6('h6. Bootstrap heading',secondary="Secondary text") }}
```

## Body Copy

<div class="docs-example" {{ ui.tooltip('{{text}}') }}>
  <p class="lead">Leading Paragraph Text</p>
  <p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>
  <p><small>This line of text is meant to be treated as fine print.</small></p>
  <p>The following snippet of text is <strong>rendered as bold text</strong>.</p>
  <p>The following snippet of text is <em>rendered as italicized text</em>.</p>
  <p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
</div>

```html
<p class="lead">Leading Paragraph Text</p>

<p>Nullam quis risus eget <a href="#">urna mollis ornare</a> vel eu leo. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam id dolor id nibh ultricies vehicula.</p>

<p><small>This line of text is meant to be treated as fine print.</small></p>

<p>The following snippet of text is <strong>rendered as bold text</strong>.</p>

<p>The following snippet of text is <em>rendered as italicized text</em>.</p>

<p>An abbreviation of the word attribute is <abbr title="attribute">attr</abbr>.</p>
```

## Lists

### Unordered

A list of items in which the order does not explicitly matter.

<div class="docs-example">
  <ul>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Eget porttitor lorem</li>
  </ul>
</div>

```html
<ul>
  <li>...</li>
</ul>
```

### Ordered

A list of items in which the order does explicitly matter.

<div class="docs-example">
  <ol>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Eget porttitor lorem</li>
  </ol>
</div>

```html
<ol>
  <li>...</li>
</ol>
```

### Unstyled

Remove the default <code>list-style</code> and left margin on list items (immediate children only). <strong>This only applies to immediate children list items</strong>, meaning you will need to add the class for any nested lists as well.

<div class="docs-example">
  <ul>
    <li>Lorem ipsum dolor sit amet</li>
    <li>Consectetur adipiscing elit</li>
    <li>Nulla volutpat aliquam velit
      <ul>
        <li>Phasellus iaculis neque</li>
        <li>Purus sodales ultricies</li>
      </ul>
    </li>
    <li>Faucibus porta lacus fringilla vel</li>
    <li>Eget porttitor lorem</li>
  </ul>
</div>

```html
<ul class="list-unstyled">
  <li>...</li>
</ul>
```

### Inline List

<div class="docs-example">
  <ul class="list-inline">
    <li>Lorem ipsum</li>
    <li>Phasellus iaculis</li>
    <li>Nulla volutpat</li>
  </ul>
</div>

```html
<ul class="list-inline">
  <li>...</li>
</ul>
```

### Definition List

<div class="docs-example">
  <dl>
    <dt>Description lists</dt>
    <dd>A description list is perfect for defining terms.</dd>
    <dt>Euismod</dt>
    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
    <dd>Donec id elit non mi porta gravida at eget metus.</dd>
    <dt>Malesuada porta</dt>
    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
  </dl>
</div>

```html
<dl>
  <dt>Description lists</dt>
  <dd>A description list is perfect for defining terms.</dd>
  <dt>Euismod</dt>
  <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</dd>
  <dd>Donec id elit non mi porta gravida at eget metus.</dd>
  <dt>Malesuada porta</dt>
  <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
</dl>
```

## Block Quotes

<div class="docs-example">
  <blockquote>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
  </blockquote>

  <blockquote class="pull-right">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
  </blockquote>
</div>

```html
<blockquote>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
</blockquote>

<blockquote class="pull-right">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <small>Someone famous in <cite title="Source Title">Source Title</cite></small>
</blockquote>
```