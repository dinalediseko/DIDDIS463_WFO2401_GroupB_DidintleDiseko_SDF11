// Alert dismissible function
document.querySelector('.loopple-alert.loopple-alert-dismissible .close').onclick = function() {
  document.querySelector('.loopple-alert').classList.add('loopple-opacity-0');
  setTimeout(function(){
    document.querySelector('.loopple-alert').remove();
  }, 1000);
}

// Toggle mobile menu
document.getElementById('mobile-menu-button').onclick = function() {
  document.getElementById('mobile-menu').classList.toggle('mobile-menu-open');
}
