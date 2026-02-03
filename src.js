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
