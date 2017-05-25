var Walker = function() {
    this.x = 0;
    this.y = 0;
};

Walker.prototype.setup = function() {
    this.x = window.processing.width / 2;
    this.y = window.processing.height / 2;
};

Walker.prototype.display = function() {
    window.processing.stroke(0, 0, 0);
    window.processing.point(this.x, this.y);
};

Walker.prototype.walk = function() {
    var stepx = window.processing.floor(window.processing.random(3)) - 1;
    var stepy = window.processing.floor(window.processing.random(3)) - 1;
    this.x += stepx;
    this.y += stepy;
};
