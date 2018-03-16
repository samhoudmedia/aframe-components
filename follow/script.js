AFRAME.registerComponent('follow', {
  
  schema: {
    target: {type: 'selector'},
    speed: {type: 'number'},
  },

  init: function() {
    this.directionVec3 = new THREE.Vector3();
  },

  tick: function() {
    var directionVec3 = this.directionVec3;

    // Grab positions of the vectors
    var targetPosition = this.data.target.object3D.position;
    var currentPosition = this.el.object3D.position;

    // Subtract the vectors
    directionVec3.copy(targetPosition).sub(currentPosition)

    // Calculate the distance
    var distance = directionVec3.length();
    if (distance < 1) { return; }

    var factor = this.data.speed / distance;
    ['x', 'y', 'z'].forEach(function (axis) {
      directionVec3[axis] *= factor * (timeDelta / 1000);
    });

    this.el.setAttribute('position', {
      x: currentPosition.x + directionVec3.x,
      y: currentPosition.y + directionVec3.y,
      z: currentPosition.z + directionVec3.z
    });
  }
})