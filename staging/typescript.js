Symbol.scope = Symbol("Symbol.scope");
Symbol.type = Symbol("Symbol.type");

Object.defineProperty(Proxy,"bound",{
    get(){
        let target = function(){}.bind()
        Reflect.ownKeys(target).map(e=>delete target[e])
        target.__proto__ = null
        return target
    },
    set:()=>false
})

let TypeScript = new class {
    /*
    _brand = Symbol("Type.brand")
    _target(target, name){ //brand a primative
        target = Object(target)
        if(name){target[this._brand] = name}
        target.__proto__ = null 
        return target 
    }
    */
    _reg = {
        next:0,
        add(value){ //never clears, this is registry of all types needed to be stored, seperate by instance and usage
            let key = Symbol(`Reg.${this.next++}`)
            this[key] = value
            return key
        },
        get(key){
            return this._reg[key]
        },
        __proto__:null //so then doesnt vaporise object standard props
    }
    def(target, handler){
        target = Object.assign(Proxy.bound, target)
        let proxy = new Proxy(target,{
            get:(...args)=>{
                let [target, key] = args

                if(key === Symbol.toPrimitive){return ()=>regKey} //converts to primative to pass through prop access
                if(key === Symbol.hasInstance){return (inst)=>handler.is(inst)} // A instanceof Type
                if(key === Symbol.type){return proxy} //it is its own type
                if(typeof key === "symbol"){key = this._reg.get(key) ?? key} //find its registry entry if it exists to convert back to object
                if(typeof key === "string" && `${+key}` === key){key = +key} //array indexing uses numbers
                //makes args use those now correct values

                args[0] = target
                args[1] = key //now it can call handler with better object

                return (handler.get ?? (()=>this.TYPE.void))(...args) //if no get, default to void (will make more precise but rn, just this)
            },
            apply:(_, __, [t])=>t?this.def(t, handler):void 0, //aka new instance of itself, if it exists
            has:(...args)=>(handler.has ?? (()=>false))?.(...args),
            ownKeys:(...args)=>(handler.ownKeys ?? (()=>[]))?.(...args),
            getPrototypeOf:(t)=>t.__proto__, //close equivilant to reflect.get, aka treat prototype as just __proto__ key
            isExtensible:()=>true,
            preventExtensions:()=>false,
            // will add type editing SOON, but not now, for now types are UNEDITABLE
        })
        let regKey = this._reg.add(proxy)
        return proxy
    }
    // idk if i lost mathematical rigour which i set out to do with this
    TYPE = { 
        Array:(TYPE)=>this.def({TYPE},{
            get:(_, key)=>{ //strictly an array
                if(typeof key === "number"){return _.TYPE ?? this.TYPE.any}
                if(key === "length"){return this.TYPE.number}
                return this.TYPE.void
            },
            has:(_, key)=>key in this.TYPE.number || key === "length" || key in [], //is the key in the prop, or proto
            is:(v)=>void 0 //unknown, we need code to check if it follows shape of an array, eg either only number keys AND a singular length prop
        }),
        Object:this.def({},{
            get:()=>this.TYPE.any, //if it got to this point, its already true, due to prop access
            has:(_, key)=>true, //is the key in the prop, it always has keys, may be undefined, but that is unknown
            is:(v)=>(["symbol","number","string"].includes(typeof v)) //anything can be accessed with props, those props may not exist but worse case, is undefined
        }),
        any:this.def({},{
            get:(_, key)=>{
                return this.TYPE.any
            },
            has:()=>false, 
            is:()=>true 
        }),
        never:this.def({}, {
            get:(...args)=>{throw new TypeError("never")},
            has:(_, k)=>{throw new TypeError("never")},
            is:(v)=>{throw new TypeError("never")}
        }),
        number:this.def({}, {
            get:(...args)=>{},
            has:(_, k)=>k in Object(1),
            is:(v)=>typeof v === "number"
        }),
        string:this.def({}, {
            get:(...args)=>{},
            has:(_, k)=>k in Object("1"),
            is:(v)=>typeof v === "string"
        }),
        boolean:this.def({}, {
            get:(...args)=>{},
            has:(_, k)=>k in Object(true),
            is:(v)=>typeof v === "boolean"
        }),
        symbol:this.def({}, {
            get:(...args)=>{},
            has:(_, k)=>k in Object(Symbol()),
            is:(v)=>typeof v === "symbol"
        }),
        null:this.def({}, {
            get:(...args)=>{},
            has:(_, k)=>false, //no keys on it
            is:(v)=>v === null
        }),
        undefined:this.def({}, {
            get:(...args)=>{},
            has:()=>false,
            is:(v)=>v === undefined
        }),
        void:this.def({}, {
            get:(...args)=>{},
            has:()=>false,
            is:(v)=>v === undefined
        }),
        none:this.def({}, {
            get:(...args)=>{},
            has:()=>false,
            is:()=>false
        }),
        OR:(...v)=>this.def({}, {
            get:(_, ...args)=>this.TYPE.OR(...v.map(e=>Reflect.get(e, ...args))), //distribute
            has:(_, key)=>v.some(e=>key in e),
            is:(key)=>v.some(e=>key instanceof e) //is that type, equivilant of A | B | C
        }),
        AND:(...v)=>this.def({}, {
            get:(_, ...args)=>this.TYPE.AND(...v.map(e=>Reflect.get(e, ...args))), //distribute
            has:(_, key)=>v.every(e=>key in e),
            is:(key)=>v.every(e=>key instanceof e) //is that type, equivilant of A & B & C
        }),
    }
    test(target, type){ //type checks against op now

        //test obj, may be recursive
        let inx = 0 //operation index, can be used for errors
        let ops = {} //info about leaves or whatever
        let log = (op, res) => {}
        let wrap = (obj, node) => { //wrap tests
            log()
            return this.def({},{
                get:(_, key)=>{
                    wrap(key)
                },
                has:()=>{},
                is:()=>{}
            })
        } //detector type
        //reflects everything, BUT keeps track of what happened,
        //so exact point of failure is known eg (Get(A), ... nothing else) means that was what failed it,
        //from leaves it tells how it failed, and path to that

        if(wrap(target, ops) instanceof type){
            return target
        }else{
            let E = []
            //determine errors, by leaf looking

            throw new AggregateError(E)
        }
        //if true, return target, if false, throw with descriptive error as to why it wasnt correct type
    }
    [Symbol.scope] = (()=>{
        let target = {
            ...this.TYPE, //insert all types here

            // Reserved words such as `null` and `void`
            // cannot be used as identifier references.
            Void: this.TYPE.void,
            Null: this.TYPE.null,
            Undefined: this.TYPE.undefined,
            __proto__:null
        }

        let SCOPE = {__proto__:null}

        Object.defineProperty(this,"SCOPE",{
            get:()=>SCOPE,
            set:(v)=>SCOPE = v
        })

        /*let allKeys = (obj) => {
            let list = []
            do{
                list.push(...Reflect.ownKeys(obj))
            }while(obj = Reflect.getPrototypeOf(obj))
            return list
        }*/ //maybe

        let proxy = new Proxy(target,{
            get(...args){
                let [target, key] = args
                if(key === "type"){return target} //Type is Cycle

                return Reflect.get(...args)
            },
            has(){ // this is intentional, since it is a self contained scope, and if it doesnt exist, WILL return undefined
                return true //pure typescript type def here, doesnt interact with JS globalThis (local vars maybe tho)
            },
            set:(...args)=>{
                let [target, key, value, recv] = args
                if(key === "type"){return false} //no type override
                args[2] = value = value[Symbol.type] === value
                    ? value : this.def({},{
                        get:(_, key)=>value[key],
                        has:(_, key)=>key in value,
                        is:(v)=>Reflect.ownKeys(v).every(k=>v[k] instanceof value) //literal converted to type
                    })
                SCOPE[key] = value
                return Reflect.set(...args)
            }
        })
        return proxy
    })()
}

{A:1}

{A:null}

{A:undefined}

{} //doesnt exist

//console.log(TypeScript.TYPE.Array())

with(TypeScript[Symbol.scope]){
    EntityId = Array(number)
    Pos = [number, number, number]
}

console.log(TypeScript.SCOPE)

/*
let Typed = type(value)?.(generic args if needed) //becomes typed version of value, aka verifies that intended structure is kept
*/

void //different, this means there isnt an existance of it, eg difference between  {key: undefined} and {} //key doesnt exist
undefined //undefined, the value it doesnt have a type wrapper its just undefined, thats all it is

// nice, so this is where it declares types?
/*
with(TypeScript[Symbol.scope]){ //SAY HELLO TO SCOPED EXECUTION
    // yep, at least thats the plan when im done, it declares types, and basically can do type documentation, typescript system
    //handles the rest, typed values, type errors, whatever is needed, the api, documents itself
    // and this is why typescript system is a KEY part of this
    // since then in future, i can just do {[Symbol.type]: "string"} or similar, and the api, is documented, just like that

    //so thoughts?
    //really cool tbh, but is this basically bloxds typescript but better?
    //ic // yea i got it // alright, im gonna go now, cya
    // cya
    
    //so yeah, thats the big plan, it is quite a headache to work with, but ill figure it out very soon
    // not better, in JS, what i mean is TS is if you think about it, a stylised note taking system, you define types, it catches early
    // based on your noted intent

    // here something could genuinly ask Typeof(Obj) and using typescript system, it would tell you, its not just some notes
    // it exists, it has a form, you can do calculations on them, thats what is different about them
    
    PVoid = T => OR(T, void 0)
    PNone = T = OR(T, None)

    EntityId = string
    Pos = [number, number, number]
    LifeformId = EntityId
    PlayerId = LifeformId
    PNull = T => OR(T, null)
    PlayerDbId = string
    PlayerAttemptDamageOtherPlayerOpts = {
        eId: PlayerId,
        hitEId: PlayerId,
        attemptedDmgAmt: number,
        withItem: string,
        bodyPartHit: PNone(LifeformBodyPart),
        attackDir: PNone(Array(number)),
        showCritParticles: PNone(boolean),
        reduceVerticalKbVelocity: PNone(boolean),
        horizontalKbMultiplier: PNone(number),
        verticalKbMultiplier: PNone(number),
        broadcastEntityHurt: PNone(boolean),
        attackCooldownSettings: PNone(PNull({ type: string, cooldownMs: number })),
        hittingSoundOverride: PNone(HittingSoundOverride),
        ignoreOtherEntitySettingCanAttack: PNone(boolean),
        isTrueDamage: PNone(boolean),
        damagerDbId: PNone(OR(PlayerId, null)),
    }
}
*/
