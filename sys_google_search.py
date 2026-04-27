import sys
import webbrowser
from PyQt5.QtWidgets import (
    QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout, QLabel,
    QLineEdit, QCheckBox, QPushButton, QTextEdit, QGroupBox, QGridLayout, QComboBox
)
from PyQt5.QtGui import QPalette, QColor
from PyQt5.QtCore import Qt


class GoogleAdvancedSearchTool(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Google Advanced Search Tool")
        self.setGeometry(200, 200, 900, 700)

        # Apply advanced colorization (Dark theme)
        self.apply_dark_theme()

        # Main Layout
        self.central_widget = QWidget()
        self.setCentralWidget(self.central_widget)
        self.layout = QVBoxLayout()
        self.central_widget.setLayout(self.layout)

        # Add GUI components
        self.add_search_query_section()
        self.add_operator_configuration_section()
        self.add_preview_and_execution()

    def apply_dark_theme(self):
        """
        Apply a dark theme to the application
        """
        dark_palette = QPalette()
        dark_palette.setColor(QPalette.Window, QColor(53, 53, 53))
        dark_palette.setColor(QPalette.WindowText, QColor(220, 220, 220))
        dark_palette.setColor(QPalette.Base, QColor(42, 42, 42))
        dark_palette.setColor(QPalette.AlternateBase, QColor(66, 66, 66))
        dark_palette.setColor(QPalette.ToolTipBase, QColor(255, 255, 255))
        dark_palette.setColor(QPalette.ToolTipText, QColor(220, 220, 220))
        dark_palette.setColor(QPalette.Text, QColor(220, 220, 220))
        dark_palette.setColor(QPalette.Button, QColor(53, 53, 53))
        dark_palette.setColor(QPalette.ButtonText, QColor(220, 220, 220))
        dark_palette.setColor(QPalette.Highlight, QColor(44, 128, 185))
        dark_palette.setColor(QPalette.HighlightedText, QColor(255, 255, 255))
        QApplication.setPalette(dark_palette)

        self.setStyleSheet("""
            QMainWindow {
                background-color: #353535;
                color: #dcdcdc;
            }
            QLabel, QCheckBox, QGroupBox::title {
                color: #ffffff;
                font-weight: bold;
            }
            QLineEdit, QTextEdit {
                background-color: #2a2a2a;
                color: #dcdcdc;
                border: 1px solid #3a3a3a;
                border-radius: 5px;
                padding: 5px;
            }
            QLineEdit:focus, QTextEdit:focus {
                border: 1px solid #2c80b9;
            }
            QPushButton {
                background-color: #2c80b9;
                color: #ffffff;
                border-radius: 5px;
                padding: 5px 10px;
            }
            QPushButton:hover {
                background-color: #1a5a8a;
            }
            QGroupBox {
                border: 1px solid #2c80b9;
                border-radius: 5px;
                margin-top: 10px;
            }
        """)

    def add_search_query_section(self):
        """Base query input section"""
        query_group = QGroupBox("Search Query")
        query_layout = QVBoxLayout()

        self.query_label = QLabel("Enter your base query:")
        self.query_input = QLineEdit()
        self.query_input.setPlaceholderText("E.g., Python PyQt5 tutorial")

        query_layout.addWidget(self.query_label)
        query_layout.addWidget(self.query_input)
        query_group.setLayout(query_layout)

        self.layout.addWidget(query_group)

    def add_operator_configuration_section(self):
        """Section to configure search operators"""
        operators_group = QGroupBox("Advanced Operators")
        operators_layout = QGridLayout()

        # Each advanced operator gets a checkbox and input
        # Site Query
        self.site_checkbox = QCheckBox("Site:")
        self.site_input = QLineEdit()
        self.site_input.setPlaceholderText("example.com")
        operators_layout.addWidget(self.site_checkbox, 0, 0)
        operators_layout.addWidget(self.site_input, 0, 1)

        # Filetype Query
        self.filetype_checkbox = QCheckBox("Filetype:")
        self.filetype_input = QLineEdit()
        self.filetype_input.setPlaceholderText("pdf, docx, txt, etc.")
        operators_layout.addWidget(self.filetype_checkbox, 1, 0)
        operators_layout.addWidget(self.filetype_input, 1, 1)

        # Intitle Query
        self.intitle_checkbox = QCheckBox("Intitle:")
        self.intitle_input = QLineEdit()
        self.intitle_input.setPlaceholderText("Specific keywords in title")
        operators_layout.addWidget(self.intitle_checkbox, 2, 0)
        operators_layout.addWidget(self.intitle_input, 2, 1)

        # Cache Query
        self.cache_checkbox = QCheckBox("Cache:")
        self.cache_input = QLineEdit()
        self.cache_input.setPlaceholderText("URL or domain")
        operators_layout.addWidget(self.cache_checkbox, 3, 0)
        operators_layout.addWidget(self.cache_input, 3, 1)

        # Other custom queries
        self.custom_checkbox = QCheckBox("Custom Query:")
        self.custom_input = QLineEdit()
        self.custom_input.setPlaceholderText("site:example.com -exclude")
        operators_layout.addWidget(self.custom_checkbox, 4, 0)
        operators_layout.addWidget(self.custom_input, 4, 1)

        operators_group.setLayout(operators_layout)
        self.layout.addWidget(operators_group)

    def add_preview_and_execution(self):
        """Preview and execute the query"""
        preview_group = QGroupBox("Preview and Execute")
        preview_layout = QVBoxLayout()

        # Query preview text box
        self.preview_label = QLabel("Query Preview:")
        self.preview_output = QTextEdit()
        self.preview_output.setReadOnly(True)

        # Buttons for preview and search
        preview_button = QPushButton("Preview Query")
        preview_button.clicked.connect(self.generate_query)

        search_button = QPushButton("Execute Search")
        search_button.clicked.connect(self.execute_search)

        # Add widgets to layout
        preview_layout.addWidget(self.preview_label)
        preview_layout.addWidget(self.preview_output)
        preview_layout.addWidget(preview_button)
        preview_layout.addWidget(search_button)

        preview_group.setLayout(preview_layout)
        self.layout.addWidget(preview_group)

    def generate_query(self):
        """
        Generate and display the query based on selections
        """
        base_query = self.query_input.text().strip()
        query_parts = [base_query]

        if self.site_checkbox.isChecked() and self.site_input.text():
            query_parts.append(f"site:{self.site_input.text()}")

        if self.filetype_checkbox.isChecked() and self.filetype_input.text():
            query_parts.append(f"filetype:{self.filetype_input.text()}")

        if self.intitle_checkbox.isChecked() and self.intitle_input.text():
            query_parts.append(f"intitle:{self.intitle_input.text()}")

        if self.cache_checkbox.isChecked() and self.cache_input.text():
            query_parts.append(f"cache:{self.cache_input.text()}")

        if self.custom_checkbox.isChecked() and self.custom_input.text():
            query_parts.append(self.custom_input.text())

        final_query = " ".join(query_parts)
        self.preview_output.setText(final_query)

    def execute_search(self):
        """
        Execute the search query
        """
        query = self.preview_output.toPlainText().strip()
        if not query:
            self.preview_output.setText("Error: No query to execute. Please generate one!")
            return

        # Google search
        search_url = f"https://www.google.com/search?q={query.replace(' ', '+')}"
        webbrowser.open(search_url)


# Main Execution
if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = GoogleAdvancedSearchTool()
    window.show()
    sys.exit(app.exec_())
