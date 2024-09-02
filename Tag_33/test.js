class MathHelper {
    static pie = 3.14;
    static zaehler=0
    static squareVolume(length) {
      return length ** 3;
    }

    constructor(a){
        this.a=a
        MathHelper.zaehler++
    }

  }
  
  console.log(MathHelper.pie); // 3.14
  const mh = new MathHelper(10)
  new MathHelper(10)
  new MathHelper(10)
  new MathHelper(10)
  new MathHelper(10)
  new MathHelper(10)
  new MathHelper(10)
  new MathHelper(10)
  new MathHelper(10)
  new MathHelper(10)
  new MathHelper(10)
 
  console.log('mh --->', mh);
  const mh1 = new MathHelper(10)
  console.log(MathHelper.zaehler); 
  

