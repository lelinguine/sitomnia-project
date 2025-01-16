# Projet-TER

## chatbot-app
```
cd chatbot-app
```

### run
```
npm install
npm run dev
```

## services
```
cd services
```

### env
```
python -m venv env
env\Scripts\activate or .\env\Scripts\Activate.ps1
pip install -r requirements.txt

deactivate
```

### run
```
uvicorn main:app --reload
```