
const btn = document.getElementById('helloBtn');

  btn.addEventListener('click', function()
{
    alert('Xin chào! Đây là thông báo từ JavaScript.');
});


const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
