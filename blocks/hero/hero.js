export default function decorate(block) {
  const heading = block.querySelector('h1');
  const text = block.querySelector('p');

  block.innerHTML = `
    <div class="hero-container">
      <h1>${heading.textContent}</h1>
      <p>${text.textContent}</p>
    </div>
  `;
}