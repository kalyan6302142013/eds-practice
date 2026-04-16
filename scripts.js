async function loadBlocks() {
  const blocks = document.querySelectorAll('[data-block-name]');

  for (const block of blocks) {
    const blockName = block.dataset.blockName;

    // Load CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = `blocks/${blockName}/${blockName}.css`;
    document.head.appendChild(link);

    // Import JS module
    const module = await import(`./blocks/${blockName}/${blockName}.js`);
    
    if (module.default) {
      module.default(block);
    }
  }
}

window.onload = loadBlocks;