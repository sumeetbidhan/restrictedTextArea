document.addEventListener('DOMContentLoaded', function(){
  const textarea = document.getElementById('textarea');
  const currentCount = document.getElementById('current-count');
  const maxCount = document.getElementById('max-count');

  const maxLength = textarea.maxLength;

  textarea.addEventListener('input', function(){
    const count = textarea.value.length;
    currentCount.textContent = count;

    if(count >= maxLength){
      textarea.classList.add('max-reached');
    } else{
      textarea.classList.remove('max-reached');
    }
  });
});