function builder(){
    this.name = "";
}
builder.prototype.Initialize = function(){
    console.log("Builder initialized");
};
builder.prototype.CreateNavbar = function(){
    console.log("CreateNavbar()");
};