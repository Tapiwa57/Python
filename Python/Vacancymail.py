import requests
from bs4 import BeautifulSoup
import pandas as pd
import logging
from datetime import datetime

# Set up logging
logging.basicConfig(
    filename='job_scraper.log',
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s'
)

def scrape_jobs():
    logging.info("Job scraping started.")
    url = "https://vacancymail.co.zw/jobs/"

    try:
        response = requests.get(url)
        response.raise_for_status()
        logging.info("Successfully fetched the main job listings page.")
    except requests.RequestException as e:
        logging.error(f"Error fetching the job listings page: {e}")
        return

    soup = BeautifulSoup(response.text, 'html.parser')
    job_elements = soup.find_all("a", class_="job-listing")

    jobs = []
    for job in job_elements[:10]:  # Get only the latest 10 jobs
        title_tag = job.find("h3", class_="job-listing-title")
        company_tag = job.find("h4", class_="job-listing-company")
        description_tag = job.find("p", class_="job-listing-text")
        
        # Parse job-listing-footer
        footer = job.find("div", class_="job-listing-footer")
        lis = footer.find_all("li") if footer else []

        location = ""
        posted = ""

        for li in lis:
            if "location-on" in li.get_text():
                location = li.get_text(strip=True)
            if "Posted" in li.get_text():
                posted = li.get_text(strip=True)

        jobs.append({
            "Title": title_tag.text.strip() if title_tag else "",
            "Company": company_tag.text.strip() if company_tag else "",
            "Description": description_tag.text.strip() if description_tag else "",
            "Location": location,
            "Posted": posted,
            "Link": "https://vacancymail.co.zw" + job.get("href")
        })

    if jobs:
        df = pd.DataFrame(jobs)
        filename = f"vacancymail_jobs_{datetime.now().strftime('%Y%m%d_%H%M%S')}.csv"
        df.to_csv(filename, index=False)
        logging.info(f"Saved {len(jobs)} job listings to {filename}")
    else:
        logging.warning("No job data to save.")

    logging.info("Job scraping completed.")

if __name__ == "__main__":
    scrape_jobs()


    #README

    #VacancyMail Job Scraper
#This Python script scrapes the 10 latest job listings from https://vacancymail.co.zw/jobs/, #saves the data to a CSV file, and logs the process for easy tracking.
#Features
#•	Scrapes job title, company, description, location, posted date, and link to the job post.
#•	Retrieves only the latest 10 jobs.
#	Saves data to a timestamped CSV file.
#•	Includes logging for error handling and debugging.
#Requirements
#Install dependencies with pip:
#bash
#CopyEdit
#pip install requests beautifulsoup4 pandas
#Usage
#Run the script using:
#bash
#CopyEdit
#python job_scraper.py
#A CSV file will be created in the same directory, named like:
#CopyEdit
#vacancymail_jobs_20250415_102300.csv
#You’ll also get a log file job_scraper.log that records scraping activity and any issues.

#CSV Output Format
#Title	Company	Description	Location	Posted	Link
#Job #Title	Company Name	Job Description	Harare	Posted 2 days ago	https://vacancymail.co.zw/jobs/...


# Notes
#•	Make sure the website structure hasn’t changed, or the scraper may stop working.
#•	Logs are written to job_scraper.log for troubleshooting.




