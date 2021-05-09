# Graphic Design 2nd year, 2020-2021, Code Examples & Assignments

These are code examples and documentation used during the coding class lead by James Bryan Graves

## docs

This content includes references for lectures, assignments, etc..

## groups.js

We used this code to split students in to groups of equal size randomly.

## midi.js

Minimal starting template for playing a midi instrument.  This a node.js thing, and has a corresponding `package.json`.

Install dependencies...

    $ npm install

Run...

    $ node midi.js

## accordion\_center

Accordion style sections that open/close and then center on the view frame on open.

## reverse\_scroll

Pages that scrolls in reverse.

## scroll\_items

Moving items on screen based on scroll.

## myapp

Simple Client/Server example.

### Node.js server

    $ node index.js

### Install dependencies

    $ npm install

### Add dependency

Will make a new entry in package.json

    $ npm install express --add

### Clients

[http://localhost:3000/get.html](http://localhost:3000/get.html)

[http://localhost:3000/post.html](http://localhost:3000/post.html)

#### File upload example

[http://localhost:3000/file.html](http://localhost:3000/file.html)

## AR.js/Aframe examples

An example of tap click, aframe only no AR.

[http://localhost:3000/ar/aframe.html](http://localhost:3000/ar/aframe.html)

An example of cursor click, w/ AR.

[http://localhost:3000/ar/index.html](http://localhost:3000/ar/index.html)

## NewBehaviorScript.cs (Unity)

This script contains examples on how to do GET and POST requests from Unity.

## ChangeMaterialOnCollision.cs (Unity)

This script shows how to change material on a clicks and collisions, also contains GET and POST examples.

## Positions.cs (Unity)

This script POSTs the position of an object on a mouse click to a node.js service, and GETs a list of positions from the same node.js service.  What's interesting to see here is how the serialization and deserialization of JSON responses work in Unity. 

