# 💿 - Install *Application***
Guide d'installation et de lancement de l'application web.

### Download
Télécharger NodeJS sur [le site](https://nodejs.org/fr).

### Move
Déplacez-vous dans le dossier de l'application.
```bash
cd app
```

### Dependencies
Installez les dépendances nécessaires aux lancement de l'application.
```
npm install
```

### Run
Lancer l'application.
```
npm run dev
```

# 📀 Install *Model*
### ⚠️ **nécessaire au bon fonctionnement de l'application
Guide d'installation et de lancement du modèle d'intelligence artificielle.

### Download
Télécharger Ollama sur [le site](https://ollama.com/).

### Model
Télécharger le modèle de l'intelligence artificielle avec Ollama.
```
ollama pull llama3.2:3b
```
### ⚠️ optional
Arrêter Ollama. La prochaine étape peut ne pas fonctionner si Ollama est déjà démarré.<br><br>
**Linux / MacOS**
```bash
ps aux | grep ollama
pkill -f ollama
```
or **Windows (PowerShell)**
```bash
Get-Process | Where-Object { $_.Path -like "*ollama*" }
Get-Process | Where-Object { $_.Path -like "*ollama*" } | Stop-Process
```

### Run
Lancer le serveur Ollama avec le modèle d'intelligence artificielle.
```
ollama serve & ollama run llama3.2:3b
```

# 📀 Install *Services*
### ⚠️ **nécessaire au bon fonctionnement de l'application
Guide d'installation et de lancement des services.

### Move
Déplacez-vous dans le dossier des services.
```
cd services
```

### Environnement
Créez un environnement virtuel.

**Windows**
```
python -m venv env
```
or **Linux / MacOS**
```
python3 -m venv env
```

Lancez l'environnement virtuel créer précédemment.<br><br>
**Windows (Shell)**
```
env\Scripts\activate
```
or **Windows (PowerShell)**
```
.\env\Scripts\Activate.ps1
```
or **Linux / MacOS**
```
source env/bin/activate
```

### ⚠️ optional
Désactiver l'environnement.
```
deactivate
```

### Dependencies
Installez les dépendances nécessaires aux lancement des services.
```
pip install -r requirements.txt
```

### Run
Lancer les services.
```
uvicorn main:app --reload
```

# 🐋 - Docker
### Download
Télécharger Docker sur [le site](https://www.docker.com/get-started/).

### Run
You can use Docker:

**/app**
```bash
cd app
docker build -t sitomnia-project .
docker run -d -p 3000:3000 --name sitomnia-project sitomnia-project
```
and **/services**
You can use Docker:
```bash
cd services
docker build -t sitomnia-services .
docker run -d -p 8000:8000 --name sitomnia-services sitomnia-services
```
