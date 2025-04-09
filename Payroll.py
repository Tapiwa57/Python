import os
import pandas as pd
from fpdf import FPDF
import yagmail


# Email configuration
SMTP_USER = os.getenv("SENDER_EMAIL","bibiralph57@gmail.com")
SMTP_PASSWORD = os.getenv("EMAIL_PASSWORD", "mavuuajwavileduo")

# Create payslip directory
os.makedirs("payslips", exist_ok=True)

def generate_payslip(employee):
    """Generate a PDF payslip for an employee."""
    try:
        pdf = FPDF()
        pdf.set_auto_page_break(auto=True, margin=15)
        pdf.add_page()
        pdf.set_font("Arial", "B", 16)
        pdf.cell(200, 10, "Payslip", ln=True, align="C")
        pdf.ln(10)

        pdf.set_font("Arial", "", 12)
        pdf.cell(200, 10, f"Employee ID: {employee['Employee ID']}", ln=True)
        pdf.cell(200, 10, f"Name: {employee['Name']}", ln=True)
        pdf.cell(200, 10, f"Basic Salary: ${employee['Basic Salary']:.2f}", ln=True)
        pdf.cell(200, 10, f"Allowances: ${employee['Allowances']:.2f}", ln=True)
        pdf.cell(200, 10, f"Deductions: ${employee['Deductions']:.2f}", ln=True)
        pdf.cell(200, 10, f"Net Salary: ${employee['Net Salary']:.2f}", ln=True)

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

# Read employee data
try:
    df = pd.read_excel("employees.xlsx")
    df["Net Salary"] = df["Basic Salary"] + df["Allowances"] - df["Deductions"]
except Exception as e:
    print(f"Error reading Excel file: {e}")
    exit()

# Process each employee
for _, row in df.iterrows():
    payslip_path = generate_payslip(row)
    if payslip_path:
        send_email(row, payslip_path)

print("Payslips generation and emailing process completed!")