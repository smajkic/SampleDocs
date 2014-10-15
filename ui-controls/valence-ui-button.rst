VUI Link
*******************

This library contains a series of LESS mixins and CSS which can be used to
style buttons.

Usage
===========
Install as a development dependency:

.. code-block:: console

	npm install --save-dev vui-button

Import the library into your LESS file:

.. code-block:: css

	@import 'node_modules/vui-button/dist/button'

LESS Mixins
===========

To apply button styling to an element, apply the ``vui-button`` mixin to the CSS
selector in your LESS file:

.. code-block:: css

	button {
	  .vui-button();
	}

An element may also be made primary using the ``vui-buttonPrimary`` mixin:

.. code-block:: css

	button.primary {
	  .vui-buttonPrimary();
	}

CSS
===

If you'd prefer to use CSS, bundle up the provided *button.css* file with
your application's CSS. Then apply the ``vui-button`` and ``vui-button-primary`` CSS classes to your button elements.

.. code-block:: html

	<button class="vui-button-primary">Save</button>
	<button class="vui-button">Cancel</button>