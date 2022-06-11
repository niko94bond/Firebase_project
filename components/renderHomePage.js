
export default function(){
    const contentContainer = document.querySelector('.content');
    contentContainer.innerHTML = '';
    const h2 = document.createElement('h2');
    h2.textContent = "Welcome";
    contentContainer.appendChild(h2);
    const p = document.createElement('p');
    p.textContent = 'This is a simple page written in vanilla JS, used as a practise project at SDA. Block subject:Firebase';
    contentContainer.appendChild(p);
}


