chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
      id: "pesquisarNoGoogle",
      title: "Pesquise no Google",
      contexts: ["selection"]
    });
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "pesquisarNoGoogle") {
      const query = encodeURIComponent(info.selectionText);
      const url = `https://www.google.com/search?q=${query}`;
      chrome.tabs.create({ url: url });
    }
  });
  