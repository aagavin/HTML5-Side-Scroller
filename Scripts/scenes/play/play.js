var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        /**
         * Creates an instance of Play.
         *
         */
        function Play() {
            _super.call(this);
        }
        // Public methmods
        /**
         * Start methmod
         */
        Play.prototype.Start = function () {
            var _this = this;
            // create play objects
            this._bgImage = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
            this._bubbles = [
                new objects.Bubble(),
                new objects.Bubble(),
                new objects.Bubble(),
                new objects.Bubble(),
                new objects.Bubble(),
                new objects.Bubble(),
                new objects.Bubble()
            ];
            this._player = new objects.Player("diver");
            // add objects to scent
            this.addChild(this._bgImage);
            this._bubbles.forEach(function (e) {
                _this.addChild(e);
            });
            // 
            this.addChild(this._player);
            // add scene to stage
            core.stage.addChild(this);
        };
        Play.prototype.Update = function () {
            this._bubbles.forEach(function (bubble) {
                bubble.update();
            });
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map