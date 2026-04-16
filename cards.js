function decorateCards() {
  const blocks = document.querySelectorAll('.cards');

  blocks.forEach((block) => {
    block.classList.add('block');

    const wrapper = document.createElement('div');
    wrapper.className = 'cards-wrapper';

    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(block);
  });
}

decorateCards();