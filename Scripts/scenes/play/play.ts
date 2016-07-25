module scenes {
	export class Play extends objects.Scene{
		// Private instance varables
		private _bgImage:createjs.Bitmap;
		private _bubble:objects.Bubble;

		/**
		 * Creates an instance of Play.
		 * 
		 */
		constructor(){
			super();
		}

		// Public methmods
		/**
		 * Start methmod
		 */
		public Start():void{
			// create play objects
			this._bgImage=new createjs.Bitmap(core.assets.getResult("bgPlayImg"));
			this._bubble = new objects.Bubble();

			// add objects to scent
			this.addChild(this._bgImage);
			this.addChild(this._bubble);
			// add scene to stage
			core.stage.addChild(this);

		}

		public Update():void {
			this._bubble.update();
		}
	}
	
	// export class Play extends objects.Scene {
	//     //  PRIVATE INSTANCE VARIABLES
	//     private _ocean: objects.Ocean;
	//     private _island: objects.Island;
	//     private _player: objects.Player;
	//     private _cloud: objects.Cloud;

	//     /**
	//      * Creates an instance of Menu.
	//      * 
	//      */
	//     constructor() {
	//         super();
	//     }

	//     /**
	//      * 
	//      */
	//     public Start():void {
	//         // ocean object
	//         this._ocean = new objects.Ocean("ocean");
	//         this.addChild(this._ocean);

	//         // island object
	//         this._island = new objects.Island("island");
	//         this.addChild(this._island);

	//         // player object
	//         this._player = new objects.Player("plane");
	//         this.addChild(this._player);

	//         // cloud object
	//         this._cloud = new objects.Cloud("cloud");
	//         this.addChild(this._cloud);

	//         // add this scene to the global scene container
	//         core.stage.addChild(this);
	//     }

	//     public Update():void {
	//         this._ocean.update();
	//         this._island.update();
	//         this._player.update();
	//         this._cloud.update();
	//     }

	//     // EVENT HANDLERS ++++++++++++++++

	//     private _startButtonClick(event:createjs.MouseEvent):void {
	//         // Switch the scene
	//         core.scene = config.Scene.OVER;
	//         core.changeScene();
	//     }
	// }
}