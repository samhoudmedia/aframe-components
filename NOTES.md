# Notes based on docs

Components are JavaScript modules that can be mixed and matched. Register components and use them from the DOM. *Components should be defined before the scene*.

## Hello World
Register component, that name will be the attribute.
* Component definition; JS object.
* Lifecycle handler; withing the component we can define these handlers.

Components are only called after the entity is ready.

You can also set the component through JS instead of directly on the HTML.

## Log
Schema defines properties of a component. *As an analogy, if we think of a component as a function, then a component’s properties are like its function arguments.*

The component’s property type values are available through this.data

Lifecycle:
* init
* update
* remove

## Follow
.tick() handler which adds a continuously running behavior that runs on every frame of the render loop to the scene. 

A-Frame passes in the global scene uptime as time and time since the last frame as timeDelta into the tick() handler, in milliseconds. We can use the timeDelta to calculate how far the entity should travel towards the target this frame, given the speed.