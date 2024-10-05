class HashMap{
    constructor(bucketArr=[],length=0){
        this.bucketArr=bucketArr;
        this.length=length;
        this.maxLength=16;
    }
    size(){
        return this.length;
    }
    hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        return hashCode;
    }
    set(key,value){
        let hashKey=this.hash(key);
        hashKey=hashKey%16;
        if(this.has(hashKey)){
            this.bucketArr[hashKey][1]=value;
            this.length--;
        }
            this.bucketArr[hashKey]=[key,value];
            this.length++;
            
        
        return this.bucketArr;
    }
    get(key){
        key=key%16;
        return this.bucketArr[key][1];   
    }
    has(key){
        let exists=false;
        key=key%16;
        if(this.bucketArr[key]){
            exists=true;
            return exists;
            }
    
        return exists;
    }
    values(){
        let valuesArr=[];
        for(let i=0;i<this.maxLength;i++){
            if(this.bucketArr[i]){
                valuesArr.push(this.bucketArr[i][1]);
            }
            
        }
        return valuesArr;
    }
    keys(){
        let keysArr=[];
        for(let i=0;i<this.maxLength;i++){
            if(this.bucketArr[i]){
                keysArr.push(this.bucketArr[i][0]);
            }
            
        }
        return keysArr;
    }
    clear(){
        this.bucketArr=[];
        this.length=0;
        return this;
    }
    entries(){
        return this.bucketArr;
    }
    
}

let hashMap=new HashMap();


console.log(hashMap.set('banana','yellow'));
console.log(hashMap.set('apple','red'));
console.log(hashMap.set('apple','pink'));

console.log("The Map contains 'apple' ?",hashMap.has(hashMap.hash('apple')));
console.log("The value for the key 'banana' is ",hashMap.get(hashMap.hash('banana')));

console.log("The Hash Map",hashMap);
console.log("Entries" ,hashMap.entries());

console.log("Values" ,hashMap.values());
console.log("Keys" ,hashMap.keys());

console.log(hashMap.clear());



