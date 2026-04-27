import sys
import webbrowser
from PyQt5.QtWidgets import (
    QApplication, QMainWindow, QWidget, QVBoxLayout, QHBoxLayout, QLabel,
    QLineEdit, QCheckBox, QComboBox, QPushButton, QTextEdit, QGroupBox, QGridLayout
)
from PyQt5.QtGui import QPalette, QColor
from PyQt5.QtCore import Qt


class SearchOperatorsTool(QMainWindow):
    def __init__(self):
        super().__init__()
        self.setWindowTitle("Advanced Search Operators Tool")
        self.setGeometry(200, 200, 800, 600)

        # Apply advanced colorization
        self.apply_dark_theme()

        # Main Layout
        self.central_widget = QWidget()
        self.setCentralWidget(self.central_widget)
        self.layout = QVBoxLayout()
        self.central_widget.setLayout(self.layout)

        # Add GUI Components
        self.add_search_query_section()
        self.add_operator_options()
        self.add_preview_and_actions()

    def apply_dark_theme(self):
        """
        Apply a dark theme with advanced colorization
        """
        dark_palette = QPalette()

        # Base Colors
        dark_palette.setColor(QPalette.Window, QColor(53, 53, 53))
        dark_palette.setColor(QPalette.WindowText, QColor(220, 220, 220))
        dark_palette.setColor(QPalette.Base, QColor(42, 42, 42))
        dark_palette.setColor(QPalette.AlternateBase, QColor(66, 66, 66))
        dark_palette.setColor(QPalette.ToolTipBase, QColor(255, 255, 255))
        dark_palette.setColor(QPalette.ToolTipText, QColor(220, 220, 220))
        dark_palette.setColor(QPalette.Text, QColor(220, 220, 220))
        dark_palette.setColor(QPalette.Button, QColor(53, 53, 53))
        dark_palette.setColor(QPalette.ButtonText, QColor(220, 220, 220))
        dark_palette.setColor(QPalette.BrightText, QColor(255, 0, 0))

        # Highlight Colors
        dark_palette.setColor(QPalette.Highlight, QColor(44, 128, 185))
        dark_palette.setColor(QPalette.HighlightedText, QColor(255, 255, 255))

        QApplication.setPalette(dark_palette)

        # Apply custom styles to the entire app
        self.setStyleSheet("""
            QMainWindow {
                background-color: #353535;
                color: #dcdcdc;
                font-family: Arial, sans-serif;
                font-size: 12px;
            }
            QLabel {
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
                background-color: #35373b;
            }
            QCheckBox {
                color: #ffffff;
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
            QGroupBox::title {
                subcontrol-origin: margin;
                subcontrol-position: top center;
                padding: 0 3px;
                background-color: #353535;
                color: #ffffff;
            }
        """)

    def add_search_query_section(self):
        # Search Query Section
        query_group = QGroupBox("Search Query")
        query_layout = QVBoxLayout()

        self.query_label = QLabel("Enter your base query:")
        self.query_input = QLineEdit()
        self.query_input.setPlaceholderText("E.g., Python PyQt5 tutorial")

        query_layout.addWidget(self.query_label)
        query_layout.addWidget(self.query_input)
        query_group.setLayout(query_layout)

        self.layout.addWidget(query_group)

    def add_operator_options(self):
        # Search Operators Section
        operators_group = QGroupBox("Search Operators")
        operators_layout = QGridLayout()

        # Site Filtering
        self.site_checkbox = QCheckBox("Site:")
        self.site_input = QLineEdit()
        self.site_input.setPlaceholderText("example.com")
        operators_layout.addWidget(self.site_checkbox, 0, 0)
        operators_layout.addWidget(self.site_input, 0, 1)

        # Intitle Filtering
        self.title_checkbox = QCheckBox("Intitle:")
        self.title_input = QLineEdit()
        self.title_input.setPlaceholderText("Specific title")
        operators_layout.addWidget(self.title_checkbox, 1, 0)
        operators_layout.addWidget(self.title_input, 1, 1)

        # Filetype Filtering
        self.filetype_checkbox = QCheckBox("Filetype:")
        self.filetype_input = QLineEdit()
        self.filetype_input.setPlaceholderText("pdf, txt, docx, etc.")
        operators_layout.addWidget(self.filetype_checkbox, 2, 0)
        operators_layout.addWidget(self.filetype_input, 2, 1)

        # Exclusion
        self.exclude_checkbox = QCheckBox("Exclude (-):")
        self.exclude_input = QLineEdit()
        self.exclude_input.setPlaceholderText("Words to exclude")
        operators_layout.addWidget(self.exclude_checkbox, 3, 0)
        operators_layout.addWidget(self.exclude_input, 3, 1)

        # Custom Operators
        self.custom_checkbox = QCheckBox("Custom:")
        self.custom_input = QLineEdit()
        self.custom_input.setPlaceholderText("Define your custom operator")
        operators_layout.addWidget(self.custom_checkbox, 4, 0)
        operators_layout.addWidget(self.custom_input, 4, 1)

        operators_group.setLayout(operators_layout)
        self.layout.addWidget(operators_group)

    def add_preview_and_actions(self):
        # Query Preview and Actions
        actions_group = QGroupBox("Query Preview and Actions")
        actions_layout = QVBoxLayout()

        # Query Preview
        self.preview_label = QLabel("Query Preview:")
        self.preview_output = QTextEdit()
        self.preview_output.setReadOnly(True)

        # Buttons
        preview_button = QPushButton("Preview Query")
        preview_button.clicked.connect(self.generate_query)

        search_button = QPushButton("Execute Search")
        search_button.clicked.connect(self.execute_search)

        # Add Widgets to Layout
        actions_layout.addWidget(self.preview_label)
        actions_layout.addWidget(self.preview_output)
        actions_layout.addWidget(preview_button)
        actions_layout.addWidget(search_button)

        actions_group.setLayout(actions_layout)
        self.layout.addWidget(actions_group)

    def generate_query(self):
        """
        Generate the search query based on user inputs and selected operators
        """
        base_query = self.query_input.text().strip()
        query_parts = [base_query]

        if self.site_checkbox.isChecked() and self.site_input.text():
            query_parts.append(f"site:{self.site_input.text()}")

        if self.title_checkbox.isChecked() and self.title_input.text():
            query_parts.append(f"intitle:{self.title_input.text()}")

        if self.filetype_checkbox.isChecked() and self.filetype_input.text():
            query_parts.append(f"filetype:{self.filetype_input.text()}")

        if self.exclude_checkbox.isChecked() and self.exclude_input.text():
            query_parts.append(f"-{self.exclude_input.text()}")

        if self.custom_checkbox.isChecked() and self.custom_input.text():
            query_parts.append(self.custom_input.text())

        final_query = " ".join(query_parts)
        self.preview_output.setText(final_query)

    def execute_search(self):
        """
        Execute the search query using the default web browser
        """
        query = self.preview_output.toPlainText().strip()
        if not query:
            self.preview_output.setText("Error: No query to execute. Please generate one!")
            return

        # Base URL for Brave Search
        base_url = "https://search.brave.com/search?q="
        search_url = base_url + query.replace(" ", "+")
        webbrowser.open(search_url)


# Main Execution
if __name__ == "__main__":
    app = QApplication(sys.argv)
    window = SearchOperatorsTool()
    window.show()
    sys.exit(app.exec_())