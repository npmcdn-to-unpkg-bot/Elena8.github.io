
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
    Worker = {
        work: "engineer",
        zp: 300,
        workUp: function () {
            return this.name + " work!!";
        }
    };
    Student = {
        stud: "DonNTU",
        scholarship: 25,
        watch: function () {
            return this.name + " watch series.";
        }
    };
    Worker.__proto__ = Human;
    Student.__proto__ = Human;
    console.log("worker name: ", Worker.name);
    console.log("worker age: ", Worker.age);
    console.log("worker pol: ", Worker.feMa);
    console.log("worker height: ", Worker.height);
    console.log("worker weight: ", Worker.weight);
    console.log("worker work: ", Worker.work);
    console.log("worker zp: ", Worker.zp);
    console.log(Worker.workUp());
    console.log("_______________________ ");
    console.log("student name: ", Student.name);
    console.log("student age: ", Student.age);
    console.log("student pol: ", Student.feMa);
    console.log("student height: ", Student.height);
    console.log("student weight: ", Student.weight);
    console.log("student stud: ", Student.stud);
    console.log("student scholarship: ", Student.scholarship);
    console.log(Student.watch());
   
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