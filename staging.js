

//Yes this is needed since methods are not constructable, but can have dynamic this
Function.prototype.create = function(){
    if(new.target){
        throw new TypeError("Function.prototype.create is not a constructor")
    }

    let fn = this

    let obj = {
        A(...args){
            return Reflect.apply(
                fn, this, args
            )
        }
    }

    Reflect.ownKeys(fn).map(e=>obj.A[e] = fn[e])

    return obj.A
}


Function.prototype.bind = (()=>{
    let og = Function.prototype.bind
    return {
        bind(thisArg, ...bindArgs){
            if (thisArg !== undefined) {
                return Reflect.apply(og, this, [thisArg, ...bindArgs])
            }

            const fn = this; //becomes fn we are binding

            return (function bind(...callArgs){
                return Reflect.apply(
                    fn,
                    this,
                    [...args, ...callArgs]
                );
            }).create()
        }
    }
})();

Object.defineProperty(Proxy,"bound",{
    get(){
        let target = function(){}.bind()
        Reflect.ownKeys(target).map(e=>delete target[e])
        target.__proto__ = null
        return target
    },
    set:()=>false
})

Proxy.void = Proxy //TODO: bind a constructable

globalThis.SafeProxy = (T=boundTarget, H) => {
    if(!new.target){throw new TypeError("Constructor Proxy requires 'new'")}
    let D = function(){}.bind(null);
    
    delete D.name
    delete D.length
    D.__proto__ = null
    
    let R = {
        isExtensible:()=>true,
        preventExtensions:()=>false,
        set:()=>false,
        defineProperty:()=>false,
        deleteProperty:()=>false,
        getOwnPropertyDescriptor:()=>void 0,
    }
    
    let P = Proxy.void(Object.fromEntries(
        Reflect.ownKeys(Reflect).map(op=>[op, (_, ...a)=>{
            let trap = (H[op] ?? Reflect[op])
            let out = trap(T, ...a)
            return (R[op] ?? (()=>out))()
        }])
    ))
    
    return P
}



Symbol.scope = Symbol("Symbol.scope")

let TypeScript = new class {
    constructor(){
        this._brand = Symbol("Type.brand")
        this._reg = {
            next:0,
            add(value){
                let id = this.next++
                let key = Symbol(`Reg.${id}`)
                this[key] = value
                return key
            }, //give value, get registry key
        } //id -> type registry

        this.TYPE = { //this references TYPE, not the class
            test:this.def({
                apply(){
                    //turn type into typed value
                },
                get(){
                    //get key, general op on that, type ops
                },
                has(){
                    //keys which could be used
                },
                ownKeys(){
                    //unused
                },
                //experimental
                set(){
                    //edit type itself
                },
                deleteProperty(){
                    //delete from type
                },
                /*
                get, has, ownKeys: general inspection
                set, delete: general editing
                apply, construct: type to value/ to cloned type //subclassing like behaviour
                getPrototypeOf, setPrototypeOf: treat as __proto__ //moved to def,
                */
            }),
            array:this.def({
                get:(_, key)=>{
                    console.log(key)
                    if(typeof key === "number"){
                        return this.TYPE.number
                    }
                    return this.TYPE.unknown
                }
            }),
            any:this.def({
                get:(_, key)=>{
                    return this.TYPE.any
                }
            }),
            get never(){
                throw new TypeError("never")
            },
            number:this.def({
                get:(...args)=>{
                    Reflect.get(...args)
                }
            }),
            null:this.def({
                get:(...args)=>{
                    Reflect.get(...args)
                }
            }),
            undefined:this.def({
                get:(...args)=>{
                    Reflect.get(...args)
                }
            }),
            void:this.def({
                get:(...args)=>{
                    Reflect.get(...args)
                }
            }),

        }
    }
    _target(target, name){ //prob not needed
        target = Object(target)
        if(name){target[this._brand] = name}
        target.__proto__ = null 
        return target //return object representation of any value, with name attached
    }
    def(handler){
        let H = {
            get:(...args)=>{
                let [target, key] = args

                if(key === Symbol.toPrimitive){
                    return ()=>regKey //converts to primative to pass through prop access
                }
                if(typeof key === "symbol"){
                    key = this._reg[key] ?? key //find its registry entry if it exists to convert back to object
                }
                if(typeof key === "string"){
                    let num = `${+key}`
                    key = key === num ? +num : key //array indexing uses numbers
                }
                args[0] = target
                args[1] = key //now it can call handler with better object

                return (handler.get ?? Reflect.get)(...args)
            },
            getPrototypeOf:(t)=>t.__proto__, //close equivilant to reflect.get, aka treat prototype as just __proto__ key
            setPrototypeOf(t,v){
                try{
                    t.__proto__ = v
                    return true
                }catch{
                    return false
                } 
            }, //best equivilant of reflect.set (not sure how to do recv arg)
            construct:()=>new SafeProxy(T, H),//new inst
            //preservation
            isExtensible:()=>true,
            preventExtensions:()=>false,
            defineProperty:()=>false,
            getOwnPropertyDescriptor:()=>{} //void
        }
        let proxy = new SafeProxy(T, H)
        let regKey = this._reg.add(proxy)
        return proxy
    }
}

[
    "deleteProperty",
    "apply",
    "ownKeys",
    null
]

/*
let Typed = type(value)?.(generic args if needed) //becomes typed version of value, aka verifies that intended structure is kept
*/

void //different, this means there isnt an existance of it, eg difference between  {key: undefined} and {} //key doesnt exist
undefined //undefined, the value it doesnt have a type wrapper its just undefined, thats all it is


TypeScript[Symbol.scope] = new Proxy({
    type:TypeScript.TYPE
},{
    get(...args){
        let [target, key] = args
        if(key === "type"){return target} //Type is Cycle

        return Reflect.get(...args)
    },
    has(){
        return true //pure typescript type def here, doesnt interact with JS globalThis (local vars maybe tho)
    },
    set(...args){
        let [target, key, value] = args
        if(key === "type"){return false} //no type override
        return Reflect.set(...args)
    }
}) //used in with statements


console.log(TypeScript.TYPE.array)
/*
with(TypeScript[Symbol.scope]){
    //PVoid = T => T | void

    EntityId = string
    Pos = [number, number, number]
    LifeformId = EntityId
    PlayerId = LifeformId
    PNull = T => T | null
    PlayerDbId = string
    PlayerAttemptDamageOtherPlayerOpts = {
        eId: PlayerId,
        hitEId: PlayerId,
        attemptedDmgAmt: number,
        withItem: string,
        bodyPartHit: PVoid(LifeformBodyPart),
        attackDir: PVoid(Array(number)),
        showCritParticles: PVoid(boolean),
        reduceVerticalKbVelocity: PVoid(boolean),
        horizontalKbMultiplier: PVoid(number),
        verticalKbMultiplier: PVoid(number),
        broadcastEntityHurt: PVoid(boolean),
        attackCooldownSettings: PVoid(PNull({ type: string, cooldownMs: number })),
        hittingSoundOverride: PVoid(HittingSoundOverride),
        ignoreOtherEntitySettingCanAttack: PVoid(boolean),
        isTrueDamage: PVoid(boolean),
        damagerDbId: PVoid(PNull(PlayerId)),
    }
}

*/
