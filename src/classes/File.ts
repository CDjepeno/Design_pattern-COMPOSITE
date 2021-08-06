import { Component } from "../abstract/Component";

export class File extends Component  {

  constructor(n: string) {
    super(n)
  }
  view() {
    let tab = this.string_indentation()
    return `${tab}File:${this.name}`
  }
}