
VUI Focus
*******************

This library contains uncompiled LESS and compiled CSS which can be used to apply an outline style to elements when they receive focus. This accessibility feature helps identify to the user which element currently has focus.

In most cases, you'll want to use this library on elements which do not already have a visible or obvious focus indicator. This typically includes links, checkboxes and radio inputs.

Usage
===========
Install as a development dependency:

.. code-block:: console
  
  npm install --save-dev vui-focus

Import the library into your LESS file:

.. code-block:: css

  @import 'node_modules/vui-focus/dist/focus'

LESS Mixins
=============

In LESS, call the ``#vui.focusOutline()`` mixin from your CSS selector, usually with the ``focus`` pseudo-selector applied:

.. code-block:: css

  a:focus {
    #vui.focusOutline();
  }

The outline width, color, style, and offset values can also be overriden when calling the LESS mixin:

.. code-block:: css

  a:focus {
    #vui.focusOutline(
      @outlineWidth: 2px,
      @outlineColor: #00FF00,
      @outlineStyle: solid,
      @outlineOffset: 2px
    );
  }

You can also access the corresponding global LESS variables:

.. code-block:: css

  div {
    border-width: @vui-focusOutlineWidth;
    border-style: @vui-focusOutlineStyle;
    border-color: @vui-focusOutlineColor;
  }


CSS
===========

If you'd prefer to use plain CSS instead of LESS, bundle up the provided 
*focus.css* file with your application's CSS. Then apply the CSS class
``vui-outline`` to any element in your HTML. When that element receives focus, 
the outline style will be applied automatically.

.. code-block:: html

  <a class="vui-outline">my link</a>