# Microsoft Advanced Search Tool

The Microsoft Advanced Search Tool provides a graphical interface for constructing advanced search queries for Microsoft Bing. It supports Boolean operators, file type filtering, size constraints, date filters, and custom wildcards.

## Overview

- **File**: `sys_bing_search.py`
- **Class**: `AdvancedSearchTool`
- **Window Title**: "Microsoft Advanced Search Tool"
- **Dimensions**: 900x700 pixels
- **Theme**: Dark theme with blue accents

## Running the Tool

```bash
.venv/bin/python sys_bing_search.py
```

Or with activated virtual environment:

```bash
source .venv/bin/activate
python sys_bing_search.py
```

## Interface Components

### 1. Search Query Section

**Location**: Top of the window

- **Label**: "Enter your base query:"
- **Input Field**: Text input for your main search term
- **Placeholder**: "E.g., advanced search example"

This is the foundation of your search. All other operators are combined with this base query.

### 2. Advanced Search Operators Section

**Location**: Middle section, organized in a grid layout

Each operator has a checkbox to enable/disable it and an input field for the value.

#### Boolean AND Operator

- **Checkbox Label**: "Include ALL keywords (AND):"
- **Input Placeholder**: "E.g., budget revenue"
- **Function**: Ensures all specified keywords must appear in results
- **Syntax**: Spaces between keywords are converted to AND operators
- **Example Input**: `budget revenue`
- **Generated Query**: `base_query AND budget AND revenue`

#### Boolean OR Operator

- **Checkbox Label**: "Include ANY keywords (OR):"
- **Input Placeholder**: "E.g., sales OR marketing"
- **Function**: Results must contain at least one of the specified keywords
- **Syntax**: Keywords are joined with OR operators
- **Example Input**: `sales marketing`
- **Generated Query**: `base_query sales OR marketing`

#### Boolean NOT Operator

- **Checkbox Label**: "Exclude keywords (NOT):"
- **Input Placeholder**: "E.g., NOT confidential"
- **Function**: Excludes results containing the specified keywords
- **Syntax**: Prefixed with NOT keyword
- **Example Input**: `confidential`
- **Generated Query**: `base_query NOT confidential`

#### File Type Filter

- **Checkbox Label**: "File Type:"
- **Input Placeholder**: "E.g., pdf, docx"
- **Function**: Filters results to specific file types
- **Syntax**: `type:extension`
- **Supported Formats**: pdf, docx, xlsx, pptx, txt, html, etc.
- **Example Input**: `pdf`
- **Generated Query**: `base_query type:pdf`

#### File Size Filter

- **Checkbox Label**: "File Size (size:):"
- **Input Placeholder**: "E.g., >10MB"
- **Function**: Filters results by file size
- **Syntax**: `size:comparison`
- **Supported Comparisons**: `>`, `<`, `>=`, `<=`, `=`
- **Supported Units**: KB, MB, GB
- **Example Input**: `>10MB`
- **Generated Query**: `base_query size:>10MB`

#### Modified Date Filter

- **Checkbox Label**: "Modified Date:"
- **Input Placeholder**: "E.g., >2022-01-01"
- **Function**: Filters results by modification date
- **Syntax**: `date:comparison`
- **Format**: YYYY-MM-DD
- **Supported Comparisons**: `>`, `<`, `>=`, `<=`, `=`
- **Example Input**: `>2022-01-01`
- **Generated Query**: `base_query date:>2022-01-01`

#### Custom Wildcards

- **Checkbox Label**: "Custom Wildcard(s):"
- **Input Placeholder**: "E.g., report* OR file?"
- **Function**: Uses wildcard patterns for flexible matching
- **Syntax**: Standard wildcard patterns
- **Wildcards**: 
  - `*` matches zero or more characters
  - `?` matches exactly one character
- **Example Input**: `report*`
- **Generated Query**: `base_query report*`

### 3. Query Preview and Execution Section

**Location**: Bottom of the window

#### Query Preview

- **Label**: "Query Preview:"
- **Output**: Read-only text area showing the constructed query
- **Updates**: Updates when "Preview Query" button is clicked

#### Buttons

- **Preview Query**: Generates and displays the search query based on current inputs
- **Search**: Opens the search in your default web browser

## Usage Examples

### Example 1: Basic Search with File Type

1. **Base Query**: `Python programming tutorial`
2. **Enable**: File Type checkbox
3. **File Type Input**: `pdf`
4. **Click**: "Preview Query"
5. **Result**: `Python programming tutorial type:pdf`
6. **Click**: "Search" to execute

### Example 2: Boolean Operators

1. **Base Query**: `machine learning`
2. **Enable**: AND checkbox
3. **AND Input**: `deep learning neural networks`
4. **Enable**: OR checkbox
5. **OR Input**: `AI artificial intelligence`
6. **Click**: "Preview Query"
7. **Result**: `machine learning AND deep AND learning AND neural AND networks AI OR artificial OR intelligence`

### Example 3: Excluding Terms

1. **Base Query**: `Python framework`
2. **Enable**: NOT checkbox
3. **NOT Input**: `Java C++`
4. **Click**: "Preview Query"
5. **Result**: `Python framework NOT Java C++`

### Example 4: Size and Date Filters

1. **Base Query**: `financial report`
2. **Enable**: File Size checkbox
3. **Size Input**: `>5MB`
4. **Enable**: Modified Date checkbox
5. **Date Input**: `>2023-01-01`
6. **Click**: "Preview Query"
7. **Result**: `financial report size:>5MB date:>2023-01-01`

### Example 5: Wildcard Patterns

1. **Base Query**: `document`
2. **Enable**: Custom Wildcard checkbox
3. **Wildcard Input**: `report*`
4. **Click**: "Preview Query"
5. **Result**: `document report*`

## Search Query Construction Logic

The tool constructs queries in the following order:

1. Base query (always included if not empty)
2. AND operator keywords (joined with AND)
3. OR operator keywords (joined with OR)
4. NOT operator keywords (prefixed with NOT)
5. File type filter (type:extension)
6. File size filter (size:comparison)
7. Date filter (date:comparison)
8. Custom wildcards (as entered)

All enabled components are joined with spaces.

## Tips and Best Practices

### Effective Base Queries

- Be specific with your base query
- Use relevant keywords that define your core search intent
- Avoid overly broad terms that return too many results

### Boolean Operator Usage

- Use AND to narrow results (all terms must appear)
- Use OR to broaden results (any term can appear)
- Use NOT to exclude irrelevant results
- Combine operators strategically for precise filtering

### File Type Selection

- Common file types: pdf, docx, xlsx, pptx, txt
- Use file type filters when looking for specific document formats
- Multiple file types can be specified in some search engines (check Bing documentation)

### Size and Date Filters

- Use size filters to find large files (e.g., >10MB for videos, large documents)
- Use date filters for recent content or historical research
- Format dates as YYYY-MM-DD for consistency

### Wildcard Patterns

- Use `*` for variable length matches (e.g., `report*` matches report, reports, reporting)
- Use `?` for single character matches (e.g., `file?` matches file1, file2, fileA)
- Combine wildcards with other operators for complex patterns

## Troubleshooting

### Issue: No Results Returned

**Possible Causes**:
- Query too restrictive (too many AND operators)
- Conflicting filters (e.g., small file size AND recent date)
- Incorrect file type syntax

**Solutions**:
- Remove some AND operators or use OR instead
- Check file type syntax (use single extension without dot)
- Verify date format is YYYY-MM-DD

### Issue: Preview Shows Empty Query

**Cause**: Base query is empty and no operators are enabled.

**Solution**: Enter a base query or enable at least one operator.

### Issue: Search Opens Wrong Engine

**Current Behavior**: The tool opens Google Search by default.

**Note**: This is a known configuration. Modify line 219 in `sys_bing_search.py` to use Bing:

```python
search_url = f"https://www.bing.com/search?q={query.replace(' ', '+')}"
```

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
class AdvancedSearchTool(QMainWindow):
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
4. Opens in default web browser

## Advanced Usage

### Combining Multiple Operators

For complex searches, enable multiple operators:

```
Base: "data science"
AND: "machine learning"
OR: "AI artificial intelligence"
NOT: "marketing sales"
File Type: "pdf"
Size: ">5MB"
Date: ">2023-01-01"
```

This creates a highly targeted search for large, recent PDF documents about data science and machine learning (or AI), excluding marketing content.

### Using Wildcards with File Types

```
Base: "presentation"
Wildcard: "slide*"
File Type: "pptx"
```

Searches for PowerPoint presentations with slide-related terms.

## Related Documentation

- [Installation Guide](INSTALLATION.md)
- [Main README](README.md)
- [Brave Search Tool](BRAVE_SEARCH_TOOL.md)
- [Google Search Tool](GOOGLE_SEARCH_TOOL.md)
- [Yahoo Search Tool](YAHOO_SEARCH_TOOL.md)
