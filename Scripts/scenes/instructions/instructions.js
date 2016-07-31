var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    /**
     * This scene show the user
     * how to play this game
     *
     * @export
     * @class Instructions
     * @extends {objects.Scene}
     */
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        // buttons
        function Instructions() {
            _super.call(this);
        }
        // Public methmods
        /**
         * Start methmod
         */
        Instructions.prototype.Start = function () {
            // background image
            this._bgImg = new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
            this.addChild(this._bgImg);
            // title Label
            this.addChild(new objects.Label('Instructions', 'bold 45px', 'Tahoma, Geneva, sans-serif', '#fd0', 320, 50));
            // add diver iamge 
            this._diver = new createjs.Bitmap(core.assets.getResult('diver'));
            this._diver.x = 20;
            this._diver.y = 100;
            this.addChild(this._diver);
            // diver infor Label
            this.addChild(new objects.Label('This is you the diver.\nUse your mouse to move the player', '25px', 'Tahoma, Geneva, sans-serif', '#ddd', 500, 125));
            // add shark images
            this._shark = new createjs.Bitmap(core.assets.getResult('shark'));
            this._shark.x = 20;
            this._shark.y = 200;
            this.addChild(this._shark);
            // add shark info
            this.addChild(new objects.Label('Watch out for these sharks.\nSome can more really fast', '25px', 'Tahoma, Geneva, sans-serif', '#ddd', 480, 225));
            // add treasure image
            this._treasure = new createjs.Bitmap(core.assets.getResult('treasure'));
            this._treasure.x = 25;
            this._treasure.y = 300;
            this.addChild(this._treasure);
            // add treasure info
            this.addChild(new objects.Label('For points collect treasure chests.\nThere are many in these waters', '25px', 'Tahoma, Geneva, sans-serif', '#ddd', 550, 325));
            // add scene to stage
            core.stage.addChild(this);
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map