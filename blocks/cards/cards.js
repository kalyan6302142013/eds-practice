export default function decorate(block) {
  const items = block.querySelectorAll('li');

  items.forEach(item => {
    item.classList.add('card-item');

    const img = item.querySelector('img');
    const title = item.querySelector('h3');
    const desc = item.querySelector('p');

    item.innerHTML = `
      <div class="card">
        ${img.outerHTML}
        <h3>${title.textContent}</h3>
        <p>${desc.textContent}</p>
      </div>
    `;
  });
}