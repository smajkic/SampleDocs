VUI Gradient
*******************

This library contains LESS mixins for creating CSS gradients which work
across browsers, including IE9.

Usage
===========

Install as a development dependency:

.. code-block:: console

	npm install --save-dev vui-gradient

LESS Mixins
===========
To make use of the LESS mixins, import the library into your LESS file:

.. code-block:: css

	@import 'node_modules/vui-gradient/gradient'

Vertical gradient
-----------------

To apply a vertical gradient:

.. code-block:: css

	div {
	  #vui.gradient-vertical( @startColor, @endColor, @fallbackColor = @startColor );
	}

The gradient will be applied top to bottom, and the ``fallbackColor`` is optional, defaulting to the ``startColor``.

Horizontal gradient
--------------------
To apply a horizontal gradient:

.. code-block:: css

	div {
	  #vui.gradient-horizontal( @startColor, @endColor, @fallbackColor = @startColor );
	}

The gradient will be applied left to right, and the ``fallbackColor`` is optional, defaulting to the ``startColor``.