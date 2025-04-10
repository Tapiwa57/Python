import os
import pandas as pd
from fpdf import FPDF
import yagmail

# Email configuration
SMTP_USER = os.getenv("SENDER_EMAIL", "bibiralph57@gmail.com")
SMTP_PASSWORD = os.getenv("EMAIL_PASSWORD", "mavuuajwavileduo")

# Create payslip directory
os.makedirs("payslips", exist_ok=True)

# PDF class with styling
class PayslipPDF(FPDF):
    def header(self):
        if os.path.exists("logo.png"):
            self.image("logo.png", 10, 8, 30)  # Logo at top-left
        self.set_font("Arial", "B", 16)
        self.set_text_color(30, 30, 30)
        self.cell(0, 10, "Acme Corporation", ln=True, align="C")
        self.set_font("Arial", "", 12)
        self.set_text_color(90, 90, 90)
        self.cell(0, 10, "Official Monthly Payslip", ln=True, align="C")
        self.ln(10)
        self.set_draw_color(180, 180, 180)
        self.line(10, self.get_y(), 200, self.get_y())
        self.ln(5)

    def footer(self):
        self.set_y(-15)
        self.set_font("Arial", "I", 8)
        self.set_text_color(128)
        self.cell(0, 10, "This is a system-generated document. For queries, contact HR.", 0, 0, "C")

def generate_payslip(employee):
    """Generate a stylish PDF payslip for an employee."""
    try:
        pdf = PayslipPDF()
        pdf.set_auto_page_break(auto=True, margin=15)
        pdf.add_page()
        pdf.set_font("Arial", "", 12)
        pdf.set_fill_color(245, 245, 245)

        # Employee details section
        pdf.set_font("Arial", "B", 12)
        pdf.cell(0, 10, "Employee Information", ln=True)
        pdf.set_font("Arial", "", 12)
        pdf.cell(50, 8, "Employee ID:", 0, 0, "L", True)
        pdf.cell(0, 8, str(employee["Employee ID"]), 0, 1)
        pdf.cell(50, 8, "Name:", 0, 0, "L", True)
        pdf.cell(0, 8, employee["Name"], 0, 1)
        pdf.cell(50, 8, "Email:", 0, 0, "L", True)
        pdf.cell(0, 8, employee["Email"], 0, 1)

        pdf.ln(10)

        # Salary Breakdown
        pdf.set_font("Arial", "B", 12)
        pdf.cell(0, 10, "Salary Breakdown", ln=True)
        pdf.set_font("Arial", "", 12)
        salary_items = [
            ("Basic Salary", employee["Basic Salary"]),
            ("Allowances", employee["Allowances"]),
            ("Deductions", employee["Deductions"]),
            ("Net Salary", employee["Net Salary"]),
        ]

        for label, amount in salary_items:
            pdf.cell(80, 10, label, 1, 0, "L", True)
            pdf.cell(40, 10, f"${amount:,.2f}", 1, 1, "R")

        # Save the PDF
        filename = f"payslips/{employee['Employee ID']}.pdf"
        pdf.output(filename)
        print(f"Payslip generated: {filename}")
        return filename

    except Exception as e:
        print(f"Error generating payslip for {employee['Name']}: {e}")
        return None

def send_email(employee, payslip_path):
    """Send the payslip via email."""
    try:
        receiver = employee['Email']
        subject = "Your Payslip for This Month"
        body = f"""
        Dear {employee['Name']},

        Please find attached your payslip for this month.

        Best regards,
        Payroll Team
        """
        yag = yagmail.SMTP(SMTP_USER, SMTP_PASSWORD)
        yag.send(to=receiver, subject=subject, contents=body, attachments=payslip_path)
        print(f"Payslip sent to {receiver}")
    except Exception as e:
        print(f"Error sending email to {employee['Email']}: {e}")

# Load employee data
try:
    df = pd.read_excel("employees.xlsx")
    df["Net Salary"] = df["Basic Salary"] + df["Allowances"] - df["Deductions"]
except Exception as e:
    print(f"Error reading Excel file: {e}")
    exit()

# Generate and send payslips
for _, row in df.iterrows():
    payslip_path = generate_payslip(row)
    if payslip_path:
        send_email(row, payslip_path)

print("Payslips generation and emailing process completed!")
