document.getElementById('home').addEventListener('click', function(e) {
  document.getElementById('mainContent').style.display = 'block';
  document.getElementById('portfolioContent').style.display = 'none';
  document.getElementById('contactContent').style.display = 'none';
  document.getElementById('otherContent').style.display = 'none';
});

document.getElementById('portfolio').addEventListener('click', function(e) {
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('portfolioContent').style.display = 'block';
  document.getElementById('contactContent').style.display = 'none';
  document.getElementById('otherContent').style.display = 'none';
});

document.getElementById('contact').addEventListener('click', function(e) {
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('portfolioContent').style.display = 'none';
  document.getElementById('contactContent').style.display = 'block';
  document.getElementById('otherContent').style.display = 'none';
});

document.getElementById('other').addEventListener('click', function(e) {
  document.getElementById('mainContent').style.display = 'none';
  document.getElementById('portfolioContent').style.display = 'none';
  document.getElementById('contactContent').style.display = 'none';
  document.getElementById('otherContent').style.display = 'block';
});

function sendMail() {
  
}