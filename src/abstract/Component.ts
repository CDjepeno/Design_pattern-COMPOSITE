export abstract class Component {
  protected name: string 
  protected level: number = 0

  constructor(n: string) {
    this.name = n 
  }

  abstract view(): any 

  string_indentation() {
    let str =""
    for (let i = 0; i < this.level; i++) {
      str+="\t";
    }
    return str
  }


}