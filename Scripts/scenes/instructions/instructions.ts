module scenes {

	/**
	 * This scene show the user 
	 * how to play this game
	 * 
	 * @export
	 * @class Instructions
	 * @extends {objects.Scene}
	 */
	export class Instructions extends objects.Scene {
		//  PRIVATE INSTANCE VARIABLES
		private _bgImg: createjs.Bitmap;
		private _startButton: objects.Button;
		private _menuButton: objects.Button;
		// Labels
		private _titleLbl:objects.Label;
		// Images
		private _diver:createjs.Bitmap;
		private _shark:createjs.Bitmap;
		private _treasure:createjs.Bitmap;
		// buttons


		constructor() {
			super();
		}

		// Public methmods
		/**
		 * Start methmod
		 */
		public Start():void{
			// background image
			this._bgImg=new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
			this.addChild(this._bgImg);

			// title Label
			this.addChild(new objects.Label('Instructions','bold 45px','Tahoma, Geneva, sans-serif', '#fd0',320,50));
			// add diver iamge 
			this._diver=new createjs.Bitmap(core.assets.getResult('diver'));
			this._diver.x=20;
			this._diver.y=100;
			this.addChild(this._diver);

			// diver infor Label
			this.addChild(new objects.Label('This is you the diver.\nUse your mouse to move the player', '25px', 'Tahoma, Geneva, sans-serif', '#ddd', 500,125)); 

			// add shark images
			this._shark=new createjs.Bitmap(core.assets.getResult('shark'));
			this._shark.x=20;
			this._shark.y=200;
			this.addChild(this._shark);

			// add shark info
			this.addChild(new objects.Label('Watch out for these sharks.\nSome can more really fast', '25px', 'Tahoma, Geneva, sans-serif', '#ddd', 480, 225));

			// add treasure image
			this._treasure=new createjs.Bitmap(core.assets.getResult('treasure'));
			this._treasure.x=25;
			this._treasure.y=300;
			this.addChild(this._treasure);

			// add treasure info
			this.addChild(new objects.Label('For points collect treasure chests.\nThere are many in these waters', '25px', 'Tahoma, Geneva, sans-serif','#ddd', 550, 325));
			// add scene to stage
			core.stage.addChild(this);

		}
	}
}