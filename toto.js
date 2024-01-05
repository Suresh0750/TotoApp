

// //!Query selector

// const input=document.querySelector("input")

// console.log(input)










// console.log(document.head)

// let newDiv=document.createElement('div')
// newDiv.innerText='hello developer'

// // console.log(newDiv);
// let taskContainer=document.getElementById('taskContainer');

// taskContainer.append(newDiv);


//!-----DoM use -------------------------

    // //?-----Element--CRUD Operations----------
    
    // let taskContainer= document.getElementById('taskContainer');

    // let div=document.createElement('div')

    // div.innerText='Task1'

    // taskContainer.append(div);

    //?---------Attribuites--------------------------------

    // div.setAttribute('class','task')

    // let input=document.getElementById('inputBox');
    
    // console.log(input.getAttribute('type'))

    // let h3=document.createElement('h3')

    // h3.innerText='dumme content'

    // taskContainer.append(h3)

    // h3.setAttribute('id','dame');


    // h3.style.backgroundColor='red';
    // h3.style.margin='3px';

    // let findDame= document.getElementById('dame')

    // console.log(findDame)

    // console.log(findDame.getAttribute("id"))


    // console.log(window.document.head)

//!-------------------------GET Input value------------------------------------------------------

        // const addBtn = document.getElementById('btn');
        // const inputBox = document.getElementById('inputBox');
        // const taskContainer=document.getElementById('taskContainer');    
        // const localStoragevalue=[];//***store the value in local storage system */


        // addBtn.addEventListener('click',addTask)
        // inputBox.addEventListener('keyup',enterInput)
        
        //*----Elemend is the new create element---styles is the Object ----antha element applay panna vendia style
        
        // function styleAdd(element,styles){
            
        //     const stylesObj=Object.keys(styles)
            
            
        //     for(var i=0;i<stylesObj.length;i++)
        //     {
        //         //* These two styleObj key and value
                
        //         let key=stylesObj[i];
        //         let values=styles[stylesObj[i]];
                
        //         element.style[key]=values
        //     }
            
        // }

        // function hadleRemover(){

        //     this.remove()
        // }

        // function taskEvent(){
        //     this.classList.toggle('completed')
        // }
        
        // function enterInput(e){
            
        //     //* e.keyCode 13 is the Enter key Number 
        //     if(e.keyCode==13)
        //     {
        //         addTask()
        //     }
        // }
    
        
        // function addTask(){
        //     //*input box value-----
        //     const inputValue=inputBox.value

        //     if(inputValue.length==0) return;

        //     console.log(inputValue)
        //     localStoragevalue.push(inputValue);
            
        //     localStorage.setItem('task',localStoragevalue)
            
        //     //* Creat new elment
        //     const newElement=document.createElement('div');
            
        //     //* assign the input value insaid of the new element
        //     newElement.innerText=inputValue;
            
        //     newElement.setAttribute('class','task');

        //     newElement.addEventListener('click',taskEvent)
        //     newElement.addEventListener('dblclick',hadleRemover)
            
        //     // const styleObj={
        //     //     border:'2px solid green',
        //     //     margin:'10px',
        //     //     padding:'10px',
        //     //     cursor:'pointer',
        //     //     textAlign:'center'
        //     // }
            
        //     //* Style insert newElement
        //     // styleAdd(newElement,styleObj)
            
            
        //     //* append the value that means task show the displyay
        //     taskContainer.append(newElement)
        // }


        const inputBox = document.getElementById('inputBox')
        const addBtn = document.getElementById('btn')
        const taskContainer=document.getElementById('taskContainer')
        const storeValue=[]

        inputBox.focus()
    

        addBtn.addEventListener('click',inputValue)
        inputBox.addEventListener('keyup',handleEnter)

        function handleEvent(){
           
            this.classList.toggle('completed')
            // const toggleValue=this.innerText
            

            // console.log(this.getAttribute('id'))
            //console.log(this.id)
            const matchId= this.id
            
            for(var i=0;i<storeValue.length;i++){

                const checkObj=storeValue[i]

                //!matchId and checkObj.id same value but different datatype so chang same data type

                if((matchId).toString()===(checkObj.id).toString())
                {
                    
                    checkObj.isCompleted=!checkObj.isCompleted
                }

            }

            localStore()

        }

        function handleEnter(e){
           
            if(e.keyCode==13) inputValue();
        }
        function handleRemover()
        {
            this.remove()

            // const removeValue=this.innerText
            const removeId= this.id
         
            for(var index in storeValue )
            {
                const chechRemove= storeValue[index]
                if((removeId).toString()===(chechRemove.id).toString())
                {
                    storeValue.splice(index,1)
                }
            }

            localStore()

        }

        function addDivElement(inputValue,isCompleted,Id){
           
            const div = document.createElement('div')
    
            div.innerText=inputValue
    
            styleAdd(div,isCompleted,Id)
            taskContainer.append(div)
           
        }
       
        function styleAdd(div,isCompleted,Id){

            if(isCompleted)
            {
                div.setAttribute('class','task completed')
                div.setAttribute('id',Id)
            }

            else{
                div.setAttribute('class','task')
                div.setAttribute('id',Id)
            }

            div.addEventListener('click',handleEvent)
            div.addEventListener('dblclick',handleRemover)

        }

        function localStore(){
           
            localStorage.setItem('task',JSON.stringify(storeValue))

        }

        function getItem(){

            let getValue =  localStorage.getItem('task')
            if(!getValue) return;

            getValue=JSON.parse(getValue)
            
            for(key in getValue)
            {
                let store=getValue[key]
                addDivElement(store.value,store.isCompleted,store.id)
                storeValue.push(getValue[key])
            }
            
            
        }

        //* ---getItem tham refresh ana pirakum data fetch pannie kondu varthu
        getItem()

        function uniqueId(inputValue)
        {
            const year=new Date().getFullYear().toString()
            const month=new Date().getMonth().toString()
            const date=new Date().getDate().toString()
            const minutes=new Date().getMinutes().toString()
            const seconds=new Date().getSeconds().toString()
            const milliSeconds=new Date().getMilliseconds().toString()
            
            const compine=year+month+date+minutes+seconds+milliSeconds

            const taskId=Math.random()+compine
            
            const obj={}
            
            obj.value=inputValue;
            obj.isCompleted=false;
            obj.id=taskId

            storeValue.push(obj)

            console.log(obj)

            addDivElement(inputValue,false,taskId)

        }

        function inputValue()
        {
            const inputValue=(inputBox.value).trim('')

            if(inputValue.length==0) return alert('Please Enter The Value...');



            uniqueId(inputValue)
           

            // console.log(inpurValue.length)
            //* addDivElement display pannuthu
            

           
            // console.log(storeValue)
            localStore()

            inputBox.value=''
            inputBox.focus()

        }
      




        