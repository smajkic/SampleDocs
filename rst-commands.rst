Handy RST commands
*******************

Headings
===========
Headings are created by underlining (and optionally overlining) the section title with a punctuation character, at least as long as the text.

Rather than imposing a fixed number and order of section title adornment styles, the order enforced will be the order as encountered. The first style encountered will be an outermost title (like HTML H1), the second style will be a subtitle, the third will be a subsubtitle, and so on.

A blank line after a heading is optional. All text blocks up to the next title of the same or higher level are included in a section (or subsection, etc.).

Examples:

.. code-block:: console

    Chapter/Page Title (H1)
    ***********************
    
    Second heading (H2)
    ===================
    
    3rd heading (H3)
    ----------------
    

Code formatting
================

Inline code markup
------------------
For code that's inline of a paragraph or sentence, enclose the code within a double back quote \(``), which renders the block as ``pre``.

Example::

    When using the ``foo(string foo2)`` method.
    
Renders as: 

	When using the ``foo(string foo2)`` method.

If you just use a single backquote, the code block renders as a ``cite``. For example, `<HTML>` and `<CSS>`.

Code blocks
------------
Preface the code block with the line ``.. code-block:: <codetype>``, then include a blank line, then indent the code. Note that code-block must have a blank line above and below it.

More info here: `<http://sphinx-doc.org/markup/code.html>`_

Examples::

	.. code-block:: html

		<div class="vui-field-row">
    		<label class="vui-label" for="name">Name</label>
    		<input type="text" id="name" />
		</div>

	.. code-block:: css

		button {
	  	  .vui-button();
		}

	.. code-block:: console

		npm install


Here's how the HTML code block renders:

.. code-block:: html

	<div class="vui-field-row">
		<label class="vui-label" for="name">Name</label>
		<input type="text" id="name" />
	</div>
	
Here's how the CSS code block renders:

.. code-block:: css

		button {
	  	  .vui-button();
		}
			
Here's how the Console code block renders:

.. code-block:: console

	npm install

Another

.. code-block:: python
   :emphasize-lines: 3,5

   def some_function():
       interesting = False
       print 'This line is highlighted.'
       print 'This one is not...'
       print '...but this one is.'


Linking
------------
If you want to create a link to a website, the syntax is
::

`<http://www.python.org/>`_

which appear as `<http://www.python.org/>`_ . Note the underscore after the final single quote. Since the full name of the link is not always simple or meaningful, you can specify a label (note the space between the label and link name):

::

`Python <http://www.python.org/>`_

The rendering is now: `Python <http://www.python.org/>`_.