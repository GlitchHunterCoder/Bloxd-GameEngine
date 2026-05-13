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

function Compiled(CTOR_LIST, ORDER){
  'use strict'
  
  function View3dChunk(a, b0, b1, b2, c0, c1, c2, d) {
    this.data = a
    this.shape = [b0, b1, b2]
    this.stride = [c0, c1, c2]
    this.offset = d | 0
  }
  var proto = View3dChunk.prototype
  proto.dtype = 'Chunk'
  proto.dimension = 3
  Object.defineProperty(proto, 'size', {
    get: function View3dChunk_size() {
      return this.shape[0] * this.shape[1] * this.shape[2]
    }
  })
  Object.defineProperty(proto, 'order', {
    get: function View3dChunk_order() {
      return [0,1,2].sort((a,b) => Math.abs(this.stride[a]) - Math.abs(this.stride[b]))
    }
  })
  proto.set = function View3dChunk_set(i0, i1, i2, v) {
    return this.data[this.offset + this.stride[0] * i0 + this.stride[1] * i1 + this.stride[2] * i2] = v
  }
  proto.get = function View3dChunk_get(i0, i1, i2) {
    return this.data[this.offset + this.stride[0] * i0 + this.stride[1] * i1 + this.stride[2] * i2]
  }
  proto.index = function View3dChunk_index(i0, i1, i2){
    return this.offset + this.stride[0] * i0 + this.stride[1] * i1 + this.stride[2] * i2
  }
  proto.hi = function View3dChunk_hi(i0, i1, i2) {
    return new View3dChunk(this.data,
    (typeof i0 !== 'number' || i0 < 0) ? this.shape[0] : i0 | 0,
    (typeof i1 !== 'number' || i1 < 0) ? this.shape[1] : i1 | 0,
    (typeof i2 !== 'number' || i2 < 0) ? this.shape[2] : i2 | 0,
    this.stride[0], this.stride[1], this.stride[2], this.offset)
  }
  proto.lo = function View3dChunk_lo(i0, i1, i2) {
    var [a0,a1,a2] = [...this.shape]
    var [c0,c1,c2] = [...this.stride]
    var b = this.offset, d = 0;
    if(typeof i0==='number'&&i0>=0){d=i0|0;b+=c0*d;a0-=d}
    if(typeof i1==='number'&&i1>=0){d=i1|0;b+=c1*d;a1-=d}
    if(typeof i2==='number'&&i2>=0){d=i2|0;b+=c2*d;a2-=d}
    return new View3dChunk(this.data, a0, a1, a2, c0, c1, c2, b)
  }
  proto.step = function View3dChunk_step(i0, i1, i2) {
    var [a0,a1,a2] = [...this.shape]
    var [b0,b1,b2] = [...this.stride] 
    var c = this.offset, d = 0, ceil = Math.ceil
    if (typeof i0 === 'number') {
      d = i0 | 0;
      if (d < 0) {
        c += b0 * (a0 - 1);
        a0 = ceil(-a0 / d)
      } else {
        a0 = ceil(a0 / d)
      }
      b0 *= d
    }
    if (typeof i1 === 'number') {
      d = i1 | 0;
      if (d < 0) {
        c += b1 * (a1 - 1);
        a1 = ceil(-a1 / d)
      } else {
        a1 = ceil(a1 / d)
      }
      b1 *= d
    }
    if (typeof i2 === 'number') {
      d = i2 | 0;
      if (d < 0) {
        c += b2 * (a2 - 1);
        a2 = ceil(-a2 / d)
      } else {
        a2 = ceil(a2 / d)
      }
      b2 *= d
    }
    return new View3dChunk(this.data, a0, a1, a2, b0, b1, b2, c)
  }
  proto.transpose = function View3dChunk_transpose(i0, i1, i2) {
    i0 = (i0 === undefined ? 0 : i0 | 0);
    i1 = (i1 === undefined ? 1 : i1 | 0);
    i2 = (i2 === undefined ? 2 : i2 | 0)
    var a = this.shape, b = this.stride;
    return new View3dChunk(this.data, a[i0], a[i1], a[i2], b[i0], b[i1], b[i2], this.offset)
  }
  proto.pick = function View3dChunk_pick(i0, i1, i2) {
    var a = [], b = [], c = this.offset
    if (typeof i0 === 'number' && i0 >= 0) {
      c = (c + this.stride[0] * i0) | 0
    } else {
      a.push(this.shape[0]);
      b.push(this.stride[0])
    }
    if (typeof i1 === 'number' && i1 >= 0) {
      c = (c + this.stride[1] * i1) | 0
    } else {
      a.push(this.shape[1]);
      b.push(this.stride[1])
    }
    if (typeof i2 === 'number' && i2 >= 0) {
      c = (c + this.stride[2] * i2) | 0
    } else {
      a.push(this.shape[2]);
      b.push(this.stride[2])
    }
    var ctor = CTOR_LIST[a.length + 1];
    return ctor(this.data, a, b, c)
  }
  return function construct_View3dChunk(data, shape, stride, offset) {
    return new View3dChunk(data, ...shape, ...stride, offset)
  }
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
    ctor_list.push(Compiled(CACHED_CONSTRUCTORS[dtype], order))
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


