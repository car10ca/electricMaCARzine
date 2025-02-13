/* code provided at: https://stackoverflow.com/questions/6164507/change-the-content-of-a-div-based-on-selection-from-dropdown-menu/24849350 */

$(document).on('change', '.div-toggle', function() 
{
    var target = $(this).data('target');
    var show = $("option:selected", this).data('show');
    $(target).children().addClass('hide');
    $(show).removeClass('hide');
});
  $(document).ready(function()
  {
      $('.div-toggle').trigger('change');
  });