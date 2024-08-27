class Blogpost {
  #content;
  constructor(content) {
    this.#content = content;
  }

  setContent(content) {
    if (typeof content !== 'string') return;
    // if (content.length >= 20) {
    for (let i = 0; i < content.length; i = i + 20) {
      this.#content.push(content.substr(i, 20));
    }
    // return;
    // }
    // this.#content.push(content);
  }

  getContent() {
    console.log(this.#content)
    return this.#content.join('');
  }
}

const post = new Blogpost([]);

post.setContent('Every year, the amount of people who play computer games increases.');
console.log(post.getContent()); // 'Every year, the amount of people who play computer games increases.'

post.setContent('Every ');
console.log(post.getContent()); // 'Every year, the amount of people who play computer games increases.'