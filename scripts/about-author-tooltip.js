$(function() {
  let keepDialogOpen = false;
  const $dialog = $('#mauricio-about');
  const $toggler = $(`#${$dialog.data('toggler')}`);
  const $closeBtn = $dialog.find('[data-close-dialog]');

  $toggler.on('mouseover', function() {
    $dialog.show();
  });

  $toggler.on('click', function() {
    keepDialogOpen = true;
  });

  $toggler.on('mouseleave', function() {
    if (!keepDialogOpen) {
      $dialog.hide()
    }
  });

  $closeBtn.on('click', function() {
    keepDialogOpen = false;
    $dialog.hide();
  });
});