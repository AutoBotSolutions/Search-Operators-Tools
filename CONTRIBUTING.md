# Contributing to Search Operator Tools

Thank you for your interest in contributing to the Search Operator Tools suite! This document provides guidelines and instructions for contributing to the project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Pull Request Process](#pull-request-process)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Documentation](#documentation)
- [Reporting Issues](#reporting-issues)

## Code of Conduct

- Be respectful and inclusive
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

### Prerequisites

- Python 3.8 or higher
- Git
- Basic knowledge of PyQt5
- Understanding of search operators

### Setting Up Development Environment

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/your-username/search_operator.git
   cd search_operator
   ```

3. Create a virtual environment:
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

4. Install dependencies:
   ```bash
   pip install PyQt5
   ```

5. Install development tools (optional):
   ```bash
   pip install black pylint pytest
   ```

## Development Workflow

### Branching Strategy

- `main` - Stable production code
- `develop` - Integration branch for features
- `feature/*` - New features
- `bugfix/*` - Bug fixes
- `docs/*` - Documentation updates

### Creating a Feature Branch

1. Ensure your main branch is up to date:
   ```bash
   git checkout main
   git pull upstream main
   ```

2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes

4. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

5. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

## Pull Request Process

1. Update documentation if needed
2. Ensure all tests pass
3. Update the README if you add new features
4. Ensure your code follows the coding standards
5. Submit a pull request to the `main` branch
6. Wait for code review
7. Address review feedback

### Pull Request Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
Describe testing performed

## Checklist
- [ ] Code follows project style
- [ ] Self-reviewed the code
- [ ] Commented complex code
- [ ] Updated documentation
- [ ] No new warnings
- [ ] Added tests (if applicable)
```

## Coding Standards

### Python Style

- Follow PEP 8 guidelines
- Use meaningful variable and function names
- Add docstrings to functions and classes
- Keep lines under 100 characters
- Use 4 spaces for indentation (no tabs)

### Code Formatting

Use Black for automatic code formatting:

```bash
black *.py
```

### Linting

Use Pylint for code quality checks:

```bash
pylint *.py
```

### Example Code Style

```python
class ExampleClass(QMainWindow):
    """Example class with proper documentation."""
    
    def __init__(self):
        """Initialize the example class."""
        super().__init__()
        self.setup_ui()
    
    def setup_ui(self):
        """Set up the user interface."""
        # Implementation here
        pass
```

## Testing

### Running Tests

```bash
pytest
```

### Writing Tests

- Write unit tests for new functions
- Test edge cases
- Ensure tests are independent
- Use descriptive test names

### Test Structure

```python
def test_function_name():
    """Test description."""
    # Arrange
    input_data = "test"
    
    # Act
    result = function_to_test(input_data)
    
    # Assert
    assert result == expected_value
```

## Documentation

### Updating Documentation

- Update relevant documentation files in `docs/`
- Keep documentation in sync with code changes
- Use clear and concise language
- Include examples where helpful

### Documentation Files

- `README.md` - Main project documentation
- `docs/INSTALLATION.md` - Installation guide
- `docs/SYSTEM_START_GUIDE.md` - System startup guide
- `docs/BING_SEARCH_TOOL.md` - Bing tool documentation
- `docs/BRAVE_SEARCH_TOOL.md` - Brave tool documentation
- `docs/GOOGLE_SEARCH_TOOL.md` - Google tool documentation
- `docs/YAHOO_SEARCH_TOOL.md` - Yahoo tool documentation

### Adding New Tools

If adding a new search tool:

1. Create the Python file following existing patterns
2. Add corresponding documentation in `docs/`
3. Update main `README.md`
4. Update `docs/README.md` with new tool
5. Add usage examples
6. Update system start guide if needed

## Reporting Issues

### Bug Reports

When reporting bugs, include:

- Python version
- Operating system
- PyQt5 version
- Steps to reproduce
- Expected behavior
- Actual behavior
- Error messages/tracebacks

### Feature Requests

When requesting features, include:

- Use case description
- Proposed implementation
- Alternative approaches considered
- Potential impact on existing features

### Issue Template

```markdown
## Description
Clear description of the issue or feature request

## Environment
- OS: [e.g., Ubuntu 22.04]
- Python: [e.g., 3.11]
- PyQt5: [e.g., 5.15.11]

## Steps to Reproduce (if bug)
1. Step one
2. Step two
3. Step three

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots (if applicable)
Add screenshots to help explain

## Additional Context
Any other relevant information
```

## Areas for Contribution

### High Priority

- Bug fixes
- Performance improvements
- Security enhancements

### Medium Priority

- New search operators
- Additional search engines
- UI/UX improvements
- Documentation improvements

### Low Priority

- Code refactoring
- Test coverage improvements
- Additional themes

## Questions or Need Help?

- Open an issue for questions
- Check existing issues first
- Be specific in your questions
- Provide context and code examples

## Recognition

Contributors will be acknowledged in:
- CONTRIBUTORS.md file
- Release notes
- Project documentation

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

## Contact

For questions not covered here, please open an issue on GitHub.

---

Thank you for contributing to Search Operator Tools!
