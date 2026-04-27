# System Start Guide

This guide explains how to start and run the Search Operator Tools suite.

## Quick Start

### Start All Tools

To start all four search operator tools simultaneously:

```bash
cd /home/robbie/Desktop/search_operator
.venv/bin/python sys_bing_search.py &
.venv/bin/python sys_brave_search.py &
.venv/bin/python sys_google_search.py &
.venv/bin/python sys_yahoo_search.py &
```

### Start Individual Tools

Each tool can be started independently:

```bash
# Microsoft Bing Search Tool
.venv/bin/python sys_bing_search.py

# Brave Search Tool
.venv/bin/python sys_brave_search.py

# Google Search Tool
.venv/bin/python sys_google_search.py

# Yahoo Search Tool
.venv/bin/python sys_yahoo_search.py
```

## Prerequisites Check

Before starting, ensure:

1. **Virtual environment exists and is set up**
   ```bash
   ls .venv
   ```

2. **PyQt5 is installed**
   ```bash
   .venv/bin/python -c "import PyQt5; print('PyQt5 installed')"
   ```

3. **Display server is running** (for GUI)
   ```bash
   echo $DISPLAY
   ```

If any check fails, refer to the [Installation Guide](INSTALLATION.md).

## Starting Methods

### Method 1: Using Virtual Environment Python (Recommended)

Direct execution using the virtual environment Python interpreter:

```bash
.venv/bin/python <tool_name>.py
```

**Advantages**:
- Explicit about which Python environment is used
- No need to activate virtual environment
- Works in any terminal

### Method 2: With Activated Virtual Environment

Activate the virtual environment first, then run tools:

```bash
source .venv/bin/activate
python sys_bing_search.py
python sys_brave_search.py
python sys_google_search.py
python sys_yahoo_search.py
deactivate  # When done
```

**Advantages**:
- Shorter commands
- Can run multiple tools without specifying path
- Standard Python development workflow

### Method 3: Background Execution

Run tools in the background to keep terminal free:

```bash
.venv/bin/python sys_bing_search.py &
.venv/bin/python sys_brave_search.py &
.venv/bin/python sys_google_search.py &
.venv/bin/python sys_yahoo_search.py &
```

**Advantages**:
- Terminal remains available for other commands
- All tools start simultaneously
- Can close terminal without closing tools (using nohup)

To close tools running in background:
```bash
# Find process IDs
ps aux | grep python

# Kill specific process
kill <PID>

# Or kill all Python processes (use with caution)
pkill python
```

### Method 4: Using nohup (Persistent)

Run tools that persist after terminal closure:

```bash
nohup .venv/bin/python sys_bing_search.py > bing.log 2>&1 &
nohup .venv/bin/python sys_brave_search.py > brave.log 2>&1 &
nohup .venv/bin/python sys_google_search.py > google.log 2>&1 &
nohup .venv/bin/python sys_yahoo_search.py > yahoo.log 2>&1 &
```

**Advantages**:
- Tools continue running after terminal closes
- Output logged to files for debugging
- Suitable for server or long-running sessions

## Tool-Specific Startup

### Microsoft Bing Search Tool

```bash
.venv/bin/python sys_bing_search.py
```

**Features**:
- Boolean operators (AND, OR, NOT)
- File type filtering
- Size constraints
- Date filters
- Custom wildcards

**Window Position**: 200, 200 (x, y)
**Window Size**: 900x700 pixels

### Brave Search Tool

```bash
.venv/bin/python sys_brave_search.py
```

**Features**:
- Site filtering
- Intitle search
- File type filtering
- Exclusion operators
- Custom operators

**Window Position**: 200, 200 (x, y)
**Window Size**: 800x600 pixels

### Google Search Tool

```bash
.venv/bin/python sys_google_search.py
```

**Features**:
- Site filtering
- File type filtering
- Title search
- Cache viewing
- Custom query operators

**Window Position**: 200, 200 (x, y)
**Window Size**: 900x700 pixels

### Yahoo Search Tool

```bash
.venv/bin/python sys_yahoo_search.py
```

**Features**:
- All/any word matching
- Exact phrase search
- Exclusion
- Site filtering
- File type selection
- Language preferences
- Date filters
- Safe search

**Window Position**: 200, 200 (x, y)
**Window Size**: 900x700 pixels

## Startup Scripts

### Create a Start Script

Create a script to start all tools easily:

```bash
nano start_all.sh
```

Add the following content:

```bash
#!/bin/bash
cd /home/robbie/Desktop/search_operator

echo "Starting Search Operator Tools..."

.venv/bin/python sys_bing_search.py &
.venv/bin/python sys_brave_search.py &
.venv/bin/python sys_google_search.py &
.venv/bin/python sys_yahoo_search.py &

echo "All tools started in background."
echo "Use 'pkill python' to close all tools."
```

Make it executable:

```bash
chmod +x start_all.sh
```

Run it:

```bash
./start_all.sh
```

### Create Individual Start Scripts

For each tool:

```bash
# Bing start script
cat > start_bing.sh << 'EOF'
#!/bin/bash
cd /home/robbie/Desktop/search_operator
.venv/bin/python sys_bing_search.py
EOF
chmod +x start_bing.sh

# Brave start script
cat > start_brave.sh << 'EOF'
#!/bin/bash
cd /home/robbie/Desktop/search_operator
.venv/bin/python sys_brave_search.py
EOF
chmod +x start_brave.sh

# Google start script
cat > start_google.sh << 'EOF'
#!/bin/bash
cd /home/robbie/Desktop/search_operator
.venv/bin/python sys_google_search.py
EOF
chmod +x start_google.sh

# Yahoo start script
cat > start_yahoo.sh << 'EOF'
#!/bin/bash
cd /home/robbie/Desktop/search_operator
.venv/bin/python sys_yahoo_search.py
EOF
chmod +x start_yahoo.sh
```

## Desktop Integration

### Create Desktop Entries

Create desktop launchers for easy GUI access:

```bash
# Bing Search Tool
cat > ~/.local/share/applications/bing-search-tool.desktop << 'EOF'
[Desktop Entry]
Version=1.0
Type=Application
Name=Microsoft Bing Search Tool
Comment=Advanced search operators for Bing
Exec=/home/robbie/Desktop/search_operator/.venv/bin/python /home/robbie/Desktop/search_operator/sys_bing_search.py
Icon=web-browser
Terminal=false
Categories=Utility;Search;
EOF

# Brave Search Tool
cat > ~/.local/share/applications/brave-search-tool.desktop << 'EOF'
[Desktop Entry]
Version=1.0
Type=Application
Name=Brave Search Tool
Comment=Advanced search operators for Brave
Exec=/home/robbie/Desktop/search_operator/.venv/bin/python /home/robbie/Desktop/search_operator/sys_brave_search.py
Icon=web-browser
Terminal=false
Categories=Utility;Search;
EOF

# Google Search Tool
cat > ~/.local/share/applications/google-search-tool.desktop << 'EOF'
[Desktop Entry]
Version=1.0
Type=Application
Name=Google Search Tool
Comment=Advanced search operators for Google
Exec=/home/robbie/Desktop/search_operator/.venv/bin/python /home/robbie/Desktop/search_operator/sys_google_search.py
Icon=web-browser
Terminal=false
Categories=Utility;Search;
EOF

# Yahoo Search Tool
cat > ~/.local/share/applications/yahoo-search-tool.desktop << 'EOF'
[Desktop Entry]
Version=1.0
Type=Application
Name=Yahoo Search Tool
Comment=Advanced search operators for Yahoo
Exec=/home/robbie/Desktop/search_operator/.venv/bin/python /home/robbie/Desktop/search_operator/sys_yahoo_search.py
Icon=web-browser
Terminal=false
Categories=Utility;Search;
EOF
```

Refresh desktop menu and tools will appear in your application menu.

## Troubleshooting Startup Issues

### Issue: "ModuleNotFoundError: No module named 'PyQt5'"

**Cause**: PyQt5 not installed or using wrong Python.

**Solution**:
```bash
.venv/bin/pip install PyQt5
```

### Issue: "Command 'python' not found"

**Cause**: Using system Python instead of virtual environment.

**Solution**: Always use `.venv/bin/python` or activate virtual environment first.

### Issue: GUI Window Doesn't Appear

**Cause**: Display server issues or running without GUI.

**Solution**:
- Ensure you're in a graphical session
- Check DISPLAY variable: `echo $DISPLAY`
- If using SSH, enable X forwarding: `ssh -X user@host`

### Issue: "Error: [Errno 2] No such file or directory"

**Cause**: Virtual environment corrupted or missing.

**Solution**:
```bash
rm -rf .venv
python3 -m venv .venv
.venv/bin/pip install PyQt5
```

### Issue: Tools Start But Don't Respond

**Cause**: PyQt5 version incompatibility or display issues.

**Solution**:
```bash
.venv/bin/pip install --upgrade PyQt5
```

## Stopping the Tools

### Stop Individual Tool

Find and kill the specific process:

```bash
ps aux | grep sys_bing_search.py
kill <PID>
```

### Stop All Tools

```bash
pkill -f "sys_.*_search.py"
```

Or more broadly:

```bash
pkill python
```

## Verifying Tool Operation

After starting a tool, verify it's running:

```bash
ps aux | grep python
```

You should see processes for each running tool.

Check for GUI windows:
- Each tool should open a window with its title
- Windows should be visible on your desktop
- Interface should be responsive

## Next Steps

After successfully starting the tools:

1. Refer to individual tool documentation for usage:
   - [Bing Search Tool](BING_SEARCH_TOOL.md)
   - [Brave Search Tool](BRAVE_SEARCH_TOOL.md)
   - [Google Search Tool](GOOGLE_SEARCH_TOOL.md)
   - [Yahoo Search Tool](YAHOO_SEARCH_TOOL.md)

2. Experiment with different search operators
3. Customize window positions if needed (edit `setGeometry` in source files)
4. Create custom startup scripts for your workflow

## System Requirements Reminder

- Linux/Unix-based system with GUI support
- Python 3.8+
- PyQt5 installed in virtual environment
- Active internet connection for search functionality
- Display server (X11 or Wayland) running
