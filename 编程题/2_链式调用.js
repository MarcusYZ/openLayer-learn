class U {
    constructor() {
        this.promise = Promise.resolve();
    }
    
    console(val) {
        this.promise = this.promise.then(() => {
           console.log(val);
        });
        return this;
    }
    
    setTimeout(wait) {
        this.promise = this.promise.then(() => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve()
                }, wait);
            });
        })
        return this;
    }   
   }

   const u = new U;

   u.console('test')