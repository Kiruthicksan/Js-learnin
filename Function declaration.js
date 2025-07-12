// function declaration

function helloWorld(){
    console.log("Hello readers")
}

helloWorld()

// function  declartion with paramenters and arguments

function silentfame(name){
    console.log("The main character name is " ,name)
}

silentfame("Arohi")

// function expression

const desire = function(){
    console.log("Desire: To save the one she got")
}

desire()

// function expression with para and arg

const traits = function(trait){
    console.log("Her biggest trait is: ", trait)
}

traits("Misbelief")

// Return functon

const revenge = function(){
    return "She going to take revenge for what they done."
}

 let plot = console.log(revenge())

 // default parameters

function past(bs = "Not gonna stay silent this time"){
    return revenge() + bs
}

let backstory = console.log(past())

// rest parameters 

let crewmembers = function(crewName, ...names){
    return {
        crewName: crewName,
        Names: names.join(", ")
    }
}

let details = console.log(crewmembers("Theif Group", "Arohi" ,"Pradeep", "Meera","Chinna"))