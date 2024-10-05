class HashMap{
    constructor(bucketArr=[[]],length=0){
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
       
        if(this.length==0){
            this.bucketArr=[[key,value]];
            
        }
        else if(this.has(key)){
            for(let i=0;i<this.size()-1;i++){
                if(this.bucketArr[i][0]==key){
                    this.bucketArr[i][1]=value;
                }        
            }
        }
        else{
            this.bucketArr.push([key,value]);
            this.length++;
        }
        this.length++;
        
        return this.bucketArr;
    }
    get(key){
        for(let i=0;i<this.size()-1;i++){
            if(this.bucketArr[i][0]==key){
                return this.bucketArr[i][1];
            }
            
        }
    }
    has(key){
        let exists=false;
        for(let i=0;i<this.size()-1;i++){
            if(this.bucketArr[i][0]==key){
                exists=true;
                return exists;
            }
        }
        return exists;
    }
    
}

let hashMap=new HashMap();

console.log(hashMap.hash('banana'));

console.log(hashMap.set('banana','yellow'));
console.log(hashMap.set('apple','red'));
console.log(hashMap.set('apple','pink'));

console.log(hashMap.has('apple'));
console.log(hashMap.get('banana'))


