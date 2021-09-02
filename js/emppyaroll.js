class EmployeePayrollData{
 
    // getter and setter method
    getid(){ return this._id; }
    set _id(id){
        this._id=id;
    }
    get name(){ returnthis._name;}
    set name(name){
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$')
        if (nameRegex.test(name))
        this._name = name;
        else throw 'Name is Incorrect !';
    }
    get profilePic(){ return this._profilePic; }
    set profilePic(profilePic){ 
        this._profilePic = profilePic;
     }
     set gender () { return this._gender; }
     set gender(gender){
         this._gender = gender;
     }
     set department () { return this._department; }
     set department(department){
         this._department = department;
     }
     set salary () { return this._salary; }
     set salary(salary){
         this._salary = salary;
     }
     set note () { return this._note; }
     set note(note){
         this._note = note;
     }
     set startDate () { return this._startDate; }
     set startDate(startDate){
         this._startDate = startDate;
     }
     // Method 
 toString(){
     const options ={ year: 'numeric' , month:'long' , day:'numeric'};
     const empDate = !this.startDate ? "undefined" :
                        this.startDate.toLocalDateString("en-US", options);
    return "id=" +this.id+",name=" + this.name +", gender=" +this.gender +
    ", profilePic= '" +this.profilePic +",department=" + this.department +
    ", salary =" + this.salary +" , startDate=" + empDate +" , note=" +this.note;
 }
 // UC2 //
 window.addEventListener('DOMcontentLOaded', (event) ==> {
     const name =document.querySelector('#name');
     const textError = document.querySelector('.text-error');
     name.addEventListener('input', function(){
         if(name.value.length == 0){
             textError.textContent = "";
             return;
         }
         try{
             (new EmployeePayrollData()).name = name.value;;
             textError.textContent = "";
         }catch (e){
             textError.textContent = "";
         }
    }) ;
  const salary = document.querySelector('#salary');
  const output = document.querySelector('.salary-output');
  output.addEventListener('input', function(){
      output.textContent = salary.value;
  });
 });