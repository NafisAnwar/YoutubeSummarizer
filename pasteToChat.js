// pasteToChat.js
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const textarea = document.querySelector("textarea[tabindex='0']");
      if (textarea) {
        navigator.clipboard.readText().then((text) => {
          textarea.value = text;
          const submitButton = document.querySelector(".flex.flex-col.w-full.flex-grow.md\\:py-4.md\\:pl-4 button");
  
          if (submitButton && submitButton.disabled) {
            submitButton.disabled = false;
            setTimeout(() => {
              submitButton.click();
            }, 1000);
          } else if (submitButton) {
            submitButton.click();
          }
        });
      }
    }, 1000);
  });
  