VUI Link
*******************

This library contains a series of LESS mixins and CSS which can be used to
style links.

Usage
===========

Install as a development dependency:

.. code-block:: console

	npm install --save-dev vui-link

LESS Mixins
===========
To make use of the LESS mixins, import the library into your LESS file:

.. code-block:: css

	@import 'node_modules/vui-link/link'

To apply link styling to an element, apply the ``#vui.link`` mixin to any CSS
selector in your LESS file:

.. code-block:: css

	a {
	  #vui.link();
	}

The color and focus colors can also be overriden:

.. code-block:: css

	#vui.link( 
	  @color: '#ff0000', 
	  @colorFocus: '#0000ff' 
	);

These colors are also exposed as variables, which can be referenced in your LESS:

.. code-block:: css

	.myLink {
	  color: @vui-linkColor;
	}

	.myLink:hover, .myLink:focus {
	  color: @vui-linkColorFocus;
	}

CSS
====

If you'd prefer to use CSS, bundle up the provided *link.css* file with
your application's CSS. Then apply the ``vui-link`` CSS class to elements you
wish to style link links.

.. code-block:: css

	<a class="vui-link">link text</a>