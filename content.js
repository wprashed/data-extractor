chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "extractData") {
      const data = [];
      document.querySelectorAll("table tr").forEach((row) => {
        const rowData = Array.from(row.querySelectorAll("td")).map((cell) => cell.innerText.trim());
        if (rowData.length) data.push(rowData);
      });
      sendResponse(data);
    }
});  