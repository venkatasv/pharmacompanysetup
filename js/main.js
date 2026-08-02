document.getElementById('yr').textContent = new Date().getFullYear();
function handleContact(e){
  e.preventDefault();
  alert('Thanks — message captured (demo).');
  e.target.reset();
}
