$(function () {
    'use strict';
    function callback() {
        var query = $('#query').val();
        $.ajax({
            url: "https://pixabay.com/api/",
            data: {
                key: "2630817-b95f50d1e0fc2b68ed1f4d734",
                q: query
            },
            success: function (data) {
                console.log(data);
                var html,
                    content;
                    console.log(data.hits.length);
                if(data.hits.length>0) {
                    
                    $(".images").remove();
                }
                html = $('#tmpl').html();
                content = tmpl(html, data);
                $('body').append(content);
          
            }
        });
    };
    $('.search').on('click', callback);

    $('#query').keypress(function (e) {
        if (e.which === 13) {
            callback();
        }
    });

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
    

