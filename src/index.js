import './style.css';

function createHeader(){
  const body = document.querySelector('body');
  const header = document.createElement('header');
  const menuLogo = document.createElement('div');
  const appLogo = document.createElement('div');
  const themeToggler = document.createElement('div');

  header.appendChild(menuLogo);
  header.appendChild(appLogo);
  header.appendChild(themeToggler);
  body.appendChild(header);
}
createHeader();

function CreateMain(){
  const body = document.querySelector('body');
  const mainBodyContainer = document.createElement('main');
  const leftAside = document.createElement('div');
  const mainSection = document.createElement('div');

  mainBodyContainer.appendChild(leftAside);
  mainBodyContainer.appendChild(mainSection);
  body.appendChild(mainBodyContainer);
}
CreateMain();

function createfooter(){
  const body = document.querySelector('body');
  const footer = document.createElement('footer');
  const anchorLink = document.createElement('a');
  const gitHubIcon = document.createElement('i');

  anchorLink.appendChild(gitHubIcon);
  footer.append('Copyright \u00A9 2022 IAmYoungbossy');
  footer.appendChild(anchorLink);
  body.appendChild(footer);

  anchorLink.setAttribute('href', 'https:////github.com/IAmYoungbossy/calculator');
  gitHubIcon.classList.add('fa','fa-github');
  gitHubIcon.style.cssText = 'color:black';
}
createfooter();