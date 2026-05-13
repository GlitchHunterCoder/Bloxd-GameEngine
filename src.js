//HERE IS WHERE CODE IS BEING PUT TOGETHER, DO NOT USE YET

//class structure

World  = new class {
  constructor(){ //collection of said class
    this.Codes = {
      
    }
    this.Blocks = {
      
    }
    this.Entitys = {
      
    }
  }
  //lobby specific settings
  /*
  setMaxPlayers(softMaxPlayers, maxPlayers)
  now()
  getLobbyName()
  isPublicLobby()
  getLobbyType()
  isInsideRect(coordsToCheck, pos1, pos2, addOneToMax)
  */
}

Code = class { //per  code
  constructor(){
    
  }
  //public display
  /*
  broadcastMessage(message, style)
  playParticleEffect(opts, clientPredictedBy)
  broadcastSound(soundName, volume, rate, posSettings, exceptPlayerId)
  playClientPredictedSound(soundName, volume, rate, posSettings, predictedBy)
  api.setCallbackValueFallback(callbackName, defaultValue)
  
  */
}

Block = class { //per block
  constructor(){
    
  }
  /*
  isBlockInLoadedChunk(x, y, z)
  getBlock(x, y, z)
  getBlockId(x, y, z)
  getChunk(pos)
  getEmptyChunk()
  getMetaInfo(blockName)
  getBlockSolidity(x, y, z)
  
  setBlock(x, y, z, blockName)
  setBlockRect(pos1, pos2, blockName)
  setBlockWalls(pos1, pos2, blockName, hasFloor, hasCeiling)
  attemptWorldChangeBlock(initiatorDbId, x, y, z, blockName, extraInfo)

  blockNameToBlockId(blockName, allowInvalidBlock)
  blockIdToBlockName(blockId)
  blockCoordToChunkId(pos)
  chunkIdToBotLeftCoord(chunkId)
  
  raycastForBlock(fromPos, dirVec)
  
  setBlockData(x, y, z, data)
  getBlockData(x, y, z)
  */
  Dynamic = class {
    constructor(){
      
    }
    StandardChest = class {
      constructor(){
        
      }
      /*
      giveStandardChestItem(chestPos, itemName, itemAmount, playerId, attributes)
      getStandardChestFreeSlotCount(chestPos)
      getStandardChestItemAmount(chestPos, itemName)
      getStandardChestItemSlot(chestPos, idx)
      getStandardChestItems(chestPos)
      setStandardChestItemSlot(chestPos, idx, itemName, itemAmount, playerId, attributes)
      */
    }
    MoonstoneChest = class {
      constructor(){
        
      }
      /*
      getMoonstoneChestItemSlot(playerId, idx)
      getMoonstoneChestItems(playerId)
      setMoonstoneChestItemSlot(playerId, idx, itemName, itemAmount, metadata)
      */
    }
  }
}

Entity = class { //per entity 
  constructor(){
    
  }
  /*
  getPosition(entityId)
  setPosition(entityId, x, y, z)
  getVelocity(eId)
  setVelocity(eId, x, y, z)
  applyImpulse(eId, xImpulse, yImpulse, zImpulse)
  getUnitCoordinatesLifeformWithin(lifeformId)
  getEntitiesInRect(minCoords, maxCoords)
  
  setOtherEntitySetting(relevantPlayerId, targetedEntityId, settingName, settingValue)
  setOtherEntitySettings(relevantPlayerId, targetedEntityId, settingsObject)
  getOtherEntitySetting(relevantPlayerId, targetedEntityId, settingName)
  
  getEntityName(entityId)
  getEntityType(entityId)
  */
  Lifeform = class { //prob going to use extends for its inner classes
    /*
    applyMeleeHit(hittingEId, hitEId, dirFacing, bodyPartHit, overrides)
    
    getHealth(entityId)
    setHealth(entityId, newHealth, whoDidDamage, increaseMaxHealthIfNeeded)
    getShieldAmount(entityId)
    setShieldAmount(lifeformId, newShieldAmount)
    
    applyHealthChange(lifeformId, changeAmount, whoDidDamage, broadcastLifeformHurt)
    attemptApplyDamage({ ... })
    killLifeform(lifeformId, whoKilled)
    isAlive(lifeformId)
    forceRespawn(playerId, respawnPos)
    
    applyEffect(lifeformId, effectName, duration, customEffectInfo)
    getEffects(lifeformId)
    removeEffect(lifeformId, name)
    
    updateEntityNodeMeshAttachment(eId, node, type, opts, offset, rotation)
    
    calcExplosionForce(eId, explosionType, knockbackFactor, explosionRadius, explosionPos, ignoreProjectiles)
    
    getBlockCoordinatesPlayerStandingOn(playerId)
    getBlockTypesPlayerStandingOn(playerId)
    */
    Mesh = class {
      constructor
    }
    Player = class {
      constructor(){
        
      }
      /*
      checkValid(entityId)
      
      addFollowingEntityToPlayer(playerId, eId, offset)
      removeFollowingEntityFromPlayer(playerId, entityEId)
      
      playerIsInGame(playerId)
      playerIsLoggedIn(playerId)
      getPlayerPartyWhenJoined(playerId)
      isMobile(playerId)
      
      getCurrentKillstreak(playerId)
      clearKillstreak(playerId)
      
      setClientOption(playerId, option, value)
      getClientOption(playerId, option)
      setClientOptions(playerId, optionsObj)
      setClientOptionToDefault(playerId, option)
      
      setTargetedPlayerSettingForEveryone(targetedPlayerId, settingName, settingValue, includeNewJoiners)
      setEveryoneSettingForPlayer(playerId, settingName, settingValue, includeNewJoiners)
      
      getPlayerId(playerName)
      getPlayerDbId(playerId)
      getPlayerIdFromDbId(dbId)
      
      kickPlayer(playerId, reason)
      setCameraDirection(playerId, direction)
      
      setPlayerOpacity(playerId, opacity)
      setPlayerOpacityForOnePlayer(playerIdWhoViewsOpacityPlayer, playerIdOfOpacityPlayer, opacity)
      
      changePlayerIntoSkin(playerId, partType, selected)
      removeAppliedSkin(playerId)
      scalePlayerMeshNodes(playerId, nodeScales)
      setPlayerPose(playerId, pose, poseOffset)
      setPlayerPhysicsState(playerId, physicsState)
      getPlayerPhysicsState(playerId)
      setCameraZoom(playerId, zoom)
      getPlayerTargetInfo(playerId)
      getPlayerFacingInfo(playerId)
      isPlayerCrouching(playerId)
      
      playSound(playerId, soundName, volume, rate, posSettings)
      
      getAuraInfo(playerId)
      setTotalAura(playerId, totalAura)
      setAuraLevel(playerId, level)
      applyAuraChange(playerId, auraDiff)
      
      setCanChangeBlock(playerId, x, y, z)
      setCantChangeBlock(playerId, x, y, z)
      
      setCanChangeBlockType(playerId, blockName)
      setCantChangeBlockType(playerId, blockName)
      resetCanChangeBlockType(playerId, blockName)
      
      setCanChangeBlockRect(playerId, pos1, pos2)
      setCantChangeBlockRect(playerId, pos1, pos2)
      resetCanChangeBlockRect(playerId, pos1, pos2)
      
      setWalkThroughType(playerId, blockName, disable)
      setWalkThroughRect(playerId, pos1, pos2, updateType)
      
      setCantPickUpItem(playerId, itemId)
      canOpenStandardChest(playerId, chestX, chestY, chestZ)
      
      editItemCraftingRecipes( ... )
      resetItemCraftingRecipes(playerId, itemName)
      removeItemCraftingRecipes(playerId, itemName)
      static getPlayerIds()
      static getNumPlayers()
      */
      Inventory = class {
        constructor(){
          
        }
        /*
        giveItem(playerId, itemName, itemAmount, attributes)
        inventoryIsFull(playerId)
        setItemSlot(playerId, itemSlotIndex, itemName, itemAmount, attributes, tellClient)
        removeItemName(playerId, itemName, amount)
        getItemSlot(playerId, itemSlotIndex)
        hasItem(playerId, itemName)
        getInventoryItemAmount(playerId, itemName)
        clearInventory(playerId)
        setSelectedInventorySlotI(playerId, newI)
        getSelectedInventorySlotI(playerId)
        getHeldItem(playerId)
        getInventoryFreeSlotCount(playerId)
        */
      }
      UI = class {
        constructor(){
          
        }
        /*
        showShopTutorial(playerId)
        sendFlyingMiddleMessage(playerId, message, distanceFromAction)
        sendMessage(playerId, message, style)
        sendTopRightHelper(playerId, icon, text, opts)
        progressBarUpdate(playerId, toFraction, toDuration)
        initiateMiddleScreenBar(playerId, duration, chargeExpiresAutomatically, horizontalBarRemOffset)
        removeMiddleScreenBar(playerId)
        sendOverShopInfo(playerId, info)
        openShop(playerId, toggle, forceCategory)
        */
      }
    }
    Mob = class {
      constructor(){
        /*
        createMobHerd()
        attemptSpawnMob(mobType, x, y, z, opts)
        */
      }
      /*
      setEntityHeading(entityId, newHeading)
      despawnMob(mobId)
      getDefaultMobSetting(mobType, setting)
      setDefaultMobSetting(mobType, setting, value)
      getMobSetting(mobId, setting)
      setMobSetting(mobId, setting, value)
      static getMobIds()
      static getNumMobs()
      */
    }
    
  }
  Item = class {
    constructor(){
      /*
      createItemDrop(x, y, z, itemName, amount, mergeItems, attributes, timeTillDespawn)
      */
    }
    /*
    deleteItemDrop(itemId)
    getInitialItemMetadata(itemName)
    getItemStat(LifeformId, itemName, stat)
    setItemAmount(itemId, newAmount)
    */
  }
}

/*
${X} Contains ${Y} Structure

World
  Code
    UI
    Display
  Blocks
    Schematic
  Entity
    Player
    Item (in world)
      Thrown
      Dropped
      Other
    Mob
    Mesh
*/

//ndarray

var iota = Array(3).fill(1).map((_,i)=>i+1) //dang dependancy culture
function isBuffer(obj) { return !!obj?.constructor?.isBuffer?.(obj) }

var hasTypedArrays  = ((typeof Float64Array) !== "undefined")

function compare1st(a, b) {
  return a[0] - b[0]
}

function order() {
  var stride = this.stride
  var terms = new Array(stride.length)
  var i
  for(i=0; i<terms.length; ++i) {
    terms[i] = [Math.abs(stride[i]), i]
  }
  terms.sort(compare1st)
  var result = new Array(terms.length)
  for(i=0; i<result.length; ++i) {
    result[i] = terms[i][1]
  }
  return result
}

function compileConstructor(dtype, dimension) {
  var className = ["View", dimension, "d", dtype].join("")
  if(dimension < 0) {
    className = "View_Nil" + dtype
  }
  var useGetters = (dtype === "generic")

  if(dimension === -1) {
    //Special case for trivial arrays
    var code =
      "function "+className+"(a){this.data=a;};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return -1};\
proto.size=0;\
proto.dimension=-1;\
proto.shape=proto.stride=proto.order=[];\
proto.lo=proto.hi=proto.transpose=proto.step=\
function(){return new "+className+"(this.data);};\
proto.get=proto.set=function(){};\
proto.pick=function(){return null};\
return function construct_"+className+"(a){return new "+className+"(a);}"
    var procedure = new Function(code)
    return procedure()
  } else if(dimension === 0) {
    //Special case for 0d arrays
    var code =
      "function "+className+"(a,d) {\
this.data = a;\
this.offset = d\
};\
var proto="+className+".prototype;\
proto.dtype='"+dtype+"';\
proto.index=function(){return this.offset};\
proto.dimension=0;\
proto.size=1;\
proto.shape=\
proto.stride=\
proto.order=[];\
proto.lo=\
proto.hi=\
proto.transpose=\
proto.step=function "+className+"_copy() {\
return new "+className+"(this.data,this.offset)\
};\
proto.pick=function "+className+"_pick(){\
return TrivialArray(this.data);\
};\
proto.valueOf=proto.get=function "+className+"_get(){\
return "+(useGetters ? "this.data.get(this.offset)" : "this.data[this.offset]")+
"};\
proto.set=function "+className+"_set(v){\
return "+(useGetters ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v")+"\
};\
return function construct_"+className+"(a,b,c,d){return new "+className+"(a,d)}"
    var procedure = new Function("TrivialArray", code)
    return procedure(CACHED_CONSTRUCTORS[dtype][0])
  }

  var code = ["'use strict'"]

  //Create constructor for view
  var indices = iota(dimension)
  var args = indices.map(function(i) { return "i"+i })
  var index_str = "this.offset+" + indices.map(function(i) {
        return "this.stride[" + i + "]*i" + i
      }).join("+")
  var shapeArg = indices.map(function(i) {
      return "b"+i
    }).join(",")
  var strideArg = indices.map(function(i) {
      return "c"+i
    }).join(",")
  code.push(
    "function "+className+"(a," + shapeArg + "," + strideArg + ",d){this.data=a",
      "this.shape=[" + shapeArg + "]",
      "this.stride=[" + strideArg + "]",
      "this.offset=d|0}",
    "var proto="+className+".prototype",
    "proto.dtype='"+dtype+"'",
    "proto.dimension="+dimension)

  //view.size:
  code.push("Object.defineProperty(proto,'size',{get:function "+className+"_size(){\
return "+indices.map(function(i) { return "this.shape["+i+"]" }).join("*"),
"}})")

  //view.order:
  if(dimension === 1) {
    code.push("proto.order=[0]")
  } else {
    code.push("Object.defineProperty(proto,'order',{get:")
    if(dimension < 4) {
      code.push("function "+className+"_order(){")
      if(dimension === 2) {
        code.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})")
      } else if(dimension === 3) {
        code.push(
"var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);\
if(s0>s1){\
if(s1>s2){\
return [2,1,0];\
}else if(s0>s2){\
return [1,2,0];\
}else{\
return [1,0,2];\
}\
}else if(s0>s2){\
return [2,0,1];\
}else if(s2>s1){\
return [0,1,2];\
}else{\
return [0,2,1];\
}}})")
      }
    } else {
      code.push("ORDER})")
    }
  }

  //view.set(i0, ..., v):
  code.push(
"proto.set=function "+className+"_set("+args.join(",")+",v){")
  if(useGetters) {
    code.push("return this.data.set("+index_str+",v)}")
  } else {
    code.push("return this.data["+index_str+"]=v}")
  }

  //view.get(i0, ...):
  code.push("proto.get=function "+className+"_get("+args.join(",")+"){")
  if(useGetters) {
    code.push("return this.data.get("+index_str+")}")
  } else {
    code.push("return this.data["+index_str+"]}")
  }

  //view.index:
  code.push(
    "proto.index=function "+className+"_index(", args.join(), "){return "+index_str+"}")

  //view.hi():
  code.push("proto.hi=function "+className+"_hi("+args.join(",")+"){return new "+className+"(this.data,"+
    indices.map(function(i) {
      return ["(typeof i",i,"!=='number'||i",i,"<0)?this.shape[", i, "]:i", i,"|0"].join("")
    }).join(",")+","+
    indices.map(function(i) {
      return "this.stride["+i + "]"
    }).join(",")+",this.offset)}")

  //view.lo():
  var a_vars = indices.map(function(i) { return "a"+i+"=this.shape["+i+"]" })
  var c_vars = indices.map(function(i) { return "c"+i+"=this.stride["+i+"]" })
  code.push("proto.lo=function "+className+"_lo("+args.join(",")+"){var b=this.offset,d=0,"+a_vars.join(",")+","+c_vars.join(","))
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'&&i"+i+">=0){\
d=i"+i+"|0;\
b+=c"+i+"*d;\
a"+i+"-=d}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a"+i
    }).join(",")+","+
    indices.map(function(i) {
      return "c"+i
    }).join(",")+",b)}")

  //view.step():
  code.push("proto.step=function "+className+"_step("+args.join(",")+"){var "+
    indices.map(function(i) {
      return "a"+i+"=this.shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "b"+i+"=this.stride["+i+"]"
    }).join(",")+",c=this.offset,d=0,ceil=Math.ceil")
  for(var i=0; i<dimension; ++i) {
    code.push(
"if(typeof i"+i+"==='number'){\
d=i"+i+"|0;\
if(d<0){\
c+=b"+i+"*(a"+i+"-1);\
a"+i+"=ceil(-a"+i+"/d)\
}else{\
a"+i+"=ceil(a"+i+"/d)\
}\
b"+i+"*=d\
}")
  }
  code.push("return new "+className+"(this.data,"+
    indices.map(function(i) {
      return "a" + i
    }).join(",")+","+
    indices.map(function(i) {
      return "b" + i
    }).join(",")+",c)}")

  //view.transpose():
  var tShape = new Array(dimension)
  var tStride = new Array(dimension)
  for(var i=0; i<dimension; ++i) {
    tShape[i] = "a[i"+i+"]"
    tStride[i] = "b[i"+i+"]"
  }
  code.push("proto.transpose=function "+className+"_transpose("+args+"){"+
    args.map(function(n,idx) { return n + "=(" + n + "===undefined?" + idx + ":" + n + "|0)"}).join(";"),
    "var a=this.shape,b=this.stride;return new "+className+"(this.data,"+tShape.join(",")+","+tStride.join(",")+",this.offset)}")

  //view.pick():
  code.push("proto.pick=function "+className+"_pick("+args+"){var a=[],b=[],c=this.offset")
  for(var i=0; i<dimension; ++i) {
    code.push("if(typeof i"+i+"==='number'&&i"+i+">=0){c=(c+this.stride["+i+"]*i"+i+")|0}else{a.push(this.shape["+i+"]);b.push(this.stride["+i+"])}")
  }
  code.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}")

  //Add return statement
  code.push("return function construct_"+className+"(data,shape,stride,offset){return new "+className+"(data,"+
    indices.map(function(i) {
      return "shape["+i+"]"
    }).join(",")+","+
    indices.map(function(i) {
      return "stride["+i+"]"
    }).join(",")+",offset)}")

  //Compile procedure
  var procedure = new Function("CTOR_LIST", "ORDER", code.join("\n"))
  return procedure(CACHED_CONSTRUCTORS[dtype], order)
}

function arrayDType(data) {
  if(isBuffer(data)) {
    return "buffer"
  }
  if(hasTypedArrays) {
    switch(Object.prototype.toString.call(data)) {
      case "[object Float64Array]":
        return "float64"
      case "[object Float32Array]":
        return "float32"
      case "[object Int8Array]":
        return "int8"
      case "[object Int16Array]":
        return "int16"
      case "[object Int32Array]":
        return "int32"
      case "[object Uint8Array]":
        return "uint8"
      case "[object Uint16Array]":
        return "uint16"
      case "[object Uint32Array]":
        return "uint32"
      case "[object Uint8ClampedArray]":
        return "uint8_clamped"
      case "[object BigInt64Array]":
        return "bigint64"
      case "[object BigUint64Array]":
        return "biguint64"
    }
  }
  if(Array.isArray(data)) {
    return "array"
  }
  return "generic"
}

var CACHED_CONSTRUCTORS = {
  "float32":[],
  "float64":[],
  "int8":[],
  "int16":[],
  "int32":[],
  "uint8":[],
  "uint16":[],
  "uint32":[],
  "array":[],
  "uint8_clamped":[],
  "bigint64": [],
  "biguint64": [],
  "buffer":[],
  "generic":[]
}

;(function() {
  for(var id in CACHED_CONSTRUCTORS) {
    CACHED_CONSTRUCTORS[id].push(compileConstructor(id, -1))
  }
});

function wrappedNDArrayCtor(data, shape, stride, offset) {
  if(data === undefined) {
    var ctor = CACHED_CONSTRUCTORS.array[0]
    return ctor([])
  } else if(typeof data === "number") {
    data = [data]
  }
  if(shape === undefined) {
    shape = [ data.length ]
  }
  var d = shape.length
  if(stride === undefined) {
    stride = new Array(d)
    for(var i=d-1, sz=1; i>=0; --i) {
      stride[i] = sz
      sz *= shape[i]
    }
  }
  if(offset === undefined) {
    offset = 0
    for(var i=0; i<d; ++i) {
      if(stride[i] < 0) {
        offset -= (shape[i]-1)*stride[i]
      }
    }
  }
  var dtype = arrayDType(data)
  var ctor_list = CACHED_CONSTRUCTORS[dtype]
  while(ctor_list.length <= d+1) {
    ctor_list.push(compileConstructor(dtype, ctor_list.length-1))
  }
  var ctor = ctor_list[d+1]
  return ctor(data, shape, stride, offset)
}

module.exports = wrappedNDArrayCtor

function iota(n) {
  var result = new Array(n)
  for(var i=0; i<n; ++i) {
    result[i] = i
  }
  return result
}

//Retry of making game engine


//take info from obj, give new place as reference, and give any other args needed
let ReadOnly = (from) => {
  for (const [key, val] of Object.entries(from)) {
    Object.defineProperty(this, key, { value: val, writable: false, enumerable: true })
  }
}

let GetSetPair = (from) => {
  for (const [key, val] of Object.entries(from)) {
    const cap = key.toUpperCase() + name.slice(1)
    Object.defineProperty(this, name, {
      get: ()  => api[`get${cap}`](...val),
      set: (v) => api[`set${cap}`](...val, v),
      enumerable: true,
    })
  }
}

let GetSetProxy = (from) => {
  for (const [key, val] of Object.entries(from)) {
    const cap = key.toUpperCase() + name.slice(1)
    this = new Proxy({}, {
      get: (_, opt)      => api[`get${cap}`](...val, opt),
      set: (_, opt, val) => { api[`set${cap}`](...val, opt, val); return true },
    })
  }
}

Block = class {
  constructor(pos){
    this.pos = pos
    this.private = {}
    
    this.private.pair = {
      block:[this.pos]
    }
  }
}

Chunk = class {
  
}

Player = class {
  constructor(id){
    //set field which will never change
    //all non computed parts in private
    this.private = {} //store all private data needed for population
    
    this.private.const = {
      id,
      dbId: api.getPlayerDbId(id),
      name: api.getEntityName(id),
    }
    
    this.private.pair = {
      position:[this.id],
      health:[this.id],
    }
    
    this.private.proxy = {
      clientOption:[this.id]
    }
    
    //add to class
    ReadOnly.call(this, this.private.const)
    
    GetSetPair.call(this, this.private.pair)
  }
}


