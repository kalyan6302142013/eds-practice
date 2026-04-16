export default function decorate(block) {
  block.innerHTML = `
    <nav class="nav">
      <h2>My EDS Site</h2>
      <ul>
        <li>Home</li>
        <li>Cards</li>
        <li>Contact</li>
      </ul>
    </nav>
  `;
}