

//* -----------===VIDEO 13===------------------------ 
// var evenNumber=[];
// var even=0
// var oddNumber=[];
// var odd=0
// var start=500;
// var end=1000;
// function evenNum(){
    
   
// }
// function oddNum(){
    
// } 

// function validNumber(i){
//      if(i%2==0) evenNumber[even++]=i
//        else oddNumber[odd++]=i
// }
// for(var i=start;i<end;i++)
// {
//    validNumber(i);
// //     {evenNum()}
// //   oddNum()
    
// }
//  console.log(`${evenNumber}`)
//   console.log(`------------------------------------------------`)

//  console.log(`${oddNumber}`)


//!----------===14 VIDEO Build in funtion ===-----------------------------------------

var arr=[1,2,3,4,5,6,7]

//---------------
    //arr.push(8,6,7)
    //console.log(arr)
//----------------

    //arr.pop()
    //console.log(arr)
//-------------------

    //arr.unshift(-1,0)
    //console.log(arr)
//-------------------



//!------Object----------------


    var obj={
        muthuraj:100,
        suresh:1400,
        listen:1400,
        panjali:1400,
        munish:1400
    }

  console.log(obj)

    //Method-1

    // console.log(Object.keys(obj));
    //     console.log(Object.keys(obj).length)
    // console.log(Object.values(obj));
    //     console.log(Object.values(obj).length)
    // console.log(Object.entries(obj))
    //     console.log(Object.entries(obj).length)


    //-----==preventextentions and freeze==----------------


   
        // Object.preventExtensions(obj);          // no add another properties but can we delete and modified

        // obj.mathan=1550
        // console.log(obj)


        //Objcet.seal(obj)                         // can't add and delete but can modified
        //obj.mathan=1550
        // console.log(obj)


        // Object.freeze(obj)          // can't add,modified,delete the property
        // obj.munish=15
        // console.log(obj)

        //? -------------==Delete properties==-----------------

        // delete obj.muthuraj

        // console.log(obj)

//! ------------===Global Predefined function===--------------------------------------

//?-------new Date()
        console.log(new Date());

        // console.log(new Date().getDate())
        // console.log(new Date().toDateString())
        // console.log(new Date().getTime())
        // console.log(new Date().getFullYear());

//?--------Math -------
       // console.log(Math.random()+100)

        // console.log(Math.min(8,5,4,9))
        //Math.max()
        //Math.floor()
        //Math.round()
    
//?-----isNaN----------

        //This is used is number or not a number

        // var k='10a'
        // var c=1

        // console.log(k+c);
        // console.log(c+Number(k))

        // console.log(isNaN(k))

//?----regex---------------

        // var b='a2b5b6b7b8m6n'

        // console.log(b.replace(/[^1-9]/g,""));       //*---this is a systax remove all letters

/***--------------==One Part Complete==------------ */