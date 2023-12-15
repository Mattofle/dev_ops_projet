# DevOps Mini-Projet 2
Travail de recherche , mettre en place de l'integration continue avec les GitHub Actions

## Informations
- N° de groupe : 5
- Membres du groupe : Arbureanu Teodor and Erismann Matteo


## Énoncé

### Pré-requis :
- Sur base de votre mini-projet 1 (TDD)
- Usage de [JEST](https://jestjs.io/docs/getting-started) obligatoire
- Utilisation pulls requests


### Ajouter ce fichier MD à votre mini-projet-1
Compléter les informations concernant votre numéro de groupe et membres du groupe

### Mettre en place une intégration continue
L'intégration continue doit se composer des étapes obligatoires suivantes (non-exhaustif):

    - Les dépendances doivent être installées
    - Une première étape indiquant l'heure de commencement de la pipeline doit être affichée
    - Le code doit être "formatté" correctement (Prettier)
    - Le code doit être "linté" correctement (Lint)
    - Le code doit être "testé" correctement ET le coverage doit être au-dessus de 80% (Jest)
    - Le code doit être "buildé" correctement
    - Une étape indiquant l'heure de fin de la pipeline doit être affichée
    - Une étape indiquant le string suivant "PIPELINE SUCCESS WITHOUT ERRORS" doit être affichée

### Enclencher l'intégration continue lors d'une Pull Request / Merge Request
Ouvrez une Pull Request / Merge Request 
Lors de l'ouverture et/ou de la modification de votre PR/MR vers la branche principale, l'intégration continue doit s'enclencher et les étapes doivent être respectées.
Merci de laisser une PR / MR ouverte afin que l'on puisse évaluer.


Liens utiles:
[GitHub Actions](https://docs.github.com/fr/actions)
[Jest coverage](https://www.valentinog.com/blog/jest-coverage/)

## Questions

- Décrivez brièvement ce que fait votre fichier YML.  
```bash
<UN fichier YML est un fichier de configuration, il va servire à décrire les étate de la pipeline afin de spécifier les dépendance, vérifier le format du code et configurer les Tests.>
```
- En particulier : à quoi sert le “on” ? dans votre fichier YML ?  Quelle est la différence entre “on push” et “on pull request”. Que conseilleriez-vous comme option parmi ces 2 options à un groupe de développeurs junior ? Pourquoi ? 
```bash
<- on : sert a spécifier a partir de quelle action la pipeline doit être executée>
<- on push : signifie que la pipeline sera déclanché à chaque commit>
<- on pull : signifie que la pipeline sera déclanché à chaque pull request>
<Je conseillerai a un dévlopper junior le on push car cela lui permettra de s assurer que ces commits soit correcte et que son code est alligné avec le reste de la team>
```
- Quelle est la différence entre run et run_on ?  Expliquez par rapport à votre pipeline.  
```bash
<run va executer une action de la pipeline, exemple : run: npm run lint va lancer la commande run lint>
<run_on va déclarer sur quelle machine virtuelle la pipeline doit s executer, dans notre fichier : runs-on: ubuntu-latest signifie qu elle doit s executer sur la dernière version de ubuntu>
```
- Quelle est la différence entre “use” et “run”. Expliquez par rapport à votre pipeline. 
```bash
<use est utilisé dans un step pour spécifier l action à exécuter, dans notre fichier on utilise les actions : actions/checkout@v4 pour extraire le code source du référentiel et actions/setup-node@v4 pour configurer l environnement Node.js>
<run est utilisé dans un step pour exécuter une ou des commandes shell, dans notre fichier on l utilise pour executer des commandes comme npm install, npm runt lint ou echo pour afficher des informations>
```
- Peut-on intervertir différentes étapes dans votre pipeline ? Que votre réponse soit oui ou non, expliquez par rapport à votre pipeline. 
```bash
<Oui, on peut par exemple intervertir le checking prettier avec les tests tdd. Mais, il est plus judicieux de d abord faire un check sur le formatage avant de lancer un check sur les tests.>
```
- Je veux ajouter un test de sécurité sur mon pipeline en exécutant le programme secure_app. Que devrais-je faire ?  Quelles questions devriez-vous vous poser ? 
```bash
<On rajoute une nouvelle étape dans le fichier yml avec un name et un run pour executer le chemin réel du programme secure_app.>
<On devrait se demander :> 
<- A quel moment il serait le plus optimal de faire ce test dans la pipeline ?>
<- Où est situé ce programme ?>
<- Quel est l objectif de ce test ?>
```
