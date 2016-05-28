define(
    'view',
    ['jquery', 'template'],
        function() {

            return function View(model) {
    var self = this;
    
    function init () {
        var wrapper = tmpl($('#wrapper__template').html());
        
        $('body').append(wrapper);
        self.elements = {
            input: $('.item--value'),
            addBtn: $('.item--add'),
            listContainer: $('.item__list')
        };
        
        self.renderList(model.data); 
    };
    
    self.renderList = function (data) {
        var list = tmpl($('#list__template').html(), {data:data});
        self.elements.listContainer.html(list);
    };
    
    init();
    
}
});