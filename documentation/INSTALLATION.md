# Installation Guide

This guide covers the installation and setup process for the Search Operator Tools suite.

## Prerequisites

### System Requirements

- **Operating System**: Linux/Unix-based system with GUI support
- **Python**: Python 3.8 or higher
- **Internet Connection**: Required for search functionality
- **Display Server**: X11 or Wayland for GUI display

### Verify Python Installation

Check your Python version:

```bash
python3 --version
```

If Python 3 is not installed, install it using your system package manager:

```bash
# Debian/Ubuntu
sudo apt update
sudo apt install python3 python3-venv python3-pip

# Fedora/RHEL
sudo dnf install python3 python3-venv python3-pip

# Arch Linux
sudo pacman -S python python-pip
```

## Installation Steps

### Step 1: Navigate to the Project Directory

```bash
cd /home/robbie/Desktop/search_operator
```

### Step 2: Create Virtual Environment

A virtual environment isolates the project dependencies from your system Python:

```bash
python3 -m venv .venv
```

**Note**: If the `.venv` directory already exists and is corrupted, remove it first:

```bash
rm -rf .venv
python3 -m venv .venv
```

### Step 3: Activate Virtual Environment (Optional)

You can activate the virtual environment to use `python` directly:

```bash
source .venv/bin/activate
```

Your terminal prompt should change to indicate the virtual environment is active.

### Step 4: Install Dependencies

Install PyQt5, the GUI framework used by all search tools:

```bash
# If virtual environment is activated
pip install PyQt5

# If not activated, use the virtual environment pip directly
.venv/bin/pip install PyQt5
```

The installation will download and install:
- PyQt5 (5.15.11)
- PyQt5-Qt5 (5.15.18)
- PyQt5-sip (12.18.0)

### Step 5: Verify Installation

Test that PyQt5 is installed correctly:

```bash
.venv/bin/python -c "import PyQt5; print('PyQt5 installed successfully')"
```

You should see: `PyQt5 installed successfully`

## Running the Tools

### Method 1: Using Virtual Environment Python (Recommended)

Run any tool using the virtual environment Python interpreter:

```bash
.venv/bin/python sys_bing_search.py
.venv/bin/python sys_brave_search.py
.venv/bin/python sys_google_search.py
.venv/bin/python sys_yahoo_search.py
```

### Method 2: With Activated Virtual Environment

```bash
source .venv/bin/activate
python sys_bing_search.py
python sys_brave_search.py
python sys_google_search.py
python sys_yahoo_search.py
```

### Method 3: Running All Tools Simultaneously

You can run all tools in the background:

```bash
.venv/bin/python sys_bing_search.py &
.venv/bin/python sys_brave_search.py &
.venv/bin/python sys_google_search.py &
.venv/bin/python sys_yahoo_search.py &
```

## Troubleshooting

### Issue: "ModuleNotFoundError: No module named 'PyQt5'"

**Cause**: PyQt5 is not installed or you're using the system Python instead of the virtual environment.

**Solution**: 
1. Ensure you're using the virtual environment Python: `.venv/bin/python`
2. Install PyQt5 in the virtual environment: `.venv/bin/pip install PyQt5`

### Issue: "Error: [Errno 2] No such file or directory: '.venv/bin/python3'"

**Cause**: The virtual environment is corrupted or incomplete.

**Solution**: Recreate the virtual environment:
```bash
rm -rf .venv
python3 -m venv .venv
.venv/bin/pip install PyQt5
```

### Issue: "externally-managed-environment" Error

**Cause**: Trying to install packages system-wide on Debian/Ubuntu.

**Solution**: Always use the virtual environment for installation. Do not use system pip.

### Issue: GUI Window Doesn't Appear

**Cause**: Display server issues or missing GUI libraries.

**Solution**:
1. Ensure you're running in a graphical session (not SSH without X forwarding)
2. Check that DISPLAY environment variable is set: `echo $DISPLAY`
3. If using SSH, enable X forwarding: `ssh -X user@host`

### Issue: "Command 'python' not found"

**Cause**: Python 3 is installed but the `python` command alias is not set up.

**Solution**: Use `python3` instead of `python`, or create an alias:
```bash
alias python=python3
```

## Updating Dependencies

To update PyQt5 to the latest version:

```bash
.venv/bin/pip install --upgrade PyQt5
```

## Uninstallation

To remove the tools and dependencies:

```bash
# Deactivate virtual environment if active
deactivate

# Remove the virtual environment
rm -rf .venv

# Optionally remove the project directory
cd ..
rm -rf search_operator
```

## Development Setup

If you plan to modify the tools, consider installing additional development tools:

```bash
.venv/bin/pip install black pylint pytest
```

## Next Steps

After installation, refer to the individual tool documentation:
- [Microsoft Bing Search Tool](BING_SEARCH_TOOL.md)
- [Brave Search Tool](BRAVE_SEARCH_TOOL.md)
- [Google Search Tool](GOOGLE_SEARCH_TOOL.md)
- [Yahoo Search Tool](YAHOO_SEARCH_TOOL.md)
