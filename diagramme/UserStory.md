<h1 align="center">Learn@Home User Stories</h1>

## Élève — **Antoine Kreuder**
- Âge : 14 ans (classe de 3ᵉ)
- Centres d'intérêt : arts plastiques, manga, jeux vidéo
- Objectif : consolider ses acquis afin d'aborder l'entrée au lycée dans de bonnes conditions, après les perturbations causées par la crise sanitaire et les absences répétées de son enseignante.

## Tuteur bénévole — **Yann Uliong**
- Âge : 64 ans, ingénieur retraité
- Centres d'intérêt : bénévolat (Restos du Cœur), chorale, cuisine
- Objectif : rendre les matières scientifiques accessibles et attrayantes, transmettre ses connaissances et accompagner l'élève de manière bienveillante.

#### T001 — Inscription — Création de compte

##### T001.1-Cas nominal
**En tant que** nouvel utilisateur
**Je souhaite** saisir l'ensemble des informations requises
**Afin de** créer mon compte et accéder à la plateforme.

✅ **Succès :** Formulaire visible avec tous les champs (prénom, nom, email, mot de passe, rôle).
❌ **Échec :** Page ne charge pas ; champs manquants.

##### ✅ T001.2-Inscription réussie
**En tant que** nouvel utilisateur
**Je souhaite** saisir l'ensemble des informations requises et valider l'inscription
**Afin d'**afficher une notification de succès et être redirigé vers la page de tableau de bord.

✅ **Succès :** Notification affichée, compte créé, redirection vers tableau de bord.
❌ **Échec :** Soumission sans réponse ; redirection échouée ; pas de message d'erreur sur les champs invalides.

#### T002 — Connexion — Accès à la plateforme

##### ⭕ T002.1-Cas nominal
**En tant que** utilisateur non connecté
**Je souhaite** saisir des identifiants valides
**Afin de** pouvoir me connecter à la plateforme.

✅ **Succès :** Champs email/mot de passe visibles ; bouton Connexion ; lien "Mot de passe oublié".
❌ **Échec :** Page ne charge pas ; champs absents.

##### ✅ T002.2-Connexion réussie
**En tant que** utilisateur ayant saisi des identifiants valides
**Je souhaite** saisir mes identifiants et valider la connexion
**Afin d'**afficher une notification de succès et être redirigé vers la page de tableau de bord.

✅ **Succès :** Notification affichée, redirection vers tableau de bord selon le rôle.
❌ **Échec :** Bouton ne répond pas ; redirection échouée ; pas de message d'erreur.

##### ⭕ T002.3-ÉLÈVE/TUTEUR — Déconnexion
**En tant que** utilisateur connecté
**Je souhaite** cliquer sur "Déconnexion"
**Afin de** fermer ma session et sécuriser l'accès à mon compte.

✅ **Succès :** Session fermée, redirection vers connexion, accès protégé révoqué.
❌ **Échec :** Bouton inactif ; utilisateur reste connecté ; redirection échouée.

#### T003 — Mot de passe oublié

##### ⭕ T003.1-Cas nominal
**En tant que** utilisateur non connecté
**Je souhaite** renseigner mon adresse e-mail
**Afin de** recevoir un email me permettant de réinitialiser mon mot de passe

✅ **Succès :** Notification "Email envoyé", redirection vers connexion.
❌ **Échec :** Aucun retour ; message d'erreur.

##### ⭕ T003.2-ÉLÈVE/TUTEUR — Réinitialisation effective
**En tant que** utilisateur ayant reçu le lien de réinitialisation par email
**Je souhaite** saisir mon nouveau mot de passe via le lien reçu
**Afin de** réinitialiser mon mot de passe et retrouver l'accès à mon compte.

✅ **Succès :** Formulaire accessible via lien ; nouveau mot de passe + confirmation ; notification ; redirection.
❌ **Échec :** Lien expiré sans message ; confirmation non vérifiée ; échec sans cause indiquée.

#### T004 — Tableau de bord

##### ⭕ T004.1-ÉLÈVE/TUTEUR — Suivi de la messagerie
**En tant que** élève connecté
**Je souhaite** visualiser le nombre de messages non lus
**Afin de** identifier rapidement les messages nécessitant mon attention.

✅ **Succès :** Badge/compteur messages non lus visible et à jour.
❌ **Échec :** Compteur à zéro malgré messages ; non mis à jour.

##### ⭕ T004.2-ÉLÈVE/TUTEUR — Suivi des tâches
**En tant que** élève connecté
**Je souhaite** afficher la liste de mes tâches
**Afin de** connaître les tâches à réaliser.

✅ **Succès :** Résumé tâches avec statut (à faire, en cours, terminée).
❌ **Échec :** Bloc vide malgré tâches ; bloc absent.

##### ⭕ T004.3-ÉLÈVE/TUTEUR — Suivi du calendrier
**En tant que** élève connecté
**Je souhaite** visualiser mes événements et rendez-vous à venir
**Afin de** connaître les événements et rendez-vous à venir.

✅ **Succès :** Événements à venir triés par date (titre, heure).
❌ **Échec :** Aucun événement affiché ; bloc absent.

##### ⭕ T004.4-ÉLÈVE/TUTEUR — Vue d'ensemble
**En tant que** élève ou tuteur connecté
**Je souhaite** visualiser un tableau de bord récapitulatif
**Afin de** avoir une vue d'ensemble de mes activités.

✅ **Succès :** Tous les blocs chargés avec données cohérentes.
❌ **Échec :** Tableau vide malgré données ; page ne charge pas.

#### T005 — Chat

##### ⭕ T005.1-ÉLÈVE/TUTEUR — Accès à la messagerie
**En tant que** élève ou tuteur connecté
**Je souhaite** accéder à la page de chat
**Afin de** consulter mes discussions avec mon tuteur.

✅ **Succès :** Liste conversations avec nom, avatar, dernier message.
❌ **Échec :** Page ne charge pas ; liste vide ; chargement infini.

##### ⭕ T005.2-ÉLÈVE/TUTEUR — Consultation d'un fil de discussion
**En tant que** élève ou tuteur connecté
**Je souhaite** sélectionner un contact (mon tuteur ou mon élève)
**Afin d'**afficher l'historique de nos échanges.

✅ **Succès :** Historique complet, ordre chronologique, horodatage, distinction envoyé/reçu.
❌ **Échec :** Messages absents ; historique tronqué.

##### ⭕ T005.3-ÉLÈVE/TUTEUR — Envoi d'un message
**En tant que** élève ou tuteur connecté
**Je souhaite** ouvrir une fenêtre de saisie
**Afin de** envoyer un message à mon tuteur.

✅ **Succès :** Saisie + Envoyer/Entrée → message affiché avec horodatage.
❌ **Échec :** Envoi ne part pas ; champ inaccessible ; message disparaît au rechargement.

##### ⭕ T005.4-ÉLÈVE/TUTEUR — Envoi d'un fichier
**En tant que** élève ou tuteur connecté
**Je souhaite** joindre un fichier à mon message
**Afin de** partager un document ou un devoir avec mon tuteur.

✅ **Succès :** Types et limite indiqués ; prévisualisation ; fichier visible comme lien.
❌ **Échec :** Refus sans explication ; limite non indiquée ; fichier absent après envoi.

##### ⭕ T005.5-ÉLÈVE/TUTEUR — Consultation de la liste des contacts
**En tant que** utilisateur connecté
**Je souhaite** visualiser ma liste de contacts
**Afin de** connaître les personnes avec lesquelles je peux échanger.

✅ **Succès :** Liste avec nom, avatar, statut ; distinction actifs/non contactés.
❌ **Échec :** Liste vide ; ne charge pas.

##### ⭕ T005.6-ÉLÈVE/TUTEUR — Consultation des informations détaillées d'un contact
**En tant que** utilisateur connecté
**Je souhaite** sélectionner un contact et cliquer sur "Voir les informations"
**Afin de** consulter les informations détaillées de ce contact.

✅ **Succès :** Modale avec nom, rôle, email.
❌ **Échec :** Rien au clic ; modale vide.

##### ⭕ T005.7-ÉLÈVE/TUTEUR — Ajout d'un contact
**En tant que** utilisateur connecté
**Je souhaite** ouvrir une fenêtre d'ajout et renseigner les informations nécessaires
**Afin de** ajouter un nouveau contact.

✅ **Succès :** Formulaire ouvert ; validation OK ; contact visible dans la liste.
❌ **Échec :** Formulaire ne s'ouvre pas ; validation sans indication ; contact absent.

##### ⭕ T005.8-ÉLÈVE/TUTEUR — Suppression d'un contact
**En tant que** utilisateur connecté
**Je souhaite** sélectionner un contact et cliquer sur "Supprimer"
**Afin de** supprimer le contact de ma liste.

✅ **Succès :** Confirmation demandée ; contact disparaît ; conversation archivée.
❌ **Échec :** Contact reste visible ; suppression sans confirmation ; erreur bloquante.

##### ⭕ T005.9-ÉLÈVE/TUTEUR — Modification d'un contact
**En tant que** utilisateur connecté
**Je souhaite** sélectionner un contact et cliquer sur "Modifier"
**Afin de** mettre à jour les informations de ce contact dans ma liste.

✅ **Succès :** Formulaire pré-rempli ; modifications enregistrées ; liste à jour.
❌ **Échec :** Formulaire absent/vide ; modifications non sauvegardées ; erreur sans détail.

#### T006 — Calendrier

##### ⭕ T006.1-ÉLÈVE/TUTEUR — Consultation du calendrier
**En tant que** élève ou tuteur connecté
**Je souhaite** accéder à la page du calendrier
**Afin de** consulter mes événements et rendez-vous.

✅ **Succès :** Mois affiché ; vues mensuelle/hebdo/journalière ; types d'événements distincts.
❌ **Échec :** Ne charge pas ; vide malgré événements ; types non distinguables.

##### ⭕ T006.2-ÉLÈVE/TUTEUR — Consultation d'un événement ou rendez-vous
**En tant que** élève ou tuteur connecté
**Je souhaite** sélectionner un événement ou rendez-vous
**Afin de** consulter les détails de l'événement ou rendez-vous.

✅ **Succès :** Modale avec titre, date, heure, description, participants.
❌ **Échec :** Rien au clic ; modale vide.

##### ⭕ T006.3-ÉLÈVE/TUTEUR — Création d'un événement ou rendez-vous
**En tant que** élève ou tuteur connecté
**Je souhaite** ajouter un événement ou rendez-vous
**Afin de** planifier mes activités et organiser mon agenda.

✅ **Succès :** Formulaire rempli ; validation OK ; événement visible à la bonne date.
❌ **Échec :** Soumission échouée ; validation sans indication ; événement absent ou mauvaise date.

##### ⭕ T006.4-ÉLÈVE/TUTEUR — Suppression d'un événement ou rendez-vous
**En tant que** élève ou tuteur connecté
**Je souhaite** supprimer un événement ou rendez-vous
**Afin de** maintenir mon calendrier à jour en supprimant les événements annulés ou obsolètes.

✅ **Succès :** Confirmation demandée ; événement disparaît.
❌ **Échec :** Événement reste visible ; suppression sans confirmation ; erreur bloquante.

##### ⭕ T006.5-ÉLÈVE/TUTEUR — Modification d'un événement ou rendez-vous
**En tant que** élève ou tuteur connecté
**Je souhaite** sélectionner un événement et cliquer sur "Modifier"
**Afin de** mettre à jour les informations de l'événement (titre, date, heure, description).

✅ **Succès :** Formulaire pré-rempli ; modifications enregistrées ; calendrier à jour.
❌ **Échec :** Formulaire absent/vide ; modifications non sauvegardées ; calendrier non mis à jour.

#### T007 — Tâches

##### ⭕ T007.1-ÉLÈVE/TUTEUR — Accès à la page des tâches
**En tant que** élève ou tuteur connecté
**Je souhaite** accéder à la page des tâches
**Afin de** visualiser l'ensemble de mes devoirs à réaliser.

✅ **Succès :** Liste tâches par statut (à faire, en cours, terminée) ; titre, échéance, priorité.
❌ **Échec :** Page ne charge pas ; liste vide.

##### ⭕ T007.2-ÉLÈVE/TUTEUR — Consultation des détails d'une tâche
**En tant que** élève ou tuteur connecté
**Je souhaite** sélectionner une tâche pour voir ses détails
**Afin de** consulter les détails de la tâche.

✅ **Succès :** Modale avec titre, description, échéance, priorité, statut.
❌ **Échec :** Rien au clic ; modale vide.

##### ⭕ T007.3-ÉLÈVE — Ajout d'une tâche
**En tant que** élève connecté
**Je souhaite** ajouter une nouvelle tâche personnelle (devoir, révision, etc.)
**Afin de** ajouter une tâche à ma liste de tâches.

✅ **Succès :** Formulaire rempli ; validation OK ; tâche visible avec statut "À faire".
❌ **Échec :** Soumission échouée ; champs obligatoires non identifiés ; tâche absente.

##### ⭕ T007.4-TUTEUR — Ajout d'une tâche
**En tant que** tuteur connecté
**Je souhaite** ajouter une tâche à la liste de tâches tout en assignant un élève
**Afin de** structurer le travail de l'élève et l'accompagner dans son apprentissage.

✅ **Succès :** Formulaire + sélection élève ; tâche visible pour tuteur et élève assigné.
❌ **Échec :** Liste élèves absente/vide ; assignation silencieuse ; tâche absente pour l'élève.

##### ⭕ T007.5-ÉLÈVE/TUTEUR — Edition d'une tâche
**En tant que** élève ou tuteur connecté
**Je souhaite** sélectionner une tâche et cliquer sur "Modifier"
**Afin de** modifier les informations de la tâche.

✅ **Succès :** Formulaire pré-rempli ; modifications enregistrées ; liste à jour.
❌ **Échec :** Formulaire vide ; modifications non sauvegardées ; erreur sans détail.

##### ⭕ T007.6-ÉLÈVE/TUTEUR — Suppression d'une tâche
**En tant que** élève ou tuteur connecté
**Je souhaite** sélectionner une tâche et cliquer sur "Supprimer"
**Afin de** supprimer la tâche de ma liste.

✅ **Succès :** Confirmation demandée ; tâche disparaît ; notification affichée.
❌ **Échec :** Tâche reste visible ; suppression sans confirmation ; erreur bloquante.

##### ⭕ T007.7-ÉLÈVE/TUTEUR — Marquage du statut de complétude
**En tant que** élève ou tuteur connecté
**Je souhaite** marquer une tâche comme complétée
**Afin de** suivre ma progression et savoir ce qui reste à faire.

✅ **Succès :** Clic → statut "Terminée" ; progression mise à jour.
❌ **Échec :** Statut inchangé ; changement non conservé ; tâche disparaît sans indication.

#### T008 — Paramètres

##### ⭕ T008.1 — Accès à la page des paramètres
**En tant que** utilisateur connecté
**Je souhaite** accéder à la page des paramètres
**Afin de** gérer mes préférences et informations de compte.

✅ **Succès :** Toutes les sections visibles ; navigation fonctionnelle.
❌ **Échec :** Page ne charge pas ; sections absentes ; navigation cassée.

##### ⭕ T008.2 — Mise à jour des informations personnelles
**En tant que** utilisateur connecté
**Je souhaite** mettre à jour mon prénom, nom, email et téléphone
**Afin de** maintenir mon profil à jour.

✅ **Succès :** Modifications validées ; notification ; profil à jour.
❌ **Échec :** Sauvegarde échouée ; champs réinitialisés ; modifications non détectées.

##### ⭕ T008.3 — Modification du mot de passe
**En tant que** utilisateur connecté
**Je souhaite** changer mon mot de passe en saisissant mon mot de passe actuel et un nouveau mot de passe
**Afin de** sécuriser l'accès à mon compte.

✅ **Succès :** Actuel + nouveau + confirmation ; notification ; prochaine connexion avec nouveau.
❌ **Échec :** Mot de passe actuel erroné accepté ; confirmation non vérifiée ; échec sans message.

##### ⭕ T008.4 — Configuration des préférences de notification
**En tant que** utilisateur connecté
**Je souhaite** gérer les types de notifications (messages, tâches, événements) et les canaux (email, push)
**Afin de** recevoir uniquement les alertes qui me sont pertinentes.

✅ **Succès :** Options activables/désactivables ; préférences sauvegardées ; notifications respectées.
❌ **Échec :** Options inactives ; préférences non conservées ; notifications persistent.

##### ⭕ T008.5 — Ajustement des préférences d'affichage
**En tant que** utilisateur connecté
**Je souhaite** modifier mes préférences de langue, fuseau horaire et thème d'affichage
**Afin de** personnaliser mon expérience utilisateur.

✅ **Succès :** Préférences sélectionnées ; application immédiate ; conservées au rechargement.
❌ **Échec :** Non appliquées ; perdues au rechargement ; options insuffisantes.

##### ⭕ T008.6 — Gestion de la confidentialité et des données
**En tant que** utilisateur connecté
**Je souhaite** contrôler la visibilité de mon profil, le partage de données et les communications marketing
**Afin de** gérer ma vie privée et mes préférences de communication.

✅ **Succès :** Options configurées ; préférences sauvegardées ; confirmation affichée.
❌ **Échec :** Options confuses ; préférences non conservées ; pas de confirmation.

##### ⭕ T008.7 — Demande de téléchargement des données personnelles
**En tant que** utilisateur connecté
**Je souhaite** cliquer sur "Télécharger mes données" et recevoir une notification confirmant ma demande
**Afin de** obtenir par email un lien pour télécharger une copie de mes données personnelles.

✅ **Succès :** Notification "Demande prise en compte" ; email avec lien dans le délai.
❌ **Échec :** Pas de notification ; email non reçu ; lien absent ou expiré.

##### ⭕ T008.8 — Demande de suppression du compte
**En tant que** utilisateur connecté
**Je souhaite** cliquer sur "Supprimer mon compte" et recevoir une notification confirmant la suppression
**Afin de** supprimer définitivement mon compte et être redirigé vers la page de connexion.

✅ **Succès :** Confirmation modale ; compte désactivé ; redirection vers connexion.
❌ **Échec :** Suppression sans confirmation ; compte reste accessible ; pas de redirection.
