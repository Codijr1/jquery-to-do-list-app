//creating list items and adding them to the ol
function newItem(){
  let li= $('<li></li>');
  let input= $('#input').val();
  li.text(input);

  if (input===''){
    alert('Your Entry is Empty');
  }
  else{
    $('#list').append(li);
  }
//double click crosses out the list item
  li.on('dblclick',function(){
    li.toggleClass('strike');
  });

//making the delete button
  let deleteButton= $('<deleteButton></deleteButton>').text('x').addClass('deleteButton');
  li.append(deleteButton);

  deleteButton.on('click',function(){
    li.addClass('delete');
  });

//allowing the items to be resorted
  $('#list').sortable();

}