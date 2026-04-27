# Search Operator Tools - Documentation

Welcome to the Search Operator Tools documentation. This collection provides advanced search interfaces for multiple search engines, allowing you to construct complex search queries using a graphical user interface.

## Overview

The Search Operator Tools suite consists of four PyQt5-based GUI applications:

- **Microsoft Advanced Search Tool** (`sys_bing_search.py`) - Advanced search operators for Microsoft Bing
- **Advanced Search Operators Tool** (`sys_brave_search.py`) - Search operators for Brave Search
- **Google Advanced Search Tool** (`sys_google_search.py`) - Advanced search operators for Google
- **Yahoo Advanced Search Tool** (`sys_yahoo_search.py`) - Advanced search operators for Yahoo Search

Each tool provides a dark-themed interface with:
- Base query input
- Advanced search operator configuration
- Real-time query preview
- One-click search execution in your default browser

## Quick Start

1. Ensure you have Python 3 installed
2. Set up the virtual environment (see [Installation Guide](INSTALLATION.md))
3. Run any tool using the virtual environment Python:
   ```bash
   .venv/bin/python sys_bing_search.py
   .venv/bin/python sys_brave_search.py
   .venv/bin/python sys_google_search.py
   .venv/bin/python sys_yahoo_search.py
   ```

## Documentation Structure

- [Installation Guide](INSTALLATION.md) - Setup and installation instructions
- [Microsoft Bing Search Tool](BING_SEARCH_TOOL.md) - Detailed guide for the Bing search tool
- [Brave Search Tool](BRAVE_SEARCH_TOOL.md) - Detailed guide for the Brave search tool
- [Google Search Tool](GOOGLE_SEARCH_TOOL.md) - Detailed guide for the Google search tool
- [Yahoo Search Tool](YAHOO_SEARCH_TOOL.md) - Detailed guide for the Yahoo search tool

## Features

### Common Features Across All Tools

- **Dark Theme Interface**: Modern, easy-on-the-eyes dark theme
- **Operator Configuration**: Checkboxes enable/disable specific search operators
- **Query Preview**: Real-time preview of the constructed search query
- **Browser Integration**: Opens search results in your default web browser
- **Intuitive Layout**: Organized sections for query input, operators, and execution

### Tool-Specific Features

Each tool implements search operators specific to its target search engine:

- **Bing**: Boolean operators (AND, OR, NOT), file type, size, date filters, wildcards
- **Brave**: Site filtering, intitle, filetype, exclusion, custom operators
- **Google**: Site, filetype, intitle, cache, custom query operators
- **Yahoo**: All/any words, exact phrase, exclusion, site, filetype, language, date, safe search

## System Requirements

- Python 3.8 or higher
- PyQt5 library
- Linux/Unix-based operating system (GUI support required)
- Active internet connection for search execution

## License

These tools are provided as-is for educational and research purposes.

## Support

For issues or questions, refer to the individual tool documentation or check the installation guide.
