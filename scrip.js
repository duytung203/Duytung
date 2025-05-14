
const btn = document.getElementById('helloBtn');

  btn.addEventListener('click', function()
{
    alert('không có gì đâu');
});


const cursor = document.getElementById('cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});
