let stringers=[3, "Jerry", "Sandy", 4, "Pepper", 15, "Jocastah", 12];

let arrayValues = [];

function compareValues (data) {
    let that = this;

    if (stringers[i] == 15){
        this.message = " and it is equal to 15.";
    }else if (stringers[i] < 10){
        this.message = " and its value is less than 10.";
    }else if (stringers[i].length > 5){
        this.message = " and it has more than 5 characters in it.";
    }else {
        this.message = " and it is normal."
    }
    this.color = "The value is " + data + this.message;
    this.ele = document.createElement("div");
    this.eleColor = document.createElement("div");
    this.eleColor.innerHTML = this.color;
    this.eleValue = document.createElement("div");
    this.ele.addEventListener("click", function () {
        that.colorChange();
    });
    this.ele.appendChild(this.eleColor);
    this.ele.appendChild(this.eleValue);
    document.body.appendChild(this.ele);
}
compareValues.prototype.colorChange = function () {
    this.eleColor.style.color = "blue";
};
for (var i = 0; i < stringers.length; i++){
    arrayValues.push(new compareValues(stringers[i]));
}
compareValues(stringers[i]);
