define(
    'controller',
    ['jquery'],
        function() {

            return function Controller(model, view) {
    var self = this;
    
    view.elements.addBtn.on('click', addItem);
    view.elements.listContainer.on('click', '.item__delete', removeItem);
    view.elements.listContainer.on('click','.list-item',chooseItem);
    view.elements.editBtn.on('click', '.item--edit', editItem);
    view.elements.editBtn.on('click',editItem);           
    
    
    
    function removeItem () {
    var item = $(this).attr('data-value');
    
    model.removeItem(item);
    view.renderList(model.data);
  }
    
    function addItem() {
        var newItem = view.elements.input.val();
        model.addItem(newItem);
        view.renderList(model.data);
        view.elements.input.val('');
    }
                
    function chooseItem() {
         var index = $(this).attr('data-index');
         model.indexOfActive = index;
         view.renderChoosenItem(model.indexOfActive);
         view.renderInputItem(model.data,model.indexOfActive);  
                }
                
    
    function editItem(index) {
        var editItem = view.elements.input.val();
        model.editItem(editItem);
        view.renderList(model.data);
        view.elements.input.val('');
                }    
};
        });