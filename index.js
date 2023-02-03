const menu = document.getElementById('menu-mobile');
const menubtn = document.getElementById('menu-bar');
const closebar = document.getElementsByClassName('close')[0];

menubtn.onclick = function display() {
  menu.style.display = 'block';
};

closebar.onclick = function close() {
  menu.style.display = 'none';
};

window.onclick = function exit(event) {
  if (event.target === menu) {
    menu.style.display = 'none';
  }
};

menu.onclick = function close() {
  menu.style.display = 'none';
};

const workcards = document.querySelector('.work-card-container');
const WorkDatas = [
  {
    id: 0,
    url: './Images/project2.png',
    title: 'Multi-Post Stories Gain+Glory',
    description: 'You will have to create a react js single web application with a front that seems like a blog website and should be also mobile-friendly and add some features like a mobile menu and the main thing here is the ability to navigate through pages ',
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linklive: 'https://brhanuhailu.github.io/',
    linksource: 'https://github.com/brhanuhailu/portifolio',
  },
  {
    id: 1,
    url: './Images/project2.png',
    title: 'Building Tic Tac Toe in React',
    description: 'In this project, you will build a Tic Tac Toe game with three rows and columns as usually with two players start making X and O and the first who complete a line vertically or horizontally wins and they need to prevent each other and try yo check',
    tecnologies: {
      tech1: 'Codekit',
      tech2: 'Github',
      tech3: 'JavaScript',
      tech4: 'Terminal',
      tech5: 'Bootstrap',
    },
    linklive: 'https://brhanuhailu.github.io/',
    linksource: 'https://github.com/brhanuhailu/portifolio',
  },
  {
    id: 2,
    url: './Images/project2.png',
    title: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linklive: 'https://brhanuhailu.github.io/',
    linksource: 'https://github.com/brhanuhailu/portifolio',
  },
  {
    id: 3,
    url: './Images/project4.png',
    title: 'Build a CryptoCurrency Tracker App',
    description: 'The idea is great and you can actually put this app into App Store or Google PlayStore as React Native allows you to create cross-platform apps. You can use React.js, React Native, and Firebase to build the course, where Firebase can be used ',
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linklive: 'https://brhanuhailu.github.io/',
    linksource: 'https://github.com/brhanuhailu/portifolio',
  },
  {
    id: 4,
    url: './Images/project1.png',
    title: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linklive: 'https://brhanuhailu.github.io/',
    linksource: 'https://github.com/brhanuhailu/portifolio',
  },
  {
    id: 5,
    url: './Images/project2.png',
    title: 'Keeping track of hundreds of components',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. ths helps you to avoid plagiarisum and support to respect the intellectual property right',
    tecnologies: {
      tech1: 'Ruby on rails',
      tech2: 'css',
      tech3: 'JavaScript',
      tech4: 'html',
    },
    linklive: 'https://brhanuhailu.github.io/',
    linksource: 'https://github.com/brhanuhailu/portifolio',
  },
];
workcards.innerHTML = `
<div class="work-card">
                <div class="img-card">
                    <img src="./Images/Axum1.png" alt="axum oblesik Images for container">
                </div>
                <div class="work-detail">
                    <div class="card-title">
                        <p>${WorkDatas[0].title}</p>
                    </div>
                    <ul class="card-langauages">
                    <li>${WorkDatas[5].tecnologies.tech1}</li>
                    <li>${WorkDatas[5].tecnologies.tech2}</li>
                    <li>${WorkDatas[5].tecnologies.tech3}</li>
                    <li>${WorkDatas[5].tecnologies.tech4}</li>
                    </ul>
                    <div class="card-btn">
                        <button class="see-project" type="button">See Project</button>
                    </div>
                </div>
            </div>

            <div class="work-card">
                <div class="img-card">
                    <img src="./Images/Axum1.png" alt="axum oblesik Images for container">
                </div>
                <div class="work-detail">
                    <div class="card-title">
                        <p>${WorkDatas[0].title}</p>
                    </div>
                    <ul class="card-langauages">
                    <li>${WorkDatas[4].tecnologies.tech1}</li>
                    <li>${WorkDatas[4].tecnologies.tech2}</li>
                    <li>${WorkDatas[4].tecnologies.tech3}</li>
                    <li>${WorkDatas[4].tecnologies.tech4}</li>
                    </ul>
                    <div class="card-btn">
                        <button class="see-project" type="button">See Project</button>
                    </div>
                </div>
            </div>
            <div class="work-card">
                <div class="img-card">
                    <img src="./Images/Axum1.png" alt="axum oblesik Images for container">
                </div>
                <div class="work-detail">
                    <div class="card-title">
                        <p>${WorkDatas[0].title}</p>
                    </div>
                    <ul class="card-langauages">
                    <li>${WorkDatas[4].tecnologies.tech1}</li>
                    <li>${WorkDatas[4].tecnologies.tech2}</li>
                    <li>${WorkDatas[4].tecnologies.tech3}</li>
                    <li>${WorkDatas[4].tecnologies.tech4}</li>
                    </ul>
                    <div class="card-btn">
                        <button class="see-project" type="button">See Project</button>
                    </div>
                </div>
            </div>
            <div class="work-card">
                <div class="img-card">
                    <img src="./Images/Axum1.png" alt="axum oblesik Images for container">
                </div>
                <div class="work-detail">
                    <div class="card-title">
                        <p>${WorkDatas[0].title}</p>
                    </div>
                    <ul class="card-langauages">
                    <li>${WorkDatas[3].tecnologies.tech1}</li>
                    <li>${WorkDatas[3].tecnologies.tech2}</li>
                    <li>${WorkDatas[3].tecnologies.tech3}</li>
                    <li>${WorkDatas[3].tecnologies.tech4}</li>
                    </ul>
                    <div class="card-btn">
                        <button class="see-project" type="button">See Project</button>
                    </div>
                </div>
            </div>
            <div class="work-card">
                <div class="img-card">
                    <img src="./Images/Axum1.png" alt="axum oblesik Images for container">
                </div>
                <div class="work-detail">
                    <div class="card-title">
                        <p>${WorkDatas[0].title}</p>
                    </div>
                    <ul class="card-langauages">
                    <li>${WorkDatas[2].tecnologies.tech1}</li>
                    <li>${WorkDatas[2].tecnologies.tech2}</li>
                    <li>${WorkDatas[2].tecnologies.tech3}</li>
                    <li>${WorkDatas[2].tecnologies.tech4}</li>
                    </ul>
                    <div class="card-btn">
                        <button class="see-project" type="button">See Project</button>
                    </div>
                </div>
            </div>
            <div class="work-card">
                <div class="img-card">
                    <img src="./Images/Axum1.png" alt="axum oblesik Images for container">
                </div>
                <div class="work-detail">
                    <div class="card-title">
                        <p>${WorkDatas[0].title}</p>
                    </div>
                    <ul class="card-langauages">
                        <li>${WorkDatas[0].tecnologies.tech1}</li>
                        <li>${WorkDatas[0].tecnologies.tech2}</li>
                        <li>${WorkDatas[0].tecnologies.tech3}</li>
                        <li>${WorkDatas[0].tecnologies.tech4}</li>
                    </ul>
                    <div class="card-btn">
                        <button class="see-project" type="button">See Project</button>
                    </div>
                </div>
            </div>
`;
// Made an array to store objects for the Work-card info.

const workdetailsSection = (content) => `
    <span class="close-details">&times;</span>
    <img class="imag-details" src=${WorkDatas[content].url} alt="Image details">
    <h2 class="project-name">${WorkDatas[content].title}</h2>
    <ul class="detail-tags">
        <li><a href="">${WorkDatas[content].tecnologies.tech1}</a></li>
        <li><a href="">${WorkDatas[content].tecnologies.tech2}</a></li>
        <li><a href="">${WorkDatas[content].tecnologies.tech3}</a></li>
        <li><a href="">${WorkDatas[content].tecnologies.tech4}</a></li>
    </ul>
    <p class="project-desc">${WorkDatas[content].description}</p>
    <div class="btn-detail">
        <a href="${WorkDatas[content].linklive}">See Live <i class="fa fa-external-link"></i></a>
        <a href="${WorkDatas[content].linksource}"> See Source <i class="fa fa-github"></i></a>
    </div>
 `;
const buttons = document.querySelectorAll('.see-project');
const workid = document.querySelector('#work-id');
for (let i = 0; i < buttons.length; i += 1) {
  buttons[i].addEventListener('click', () => {
    const pop = document.createElement('div');
    pop.className = 'popup-card';
    pop.innerHTML = workdetailsSection(i);
    workid.appendChild(pop);
    const closeproject = document.querySelector('.close-details');
    closeproject.addEventListener('click', async () => {
      workid.removeChild(pop);
    });
  });
}

// Form Validation
const formContact = document.querySelector('.footer-form');
const emailval = document.querySelector('#iemail');
const errormessage = document.querySelector('.errormessage');
const fname = document.querySelector('#fname');
const messages = document.querySelector('#isuggest');
formContact.addEventListener('submit', (event) => {
  const character = /[A-Z]/;
  const emailvalidate = emailval.value;
  if (character.test(emailvalidate)) {
    errormessage.innerHTML = 'Your email shouln\'t contain block letters!';
    event.preventDefault();
  }
});
// preserve contact form
formContact.addEventListener('input', () => {
  const storeData = {
    Name: fname.value,
    Email: emailval.value,
    Message: messages.value,
  };
  localStorage.setItem('refillForm', JSON.stringify(storeData));
});

const getData = JSON.parse(localStorage.getItem('refillForm'));
fname.value = getData.Name;
emailval.value = getData.Email;
messages.value = getData.Message;
/*---------------------------------- End of Preserve data ----------------------*/
