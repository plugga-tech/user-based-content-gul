# User Based Content
## THE MONGOOOOSE BLOG
### Beskrivning 
Vi har fått i uppdrag att skapa en användarbaserad plattform där en användare har möjligheten att registrera sig, logga in och skapa innehåll. Innehållet ska vara baserat på en resurs i vårt Express-API. Användardatan ska även den baseras på en egen resurs, där lösenordet är krypterat. Samtligt innehåll som skapas, förändras eller tas bort ska sparas till en MongoDB databas. Innehållet som en användare skapar får endast lov att ändras eller tas bort av skaparen. Plattformen ska innehålla en klientapplikation där samtliga operationer som nämnts ovan är genomförbara. Dessutom ska innehållet på något sätt presenteras i gränssnittet och vara synligt för alla - även om man inte är inloggad.

Vi valde att skapa en blogg där man kan skapa ett användarkonto, logga in, skapa, uppdatera och radera sina egna blogginlägg. Är man inte inloggad så kan man fortfarande se alla bloggare samt allas inlägg. 

Projektmedlemmar: Therese Hagwall, Tony Hagwall, Felix Anneblad, Matias Bengtsson, Jesper Flood & Sebastian Håkansson.

### Teknik

- Html
- Css
- Javascript
- Node.js
- Express
- Mongoose

### Klona ner till din lokalamiljö 

Du behöver skapa en egen databas, antingen en lokal databas eller via t.ex. Mongo Atlas.
Sedan behöver du också ha node installerat på datorn. Har du inte detta så kan du ladda ner node här `https://nodejs.org/en/download`. Och sedan följa anvisningarna.

Öppna din favorit terminal, t.ex. git bash.  
Navigera till mappen där du vill lägga repot. 

1. Kör `git clone https://github.com/plugga-tech/user-based-content-gul.git`
2. Navigera till repots mapp genom `cd user-based-content-gul`.
3. Navigera till backendmappen genom `cd backend`.
4. Installera npm packages genom `npm i`.
5. Kör `code .` (Om du använder visual studie code, annars, kör koden med ditt favorit program)
6. Skapa en .env fil i backend mappen.
7. Om du kör en databas via Mongo Atlas, lägg till denna raden i .env `DB_URL = "mongodb+srv://<ditt användarnamn>:<ditt lösenord>.ltcnbvw.mongodb.net/"`. Har du en lokal databas, läggar du in adressen till den istället.
8. I terminalen kör `nodemon start`.
9. Öppna webbsidan med live server om du har de installerat annars via htmlfilen.
10. Har du en localstorage "user" sparad i din webbläsare sedan tidigare så radera den.


### Följ oss!

-   Therese Hagwalls [Github Profil](https://github.com/ThereseHagwall)
-   Jesper Floods [Github Profil](https://github.com/Bambyyyy)
-   Tony Hagwalls [Github Profil](https://github.com/Hagwall86)
-   Matias Bengtssons [Github Profil](https://github.com/Mrmbengan)
-   Felix Anneblads [Github Profil](https://github.com/AnnebladFelix)
-   Sebastian Håkanssons [Github Profil](https://github.com/sebbehakansson)