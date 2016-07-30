module scenes {
	export class Play extends objects.Scene{
		// Private instance varables
		private _bgImage:createjs.Bitmap;
		private _bubbles:Array<objects.Bubble>;
		private _player:objects.Player;
		private _sharks:Array<objects.Shark>;

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
			this._bubbles = [
				new objects.Bubble(),new objects.Bubble(),new objects.Bubble(),
				new objects.Bubble(),new objects.Bubble(),new objects.Bubble(),
			];

			this._player=new objects.Player("diver");
			this._sharks=[
				new objects.Shark("shark"),new objects.Shark("shark"),new objects.Shark("shark");
			];
			

			// add objects to scent
			this.addChild(this._bgImage);
			this._bubbles.forEach(bubble => {
				this.addChild(bubble);
			});

			// add player to scene
			this.addChild(this._player);
			// add shark to scene
			this._sharks.forEach(shark => {
				this.addChild(shark);
			});
			// add scene to stage
			core.stage.addChild(this);

		}

		public Update():void {
			// update on bubbles
			this._bubbles.forEach(bubble => {
				bubble.update();
			});

			// update player
			this._player.update();

			// update shark
			this._sharks.forEach(shark => {
				shark.update();
			});
		}
	}

}