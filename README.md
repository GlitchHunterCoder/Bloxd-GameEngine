> # "Bloxd io is a game engine, Just you wait..."
> \- GlitchHunter
>   \- 18/2/2025
...
...
...its time i say this

ive kinda been working on this for a while in the background, posting small snippets of codes, the async engine was just the beginning
i needed something to deal with time and interruptions

well its time, im back at it again, this time
# BACK-END
- General Ideas
  - redefining the api as a structured object, so it follows the rules below (1)
    - if A contains B ingame, class A contains class B in code
    ```js
    World = new class {
      Code = new class { ... }
      Block = new class { ... }
      Entity = new class { ... }
    } //Structured api
    ```
    - if world updates, so does class (eg onPlayerJoin, create extra player)
    ```js
    onPlayerJoin(id){
      World.Entitys[id]= new World.Entity.Player
    } //Create new
    ```
    - extend the api to utilise all possible infomation on the world
    ```js
    api.getMesh //more info getting than original api, each setter should have a getter and vice versa
    ```
  - removing raw code in callbacks in favor of reactive coding, which handles all the callbacks for you (2)
    - reactive coding,
    ```js
    react(()=>{}) //idk but idea
    ```
    - attaching callbacks on the fly
    ```js
    Callback.Attach("onPlayerJoin",()=>{console.log("added")}) //adds new callback, making it dynamic addition and removal
    ```
    - callback interception to TS
    ```js
    function onPlayerJoin(...args){TS.add(World.Code.Callback.onPlayerJoin, ...arg)} //how world code will most likely look like
    ```
  - auto handling scope and removal (eg onPlayerLeave, remove listeners associated with player) (3)
    ```js
    removeListener.relysOn(playerId) //removes all from a certain player
    ```
    - if extra global variables are added, they will be auto removed outside scope (simple globalThis check + deleted/move to local) if wanted
    ```js
    disposable(()=>{
      a = 1,b = 2,c = 3
    })
    ```
    - will replicate `using` in bloxd for auto remove semantics
    ```js
    using variable = value //doesnt exist in bloxd
    let variable = using(value) //is poly fill for it
    ```
    - will update event listeners if associated players or items no longer exist
    ```js
    addFragileListener()
    //will delete it self if something it relys on doesnt exist
    //(can mostly match if a specific error is thrown)
    ```
    - making async engine a part of this (since timings will be allowed here, as well as waiting ect)
    [`Async == Generator`](https://github.com/GlitchHunterCoder/Bloxd-Async)
    ```js
    TS.add(function*(){
      console.log("hello from ...")
      yield;
      console.log("... Async Engine")
    }())
    ```
- what ill do better than bloxd
  - Code Writing (4)
    - handling code
      - `if(!started && ready && !cooldown && !dead && ... )` resolved into a state check
    - looping behaviour
      - no long running whiles, use Async.While()
      ```js
      while(inShop){...} //Bad, interrupted
      Async.While(inShop,()=>{ ... }) //good, runs forever till stop
      ```
      - for loops will be managed by yield*
      ```js
      for(...){yield;...} //allows long running while loops
      ```
      - for of will be handled via generators (data stream if needed)
      ```js
      for(prop of LARGE){yield; ... }
      //effective infinite data stream
      //LARGE is a generator in [Symbol.iterator](), so each time it spits out the next value
      ```
    - management
      - memory, infinite memory storage using chests
      ```js
      bim //infinite memory (not player specific)
      ```
      - temporal, using threads
      ```js
      ThreadManager.add() //infinite time usage, threads
      ```
      - interrupt units, idk, got any ideas lmao
      ```js
      eval() //Interrupt or give 5k IU
      ```
  - Code Execution (5)
    - better execution 
      - handles cleanup of UI, timeouts, variables, has an auto dispose used, which when needed with automatically remove it if needed
      ```js
      let unused = new WeakVar()
      //if not referenced anymore, it will be garbage collected
      ```
      - async engine will assist in this, time will be the 4th dimension of programming, allowing full control over time
      ```js
      Debug.set(true)
      //default branch is [] which is root
      //inside //root = {}, its id = 0, pointer = last edited or added branch, can be changed
      //if no argument is given when need id, assume pointer location
      Time.step() //step once
      Time.step(e=>e+1) //take yield output, change via function, then input back in code
      let id_1 = new Time.Branch([0])
        //root = {1:{}}, id = 1
      let id_2 = new Time.Branch(id)
        //root = {1:{2:{}}}, id = 2 //returns a getter so when Tree is access its consistent to the reference
      let id_3 = new Time.Branch(id)
        //root = {1:{2:{}},3:{}}, id = 3 //a node contains all of its successors inside it
      TimeTree.mainMerge(id_1,[1d_3])
        //root = {1:[{2:{}},{3:{}}]}, id = 1 //main merge takes first argument and makes all following arguments merge with it
      ```
    - Inspection
      - will come packed with useful error messages and will use stack to show what happens
      ```js
      BetterErr => Error .name . message .stack  ... //Extras will be added
      ```
      - will allow to inspect enviroment in real time (log scope, log variables inside, log stack)
      ```js
      Debugger.inspect => Internal.Inspect => .stack .scope .snapshot ... //Extras will be added
      ```
      - will come with a multitude of debugging help when activated, (thread watcher, listener logging, time logging, event activation ...)
      ```js
      Debugger.snapshot => .start .end .log //built in snapshot which inspects everything and keeps track of it
      ```
  - Code Launching (6)
    - compiling
      - when given the go ahead, the code will auto compile and then run on startup with each part running, making for easy launching of worlds
      - will be compressed as much as possible
      - can store as much as possible, will use eval to take your code
      ```js
      GE.Exe.Compile(`code`)
      //maybe either that or it runs the code and
      //then snapshots all current timeout and environment workings to them resume later,
      //will be compressed as much as possible
      //will use eval to gather and merge and execute your code
      ```
    - execution
      - coders will have full control over code if needed
      - coders can pause and continue execution
      - can activate a lockdown and if code is broken and could be exploited it will prevent anything else from running, until kill switch is deactivated
      ```js
      GE.Exe => .pause .continue .kill
      //allows to pause continue and even deactivate code across everywhere if needed
      //(powered by rate limiter and memory hell)
      //and pretty much nukes itself until every code is broken due to global this being gone
      //but does this in a controlled manner
      ```
# FRONT-END
  - Editing
    - Click and Create
      - will allow modules to be easily added
      - allows you to use sticks to edit attributes directly rather than code
      ```js
      //All this is going to be abstracted to UI and Menus 
      //to edit game at surface level without having to use coding,
      //use this if you arent comfortable with coding,
      //but for people who are comfortable with coding, this API is yours
      ```
    - Connect to BACK-END
      - the front end ease is for players who dont want to code that much, however if players do want to code directly, well ill expose the engines inner workings and the api i will provide it for your usage
    - git like editing and backend variables resolving
      - it will be based on git commands to commit to a branch but the main idea is pretty much code editing time travel, (add creates a new seed, add creates a new space branch, commit creates or builds on a time branch, reset --hard prunes the time tree, reset soft, moves the temporal edit point to a previous point ...), with the following models (time tree & pointer, space tree & pointer, temp & perm, multiple instances, (really just many branches of time tree))
# IMPLEMENTATION IDEAS
```js
//global scoped fix, using polyfill idea
(()=>{
  let length = Object.getOwnPropertyNames(globalThis).length
  console.log(length)
  let scoped = {}
  whoops = {}
  let globals = () => Object.getOwnPropertyNames(globalThis).slice(length)
  console.log(globals())
  globals().forEach(e=>{delete globalThis[e]})
  console.log(globals())
})()
```
```js
//scope inspector, useful for custom variable scoping
function inspectScope() {
  try {
    throw new Error();
  } catch (e) {
    return String(e.stack)
    .split("\n")
    .slice(1)
    .map(line =>
      line
        .trim()
        .replace(/^at\s+/, "")
        .replace(/\s+/g, " ")
    ).slice(0, -1)
  }
}

function test() {
  let b = 2;
  const c = 3;
  console.log(inspectScope())
}

test()
```
