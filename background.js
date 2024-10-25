chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.sendMessage(tab.id, { action: "extractData" }, (data) => {
      if (data) {
        const csvContent = "data:text/csv;charset=utf-8,"
          + data.map((e) => e.join(",")).join("\n");
        chrome.downloads.download({
          url: encodeURI(csvContent),
          filename: "extracted_data.csv"
        });
      }
    });
});  