class CanvasWorker {
  constructor(canvas) {

    var context2d = canvas.getContext('2d')
    this.context = function(ctx) {
      return canvas.getContext(ctx)
    }

    this.deleteCanvas = function() {
      canvas.parentNode.removeChild(canvas)
    }

    this.context('2d').color = function(color) {
      this.fillStyle = color
    }

    this.context('2d').clear = function() {
      context2d.clearRect(0, 0, canvas.width, canvas.height);
    }
		
		this.context('2d').clearArea = function(x, y, width, height) {
      context2d.clearRect(x, y, width, height);
    }

    this.canvas = canvas

    this.context('2d').circle = function(x, y, radius) {
      context2d.beginPath()
      context2d.arc(x, y, radius, 0, 2 * Math.PI)
      context2d.stroke()
    }

    this.newLinearGradient = function(startX, startY, endX, endY, gradientArray) {
      var gradient = context2d.createLinearGradient(startX, startY, endX, endY)
      for (var i = 0; i < gradientArray.length; i++) {
        gradient.addColorStop(gradientArray[i][0], gradientArray[i][1])
      }
      return gradient
    }
  }
}
