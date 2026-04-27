import sys
import webbrowser
from PyQt5.QtWidgets import (
    QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout, QLabel,
    QLineEdit, QCheckBox, QComboBox, QPushButton, QTextEdit, QGroupBox, QGridLayout
)
from PyQt5.QtGui import QPalette, QColor
from PyQt5.QtCore import Qt


class YahooAdvancedSearchTool(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Yahoo Advanced Search Tool")
        self.setGeometry(200, 200, 900, 700)

        # Apply dark theme
        self.apply_dark_theme()

        # Main Layout
        self.central_widget = QWidget()
        self.setCentralWidget(self.central_widget)
        self.layout = QVBoxLayout()
        self.central_widget.setLayout(self.layout)

        # Add GUI components
        self.add_search_query_section()
        self.add_advanced_filters_section()
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
        """Basic search query input"""
        query_group = QGroupBox("Search Query")
        query_layout = QVBoxLayout()

        self.query_label = QLabel("Enter your base query:")
        self.query_input = QLineEdit()
        self.query_input.setPlaceholderText("E.g., advanced search example")

        query_layout.addWidget(self.query_label)
        query_layout.addWidget(self.query_input)
        query_group.setLayout(query_layout)

        self.layout.addWidget(query_group)

    def add_advanced_filters_section(self):
        """Advanced search filters section"""
        filters_group = QGroupBox("Advanced Filters")
        filters_layout = QGridLayout()

        # All these words
        self.all_words_checkbox = QCheckBox("All these words:")
        self.all_words_input = QLineEdit()
        self.all_words_input.setPlaceholderText("E.g., Python programming")
        filters_layout.addWidget(self.all_words_checkbox, 0, 0)
        filters_layout.addWidget(self.all_words_input, 0, 1)

        # Any words
        self.any_words_checkbox = QCheckBox("Any of these words:")
        self.any_words_input = QLineEdit()
        self.any_words_input.setPlaceholderText("E.g., tutorial OR guide")
        filters_layout.addWidget(self.any_words_checkbox, 1, 0)
        filters_layout.addWidget(self.any_words_input, 1, 1)

        # Exact phrase
        self.exact_phrase_checkbox = QCheckBox("Exact phrase:")
        self.exact_phrase_input = QLineEdit()
        self.exact_phrase_input.setPlaceholderText("E.g., 'advanced search'")
        filters_layout.addWidget(self.exact_phrase_checkbox, 2, 0)
        filters_layout.addWidget(self.exact_phrase_input, 2, 1)

        # None of these words
        self.none_words_checkbox = QCheckBox("None of these words:")
        self.none_words_input = QLineEdit()
        self.none_words_input.setPlaceholderText("E.g., error, failure")
        filters_layout.addWidget(self.none_words_checkbox, 3, 0)
        filters_layout.addWidget(self.none_words_input, 3, 1)

        # Site or domain
        self.site_checkbox = QCheckBox("Site or domain:")
        self.site_input = QLineEdit()
        self.site_input.setPlaceholderText("E.g., example.com")
        filters_layout.addWidget(self.site_checkbox, 4, 0)
        filters_layout.addWidget(self.site_input, 4, 1)

        # File type
        self.filetype_checkbox = QCheckBox("File Type:")
        self.filetype_input = QLineEdit()
        self.filetype_input.setPlaceholderText("E.g., pdf, docx")
        filters_layout.addWidget(self.filetype_checkbox, 5, 0)
        filters_layout.addWidget(self.filetype_input, 5, 1)

        # Language selection
        self.language_checkbox = QCheckBox("Preferred Language:")
        self.language_input = QComboBox()
        self.language_input.addItems(["Any", "English", "Spanish", "French", "German"])
        filters_layout.addWidget(self.language_checkbox, 6, 0)
        filters_layout.addWidget(self.language_input, 6, 1)

        # Date filter
        self.date_checkbox = QCheckBox("Modified in:")
        self.date_input = QComboBox()
        self.date_input.addItems(["Any time", "Past day", "Past week", "Past month"])
        filters_layout.addWidget(self.date_checkbox, 7, 0)
        filters_layout.addWidget(self.date_input, 7, 1)

        # Safe search
        self.safesearch_checkbox = QCheckBox("Enable Safe Search")
        filters_layout.addWidget(self.safesearch_checkbox, 8, 0, 1, 2)

        filters_group.setLayout(filters_layout)
        self.layout.addWidget(filters_group)

    def add_preview_and_execution(self):
        """Add query preview and execution section"""
        preview_group = QGroupBox("Query Preview and Execution")
        preview_layout = QVBoxLayout()

        # Query preview text box
        self.preview_label = QLabel("Query Preview:")
        self.preview_output = QTextEdit()
        self.preview_output.setReadOnly(True)

        # Buttons
        preview_button = QPushButton("Generate Query")
        preview_button.clicked.connect(self.generate_query)

        search_button = QPushButton("Search Yahoo")
        search_button.clicked.connect(self.execute_search)

        # Add widgets to layout
        preview_layout.addWidget(self.preview_label)
        preview_layout.addWidget(self.preview_output)
        preview_layout.addWidget(preview_button)
        preview_layout.addWidget(search_button)

        preview_group.setLayout(preview_layout)
        self.layout.addWidget(preview_group)

    def generate_query(self):
        """Generate the Yahoo search query based on user inputs"""
        base_query = self.query_input.text().strip()
        query_parts = [base_query]

        if self.all_words_checkbox.isChecked() and self.all_words_input.text():
            query_parts.append(f'"{self.all_words_input.text()}"')

        if self.any_words_checkbox.isChecked() and self.any_words_input.text():
            words = self.any_words_input.text().split()
            query_parts.append(" OR ".join(words))

        if self.exact_phrase_checkbox.isChecked() and self.exact_phrase_input.text():
            query_parts.append(f'"{self.exact_phrase_input.text()}"')

        if self.none_words_checkbox.isChecked() and self.none_words_input.text():
            words = self.none_words_input.text().split()
            query_parts.extend([f"-{word}" for word in words])

        if self.site_checkbox.isChecked() and self.site_input.text():
            query_parts.append(f"site:{self.site_input.text()}")

        if self.filetype_checkbox.isChecked() and self.filetype_input.text():
            query_parts.append(f"filetype:{self.filetype_input.text()}")

        if self.language_checkbox.isChecked():
            lang = self.language_input.currentText()
            if lang != "Any":
                query_parts.append(f"lang:{lang.lower()}")

        if self.date_checkbox.isChecked():
            date_filter = self.date_input.currentText()
            if date_filter != "Any time":
                query_parts.append(f"date:{date_filter.replace(' ', '_').lower()}")

        if self.safesearch_checkbox.isChecked():
            query_parts.append("safe:strict")

        final_query = " ".join(query_parts)
        self.preview_output.setText(final_query)

    def execute_search(self):
        """Execute the Yahoo search query"""
        query = self.preview_output.toPlainText().strip().replace(" ", "+")
        if not query:
            self.preview_output.setText("Error: No query to execute. Please generate one!")
            return

        # Open Yahoo search
        search_url = f"https://search.yahoo.com/search?p={query}"
        webbrowser.open(search_url)


# Main Execution
if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = YahooAdvancedSearchTool()
    window.show()
    sys.exit(app.exec_())
