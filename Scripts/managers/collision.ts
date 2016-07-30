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
					console.log(other.name);
					other.isColliding=true;

					if (other.name==='shark') {
						createjs.Sound.play('comic-bite');
					}

					if (other.name==='treasure') {
						createjs.Sound.play('coin');
					}

				}
			}
			else{
				other.isColliding=false;
			}
		}

	}
}