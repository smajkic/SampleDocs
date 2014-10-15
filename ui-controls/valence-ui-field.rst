VUI Fields and Labels
**********************

This library contains a series of LESS mixins and CSS that can be used to
style fields and labels.

Usage
=====

Install as a development dependency:

.. code-block:: console

	npm install --save-dev vui-field

Fields
======

Form fields (checkboxes, text inputs, etc.) can be grouped using the 
``vui-field-row`` mixin. This would typically be applied to a ``div``
(or other element) used to surround each field.

.. code-block:: css

	@import 'node_modules/vui-button/dist/field'

	.myFieldRow {
	  .vui-field-row();
	}


.. code-block:: html
	
	<div class="myFieldRow">Field Contents</div>

If you'd prefer to use CSS instead of LESS, the ``vui-field-row`` class can be
applied instead:

.. code-block:: html

	<div class="vui-field-row">Field Contents</div>

Using this mixin or CSS class will give the field a standard bottom margin.

Labels
======

Field labels can be styled with the ``vui-label`` mixin:

.. code-block:: css

	@import 'node_modules/vui-button/dist/label'

	.myFieldRow > label {
		.vui-label();
	}

.. code-block:: html

	<div class="myFieldRow">
	    <label for="name">Name</label>
	    <input type="text" id="name" />
	</div>

Or, with CSS instead using the ``vui-label`` class:

.. code-block:: html

	<div class="vui-field-row">
	    <label class="vui-label" for="name">Name</label>
	    <input type="text" id="name" />
	</div>


Accessible forms with labels
----------------------------

Always provide a unique label for every form element. This enables assistive
technology (such as screen readers) to properly interpret your forms. If space
is tight, you can hide the label by `moving it off-screen <http://webaim.org/techniques/css/invisiblecontent/>`_.

For additional information, see `Techniques for WCAG 2.0: Using label elements to associate text labels with 
form controls <http://www.w3.org/TR/WCAG-TECHS/H44.html>`_.

Required Fields
===============

A field can be visually flagged as required by applying the ``vui-required`` mixin on the label:

.. code-block:: css
	
	@import 'node_modules/vui-button/dist/required'

	label.required {
		.vui-required();
	}

.. code-block:: html

	<div class="myFieldRow">
	    <label class="required" for="name">Name</label>
	    <input type="text" id="name" required />
	</div>

The alternate CSS method uses the ``vui-required`` class:

.. code-block:: html

	<div class="vui-field-row">
	    <label class="vui-required" for="name">Name</label>
	    <input type="text" id="name" required />
	</div>

Make required fields accessible
-------------------------------

It's important to note that this is a purely visual flag--be sure to
additionally mark up the corresponding input with the `HTML5 "required" attribute <http://www.w3.org/html/wg/drafts/html/master/forms.html#the-required-attribute>`_ and/or the `"aria-required" attribute <http://www.w3.org/TR/wai-aria/states_and_properties#aria-required>`_. For more information, see 
`MDN: Using the aria-required attribute <https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-required_attribute>`_.

Fieldsets
==========

When you have more than one related form element, group them together using the
``<fieldset>`` element and use the ``<legend>`` element to label the group.

Using the LESS mix-ins:

.. code-block:: css

	.myFieldRow, fieldset {
		.vui-field-row();
	}
	.myFieldRow > label, legend {
		.vui-label();
	}

.. code-block:: html

	<fieldset>
	    <legend>Condiments</legend>
	    <label>
	        <input type="checkbox" />Ketchup
	    </label>
	    <label>
	        <input type="checkbox" />Mustard
	    </label>
	</fieldset>

Alternatively apply the ``vui-field-row`` CSS class to the ``fieldset`` and
``vui-label`` to the legend element:

.. code-block:: html

	<fieldset class="vui-field-row">
	    <legend class="vui-label">Condiments</legend>
	    <label>
	        <input type="checkbox" />Ketchup
	    </label>
	    <label>
	        <input type="checkbox" />Mustard
	    </label>
	</fieldset>

Using fieldsets to group related inputs together allows assistive technology to
provide a more accessible experience. For more information, see `Techniques for WCAG 2.0: fieldset and legend <http://www.w3.org/TR/WCAG-TECHS/H71.html>`_.