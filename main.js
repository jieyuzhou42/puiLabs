function giraffe(name, age) {
    this.name = name;
    this.age = age;
    this.image = "giraffe.png";
    this.image_alt = "giraffe";
  }

function monkey(name, age) {
    this.name = name;
    this.age = age;
    this.image = "monkey.png";
    this.image_alt = "monkey";
  }

function panda(name, age) {
    this.name = name;
    this.age = age;
    this.image = "panda2.png";
    this.image_alt = "panda";
}

let animals=[new panda(),new monkey(),new giraffe()];
let names = ["Holly", "Marshmallow", "Momo", "Coco", "Ollie", "Oscar", "Leo", "Ruby", "Molly"];

function generateRandomIndex(maxIndex){
    num=Math.random();
    return Math.floor(num * maxIndex)
}

function generateRandomName(){
    num=generateRandomIndex(names.length);
    return names[num]
}

function generateRandomAge(){
    return generateRandomIndex(10);
}

function generateRandomAnimal(){
    num=generateRandomIndex(animals.length);
    if (num==0){
        return new panda(generateRandomName(),generateRandomAge());
    }
    if(num==1){
        return new monkey(generateRandomName(),generateRandomAge());
    }
    if(num==2){
        return new giraffe(generateRandomName(),generateRandomAge());
    }
}

function onLoad() {
    var animal = generateRandomAnimal();
    console.log(animal)
    // update the page based on the animal properties
    document.getElementById("animal-properties").textContent = animal.name + "  " + animal.age + "years old";
    let imageTag = document.getElementById("animal-img");
    imageTag.setAttribute("src", animal.image);
    imageTag.setAttribute("alt", animal.image_alt);
  }