VUI Breadcrumbs 
*******************

This library contains a series of LESS mixins and CSS which can be used to
style breadcrumbs.

Usage
===========

Install as a development dependency:

.. code-block:: console

	npm install --save-dev vui-breadcrumbs

LESS Mixins
===========
To make use of the LESS mixins, import the library into your LESS file:

.. code-block:: css

	@import 'node_modules/vui-breadcrumbs/dist/breadcrumbs'

Breadcrumb styles can be applied using the ``#vui.breadcrumb`` mixin. This is best accomplished using an ordered list of breadcrumb items:

.. code-block:: css

	ol.breadcrumbs {
	  #vui.breadcrumbs();
	}


.. code-block:: html

	<ol class="breadcrumbs">
	    <li><a>Crumb 1</a></li>
	    <li><a>Crumb 2</a></li>
	    <li>Crumb 3</li>
	</ol>

CSS
===

If you'd prefer to use CSS, bundle up the provided *breadcrumbs.css* file with
your application's CSS. Then apply the ``vui-breadcrumbs`` CSS class to your
``ol`` element.

.. code-block:: html

	<ol class="vui-breadcrumbs">
	    <li><a>Crumb 1</a></li>
	    <li><a>Crumb 2</a></li>
	    <li>Crumb 3</li>
	</ol>