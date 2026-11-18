// Show a message instead of leaving the page when a valid form is submitted
document.querySelectorAll('form').forEach(function (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted successfully!');
  });
});

// Q29: enable submit only when Terms & Conditions is checked
var terms = document.getElementById('q29terms');
var q29btn = document.getElementById('q29btn');
if (terms) terms.addEventListener('change', function () { q29btn.disabled = !terms.checked; });

// Q33: confirm password must match
var q33 = document.getElementById('q33form');
var q33confirm = document.getElementById('q33confirm');
function checkQ33() {
  if (!q33confirm) return;
  q33confirm.setCustomValidity(
    q33confirm.value !== document.getElementById('q33pass').value ? 'Passwords do not match' : '');
}
if (q33confirm) {
  document.getElementById('q33pass').addEventListener('input', checkQ33);
  q33confirm.addEventListener('input', checkQ33);
}

// Q39: colour picker changes background colour of the box
var q39color = document.getElementById('q39color');
if (q39color) q39color.addEventListener('input', function () {
  document.getElementById('q39box').style.backgroundColor = q39color.value;
});

// Q41: confirm password must match
var q41pass = document.getElementById('q41pass');
var q41confirm = document.getElementById('q41confirm');
function checkQ41() {
  if (!q41confirm) return;
  q41confirm.setCustomValidity(q41confirm.value !== q41pass.value ? 'Passwords do not match' : '');
}
if (q41pass) {
  q41pass.addEventListener('input', checkQ41);
  q41confirm.addEventListener('input', checkQ41);
}

// Q43: multi-step form
document.querySelectorAll('#q43form [data-next]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    var step = btn.closest('.step');
    var fields = step.querySelectorAll('input');
    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].reportValidity()) return;
    }
    step.hidden = true;
    document.getElementById(btn.dataset.next).hidden = false;
  });
});
document.querySelectorAll('#q43form [data-prev]').forEach(function (btn) {
  btn.addEventListener('click', function () {
    btn.closest('.step').hidden = true;
    document.getElementById(btn.dataset.prev).hidden = false;
  });
});

// Q46: disable submit while any required field is empty
var q46 = document.getElementById('q46form');
var q46btn = document.getElementById('q46btn');
function checkQ46() {
  if (!q46) return;
  q46btn.disabled = !q46.checkValidity();
}
if (q46) {
  q46.addEventListener('input', checkQ46);
  checkQ46();
}

// Q48: date must be today or later
var q48 = document.getElementById('q48date');
if (q48) {
  var today = new Date();
  today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  q48.min = today.toISOString().split('T')[0];
}
