---
title: Buttons
priority: 1
---
{% import "macros/ui.html" as ui %}

# Buttons

<div class="docs-example">
  {{ ui.btn('Link', type='a') }}
  {{ ui.btn('Button') }}
  {{ ui.btn('Input', type='input') }}
  {{ ui.btn('Submit', type='submit') }}
</div>

```html
{{ ui.btn('Link', type='a') }}
{{ ui.btn('Button') }}
{{ ui.btn('Input', type='input') }}
{{ ui.btn('Submit', type='submit') }}
```

## Options

<div class="docs-example">
  {{ ui.btn('Default') }}
  {{ ui.btn('Primary', 'primary') }}
  {{ ui.btn('Success', 'success') }}
  {{ ui.btn('Info', 'info') }}
  {{ ui.btn('Warning', 'warning') }}
  {{ ui.btn('Danger', 'danger') }}
  {{ ui.btn('Link', 'link') }}
</div>

```html
<!-- Standard button -->
{{ ui.btn('Default') }}

<!-- Provides extra visual weight and identifies the primary action in a set of buttons -->
{{ ui.btn('Primary', 'primary') }}

<!-- Indicates a successful or positive action -->
{{ ui.btn('Success', 'success') }}

<!-- Contextual button for informational alert messages -->
{{ ui.btn('Info', 'info') }}

<!-- Indicates caution should be taken with this action -->
{{ ui.btn('Warning', 'warning') }}

<!-- Indicates a dangerous or potentially negative action -->
{{ ui.btn('Danger', 'danger') }}

<!-- Deemphasize a button by making it look like a link while maintaining button behavior -->
{{ ui.btn('Link', 'link') }}
```

## Sizing

<div class="docs-example">
  <p>
    {{ ui.btn('Large Button',size='lg') }}
    {{ ui.btn('Large Button','primary',size='lg') }}
  </p>
  <p>
    {{ ui.btn('Large Button') }}
    {{ ui.btn('Large Button','primary') }}
  </p>
  <p>
    {{ ui.btn('Small Button',size='sm') }}
    {{ ui.btn('Small Button','primary',size='sm') }}
  </p>
  <p>
    {{ ui.btn('Extra Small Button',size='xs') }}
    {{ ui.btn('Extra Small Button','primary',size='xs') }}
  </p>
  <p>
    {{ ui.btn('Full Button', class='btn-block') }}
    {{ ui.btn('Full Button','primary', class='btn-block') }}
  </p>
</div>

```html
<p>
  {{ ui.btn('Large Button',size='lg') }}
  {{ ui.btn('Large Button','primary',size='lg') }}
</p>
<p>
  {{ ui.btn('Large Button') }}
  {{ ui.btn('Large Button','primary') }}
</p>
<p>
  {{ ui.btn('Small Button',size='sm') }}
  {{ ui.btn('Small Button','primary',size='sm') }}
</p>
<p>
  {{ ui.btn('Extra Small Button',size='xs') }}
  {{ ui.btn('Extra Small Button','primary',size='xs') }}
</p>
<p>
  {{ ui.btn('Full Button', class='btn-block') }}
  {{ ui.btn('Full Button','primary', class='btn-block') }}
</p>
```

## States

<div class="docs-example">
  <p>
    {{ ui.btn('Active Button',size='lg', class="active") }}
    {{ ui.btn('Active Button','primary',size='lg', class="active") }}
  </p>
  <p>
    {{ ui.btn('Disabled Button',size='lg', class="disabled") }}
    {{ ui.btn('Disabled Button','primary',size='lg', class="disabled") }}
  </p>
</div>

```html
<p>
  {{ ui.btn('Active Button',size='lg', class="active") }}
  {{ ui.btn('Active Button','primary',size='lg', class="active") }}
</p>
<p>
  {{ ui.btn('Disabled Button',size='lg', class="disabled") }}
  {{ ui.btn('Disabled Button','primary',size='lg', class="disabled") }}
</p>
```


## Button Groups

<div class="row">
  <div class="col-md-4">
    <p>Use a button group to lay out a set of related actions.</p>
    <h4>Guidelines for use</h4>
    <ul>
      <li>These are most often used in <a href="/ui-components/#popover">Popovers</a> or <a href="/ui-components/#create-form">Create Forms</a> to group the save button and the cancel button</li>
      <li>A button group should never contain more than one primary button</li>
      <li>The cancel action must always be an <span class="rs-no-wrap">rs-btn-link</span> as shown in the example</li>
    </ul>
    <h4>When Submitting Forms</h4>
    <ul>
      <li>Disable primary and secondary buttons</li>
      <li>Hide the "Cancel" link</li>
      <li>Show the processing indicator</li>
    </ul>
  </div>
  <div class="col-md-8">
    <div class="docs-example">
      {{ ui.btnGroup() }}
    </div>

```html
{{ ui.btnGroup() }}
```
  </div>
</div>