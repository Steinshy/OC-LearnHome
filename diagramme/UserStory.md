<h1 align="center">Learn@Home User Stories</h1>

## Élève — **Antoine Kreuder**
- Âge : 14 ans (classe de 3ᵉ)
- Centres d’intérêt : arts plastiques, manga, jeux vidéo  
- Objectif : consolider ses acquis afin d’aborder l’entrée au lycée dans de bonnes conditions, après les perturbations causées par la crise sanitaire et les absences répétées de son enseignante.

## Tuteur bénévole — **Yann Uliong**
- Âge : 64 ans, ingénieur retraité  
- Centres d’intérêt : bénévolat (Restos du Cœur), chorale, cuisine  
- Objectif : rendre les matières scientifiques accessibles et attrayantes, transmettre ses connaissances et accompagner l’élève de manière bienveillante.

<h2 align="center">Connexion &amp; Inscription</h2>

### Inscription — Création de compte

#### Cas nominal
**En tant que** nouvel utilisateur  
**Je souhaite** accéder au formulaire de création de compte depuis la page de connexion, puis saisir l’ensemble des informations requises  
**Afin de** créer mon compte et accéder à la plateforme.

#### Cas d’erreur
**En tant que** nouvel utilisateur  
**Je souhaite** soumettre le formulaire avec des données manquantes ou incorrectes  
**Afin de** recevoir un message d’erreur m’indiquant les corrections nécessaires pour finaliser mon inscription.

### Connexion — Accès à la plateforme

#### Identifiants invalides
**En tant que** utilisateur non connecté  
**Je souhaite** saisir mes identifiants et valider la connexion  
**Afin de** être informé en cas d’erreur et corriger mes informations.

#### Mot de passe oublié
**En tant que** utilisateur non connecté  
**Je souhaite** cliquer sur “Mot de passe oublié” et renseigner mon adresse e-mail  
**Afin de** recevoir un lien me permettant de réinitialiser mon mot de passe.

#### Connexion réussie
**En tant que** utilisateur non connecté  
**Je souhaite** saisir des identifiants valides  
**Afin de** accéder à mon tableau de bord.

<h2 align="center">Tableau de bord</h2>

#### Suivi de la messagerie
**En tant que** utilisateur connecté  
**Je souhaite** visualiser le nombre de messages non lus  
**Afin de** identifier rapidement les discussions nécessitant mon attention.

#### Suivi des tâches
**En tant que** utilisateur connecté  
**Je souhaite** afficher la liste de mes tâches  
**Afin de** connaître les actions à réaliser.

#### Suivi du calendrier
**En tant que** utilisateur connecté  
**Je souhaite** visualiser mes événements et rendez-vous à venir  
**Afin de** organiser efficacement mon temps.

<h2 align="center">Calendrier</h2>

#### Consultation du calendrier
**En tant que** utilisateur connecté  
**Je souhaite** accéder à la page du calendrier  
**Afin de** consulter mes événements et rendez-vous.

#### Ajout d’un événement
**En tant que** utilisateur connecté  
**Je souhaite** ouvrir une fenêtre d’ajout, renseigner les informations nécessaires et enregistrer  
**Afin de** créer un nouvel événement dans mon calendrier.

#### Suppression d’un événement
**En tant que** utilisateur connecté  
**Je souhaite** sélectionner un événement et le supprimer  
**Afin de** maintenir mon planning à jour.

<h2 align="center">Tâches</h2>

#### Accès aux tâches
**En tant que** utilisateur connecté  
**Je souhaite** consulter la page des tâches  
**Afin de** visualiser l’ensemble de mes actions à réaliser.

#### Consultation d’une tâche
**En tant que** utilisateur connecté  
**Je souhaite** sélectionner une tâche  
**Afin de** en afficher les détails.

#### Ajout d’une tâche
**En tant que** utilisateur connecté  
**Je souhaite** ouvrir une fenêtre d’ajout, remplir les informations nécessaires puis enregistrer  
**Afin de** créer une nouvelle tâche.

#### Suppression d’une tâche
**En tant que** utilisateur connecté  
**Je souhaite** supprimer une tâche existante  
**Afin de** maintenir ma liste de tâches à jour.

<h2 align="center">Chat</h2>

#### Accès à la messagerie
**En tant que** utilisateur connecté  
**Je souhaite** accéder à la page de chat  
**Afin de** consulter mes discussions.

#### Consultation d’un fil de discussion
**En tant que** utilisateur connecté  
**Je souhaite** sélectionner un contact  
**Afin de** afficher l’historique de nos échanges.

#### Envoi d’un message
**En tant que** utilisateur connecté  
**Je souhaite** ouvrir une fenêtre de saisie  
**Afin de** envoyer un message.

#### Envoi d’un fichier
**En tant que** utilisateur connecté  
**Je souhaite** joindre un fichier à mon message  
**Afin de** partager un document avec mon contact.

<h2 align="center">Gestion des contacts</h2>

#### Consultation des contacts
**En tant que** utilisateur connecté  
**Je souhaite** accéder à la liste de mes contacts  
**Afin de** gérer mes échanges avec les autres utilisateurs.

#### Ajout d’un contact
**En tant que** utilisateur connecté  
**Je souhaite** ouvrir une fenêtre d’ajout et renseigner les informations nécessaires  
**Afin de** ajouter un nouveau contact.

#### Modification ou suppression d’un contact
**En tant que** utilisateur connecté  
**Je souhaite** modifier ou supprimer un contact existant  
**Afin de** maintenir à jour ma liste de contacts.

<h2 align="center">Cas spécifiques</h2>

### Tuteur

#### Ajout d’une tâche pour l’élève
**En tant que** tuteur connecté  
**Je souhaite** ajouter une tâche destinée à mon élève  
**Afin de** structurer son travail et l’accompagner dans son apprentissage.

#### Suppression d’une tâche de l’élève
**En tant que** tuteur connecté  
**Je souhaite** supprimer une tâche assignée à mon élève  
**Afin de** ajuster son planning ou retirer une tâche devenue obsolète.

---

## Conclusion
**En résumé :**
Ces user stories sont la documentation fonctionnelle de Learn@Home, couvrant l'ensemble des besoins essentiels pour l’élève et le tuteur bénévole. Elles structurent le développement de la plateforme.

---

## Diagramme de Flux Utilisateur

```
                          ┌─────────────────┐
                          │ Non Connecté    │
                          └────────┬────────┘
                                   │
                    ┌──────────────┴──────────────┐
                    ▼                             ▼
              ┌──────────┐                ┌──────────────┐
              │ Connexion│                │ Inscription  │
              └────┬─────┘                └──────┬───────┘
                   │                             │
                   │                    Valider les infos
                   │                             │
                   │ Identifiants valides        │
                   └──────────────┬──────────────┘
                                  ▼
                          ┌─────────────────┐
                          │ Utilisateur     │
                          │ Connecté        │
                          └────────┬────────┘
                                   │
                ┌──────────────────┼──────────────────┐
                ▼                  ▼                  ▼
         ┌────────────┐      ┌──────────┐      ┌──────────────┐
         │ Tableau de │      │   Chat   │      │  Calendrier  │
         │   Bord     │      └──────────┘      └──────────────┘
         └──────┬─────┘            │                   │
                │                  ▼                   ▼
                │           ┌──────────────┐   ┌──────────────┐
                │           │ Voir Messages│   │ Voir Événements│
                │           │ Envoyer Msg  │   │ Créer Événement│
                │           │ Ajouter Contact  │ Modifier Evt │
                │           └──────────────┘   └──────────────┘
                ▼
         ┌──────────────┐
         │   Tâches     │
         └──────┬───────┘
                │
         ┌──────┴──────┐
         ▼             ▼
    ┌────────┐    ┌─────────┐
    │ Voir   │    │ Créer   │
    │ Tâches │    │ Tâche   │
    └────────┘    └─────────┘
```
