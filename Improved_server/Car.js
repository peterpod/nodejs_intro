function Car (model,original_price,year,modelNo) {
    this.model = model;
    if(modelNo !== undefined) this.modelNo = modelNo; 
    else this.modelNo = "C320"; 
    this.color = "Red";
    this.engine = "V8"
    var a = ["Mercedes","BMW","Porsche","Ferrari"];
    if(a.indexOf(this.model)> -1) this.topspeed = 120;
    else this.topspeed = 100;
    if(year!== undefined) this.year = year;
    else this.year = 2002;
    //price function takes into account depreciation of cars
    this.price = function() {
    	return original_price * Math.pow(1-0.14,new Date().getFullYear() - year);
    }
}

//returns all car attributes and methods in string format
Car.prototype.getCarInfo = function() {
    return this.color + ' ' + this.year + ' '+ this.model + ' '+ this.modelNo + ' with a '+this.engine
    + ' engine and top speed of ' +this.topspeed +' miles per hour';
};

module.exports = Car;