class HashMap{
    constructor(bucketArr=[[]],length=0){
        this.bucketArr=bucketArr;
        this.length=length;
        
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
       
        if(this.length==0){
            this.bucketArr=[[key,value]];
            
        }
        else{
            this.bucketArr.push([key,value]);
            this.length++;
        }
        this.length++;
        
        return this.bucketArr;
    }
}

let hashMap=new HashMap();

console.log(hashMap.hash('banana'));

console.log(hashMap.set('banana','yellow'));
console.log(hashMap.set('apple','red'));


