# Google Advanced Search Tool

The Google Advanced Search Tool provides a graphical interface for constructing advanced search queries for Google. It supports site filtering, file type filtering, title search, cache viewing, and custom query operators.

## Overview

- **File**: `sys_google_search.py`
- **Class**: `GoogleAdvancedSearchTool`
- **Window Title**: "Google Advanced Search Tool"
- **Dimensions**: 900x700 pixels
- **Theme**: Dark theme with blue accents

## Running the Tool

```bash
.venv/bin/python sys_google_search.py
```

Or with activated virtual environment:

```bash
source .venv/bin/activate
python sys_google_search.py
```

## Interface Components

### 1. Search Query Section

**Location**: Top of the window

- **Label**: "Enter your base query:"
- **Input Field**: Text input for your main search term
- **Placeholder**: "E.g., Python PyQt5 tutorial"

This is the foundation of your search. All other operators are combined with this base query.

### 2. Advanced Operators Section

**Location**: Middle section, organized in a grid layout

Each operator has a checkbox to enable/disable it and an input field for the value.

#### Site Query

- **Checkbox Label**: "Site:"
- **Input Placeholder**: `example.com`
- **Function**: Restricts search results to a specific website or domain
- **Syntax**: `site:domain`
- **Supported Formats**:
  - Full domain: `example.com`
  - Subdomain: `blog.example.com`
  - Path: `example.com/docs`
  - Country TLD: `example.co.uk`
- **Example Input**: `github.com`
- **Generated Query**: `base_query site:github.com`

**Use Cases**:
- Search within a specific website
- Find content from a particular organization
- Restrict results to trusted domains
- Academic research on university sites

#### Filetype Query

- **Checkbox Label**: "Filetype:"
- **Input Placeholder**: `pdf, docx, txt, etc.`
- **Function**: Filters results to specific file types
- **Syntax**: `filetype:extension`
- **Supported Formats**: pdf, doc, docx, xls, xlsx, ppt, pptx, txt, html, xml, json, csv, rtf, etc.
- **Example Input**: `pdf`
- **Generated Query**: `base_query filetype:pdf`

**Use Cases**:
- Find specific document formats
- Search for PDF reports, text files, or spreadsheets
- Filter out web pages when looking for downloadable content
- Academic paper searches

#### Intitle Query

- **Checkbox Label**: "Intitle:"
- **Input Placeholder**: `Specific keywords in title`
- **Function**: Searches for keywords in page titles only
- **Syntax**: `intitle:keyword`
- **Behavior**: Results must contain the keyword in the HTML title tag
- **Example Input**: `tutorial`
- **Generated Query**: `base_query intitle:tutorial`

**Use Cases**:
- Find pages with specific title keywords
- Search for tutorials, guides, or documentation
- Target pages with specific naming conventions
- Find official documentation

#### Cache Query

- **Checkbox Label**: "Cache:"
- **Input Placeholder**: `URL or domain`
- **Function**: Displays cached versions of web pages
- **Syntax**: `cache:url`
- **Behavior**: Shows Google's cached copy of a page
- **Example Input**: `example.com`
- **Generated Query**: `base_query cache:example.com`

**Use Cases**:
- View pages that are currently down
- Access content when original site is unavailable
- See historical versions of pages
- Bypass temporary site issues

#### Custom Query

- **Checkbox Label**: "Custom Query:"
- **Input Placeholder**: `site:example.com -exclude`
- **Function**: Allows arbitrary search operators or query fragments
- **Syntax**: Any valid Google search operator or query string
- **Flexibility**: Supports any Google operator syntax
- **Example Input**: `inurl:blog -site:spam.com`
- **Generated Query**: `base_query inurl:blog -site:spam.com`

**Use Cases**:
- Use operators not covered by built-in options
- Combine multiple operators in a custom way
- Implement advanced search techniques
- Use Google's full operator set

### 3. Preview and Execute Section

**Location**: Bottom of the window

#### Query Preview

- **Label**: "Query Preview:"
- **Output**: Read-only text area showing the constructed query
- **Updates**: Updates when "Preview Query" button is clicked

#### Buttons

- **Preview Query**: Generates and displays the search query based on current inputs
- **Execute Search**: Opens the search in Google in your default web browser

## Usage Examples

### Example 1: Site-Specific Search

1. **Base Query**: `machine learning`
2. **Enable**: Site checkbox
3. **Site Input**: `medium.com`
4. **Click**: "Preview Query"
5. **Result**: `machine learning site:medium.com`
6. **Click**: "Execute Search"

This searches for machine learning content only on Medium.

### Example 2: File Type Search

1. **Base Query**: `research paper`
2. **Enable**: Filetype checkbox
3. **Filetype Input**: `pdf`
4. **Click**: "Preview Query"
5. **Result**: `research paper filetype:pdf`
6. **Click**: "Execute Search"

This searches for PDF research papers.

### Example 3: Title-Based Search

1. **Base Query**: `Python`
2. **Enable**: Intitle checkbox
3. **Intitle Input**: `tutorial beginner`
4. **Click**: "Preview Query"
5. **Result**: `Python intitle:tutorial beginner`
6. **Click**: "Execute Search"

This finds Python tutorials specifically targeting beginners in the page title.

### Example 4: Cache Search

1. **Base Query**: (leave empty)
2. **Enable**: Cache checkbox
3. **Cache Input**: `example.com`
4. **Click**: "Preview Query"
5. **Result**: `cache:example.com`
6. **Click**: "Execute Search"

This displays Google's cached version of example.com.

### Example 5: Custom Operator Usage

1. **Base Query**: `security`
2. **Enable**: Custom checkbox
3. **Custom Input**: `inurl:blog author:expert`
4. **Click**: "Preview Query"
5. **Result**: `security inurl:blog author:expert`
6. **Click**: "Execute Search"

This uses custom operators to find security content in blog URLs by expert authors.

### Example 6: Combined Operators

1. **Base Query**: `data visualization`
2. **Enable**: Site checkbox
3. **Site Input**: `kaggle.com`
4. **Enable**: Filetype checkbox
5. **Filetype Input**: `ipynb`
6. **Enable**: Intitle checkbox
7. **Intitle Input**: `notebook`
8. **Click**: "Preview Query"
9. **Result**: `data visualization site:kaggle.com filetype:ipynb intitle:notebook`
10. **Click**: "Execute Search"

This searches for Jupyter notebooks about data visualization on Kaggle.

## Search Query Construction Logic

The tool constructs queries in the following order:

1. Base query (always included if not empty)
2. Site filter (site:domain)
3. Filetype filter (filetype:extension)
4. Intitle filter (intitle:keyword)
5. Cache filter (cache:url)
6. Custom query (as entered)

All enabled components are joined with spaces.

## Google Search Operators Reference

### Built-in Operators

#### Site Operator
```
site:example.com
site:subdomain.example.com
site:example.com/path
site:.edu (for educational institutions)
site:.gov (for government sites)
```

#### Filetype Operator
```
filetype:pdf
filetype:doc
filetype:xls
filetype:ppt
filetype:txt
```

#### Intitle Operator
```
intitle:keyword
intitle:"phrase with spaces"
```

#### Cache Operator
```
cache:example.com
cache:example.com/page
```

### Common Custom Operators

#### URL Search
```
inurl:blog
inurl:docs
inurl:admin
```

#### Exact Match
```
"exact phrase"
```

#### OR Operator
```
term1 OR term2
```

#### Exclusion
```
-unwanted
-"unwanted phrase"
```

#### Related Sites
```
related:example.com
```

#### Link Search
```
link:example.com
```

#### Number Range
```
price:$100..$200
year:2020..2024
```

#### Define
```
define:term
```

## Tips and Best Practices

### Effective Site Filtering

- Use specific domains for targeted results
- Combine site filters with other operators for precision
- Use `.edu` for academic content
- Use `.gov` for government information
- Example: `site:.edu filetype:pdf` for academic papers

### Title-Based Searching

- Use intitle for finding specific types of content
- Combine with base query for relevance
- Use multiple intitle operators in custom field
- Example: `intitle:tutorial intitle:beginner`

### File Type Selection

- Choose file types appropriate to your search intent
- PDF for documents and reports
- DOC/DOCX for Word documents
- XLS/XLSX for spreadsheets
- PPT/PPTX for presentations
- Combine with site filters for repository searches

### Cache Usage

- Use cache when original site is down
- Cache shows Google's last indexed version
- Useful for accessing temporarily unavailable content
- Not all pages have cached versions

### Custom Operator Power

- The custom field enables any Google search syntax
- Combine multiple operators in one custom string
- Use for operators not available as built-in options
- Example: `inurl:blog intitle:guide -site:spam.com`

### Academic Research

```
Base: "machine learning"
Site: ".edu"
Filetype: "pdf"
Intitle: "research"
```

This finds academic PDF research papers on machine learning from educational institutions.

## Troubleshooting

### Issue: Site Filter Not Working

**Possible Causes**:
- Invalid domain format
- Site blocks search indexing
- Domain doesn't exist
- Site has no indexed content

**Solutions**:
- Verify domain format (e.g., `example.com` not `http://example.com`)
- Check if the site allows search indexing
- Try the base domain instead of subdomain
- Verify the site has content indexed by Google

### Issue: Filetype Returns No Results

**Possible Causes**:
- File type not supported
- No files of that type exist for the query
- Incorrect extension format

**Solutions**:
- Verify file extension (use `pdf` not `.pdf`)
- Try a more general base query
- Check if the file type exists for your search topic
- Try related file types (e.g., `doc` instead of `docx`)

### Issue: Intitle Not Filtering

**Possible Causes**:
- Keyword too common
- Title doesn't contain exact keyword
- Case sensitivity issues

**Solutions**:
- Try more specific keywords
- Use exact phrase matching with quotes
- Try variations of the keyword
- Check actual page titles manually

### Issue: Cache Not Available

**Possible Causes**:
- Page not indexed by Google
- Cache expired
- Page blocks caching
- Very new page

**Solutions**:
- Verify the URL is correct
- Try the base domain instead of full URL
- Check if the site is indexed by Google
- Use Wayback Machine as alternative

### Issue: Custom Operator Not Recognized

**Cause**: Invalid operator syntax for Google.

**Solution**: Check Google Search documentation for valid operator syntax.

## Keyboard Shortcuts

The tool uses standard PyQt5 keyboard shortcuts:
- **Tab**: Navigate between input fields
- **Space**: Toggle checkboxes
- **Enter**: Not bound to any action (use buttons)
- **Esc**: Close the window

## Technical Details

### Dependencies

- Python 3.8+
- PyQt5
- webbrowser (standard library)

### Class Structure

```python
class GoogleAdvancedSearchTool(QMainWindow):
    def __init__(self)
    def apply_dark_theme(self)
    def add_search_query_section(self)
    def add_operator_configuration_section(self)
    def add_preview_and_execution(self)
    def generate_query(self)
    def execute_search(self)
```

### Query Generation Method

The `generate_query()` method:
1. Retrieves base query
2. Checks each checkbox
3. Appends enabled operators with appropriate syntax
4. Joins all parts with spaces
5. Updates preview text area

### Search Execution Method

The `execute_search()` method:
1. Retrieves query from preview
2. Validates query is not empty
3. URL-encodes the query
4. Opens Google Search in default web browser

### Search URL Construction

```python
search_url = f"https://www.google.com/search?q={query.replace(' ', '+')}"
```

## Advanced Usage

### Multi-Site Search

Use custom operator to search multiple sites:

```
Base: "python tutorial"
Custom: "site:stackoverflow.com OR site:github.com"
```

### Complex Title Matching

```
Base: "security"
Intitle: "guide"
Custom: "intitle:beginner"
```

### File Type Variations

```
Base: "report"
Filetype: "pdf"
Custom: "filetype:doc"
```

Note: This searches for both PDF and DOC files.

### Academic Research

```
Base: "neural networks"
Site: ".edu"
Filetype: "pdf"
Intitle: "paper"
```

### Government Information

```
Base: "regulations"
Site: ".gov"
Filetype: "pdf"
```

### Technical Documentation

```
Base: "API documentation"
Site: "docs.python.org"
Intitle: "reference"
```

### Number Range Search

```
Base: "laptop price"
Custom: "$500..$1000"
```

### Define Terms

```
Base: (leave empty)
Custom: "define:algorithm"
```

## Google Search Features

Google offers extensive search capabilities:
- Largest search index
- Advanced operator support
- Cached page viewing
- Related site discovery
- Real-time indexing
- Image and video search integration

## Privacy Considerations

Google Search tracks queries for personalization. For privacy-focused alternatives, consider using the Brave Search Tool included in this suite.

## Related Documentation

- [Installation Guide](INSTALLATION.md)
- [Main README](README.md)
- [Bing Search Tool](BING_SEARCH_TOOL.md)
- [Brave Search Tool](BRAVE_SEARCH_TOOL.md)
- [Yahoo Search Tool](YAHOO_SEARCH_TOOL.md)

## External Resources

- [Google Search Official Website](https://www.google.com)
- [Google Search Operators Reference](https://support.google.com/websearch/answer/2466433)
- [Advanced Google Search](https://www.google.com/advanced_search)
