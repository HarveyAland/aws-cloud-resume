☁️ Cloud Resume Challenge - (https://resume.harveyaws.com/)
This project is a completion of the Cloud Resume Challenge — a hands-on, end-to-end cloud engineering project designed to showcase practical experience with core cloud services, CI/CD pipelines, and automation.

📄 Project Overview
This project hosts my professional resume as a static website. The infrastructure is automated with CI/CD pipelines using GitHub Actions, and changes to the resume are deployed seamlessly upon pushing to the repository.

🚀 Tech Stack
Category	Tool/Service
Cloud Provider	AWS
CI/CD	GitHub Actions
Storage	Amazon S3
DNS	Amazon Route 53
CDN	Amazon CloudFront
SSL	AWS Certificate Manager
Frontend	HTML/CSS 
🧱 Infrastructure Breakdown
Amazon S3: Hosts the static HTML/CSS resume website.

Amazon CloudFront: Serves content globally with low latency.

Amazon Route 53: Manages DNS for the custom domain.

AWS Certificate Manager: Provides HTTPS with SSL/TLS certificates.

Terraform: Manages all AWS resources as code.

GitHub Actions: Automates deployment pipeline on code commits.

🔁 CI/CD Pipeline
This project features a full GitOps workflow:

Push to main branch on GitHub.

GitHub Actions triggers:

Deploy step: Uploads resume files to S3 and invalidates CloudFront cache.


✅ Features
Fully serverless architecture.

Secure HTTPS hosting with a custom domain.

Fully automated deployment via CI/CD.

Cost-effective and production-grade static hosting.


🧪 Testing & Validation
 S3 bucket configured for static website hosting

 CloudFront distribution properly routes to S3

 SSL certificate from ACM attached and valid

 DNS routing set up with Route 53

 GitHub Actions deploys automatically on push
