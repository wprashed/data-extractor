# Data Extractor Chrome Extension

## Overview

The **Data Extractor** Chrome extension allows users to extract data from web pages and download it as a CSV file. This tool is versatile and can work with various types of data, making it a valuable asset for researchers, data analysts, and anyone needing to collect information quickly from the web.

## Features

- **Flexible Data Extraction**: Users can specify a CSS selector to extract any type of text data from the webpage.
- **Download as CSV**: Extracted data can be easily downloaded in CSV format for further analysis or storage.
- **User-Friendly Interface**: Simple and intuitive popup interface for entering selectors and triggering data extraction.

## Installation

1. **Download the Extension**: Clone or download this repository as a ZIP file.
2. **Unzip the Files**: Extract the ZIP file to a folder on your computer.
3. **Load the Extension**:
   - Open Google Chrome and go to `chrome://extensions/`.
   - Enable **Developer mode** by toggling the switch in the top right corner.
   - Click on **Load unpacked** and select the folder where you extracted the files.
4. The Data Extractor extension should now be visible in your list of extensions.

## Example Usage

1. **Open the Extension**: Click the Data Extractor icon in the Chrome toolbar to open the popup.
2. **Enter a CSS Selector**: In the input field, enter the CSS selector for the data you wish to extract (e.g., `div.inner-col p.wp-block`).
3. **Extract Data**: Click the **Extract Data** button. The extension will extract the specified data from the current webpage.
4. **Download CSV**: Once the extraction is complete, a CSV file containing the extracted data will automatically download to your computer.

## Limitations

- The extension relies on correct CSS selectors for extraction. Invalid or overly specific selectors may yield no results.
- It works best with text-based data and may not handle complex data formats like nested tables or images.

## Contributing

Contributions are welcome! If you have suggestions or improvements, feel free to open an issue or submit a pull request.