module objects{

	/**
	 * 
	 * @export objects
	 * @class Bubble
	 * @extends {createjs.Bitmap}
	 */
	export class Bubble extends createjs.Bitmap {
		// PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++
		private _dy:number;
		private _width:number;
		private _height:number;
		

		// PUBLIC PROPERTIES
		public get height(): number {
			return this._height;
		}

		public set height(value: number) {
			this._height = value;
		}

		public get width(): number {
			return this._width;
		}

		public set width(value: number) {
			this._width = value;
		}
		

		/**
		 * Creates an instance of Buble.
		 *
		 */
		constructor() {
			super(core.assets.getResult('bubble'));
			this.start();
		}

		/**
		 * This resets the object outsite of the vieport
		 * and sets the y locations
		 * 
		 * @private
		 * @methmod _reset
		 * @returns {void}
		 */
		private _reset():void{
			this._dy=Math.floor((Math.random() *5) +5) // horizontal drift

			this.x=Math.floor((Math.random() * (640 - (this.height * .5 ))) + (this.height * .5));
		}

		/**
		 * This methmod will reset the  
		 * 
		 * @private
		 */
		private _checkBounds():void{
			if ((this.y<(-1*this.height)) || (this.x<(-1*this.width))) {
				this.x=Math.floor(Math.random() * 480)+1;650;
				this.y=490;
			}

		}

		// PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
		public start():void{
			this.width=this.getBounds().width;
			this.height=this.getBounds().height;
			this.alpha=.08;
			this.regX=this.width*.5;
			this.regY=this.height*.5;

			this.x=650;
			this.y=Math.floor(Math.random() * 480)+1;

			// this._reset();
		}

		public update():void{
			this.y-=2;
			this.x-=1;
			
			this._checkBounds();
		}


	}
}