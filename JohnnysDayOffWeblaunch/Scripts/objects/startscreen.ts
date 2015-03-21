module objects {
    // OCEAN CLASS
    export class Startscreen extends createjs.Bitmap {
        // PUBLIC INSTANCE VARIABLES
        private _dx: number = -5;

        // CONSTRUCTOR
        constructor() {
            super(assetLoader.getResult("startscreen"));
        }


    }

}   