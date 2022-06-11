export default function(){
    const contentContainer = document.querySelector('.content');
    contentContainer.innerHTML = '';
    const h2 = document.createElement('h2');
    h2.textContent = "About Us";
    contentContainer.appendChild(h2);
    const p = document.createElement('p');
    p.textContent = 'About Us Page. This page is a tool to manage your things to do';
    contentContainer.appendChild(p);
}


