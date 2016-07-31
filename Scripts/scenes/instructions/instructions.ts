module scenes {

	/**
	 * This scene show the user 
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

		constructor() {
			super();
		}
	}
}