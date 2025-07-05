(function(){
  const code = `
    setTimeout(() => {
      const evt = new MouseEvent("mousemove", { bubbles: true });
      document.dispatchEvent(evt);
    }, 1000);

    setTimeout(() => {
      if (!userClicked) {
        const btn1 = document.getElementById("cta-button");
        if (btn1) btn1.click();
      }
    }, 1600);
  `;
  if (typeof isAllowed !== 'undefined' && isAllowed) {
    eval(code);
  }
})();
