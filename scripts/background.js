// background.js
chrome.runtime.onInstalled.addListener(() => {
  console.log("Bloco de Anotações instalado.");
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'saveNote') {
    chrome.storage.sync.set({ 'notes': message.notes }, () => {
      console.log('Anotações salvas no background script');
      sendResponse({ status: 'success' });
    });
    return true; // Indica que a resposta será enviada de forma assíncrona
  }
});
