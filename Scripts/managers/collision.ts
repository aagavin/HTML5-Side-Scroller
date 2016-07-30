module managers{
	export class Collision{
		constructor(){
			this.start();
		}


		public start():void{

		}


		public update():void{

		}

		public check(player:objects.GameObject, other:objects.GameObject):void{
			
			if (
					objects.Vector2.distance(player.position, other.position) < (player.halfHeight+other.halfHeight)
				) {
				if (!other.isColliding) {
					console.log('collision!!');
					other.isColliding=true;

				}
			}
			else{
				other.isColliding=false;
			}
		}

	}
}