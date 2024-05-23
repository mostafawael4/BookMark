var siteName = document.getElementById('siteName');
var siteUrl = document.getElementById('siteUrl');
var Alert = document.getElementById('divAlert');

if (localStorage.getItem('websites')) {
  var websiteArr = JSON.parse(localStorage.getItem('websites'));
} else {
  var websiteArr = [];
}
display(websiteArr);

function getData() {
  var website = {
    name: siteName.value,
    url: siteUrl.value,
  };

  return website;
}
function addWebsite() {
  if (isValidate()) {
    websiteArr.push(getData());
    onDataChange();
    clear();
  } 
  else {
    Alert.classList.add('d-block');
    Alert.classList.remove('d-none');
  }
siteUrl.classList.remove('is-valid');
siteName.classList.remove('is-valid');
   

}

function display(array) {
  var container = '';
  for (var i = 0; i < array.length; ++i) {
    container += `
        <tr>
          <td>${i + 1}</td>
          <td>${array[i].name}</td>
          <td> <a href="${
            array[i].url
          }" target = "_blank"><button class="btn btn-success px-3 py-2"><i class="fa-solid fa-eye pe-2"></i> Visit</button></a></td>
          <td><button onclick="deleteWebsite(${i})" class="btn btn-danger px-3 py-2"><i class="fa-solid fa-trash"></i> Delete</button></td>
        </tr>
        `;
  }

  document.getElementById('table-body').innerHTML = container;
}

function onDataChange() {
  localStorage.setItem('websites', JSON.stringify(websiteArr));
  display(websiteArr);
}

function clear() {
  siteName.value = '';
  siteUrl.value = '';
}

function deleteWebsite(index) {
  websiteArr.splice(index, 1);
  onDataChange();
}

function isValidate() {
  return (
    /^[a-zA-Z0-9_]{3,20}$/.test(siteName.value) &&
    /^http(s)?:\/\/[\w]{5,30}.com$/.test(siteUrl.value)
  );
}

function closeDiv() {
  Alert.classList.add('d-none');
  Alert.classList.remove('d-block');
}

function is_ValidName() {
    if (/^[a-zA-Z0-9_]{3,20}$/.test(siteName.value))
      {
        siteName.classList.add('is-valid');
        siteName.classList.remove('is-invalid');
      }
    else
    {
        siteName.classList.remove('is-valid');
        siteName.classList.add('is-invalid');
    }
}

function is_ValidUrl() {
  if (/^http(s)?:\/\/[\w]{5,30}.com$/.test(siteUrl.value)) {
    siteUrl.classList.add('is-valid');
    siteUrl.classList.remove('is-invalid');
  } else {
    siteUrl.classList.remove('is-valid');
    siteUrl.classList.add('is-invalid');
  }
}

function hide()
{
    Alert.classList.remove('d-block');
    Alert.classList.add('d-none');
}