# CiiMS 2.0.0 - Basic Card Example

This repository serves as a demonstration of what can be done in the new card infrastructure. This repo can be used as a starting point for creating new cards, or as a reference for developing new cards.

## Card Composition

A CiiMS 2.0.0 dashboard card is composed of 4 separate files. Each file is necessary for a card to load fully

- card.json
- card.html
- card.css
- card.js

### card.json

The ```card.json``` file outlines several important pieces of information that the Card API needs to instantiate a new instance of a card. At minimum, you'll need the following information:

```
{
    "name": "CardName",     // Upper and lowercase Alpha characters ONLY
    "version": "0.0.1",     // Dotted version number
}
```

If you want your card to support multiple sizes, you can outline the following sizes in the card.json. CiiMS will automatically handle card resizing and re-rendering on behalf of your card.

```
 "availableTileSizes": [
    "square",
    "rectangle",
    "rectangleTall",
    "squareBig"
]
```

If you want your card to have editable properties, you can add a properties section. Each property key should have a unique name, and inside each key, should be the following values: (name, type, value).

The name should be the descriptive name of the property.
The type can be any valid HTML5 input type. This property will be used to automatically render an input box for your property to be edited in.
The value should be null, unless you're providing some sane defaults.

```
"properties": {
    "setting1": {
        "name": "Awesome Setting #1",
        "type": "text",
        "value": null
    },
    "setting2": {
        "name": "Awesome Setting #2",
        "type": "email",
        "value": null
    }
},
```

### card.html

The ```card.html``` file should contain the markup you wish to display inside the card.

### card.css

The ```card.css``` file should contain any custom CSS you want to apply to your card. The root class will always take the following format:

```
.name.toLowerCase()-<version.replace(/\./g, '-')>
```

For the example card shown in the above card.json file, this would be:

```
.basiscard-0-0-1
```

Since CiiMS' styles load earlier in the DOM, overriding of any default attributes may require the use of ```!important``` in your styles.

### card.js

The ```card.js``` file contains any JavaScript you want to include for your card. This file should be a self-contained class with the same name as in the card.json file, wrapped in a self-involking function. At minimum you'll need the following skeleton to start making new cards, (with the CardName replaced with the name of your card).

```
;(function() {
	var CardName = new CardPrototype({
		name: "CardName",
		init: function() {
			console.log("MyInitOverride");
		},
		reload: function() {
			console.log("MyReloadOverride");
		},
		render: function() {
			console.log("MyRenderOverride");
		}
	});
}(this));
```

Currently, cards support the following prototype callbacks that should be declared in your card. 

The ```init``` method is called when the card is created, but before it is rendered

The ```render``` method is called after the card has rendered to the screen

The ```reload``` method is called once a property is changed, allowing you to determine if an action needs to be taken to reload the state of the card
