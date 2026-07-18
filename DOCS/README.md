# 🏠 Cloud-Based Smart Home Monitoring & Automation Platform

A cloud-native Smart Home Monitoring & Automation Platform developed using **AWS Cloud Services** and **DevOps** practices. This project enables users to remotely monitor and control smart home devices through a responsive web dashboard while utilizing a fully serverless AWS architecture.

---

## 📖 Project Overview

The Cloud-Based Smart Home Monitoring & Automation Platform is designed to monitor and control home appliances remotely using Amazon Web Services (AWS). The system provides a user-friendly dashboard for managing smart devices such as Lights, Fans, Doors, and Air Conditioners while displaying live environmental sensor data including Temperature, Humidity, Gas, and Motion.

The application follows a serverless architecture using AWS managed services to ensure scalability, security, high availability, and cost-effective deployment.

---

# 🚀 Features

- 💡 Smart Light Control
- 🌀 Fan ON/OFF Control
- 🚪 Door Lock/Unlock
- ❄️ Air Conditioner Control
- 🌡️ Live Temperature Monitoring
- 💧 Humidity Monitoring
- 💨 Gas Detection
- 🚶 Motion Detection
- 📈 Temperature Analytics Chart
- 📝 Recent Activity Logs
- ☁️ Serverless AWS Architecture
- 🔒 Secure IAM Role-Based Access
- 📊 CloudWatch Monitoring
- ⚡ REST API Integration

---

# 🛠️ Technology Stack

### Frontend
- HTML5
- CSS3
- JavaScript
- Chart.js
- Font Awesome

### Cloud Platform
- Amazon Web Services (AWS)

### AWS Services
- Amazon S3
- Amazon API Gateway
- AWS Lambda
- Amazon DynamoDB
- Amazon CloudWatch
- AWS IAM

### DevOps
- Git
- GitHub
- GitHub Actions (CI/CD)

---

# ☁️ AWS Architecture

```
User
   │
   ▼
Amazon S3 (Static Website Hosting)
   │
   ▼
Amazon API Gateway
   │
   ▼
AWS Lambda
   │
   ▼
Amazon DynamoDB
   │
   ▼
CloudWatch Logs & Monitoring
```

---

# 📂 Project Structure

```
Cloud-Based-Smart-Home/

│── index.html
│── style.css
│── script.js
│── README.md
│── screenshots/
│── assets/
```

---

# ⚙️ AWS Services Used

## Amazon S3
- Static Website Hosting
- Dashboard Deployment
- Highly Available Storage

## Amazon API Gateway
- HTTP REST API
- Secure Backend Communication
- Lambda Integration

## AWS Lambda
Serverless backend functions:

- SmartHomeController
- GetSmartHomeData
- MainMonitoringFunction

Responsibilities:
- Device Control
- Data Processing
- Sensor Management

## Amazon DynamoDB

Tables Used:

### SmartHomeDevices
- deviceId
- status

### SmartHomeData
- Temperature
- Humidity
- Gas
- Motion

## Amazon CloudWatch

Used for:
- Monitoring
- Logging
- Error Tracking
- Performance Metrics

## AWS IAM

Implemented:
- Least Privilege Access
- Secure Role Management
- Service Authorization



# 📊 Dashboard Features

### Smart Devices
- Light Control
- Fan Control
- Door Lock/Unlock
- Air Conditioner Control

### Live Sensors
- Temperature
- Humidity
- Gas Detection
- Motion Detection

### Analytics
- Temperature Chart
- Activity Log
- Real-time Status Updates

---

# 🔄 Project Workflow

```
User

↓

Smart Home Dashboard (Amazon S3)

↓

API Gateway

↓

AWS Lambda

↓

Amazon DynamoDB

↓

CloudWatch

↓

Updated Dashboard
```



# 🎯 Project Highlights

- Fully Serverless Architecture
- Responsive Dashboard
- Real-Time Monitoring
- Cloud Native Application
- REST API Integration
- NoSQL Database
- Secure IAM Policies
- Cloud Monitoring
- Static Website Hosting
- DevOps Workflow



# 🚀 Future Enhancements

- IoT Device Integration
- Mobile Application
- Voice Assistant Support
- AI-based Energy Optimization
- Predictive Maintenance
- Email Notifications using Amazon SNS
- Push Notifications
- Smart Security Camera Integration



# 📚 Learning Outcomes

Through this project, I gained practical experience in:

- AWS Cloud Computing
- Serverless Architecture
- API Development
- Static Website Hosting
- DynamoDB
- IAM Security
- CloudWatch Monitoring
- Git & GitHub
- DevOps Practices
- CI/CD Pipeline



# ✅ Project Outcome

Successfully designed and deployed a cloud-based Smart Home Monitoring & Automation Platform using AWS managed services. The project demonstrates practical implementation of serverless computing, cloud storage, REST APIs, NoSQL databases, cloud monitoring, and DevOps practices.



# 👨‍💻 Author

**Kanikineedi Tejaswi**

B.Tech - Computer Science and Artificial Intelligence

Sri Vasavi Engineering College


# 📜 License
This project is created for educational and learning purposes.
