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
            // create play objects
            this._bgImage = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
            this._bubble = new objects.Bubble();
            // add objects to scent
            this.addChild(this._bgImage);
            this.addChild(this._bubble);
            // add scene to stage
            core.stage.addChild(this);
        };
        Play.prototype.Update = function () {
            this._bubble.update();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map