# Competency Management System

A comprehensive microservices-based platform for managing competencies, educational briefs, and learner progress tracking. Built with modern MERN stack architecture and containerized with Docker.

## 🚀 Project Overview

This project consists of three interconnected microservices designed for 404.js to track skill acquisition and manage educational content:

1. **Competency Service** - Manages competencies and their sub-competencies
2. **Brief Service** - Handles educational briefs and their association with competencies
3. **Learner Service** - Tracks learners and their submissions

## 🏗️ Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│  Competency     │    │  Brief          │    │  Learner        │
│  Service        │    │  Service        │    │  Service        │
│  (Port 3001)    │    │  (Port 3002)    │    │  (Port 3003)    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         └───────────────────────┼───────────────────────┘
                                 │
                    ┌─────────────────┐
                    │    MongoDB      │
                    │   (Port 27017)  │
                    └─────────────────┘
```

## ✨ Features

### Competency Service
- ✅ CRUD operations for competencies (C1-C8)
- ✅ Sub-competency management with validation status
- ✅ Automatic global status calculation (validated if validated ≥ non-validated)
- ✅ RESTful API endpoints

### Brief Service
- ✅ Complete CRUD for educational briefs
- ✅ Multi-competency association per brief
- ✅ Brief-competency relationship management

### Learner Service
- ✅ Learner management and brief assignment
- ✅ Submission tracking through Rendu (Submission) entity
- ✅ Submission history per learner
- ✅ Expected competencies visualization per brief

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB with Mongoose ODM
- **Containerization**: Docker & Docker Compose
- **Testing**: Jest
- **Language Features**: ES6+, Higher-Order Functions (HOF)
- **API Testing**: Postman collections included

## 📦 Installation & Setup

### Prerequisites
- Node.js (v16+)
- Docker & Docker Compose
- MongoDB (if running locally)

### Using Docker (Recommended)

1. Clone the repository:
```bash
git clone https://github.com/med-more/gestion-de-comp-tences-2.git
cd gestion-de-comp-tences-2
```

2. Create environment files:
```bash
cp .env.example .env
```

3. Start all services:
```bash
docker-compose up -d
```

4. Verify services are running:
```bash
docker-compose ps
```

### Manual Setup

1. Install dependencies for each service:
```bash
# Competency Service
cd competency-service
npm install

# Brief Service
cd ../brief-service
npm install

# Learner Service
cd ../apprenant-service
npm install
```

2. Start MongoDB locally

3. Start each service:
```bash
# Terminal 1 - Competency Service
cd competency-service
npm run dev

# Terminal 2 - Brief Service
cd brief-service
npm run dev

# Terminal 3 - apprenant Service
cd learner-service
npm run dev
```

## 🔌 API Endpoints

### Competency Service (Port 3001)
```
GET    /competences              # List all competencies with calculated status
POST   /competences              # Create a new competency
PUT    /competences/:id/evaluation  # Update sub-competency evaluations
DELETE /competences/:id          # Delete a competency
```

### Brief Service (Port 3002)
```
GET    /briefs                   # List all briefs
POST   /briefs                   # Create a new brief
PUT    /briefs/:id               # Update a brief
DELETE /briefs/:id               # Delete a brief
POST   /briefs/:id/competencies  # Associate competencies to a brief
```

### Learner Service (Port 3003)
```
GET    /learners                 # List all learners
POST   /learners                 # Create a new learner
GET    /learners/:id/briefs      # Get assigned briefs for a learner
POST   /learners/:id/assignments # Assign brief to learner
POST   /rendus                   # Submit a new rendu (submission)
GET    /rendus/learner/:id       # Get submission history for a learner
```

## 🧪 Testing

### Run Tests
```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run tests in Docker
docker-compose exec competency-service npm test
docker-compose exec brief-service npm test
docker-compose exec learner-service npm test
```

### Test Structure
```
tests/
├── unit/
│   ├── controllers/
│   ├── models/
│   └── utils/
├── integration/
│   └── routes/
└── __mocks__/
```

## 📊 Data Models

### Competency Model
```javascript
{
  code: String,        // e.g., "C1", "C2"
  nom: String,         // Competency name
  sousCompetences: [{
    nom: String,
    statut: String     // "validée" | "non validée"
  }],
  statutGlobal: String // Calculated automatically
}
```

### Brief Model
```javascript
{
  titre: String,
  description: String,
  competences: [ObjectId], // References to competencies
  createdAt: Date,
  updatedAt: Date
}
```

### Learner & Rendu Models
```javascript
// Learner
{
  nom: String,
  email: String,
  briefs: [ObjectId] // Assigned briefs
}

// Rendu (Submission)
{
  apprenant: ObjectId,   // Reference to learner
  brief: ObjectId,       // Reference to brief
  contenu: String,       // Submission content
  dateRendu: Date,
  statut: String         // "soumis" | "validé" | "rejeté"
}
```

## 🔧 Configuration

### Environment Variables
```env
# Database
MONGODB_URI=mongodb://localhost:27017/competency-db
DB_NAME=competency-management

# Services Ports
COMPETENCY_SERVICE_PORT=3001
BRIEF_SERVICE_PORT=3002
LEARNER_SERVICE_PORT=3003

# Node Environment
NODE_ENV=development
```

## 📈 Modern JavaScript Features Used

- **ES6+ Syntax**: Arrow functions, destructuring, template literals
- **Async/Await**: For database operations and API calls
- **Higher-Order Functions**: Extensive use of `map()`, `filter()`, `reduce()`
- **Spread Operator**: For object manipulation
- **Modular Architecture**: ES6 modules and clean separation of concerns

## 🚀 Deployment

### Production Deployment
```bash
# Build production images
docker-compose -f docker-compose.prod.yml build

# Deploy to production
docker-compose -f docker-compose.prod.yml up -d
```

### Health Checks
Each service includes health check endpoints:
```
GET /health
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 API Documentation

Postman collection available at: `/docs/postman-collection.json`

Import this collection to test all endpoints with sample data.

## 🔍 Monitoring & Logging

- Application logs are available via Docker logs
- Health monitoring on `/health` endpoints
- Performance metrics collected for each service

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **404.js Development Team**
- **Project Lead**: [Mohammed baba]

## 📞 Support

For questions or issues:
- Open an issue on GitHub
- Contact the development team
- Check the documentation in `/docs`

---

**Built with ❤️ using modern JavaScript and containerized microservices architecture**
