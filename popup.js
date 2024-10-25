document.getElementById("extract").addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const activeTab = tabs[0];
        if (activeTab.id) {
            const selector = document.getElementById("selector").value; // Get the selector value
            chrome.scripting.executeScript(
                {
                    target: { tabId: activeTab.id },
                    func: extractAllTextData,
                    args: [selector] // Pass the selector to the function
                },
                (results) => {
                    if (results && results[0] && results[0].result) {
                        console.log("Extracted Data:", results[0].result);
                        downloadCSV(results[0].result);
                    } else {
                        alert("Failed to extract data.");
                    }
                }
            );
        }
    });
});

function downloadCSV(data) {
    const csvContent = "data:text/csv;charset=utf-8,"
        + data.map(row => row.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "extracted_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function extractAllTextData(selector) {
    const data = [];
    
    // Using the user-defined selector to select elements
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((el) => {
        const text = el.innerText.trim();
        if (text) {
            data.push([text]);
        }
    });
    
    return data;
}
