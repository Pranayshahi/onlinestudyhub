# 🐳 Docker Setup Notes for OnlineStudyHub

This project is fully containerized to ensure that the **Frontend (React)** and **Backend (Node.js)** work perfectly together without manual installation of dependencies.

## 🚀 Quick Start

To start the entire project in one go:

```bash
docker-compose up --build
```

- **Frontend (Web):** [http://localhost:3000](http://localhost:3000)
- **Backend (API):** [http://localhost:5001](http://localhost:5001)

---

## 🛠 Features in Docker

1.  **Hot Reloading:** The `docker-compose.yml` mounts your local folder into the container. When you change code in `src/` or `server/`, the app will automatically refresh inside Docker.
2.  **Shared Environment:** Both the React app and the Node.js server run in the same container using `concurrently`.
3.  **Proxying:** The frontend is pre-configured in `package.json` to proxy API requests to the backend at port 5001.

## 📁 Key Files
- `Dockerfile`: Defines the Node.js 18 environment and installation steps.
- `docker-compose.yml`: Handles port mapping (3000 & 5001) and volume mounting for development.
- `.dockerignore`: Keeps the image small by skipping `node_modules` and the `mobile/` app folder.

## 📝 Viewing Logs
To see the logs from both the React app and the Server while they are running:

```bash
docker-compose logs -f
```

## 🛑 Stopping the App
To stop the containers:

```bash
docker-compose down
```

---

## 🔒 Production & SSL (HTTPS)
The "secure issue" on `https://www.onlinestudyhub.com/` occurs because the server needs a valid SSL certificate.

I have added an **Nginx Reverse Proxy** configuration to handle this:

1.  **Nginx Config:** Located at `nginx/production.conf`. It is set up to redirect all `http` traffic to `https`.
2.  **SSL Certificates:** The setup expects certificates in `/etc/letsencrypt/` (standard for Certbot).
3.  **Deployment:** 
    - On your production server, install **Certbot**.
    - Run: `sudo certbot certonly --standalone -d onlinestudyhub.com -d www.onlinestudyhub.com`
    - Start Docker: `docker-compose up -d --build`

Nginx will now securely serve the app over HTTPS, resolving the "Not Secure" browser warning.
