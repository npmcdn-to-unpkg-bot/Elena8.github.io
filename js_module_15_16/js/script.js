
/*function GoogleCallback(jqueryObj,data) {
    console.log(data);
} */
$(function () {
    'use strict';
    var Human,
        Worker,
        Student;
    Human = {
        name: "Jack",
        age: 23,
        feMa: "male",
        height: 183,
        weight: 80
    };
    function Worker (work,zp) {
        this.work=work;
        this.zp=zp;
        this.workUp= function() {
            return this.name + " work!!";
        }
    }
    Worker.prototype=Human;
    var newWorker = new Worker();
    var work1 = new Worker("engineer","300");
    var work2 = new Worker("engineer2","400");
    console.log(newWorker.workUp());
    console.log(work1);
    console.log(work2);
    function Student (stud,scholarship) {
        this.stud=stud;
        this.scholarship=scholarship;
        this.watch= function() {
            return this.name + " watch series.";
        }
    } 
    
    Student.prototype=Human;
    var newStudent = new Student();
    var student1 = new Student("DonNTU","50");
    var student2 = new Student("DonNU","60");
    console.log(newStudent.watch());
    console.log(student1);
    console.log(student2);
    
   
//$('[type=button]').click(function() {
 
//function search(){
			//var srch = $('[type=text]').val(); 
			/*$.ajax({
				url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+ 'test' +'&callback=GoogleCallback&context=?',
				dataType: 'jsonp'
			});*/
     
		//}


    
//});


    
});
