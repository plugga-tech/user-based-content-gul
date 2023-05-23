# User Based Content
## THE MONGOOOOSE BLOG
### Beskrivning 
Vi har fått i uppdrag att skapa en användarbaserad plattform där en användare har möjligheten att registrera sig, logga in och skapa innehåll. Innehållet ska vara baserat på en resurs i vårt Express-API. Användardatan ska även den baseras på en egen resurs, där lösenordet är krypterat. Samtligt innehåll som skapas, förändras eller tas bort ska sparas till en MongoDB databas. Innehållet som en användare skapar får endast lov att ändras eller tas bort av skaparen. Plattformen ska innehålla en klientapplikation där samtliga operationer som nämnts ovan är genomförbara. Dessutom ska innehållet på något sätt presenteras i gränssnittet och vara synligt för alla - även om man inte är inloggad.

Vi valde att skapa en blogg där man kan skapa ett användarkonto, logga in, skapa, uppdatera och radera sina egna blogginlägg. Är man inte inloggad så kan man fortfarande se alla bloggare samt allas inlägg. 

Projektmedlemmar: Therese Hagwall, Tony Hagwall, Felix Anneblad, Matias Bengtson, Jesper Flood & Sebastian Håkansson.

### Teknik

- Html
- Css
- Javascript
- Node.js
- Express
- Mongoose

### Klona ner till din lokalamiljö 

Du behöver skapa en egen databas, antingen en lokaldatabas eller via t.ex. Mongo Atlas.

Öppna din favorit terminal, t.ex. git bash. Navigera till mappen där du vill lägga repot. 

1. `git clone https://github.com/plugga-tech/user-based-content-gul.git`
2. Gå till repots mapp
3. `code .` (Om du använder visual studie code, annars, kör koden med ditt favort program)
4. Skapa en .env fil i backend mappen.
5. Om du kör en databas via Mongo Atlas, lägg till denna raden i .env `DB_URL = "mongodb+srv://<ditt användarnamn>:<ditt lösenord>.ltcnbvw.mongodb.net/"`. Har du en lokal databas, läggar du in adressen till den.
6. Installera npm packages genom `npm i`.


### Följ oss!

-   Therese Hagwalls [Github Profil](https://github.com/ThereseHagwall)
-   Jesper Floods [Github Profil](https://github.com/Bambyyyy)
-   Tony Hagwalls [Github Profil](https://github.com/Hagwall86)
-   Matias Bengtsons [Github Profil](https://github.com/Mrmbengan)
-   Felix Anneblads [Github Profil](https://github.com/AnnebladFelix)
-   Sebastian Håkanssons [Github Profil](https://github.com/sebbehakansson)