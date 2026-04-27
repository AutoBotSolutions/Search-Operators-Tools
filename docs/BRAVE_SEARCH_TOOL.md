# Brave Search Tool

The Advanced Search Operators Tool provides a graphical interface for constructing advanced search queries for Brave Search. It supports site filtering, title search, file type filtering, exclusion operators, and custom operator definitions.

## Overview

- **File**: `sys_brave_search.py`
- **Class**: `SearchOperatorsTool`
- **Window Title**: "Advanced Search Operators Tool"
- **Dimensions**: 800x600 pixels
- **Theme**: Dark theme with blue accents and advanced colorization

## Running the Tool

```bash
.venv/bin/python sys_brave_search.py
```

Or with activated virtual environment:

```bash
source .venv/bin/activate
python sys_brave_search.py
```

## Interface Components

### 1. Search Query Section

**Location**: Top of the window

- **Label**: "Enter your base query:"
- **Input Field**: Text input for your main search term
- **Placeholder**: "E.g., Python PyQt5 tutorial"

This is the foundation of your search. All other operators are combined with this base query.

### 2. Search Operators Section

**Location**: Middle section, organized in a grid layout

Each operator has a checkbox to enable/disable it and an input field for the value.

#### Site Filtering

- **Checkbox Label**: "Site:"
- **Input Placeholder**: `example.com`
- **Function**: Restricts search results to a specific website or domain
- **Syntax**: `site:domain`
- **Supported Formats**:
  - Full domain: `example.com`
  - Subdomain: `blog.example.com`
  - Path: `example.com/docs`
- **Example Input**: `github.com`
- **Generated Query**: `base_query site:github.com`

**Use Cases**:
- Search within a specific website
- Find content from a particular organization
- Restrict results to trusted domains

#### Intitle Filtering

- **Checkbox Label**: "Intitle:"
- **Input Placeholder**: `Specific title`
- **Function**: Searches for keywords in page titles only
- **Syntax**: `intitle:keyword`
- **Behavior**: Results must contain the keyword in the HTML title tag
- **Example Input**: `tutorial`
- **Generated Query**: `base_query intitle:tutorial`

**Use Cases**:
- Find pages with specific title keywords
- Search for tutorials, guides, or documentation
- Target pages with specific naming conventions

#### Filetype Filtering

- **Checkbox Label**: "Filetype:"
- **Input Placeholder**: `pdf, txt, docx, etc.`
- **Function**: Filters results to specific file types
- **Syntax**: `filetype:extension`
- **Supported Formats**: pdf, txt, docx, xlsx, pptx, html, xml, json, etc.
- **Example Input**: `pdf`
- **Generated Query**: `base_query filetype:pdf`

**Use Cases**:
- Find specific document formats
- Search for PDF reports, text files, or spreadsheets
- Filter out web pages when looking for downloadable content

#### Exclusion Operator

- **Checkbox Label**: "Exclude (-):"
- **Input Placeholder**: `Words to exclude`
- **Function**: Excludes results containing specified keywords
- **Syntax**: `-keyword`
- **Behavior**: Results will not contain the excluded terms
- **Example Input**: `advertisement spam`
- **Generated Query**: `base_query -advertisement -spam`

**Use Cases**:
- Remove irrelevant results
- Exclude commercial content
- Filter out spam or low-quality pages

#### Custom Operator

- **Checkbox Label**: "Custom:"
- **Input Placeholder**: `Define your custom operator`
- **Function**: Allows arbitrary search operators or query fragments
- **Syntax**: Any valid search operator or query string
- **Flexibility**: Supports any Brave Search operator syntax
- **Example Input**: `inurl:blog`
- **Generated Query**: `base_query inurl:blog`

**Use Cases**:
- Use operators not covered by built-in options
- Combine multiple operators in a custom way
- Implement advanced search techniques

### 3. Query Preview and Actions Section

**Location**: Bottom of the window

#### Query Preview

- **Label**: "Query Preview:"
- **Output**: Read-only text area showing the constructed query
- **Updates**: Updates when "Preview Query" button is clicked

#### Buttons

- **Preview Query**: Generates and displays the search query based on current inputs
- **Execute Search**: Opens the search in Brave Search in your default web browser

## Usage Examples

### Example 1: Site-Specific Search

1. **Base Query**: `machine learning`
2. **Enable**: Site checkbox
3. **Site Input**: `medium.com`
4. **Click**: "Preview Query"
5. **Result**: `machine learning site:medium.com`
6. **Click**: "Execute Search"

This searches for machine learning content only on Medium.

### Example 2: Title-Based Search

1. **Base Query**: `Python`
2. **Enable**: Intitle checkbox
3. **Intitle Input**: `tutorial beginner`
4. **Click**: "Preview Query"
5. **Result**: `Python intitle:tutorial beginner`
6. **Click**: "Execute Search"

This finds Python tutorials specifically targeting beginners in the page title.

### Example 3: File Type and Exclusion

1. **Base Query**: `research paper`
2. **Enable**: Filetype checkbox
3. **Filetype Input**: `pdf`
4. **Enable**: Exclude checkbox
5. **Exclude Input**: `paywall subscription`
6. **Click**: "Preview Query"
7. **Result**: `research paper filetype:pdf -paywall -subscription`
8. **Click**: "Execute Search"

This searches for PDF research papers while excluding paywalled or subscription-based content.

### Example 4: Custom Operator Usage

1. **Base Query**: `security`
2. **Enable**: Custom checkbox
3. **Custom Input**: `inurl:blog author:expert`
4. **Click**: "Preview Query"
5. **Result**: `security inurl:blog author:expert`
6. **Click**: "Execute Search"

This uses custom operators to find security content in blog URLs by expert authors.

### Example 5: Combined Operators

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
3. Intitle filter (intitle:keyword)
4. Filetype filter (filetype:extension)
5. Exclusion terms (-keyword)
6. Custom operators (as entered)

All enabled components are joined with spaces.

## Brave Search Operators Reference

### Supported Operators

#### Site Operator
```
site:example.com
site:subdomain.example.com
site:example.com/path
```

#### Intitle Operator
```
intitle:keyword
intitle:"phrase with spaces"
```

#### Filetype Operator
```
filetype:pdf
filetype:docx
filetype:txt
```

#### Exclusion Operator
```
-unwanted
-"unwanted phrase"
```

#### URL Search (via Custom)
```
inurl:blog
inurl:docs
```

#### Exact Match (via Custom)
```
"exact phrase"
```

#### OR Operator (via Custom)
```
term1 OR term2
```

## Tips and Best Practices

### Effective Site Filtering

- Use specific domains for targeted results
- Combine site filters with other operators for precision
- Use subdomain filters for more granular control
- Example: `site:docs.python.org` for Python documentation

### Title-Based Searching

- Use intitle for finding specific types of content
- Combine with base query for relevance
- Use multiple intitle operators in custom field if needed
- Example: `intitle:tutorial intitle:beginner`

### File Type Selection

- Choose file types appropriate to your search intent
- PDF for documents and reports
- IPYNB for Jupyter notebooks
- HTML for web pages
- Combine with site filters for repository searches

### Exclusion Strategy

- Exclude terms that commonly appear in irrelevant results
- Use multiple exclusion terms for better filtering
- Exclude commercial terms when looking for educational content
- Example: `-advertisement -sponsored -promoted`

### Custom Operator Power

- The custom field enables any Brave Search syntax
- Combine multiple operators in one custom string
- Use for operators not available as built-in options
- Example: `inurl:blog intitle:guide -site:spam.com`

## Troubleshooting

### Issue: Site Filter Not Working

**Possible Causes**:
- Invalid domain format
- Site blocks search indexing
- Domain doesn't exist

**Solutions**:
- Verify domain format (e.g., `example.com` not `http://example.com`)
- Check if the site allows search indexing
- Try the base domain instead of subdomain

### Issue: Filetype Returns No Results

**Possible Causes**:
- File type not supported
- No files of that type exist for the query
- Incorrect extension format

**Solutions**:
- Verify file extension (use `pdf` not `.pdf`)
- Try a more general base query
- Check if the file type exists for your search topic

### Issue: Exclusion Not Filtering

**Possible Causes**:
- Excluded term appears in different form
- Term too common to exclude effectively
- Syntax error in exclusion

**Solutions**:
- Try variations of the excluded term
- Use multiple related exclusion terms
- Verify syntax (use `-term` not `- term`)

### Issue: Custom Operator Not Recognized

**Cause**: Invalid operator syntax for Brave Search.

**Solution**: Check Brave Search documentation for valid operator syntax.

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
class SearchOperatorsTool(QMainWindow):
    def __init__(self)
    def apply_dark_theme(self)
    def add_search_query_section(self)
    def add_operator_options(self)
    def add_preview_and_actions(self)
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
4. Opens Brave Search in default web browser

### Search URL Construction

```python
base_url = "https://search.brave.com/search?q="
search_url = base_url + query.replace(" ", "+")
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
Custom: "filetype:docx"
```

Note: This searches for both PDF and DOCX files.

### Deep Site Search

```
Base: "documentation"
Site: "example.com"
Custom: "site:example.com/docs"
```

### Exclusion Patterns

```
Base: "software review"
Exclude: "sponsored advertisement"
Custom: "-site:spam.com"
```

## Brave Search Features

Brave Search offers several advantages:
- Privacy-focused search
- No tracking or profiling
- Independent search index
- Support for standard search operators
- Fast and lightweight results

## Related Documentation

- [Installation Guide](INSTALLATION.md)
- [Main README](README.md)
- [Bing Search Tool](BING_SEARCH_TOOL.md)
- [Google Search Tool](GOOGLE_SEARCH_TOOL.md)
- [Yahoo Search Tool](YAHOO_SEARCH_TOOL.md)

## External Resources

- [Brave Search Official Website](https://search.brave.com)
- [Brave Search Documentation](https://search.brave.com/help)
- [Search Operators Reference](https://search.brave.com/help/operators)
