
$(function () {
    'use strict';
    
   
    $('form').on('submit', function() {
        var query = $('#query').val();
        $.ajax({
            url: /*"http://api.riffsy.com/v1/search?tag=" + query + "&limit=7"*/
            "https://pixabay.com/api/?key=2630817-b95f50d1e0fc2b68ed1f4d734&q=" + query + "&image_type=photo",
            dataType: 'jsonp',
            success: function(data, textStatus) {
                console.log('Success: ', data);
                
                var ul = document.createElement('ul');
               $.each(/*data.results,*/ function(i, val) {
                    var li = document.createElement('li');
                    li.classList.add('output-items');
                    console.log(data.results);
                    li.innerHTML = /*'<a href="' +val.webformatURL+ '" title="'+val.webformatURL+'" target="_blank">'+val.title+ '</br>' +*/'<img class="image-output" src="' + val.userImageURL + '">'/*+"</a>"*/;
                    ul.appendChild(li);                   
                });
                $('#search-result').html(ul);
            }
        });    
        return false;  
    });   
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
