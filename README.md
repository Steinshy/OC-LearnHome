# OC-LearnHome

Ce dépôt contient les **livrables de conception** du projet **Learn@Home**

---

## Contenu du dépôt

- 📄 **Documents de cadrage**  
  Diagrammes de cas d’usage, user stories et critères d’acceptation.

- 🎨 **Maquettes**  
  Maquettes desktop et mobile du site Learn@Home.

- 📋 **Kanban**  
  Lien vers le tableau Kanban utilisé pour l’analyse et la planification du projet.

---

## Objectif

L'objectif de ce projet est de :
- analyser les besoins d'un client,
- proposer une solution fonctionnelle,
- structurer la conception avant le développement.

---

## CSS - Conventions de Layout

### Sidebar Navigation

Tous les pages utilisent une barre latérale de navigation fixed (250px) :
- Classe : `.nav-sidebar`
- Classes imbriquées : `.nav-sidebar-header`, `.nav-sidebar-logo`
- Design pattern : CSS Grid avec `position: fixed`

**Pages 2 colonnes** (Dashboard, Settings, Calendar, Tasks) :
- Layout : `grid-template-columns: 250px 1fr`
- Sidebar : `position: fixed; width: 250px; height: 100vh;`
- Main : `grid-column: 2; margin-left: 0;`

**Pages 3+ colonnes** (Chat) :
- Layout : `grid-template-columns: 250px 300px 1fr` avec `grid-template-areas`
- Tous les éléments utilisent `grid-area` pour le positionnement
- Aucun `position: fixed` - gestion pure Grid
