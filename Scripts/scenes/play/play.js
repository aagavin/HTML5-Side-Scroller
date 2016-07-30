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
                new objects.Bubble(true), new objects.Bubble(true), new objects.Bubble(true),
                new objects.Bubble(true), new objects.Bubble(true), new objects.Bubble(true)
            ];
            this._player = new objects.Player("diver");
            this._sharks = [
                new objects.Shark("shark"), new objects.Shark("shark"), new objects.Shark("shark")
            ];
            // add objects to scent
            this.addChild(this._bgImage);
            this._bubbles.forEach(function (bubble) {
                _this.addChild(bubble);
            });
            // add player to scene
            this.addChild(this._player);
            // add shark to scene
            this._sharks.forEach(function (shark) {
                _this.addChild(shark);
            });
            this._treasure = new objects.Treasure();
            this.addChild(this._treasure);
            // add score and lives manager
            core.lives = 10;
            this._livesLbl = new objects.Label("Lives: " + core.lives, "35px", "Tahoma, Geneva, sans-serif", "#ff0", 100, 45);
            this.addChild(this._livesLbl);
            this._scoreLbl = new objects.Label("Score: " + core.score, "35px", "Tahoma, Geneva, sans-serif", "#ff0", 520, 45);
            this.addChild(this._scoreLbl);
            // add a collision managers
            this._collision = new managers.Collision();
            // add scene to stage
            core.stage.addChild(this);
            this._themeSound = createjs.Sound.play('theduel');
            this._themeSound.loop = -1;
        };
        Play.prototype.Update = function () {
            var _this = this;
            // 
            this._bgImage.x -= 5;
            // update on bubbles
            this._bubbles.forEach(function (bubble) {
                bubble.update();
            });
            // update player
            this._player.update();
            // update shark
            this._sharks.forEach(function (shark) {
                shark.update();
                _this._collision.check(_this._player, shark);
            });
            // update treasure
            this._treasure.update();
            this._collision.check(this._player, this._treasure);
            if (core.lives < 1) {
                this._themeSound.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
            // update score and lives
            this._livesLbl.text = "Lives: " + core.lives;
            this._scoreLbl.text = "Score: " + core.score;
            this.checkBounds();
        };
        Play.prototype.checkBounds = function () {
            if (this._bgImage.x < (-(this._bgImage.getBounds().width - 640))) {
                this._bgImage.x = 0;
            }
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map