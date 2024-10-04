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
    
}

let hashMap=new HashMap();
console.log(hashMap.hash('banana'));


