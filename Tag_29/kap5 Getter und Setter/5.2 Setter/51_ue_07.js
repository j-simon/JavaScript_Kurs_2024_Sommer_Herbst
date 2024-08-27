class Blogpost {
  #content;
  constructor(content) {
    this.#content = content;
  }

  setContent(content) {
    if (typeof content !== 'string')
      return // wenn der contnen kein string is, wird er nicht in den state übernommen


  this.#content=[]
    // if (content.length <= 20)
    //   this.#content.push(content)
    // else {
      // 0 bis content.length - 1
      //    0 19
      //    20 39
      //    content.length - 1
      //  substr
      //   array.forEach

      //     content.forEach((elm) => console.log(elm))
      // let i = 0
      // this.#content.push(content.substr(i, 20))
      // i += 20
      // this.#content.push(content.substr(i, 20))
      // i += 20
      // this.#content.push(content.substr(i, 20))

      for (let i = 0; i < content.length; i += 20) {
        this.#content.push(content.substr(i, 20))
      }
    // }
  }

  getContent() {
    console.log(this.#content)
    return this.#content.join("")
  }

}




const post = new Blogpost([]);
console.log('post --->', post);
// post.setContent(12)
post.setContent('Hallt du')
console.log(post.getContent())
post.setContent('12345sajdjsahjlhdjksffhjd67890678901234567890123456789012345678901234567890')

console.log(post.getContent())