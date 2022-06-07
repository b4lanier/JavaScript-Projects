function printDictionary() {
    var animal = {      //crease object animal
        legs: 4,        //create values for object attributes
        age: 5,
        color: "brown",
        species: "cow"
    };
    delete animal.legs; //delete legs value
    document.getElementById("dictionary").innerHTML = animal.species;   //print animal species
    window.alert(animal.legs);  //show undefined legs value after deletion in pop up
}