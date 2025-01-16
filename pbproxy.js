export class Message {
    
}
Message.toString = function() {
    console.log(this.fields);
    
    return `message ${this.typeName} {
  
}`
}