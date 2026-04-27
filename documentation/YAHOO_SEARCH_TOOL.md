# Yahoo Advanced Search Tool

The Yahoo Advanced Search Tool provides a graphical interface for constructing advanced search queries for Yahoo Search. It supports comprehensive filtering options including all/any word matching, exact phrase search, exclusion, site filtering, file type selection, language preferences, date filters, and safe search.

## Overview

- **File**: `sys_yahoo_search.py`
- **Class**: `YahooAdvancedSearchTool`
- **Window Title**: "Yahoo Advanced Search Tool"
- **Dimensions**: 900x700 pixels
- **Theme**: Dark theme with blue accents

## Running the Tool

```bash
.venv/bin/python sys_yahoo_search.py
```

Or with activated virtual environment:

```bash
source .venv/bin/activate
python sys_yahoo_search.py
```

## Interface Components

### 1. Search Query Section

**Location**: Top of the window

- **Label**: "Enter your base query:"
- **Input Field**: Text input for your main search term
- **Placeholder**: "E.g., advanced search example"

This is the foundation of your search. All other operators are combined with this base query.

### 2. Advanced Filters Section

**Location**: Middle section, organized in a grid layout

Each filter has a checkbox to enable/disable it and an input field or dropdown for the value.

#### All These Words

- **Checkbox Label**: "All these words:"
- **Input Placeholder**: `E.g., Python programming`
- **Function**: Ensures all specified words must appear in results
- **Syntax**: Words are enclosed in quotes
- **Behavior**: All words must be present (implicit AND)
- **Example Input**: `Python programming`
- **Generated Query**: `base_query "Python programming"`

**Use Cases**:
- Require specific terms to appear together
- Ensure comprehensive coverage of topic
- Multi-keyword requirements

#### Any of These Words

- **Checkbox Label**: "Any of these words:"
- **Input Placeholder**: `E.g., tutorial OR guide`
- **Function**: Results must contain at least one of the specified words
- **Syntax**: Words are joined with OR operators
- **Behavior**: Any word can appear (OR logic)
- **Example Input**: `tutorial guide`
- **Generated Query**: `base_query tutorial OR guide`

**Use Cases**:
- Broaden search with alternative terms
- Include synonyms or related concepts
- Find content using different terminology

#### Exact Phrase

- **Checkbox Label**: "Exact phrase:"
- **Input Placeholder**: `E.g., 'advanced search'`
- **Function**: Searches for the exact phrase as specified
- **Syntax**: Phrase is enclosed in quotes
- **Behavior**: Words must appear in exact order
- **Example Input**: `advanced search`
- **Generated Query**: `base_query "advanced search"`

**Use Cases**:
- Find exact quotes or phrases
- Search for specific terminology
- Match idioms or fixed expressions

#### None of These Words

- **Checkbox Label**: "None of these words:"
- **Input Placeholder**: `E.g., error, failure`
- **Function**: Excludes results containing any of the specified words
- **Syntax**: Each word is prefixed with a minus sign
- **Behavior**: Results will not contain excluded terms
- **Example Input**: `error failure`
- **Generated Query**: `base_query -error -failure`

**Use Cases**:
- Remove irrelevant results
- Exclude negative or unwanted content
- Filter out common unrelated terms

#### Site or Domain

- **Checkbox Label**: "Site or domain:"
- **Input Placeholder**: `E.g., example.com`
- **Function**: Restricts search results to a specific website or domain
- **Syntax**: `site:domain`
- **Supported Formats**:
  - Full domain: `example.com`
  - Subdomain: `blog.example.com`
  - Path: `example.com/docs`
- **Example Input**: `wikipedia.org`
- **Generated Query**: `base_query site:wikipedia.org`

**Use Cases**:
- Search within a specific website
- Find content from a particular organization
- Restrict results to trusted domains

#### File Type

- **Checkbox Label**: "File Type:"
- **Input Placeholder**: `E.g., pdf, docx`
- **Function**: Filters results to specific file types
- **Syntax**: `filetype:extension`
- **Supported Formats**: pdf, doc, docx, xls, xlsx, ppt, pptx, txt, html, xml, json, etc.
- **Example Input**: `pdf`
- **Generated Query**: `base_query filetype:pdf`

**Use Cases**:
- Find specific document formats
- Search for PDF reports, text files, or spreadsheets
- Filter out web pages when looking for downloadable content

#### Preferred Language

- **Checkbox Label**: "Preferred Language:"
- **Input Type**: Dropdown menu
- **Options**: Any, English, Spanish, French, German
- **Function**: Filters results by language
- **Syntax**: `lang:language_code`
- **Behavior**: When "Any" is selected, no language filter is applied
- **Example Selection**: English
- **Generated Query**: `base_query lang:english`

**Use Cases**:
- Find content in specific languages
- Filter out non-English results
- Multilingual research

#### Modified In (Date Filter)

- **Checkbox Label**: "Modified in:"
- **Input Type**: Dropdown menu
- **Options**: Any time, Past day, Past week, Past month
- **Function**: Filters results by modification date
- **Syntax**: `date:time_period`
- **Behavior**: When "Any time" is selected, no date filter is applied
- **Example Selection**: Past week
- **Generated Query**: `base_query date:past_week`

**Use Cases**:
- Find recent content
- Filter for current information
- Historical research with date constraints

#### Enable Safe Search

- **Checkbox Label**: "Enable Safe Search"
- **Input Type**: Checkbox only (no input field)
- **Function**: Filters out explicit or adult content
- **Syntax**: `safe:strict`
- **Behavior**: When checked, adds safe search filter
- **Generated Query**: `base_query safe:strict`

**Use Cases**:
- Family-friendly search
- Professional environment filtering
- Educational settings

### 3. Query Preview and Execution Section

**Location**: Bottom of the window

#### Query Preview

- **Label**: "Query Preview:"
- **Output**: Read-only text area showing the constructed query
- **Updates**: Updates when "Generate Query" button is clicked

#### Buttons

- **Generate Query**: Generates and displays the search query based on current inputs
- **Search Yahoo**: Opens the search in Yahoo Search in your default web browser

## Usage Examples

### Example 1: Basic Search with File Type

1. **Base Query**: `Python programming tutorial`
2. **Enable**: File Type checkbox
3. **File Type Input**: `pdf`
4. **Click**: "Generate Query"
5. **Result**: `Python programming tutorial filetype:pdf`
6. **Click**: "Search Yahoo"

### Example 2: All Words vs Any Words

1. **Base Query**: `data analysis`
2. **Enable**: All These Words checkbox
3. **All Words Input**: `python pandas numpy`
4. **Enable**: Any of These Words checkbox
5. **Any Words Input**: `tutorial guide`
6. **Click**: "Generate Query"
7. **Result**: `data analysis "python pandas numpy" tutorial OR guide`
8. **Click**: "Search Yahoo"

### Example 3: Exact Phrase with Exclusion

1. **Base Query**: `machine learning`
2. **Enable**: Exact Phrase checkbox
3. **Exact Phrase Input**: `deep neural networks`
4. **Enable**: None of These Words checkbox
5. **None Words Input**: `advertisement spam`
6. **Click**: "Generate Query"
7. **Result**: `machine learning "deep neural networks" -advertisement -spam`
8. **Click**: "Search Yahoo"

### Example 4: Site-Specific Search

1. **Base Query**: `climate change`
2. **Enable**: Site checkbox
3. **Site Input**: `nasa.gov`
4. **Enable**: File Type checkbox
5. **File Type Input**: `pdf`
6. **Click**: "Generate Query"
7. **Result**: `climate change site:nasa.gov filetype:pdf`
8. **Click**: "Search Yahoo"

### Example 5: Language and Date Filters

1. **Base Query**: `artificial intelligence`
2. **Enable**: Preferred Language checkbox
3. **Language Selection**: English
4. **Enable**: Modified In checkbox
5. **Date Selection**: Past month
6. **Click**: "Generate Query"
7. **Result**: `artificial intelligence lang:english date:past_month`
8. **Click**: "Search Yahoo"

### Example 6: Safe Search Enabled

1. **Base Query**: `educational resources`
2. **Enable**: Safe Search checkbox
3. **Click**: "Generate Query"
4. **Result**: `educational resources safe:strict`
5. **Click**: "Search Yahoo"

### Example 7: Complex Combined Search

1. **Base Query**: `web development`
2. **Enable**: All These Words checkbox
3. **All Words Input**: `html css javascript`
4. **Enable**: Exact Phrase checkbox
5. **Exact Phrase Input**: `responsive design`
6. **Enable**: None of These Words checkbox
7. **None Words Input**: `advertisement paid`
8. **Enable**: Site checkbox
9. **Site Input**: `developer.mozilla.org`
10. **Enable**: File Type checkbox
11. **File Type Input**: `html`
12. **Enable**: Preferred Language checkbox
13. **Language Selection**: English
14. **Click**: "Generate Query"
15. **Result**: `web development "html css javascript" "responsive design" -advertisement -paid site:developer.mozilla.org filetype:html lang:english`
16. **Click**: "Search Yahoo"

## Search Query Construction Logic

The tool constructs queries in the following order:

1. Base query (always included if not empty)
2. All these words (quoted phrase)
3. Any of these words (OR-joined)
4. Exact phrase (quoted)
5. None of these words (prefixed with -)
6. Site filter (site:domain)
7. File type filter (filetype:extension)
8. Language filter (lang:language)
9. Date filter (date:time_period)
10. Safe search (safe:strict)

All enabled components are joined with spaces.

## Yahoo Search Operators Reference

### Supported Operators

#### All Words (Phrase)
```
"word1 word2 word3"
```

#### Any Words (OR)
```
word1 OR word2 OR word3
```

#### Exact Phrase
```
"exact phrase"
```

#### Exclusion
```
-unwanted
-unwanted1 -unwanted2
```

#### Site
```
site:example.com
site:subdomain.example.com
site:example.com/path
```

#### File Type
```
filetype:pdf
filetype:docx
filetype:txt
```

#### Language
```
lang:english
lang:spanish
lang:french
lang:german
```

#### Date
```
date:past_day
date:past_week
date:past_month
```

#### Safe Search
```
safe:strict
```

## Tips and Best Practices

### Effective Base Queries

- Be specific with your base query
- Use relevant keywords that define your core search intent
- Avoid overly broad terms that return too many results
- Consider using 2-4 key terms for optimal results

### All Words vs Any Words

- Use "All these words" when all terms are required
- Use "Any of these words" for alternative terms or synonyms
- Combine both for complex requirements
- Example: All words for core concepts, any words for related terms

### Exact Phrase Usage

- Use exact phrase for quotes, idioms, or fixed expressions
- Ensure phrase is commonly used in content
- Combine with other filters for precision
- Example: `"machine learning"` for the specific term

### Exclusion Strategy

- Exclude terms that commonly appear in irrelevant results
- Use multiple exclusion terms for better filtering
- Exclude commercial terms when looking for educational content
- Example: `-advertisement -sponsored -promoted`

### Site Filtering

- Use specific domains for targeted results
- Combine site filters with other operators for precision
- Use subdomain filters for more granular control
- Example: `site:docs.python.org` for Python documentation

### File Type Selection

- Choose file types appropriate to your search intent
- PDF for documents and reports
- HTML for web pages
- Combine with site filters for repository searches
- Example: `filetype:pdf site:.edu` for academic papers

### Language Filtering

- Use language filter for multilingual research
- Useful when searching in non-English languages
- Can be combined with other filters
- Example: `lang:spanish` for Spanish content

### Date Filtering

- Use date filters for current information
- "Past day" for breaking news
- "Past week" for recent developments
- "Past month" for current trends

### Safe Search

- Enable safe search for family-friendly results
- Useful in educational or professional settings
- Can be combined with any other filters
- Note: May filter some legitimate content

## Troubleshooting

### Issue: No Results Returned

**Possible Causes**:
- Query too restrictive (too many filters)
- Conflicting filters (e.g., exact phrase incompatible with base query)
- Incorrect file type or site syntax
- Language filter excludes relevant content

**Solutions**:
- Remove some filters or make them less restrictive
- Check file type syntax (use single extension without dot)
- Verify site format (e.g., `example.com` not `http://example.com`)
- Try "Any" for language filter

### Issue: Preview Shows Empty Query

**Cause**: Base query is empty and no filters are enabled.

**Solution**: Enter a base query or enable at least one filter.

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
- Verify the site has content indexed by Yahoo

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

### Issue: Language Filter Too Restrictive

**Cause**: Language filter excludes content that might be relevant.

**Solution**: Set language to "Any" to include all languages.

### Issue: Date Filter Excludes Good Results

**Cause**: Date range too narrow for the topic.

**Solution**: Use a broader date range or set to "Any time".

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
class YahooAdvancedSearchTool(QMainWindow):
    def __init__(self)
    def apply_dark_theme(self)
    def add_search_query_section(self)
    def add_advanced_filters_section(self)
    def add_preview_and_execution(self)
    def generate_query(self)
    def execute_search(self)
```

### Query Generation Method

The `generate_query()` method:
1. Retrieves base query
2. Checks each checkbox
3. Processes dropdown selections
4. Appends enabled filters with appropriate syntax
5. Joins all parts with spaces
6. Updates preview text area

### Search Execution Method

The `execute_search()` method:
1. Retrieves query from preview
2. Validates query is not empty
3. URL-encodes the query (replaces spaces with +)
4. Opens Yahoo Search in default web browser

### Search URL Construction

```python
search_url = f"https://search.yahoo.com/search?p={query}"
```

Where `query` is the URL-encoded search string.

## Advanced Usage

### Academic Research

```
Base: "quantum computing"
Site: ".edu"
Filetype: "pdf"
Language: "English"
Date: "Past month"
```

This finds recent academic PDF papers on quantum computing from educational institutions.

### News Search

```
Base: "technology news"
Exact Phrase: "artificial intelligence"
Date: "Past day"
Language: "English"
```

This searches for recent news about AI technology.

### Documentation Search

```
Base: "API reference"
Site: "docs.python.org"
Filetype: "html"
Language: "English"
```

This searches for Python API documentation on the official docs site.

### Safe Educational Search

```
Base: "science experiments"
Safe Search: enabled
Language: "English"
```

This finds family-friendly science experiment content.

### Multilingual Search

```
Base: "recetas cocina"
Language: "Spanish"
Site: "recetas.com"
```

This searches for cooking recipes in Spanish on a recipe site.

### Professional Research

```
Base: "market analysis"
All Words: "revenue growth"
None Words: "advertisement spam"
Filetype: "pdf"
Date: "Past month"
```

This searches for recent PDF market analysis reports, excluding promotional content.

## Yahoo Search Features

Yahoo Search offers several advantages:
- Comprehensive web index
- Advanced filtering options
- Language support
- Safe search functionality
- Date-based filtering
- Integration with Yahoo services

## Language Support

The tool supports filtering for these languages:
- English (default)
- Spanish
- French
- German

Note: Language codes are converted to lowercase for the query syntax.

## Date Filter Options

The date filter provides these time periods:
- Any time (no filter)
- Past day
- Past week
- Past month

These are converted to the format `date:time_period` in the query.

## Related Documentation

- [Installation Guide](INSTALLATION.md)
- [Main README](README.md)
- [Bing Search Tool](BING_SEARCH_TOOL.md)
- [Brave Search Tool](BRAVE_SEARCH_TOOL.md)
- [Google Search Tool](GOOGLE_SEARCH_TOOL.md)

## External Resources

- [Yahoo Search Official Website](https://search.yahoo.com)
- [Yahoo Search Help](https://help.yahoo.com/kb/search)
- [Yahoo Advanced Search](https://search.yahoo.com/web/advanced)
