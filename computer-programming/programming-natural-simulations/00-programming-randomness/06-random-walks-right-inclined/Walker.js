var Walker = function() {
    this.x = 0;
    this.y = 0;
};

Walker.prototype.setup = function() {
    this.x = window.processing.width / 2;
    this.y = window.processing.height / 2;
};

Walker.prototype.display = function() {
    window.processing.stroke(0, 0, 0);  // color of border around shape
    window.processing.point(this.x, this.y);  // draw with point
};

Walker.prototype.walk = function() {
    var r = window.processing.random(1);
    if (r < 0.4) {
        this.x++;
    } else if (r < 0.6) {
        this.x--;
    } else if (r < 0.8) {
        this.y++;
    } else {
        this.y--;
    }
};
