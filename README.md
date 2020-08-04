# Playfab
Tool per la scrittura e il merge automatico di cloudscript. 

## Requisiti
NodeJS v12 o superiore

## Struttura
```
.
├─── .jsout -> contiene tutti i file src traspillai
├─── dist -> build finale da caricare su Playfab
├─── src -> cartella core del progetto
│   ├─── entrypoint -> contiene i file ts con le chiamate
│   └─── model -> contiene i file ts con i dati modello (variabili globali, definizione di classi...)
├─── index.ts -> contiene la logica di conversione
└─── ...
```

## Miglioramenti
- creare il file gitlab-ci.yml
- tuning struttura cartella
