var obj ={
    name: 'John Doe',
    greet: function(){
        console.log(`Hello ${this.name}`); // Template string
    }
}

obj.greet();
obj.greet.call({name:'Jane doe'});
obj.greet.apply({name:'Jane doe'});