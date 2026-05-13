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

//ndarray REWRITE FOR BLOXD CHUNKS

function order() {
  var stride = this.stride
  var terms = new Array(stride.length)
  var i
  for(i=0; i<terms.length; ++i) {
    terms[i] = [Math.abs(stride[i]), i]
  }
  terms.sort((a,b)=>a[0]-b[0])
  var result = new Array(terms.length)
  for(i=0; i<result.length; ++i) {
    result[i] = terms[i][1]
  }
  return result
}

function compileConstructor(dtype) {
  var className = "View3d"+dtype

  var useGetters = (dtype === "generic")

  var code = ["'use strict'"]

  //Create constructor for view
  var indices = [0,1,2]
  var args = ["i0","i1","i2"]
  var index_str = "this.offset + this.stride[0]*i0 + this.stride[1]*i1 + this.stride[2]*i2"
      
  var shapeArg = "b0,b1,b2"
  var strideArg = "c0,c1,c2"
  code.push(
    "function "+className+"(a,b0,b1,b2,c0,c1,c2,d){this.data=a",
      "this.shape=[b0,b1,b2]",
      "this.stride=[c0,c1,c2]",
      "this.offset=d|0}",
    "var proto="+className+".prototype",
    "proto.dtype='"+dtype+"'",
    "proto.dimension=3")

  //view.size:
  code.push("Object.defineProperty(proto,'size',{get:function "+className+"_size(){\
return this.shape[0]*this.shape[1]*this.shape[2]",
"}})")

  code.push("Object.defineProperty(proto,'order',{get:")

  code.push("function "+className+"_order(){")

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

  //view.set(i0, ..., v):
  code.push(
"proto.set=function "+className+"_set(i0,i1,i2,v){")
  if(useGetters) {
    code.push("return this.data.set(this.offset + this.stride[0]*i0 + this.stride[1]*i1 + this.stride[2]*i2,v)}")
  } else {
    code.push("return this.data[this.offset + this.stride[0]*i0 + this.stride[1]*i1 + this.stride[2]*i2]=v}")
  }

  //view.get(i0, ...):
  code.push("proto.get=function "+className+"_get(i0,i1,i2){")
  if(useGetters) {
    code.push("return this.data.get(this.offset + this.stride[0]*i0 + this.stride[1]*i1 + this.stride[2]*i2)}")
  } else {
    code.push("return this.data[this.offset + this.stride[0]*i0 + this.stride[1]*i1 + this.stride[2]*i2]}")
  }

  //view.index:
  code.push(
    "proto.index=function "+className+"_index(", "i0,i1,i2", "){return this.offset + this.stride[0]*i0 + this.stride[1]*i1 + this.stride[2]*i2}")

  //view.hi():
  code.push("proto.hi=function "+className+"_hi(i0,i1,i2){return new "+className+"(this.data,(typeof i0!=='number'||i0<0)?this.shape[0]:i0|0,(typeof i1!=='number'||i1<0)?this.shape[1]:i1|0,(typeof i2!=='number'||i2<0)?this.shape[2]:i2|0,this.stride[0],this.stride[1],this.stride[2],this.offset)}")
    

  //view.lo():
  var a_vars = ["a0=this.shape[0]","a1=this.shape[1]","a2=this.shape[2]"]
  
  
  var c_vars = ["c0=this.stride[0]","c1=this.stride[1]","c2=this.stride[2]"]
  
  
  code.push("proto.lo=function "+className+"_lo(i0,i1,i2){var b=this.offset,d=0,a0=this.shape[0],a1=this.shape[1],a2=this.shape[2],c0=this.stride[0],c1=this.stride[1],c2=this.stride[2]")

code.push(
"if(typeof i0==='number'&&i0>=0){d=i0|0;b+=c0*d;a0-=d}"
)
code.push(
"if(typeof i1==='number'&&i1>=0){d=i1|0;b+=c1*d;a1-=d}"
)
code.push(
"if(typeof i2==='number'&&i2>=0){d=i2|0;b+=c2*d;a2-=d}"
)
  
  code.push("return new "+className+"(this.data,a0,a1,a2,c0,c1,c2,b)}")
    
    

  //view.step():
  code.push("proto.step=function "+className+"_step(i0,i1,i2){var a0=this.shape[0],a1=this.shape[1],a2=this.shape[2],b0=this.stride[0],b1=this.stride[1],b2=this.stride[2],c=this.offset,d=0,ceil=Math.ceil")
    
    
    
code.push(
"if(typeof i0==='number'){d=i0|0;if(d<0){c+=b0*(a0-1);a0=ceil(-a0/d)}else{a0=ceil(a0/d)}b0*=d}"
)
code.push(
"if(typeof i1==='number'){d=i1|0;if(d<0){c+=b1*(a1-1);a1=ceil(-a1/d)}else{a1=ceil(a1/d)}b1*=d}"
)
code.push(
"if(typeof i2==='number'){d=i2|0;if(d<0){c+=b2*(a2-1);a2=ceil(-a2/d)}else{a2=ceil(a2/d)}b2*=d}"
)

  code.push("return new "+className+"(this.data,a0,a1,a2,b0,b1,b2,c)}")

  //view.transpose():
  var tShape = new Array(3)
  var tStride = new Array(3)
  for(var i=0; i<3; ++i) {
    tShape[i] = "a[i"+i+"]"
    tStride[i] = "b[i"+i+"]"
  }
  code.push("proto.transpose=function "+className+"_transpose("+args+"){"+
    args.map(function(n,idx) { return n + "=(" + n + "===undefined?" + idx + ":" + n + "|0)"}).join(";"),
    "var a=this.shape,b=this.stride;return new "+className+"(this.data,"+tShape.join(",")+","+tStride.join(",")+",this.offset)}")

  //view.pick():
  code.push("proto.pick=function "+className+"_pick("+args+"){var a=[],b=[],c=this.offset")
  for(var i=0; i<3; ++i) {
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
  if(!!data?.constructor?.isBuffer?.(data)) return "buffer"
  if(typeof Float64Array !== "undefined") {
    const type = Object.prototype.toString.call(data)
      .slice(8, -6)
      .toLowerCase()
    if(type in CACHED_CONSTRUCTORS) return type
  }
  if(Array.isArray(data)) return "array"
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
  "bigint64": [],
  "biguint64": [],
  "buffer":[],
  "generic":[]
}

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
    ctor_list.push(compileConstructor(dtype))
  }
  var ctor = ctor_list[d+1]
  return ctor(data, shape, stride, offset)
}

let ndarray = wrappedNDArrayCtor

var mat = ndarray(new Float64Array([1]), [2,2,2])

console.log(mat)

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


