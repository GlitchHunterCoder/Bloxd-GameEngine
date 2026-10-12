Object.defineProperty(Proxy,"bound",{
    get(){
        let target = function(){}.bind()
        Reflect.ownKeys(target).map(e=>delete target[e])
        target.__proto__ = null
        return target
    },
    set:()=>false
})

Object.defineProperty(Function,"isCallable",{
    value(target){
        try{(new Proxy(target,{apply(){}}))();return true}
        catch{return false}
    }
})

Object.defineProperty(Function,"isConstructor",{
    value(target){
        try{new (new Proxy(target,{construct(){return {}}}));return true}
        catch{return false}
    }
})

if (!Symbol.dispose) {
    using _ = new Proxy({},{
        get:(_, prop)=>()=>{Symbol.dispose = prop}
    })
}

globalThis.SafeProxy = (T, H) => {
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
    
    let P = new Proxy(D,Object.fromEntries(
        Reflect.ownKeys(Reflect).map(op=>[op, (_, ...a)=>{
            let trap = (H[op] ?? Reflect[op])
            let out = trap(T, ...a)
            return (R[op] ?? (()=>out))()
        }])
    ))
    
    return P
}
