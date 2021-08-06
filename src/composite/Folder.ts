import { Component } from '../abstract/Component';

export class Folder extends Component  {

  components: Component[] = []

  constructor(n: string) {
    super(n)
  }

  view() {
    let str = ""
    let tab = this.string_indentation() 
    console.log(`${tab}Folder:${this.name}`)  
    str += `${tab}Folder:${this.name}`
    for (const component of this.components) {
      component.view()  
    }
    return str;
  }

  addComponent(f: Component) {
    this.level += 1  
    this.components.push(f)
  }

  showComponent() {
    for (const component of this.components) {
      console.log(component);
    }
  }

}