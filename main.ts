// TODO
// 
// Make it easier to make emays
// 
// Make many many level make it easier to do the world map for story
// 
// Make a world map for chapter two
// 
// add story to both chapters
let LEvelsthings = [
tilemap`level2`,
tilemap`level4`,
tilemap`level8`,
tilemap`level9`,
tilemap`level10`,
tilemap`level16`,
tilemap`level28`,
tilemap`level46`
]
let Levelthing2 = [tilemap`level53`]
let Text_list = [
["So this all started with I was hired by the not so strong government of Andor to investigate this strange company", "But why was the company weak??", "It was very corrupt, but there is still good people in there and those good people look for the good of the country"],
["So after seeing all the mushroom zombies and the lab's experiments. I headed off to a nearby town to meet up with my employer. ", " Ok but why do u have to do this any way", "Because I was paid to do it. Have you even been paying attention to my story!"],
["So after finding the town only to find it deserted my employer contacted me and told me that I had to destroy the whole mushroom zombie operation and put a stop to the lab making zombies. "],
["Now I have to track through a lot of mushrooms to destroy the heart"],
["I hate caves they just go on and on and on and on"],
["At this point I just have a few more levels to go!!"],
[
"Time to make these guys go..",
"MEOW",
"GET THIS CAT OFF ME I HATE CATS",
"I got you auto I wont let any one hart you",
"Meow",
"Back to what I was saying I am going to make these guys go boom"
],
["All the mushrooms are gone finely!!"]
]
let Textlist2 = [
["TEST", "TEST", "TEST"],
["TEST", "TEST", "TEST"],
["", "", ""],
["", "", ""],
["", "", ""]
]
let Levelmenus = [tilemap`level54`, tilemap`level57`]
forever(function () {
    for (let value20 of sprites.allOfKind(SpriteKind.Enemy)) {
        if (sprites.readDataNumber(value20, "T") == 10) {
            if (tiles.tileAtLocationEquals(value20.tilemapLocation().getNeighboringLocation(CollisionDirection.Left), assets.tile`myTile75`) || tiles.tileAtLocationIsWall(value20.tilemapLocation().getNeighboringLocation(CollisionDirection.Left))) {
                value20.vx = 60
                sprites.setDataNumber(value20, "m", 60)
            }
            if (tiles.tileAtLocationEquals(value20.tilemapLocation().getNeighboringLocation(CollisionDirection.Right), assets.tile`myTile75`) || tiles.tileAtLocationIsWall(value20.tilemapLocation().getNeighboringLocation(CollisionDirection.Right))) {
                value20.vx = -60
                sprites.setDataNumber(value20, "m", -60)
            }
        }
    }
})
