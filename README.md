# Rrjetat_Kompjuterike_Grupi14
##### Ky eshte nje projekt i punuar nga studente te vitit te trete te Universitetit "Hasan Prishtina"-Fakulteti i Inxhinieris Elektrike dhe Kompjuterike, ne Lenden "Rrjeta Kompjuterike"-Prof.Blerim Rexha dhe Asc.Mergim Hoti.


## Pershkrim i projektit
##### Ky projekt është një aplikacion server-klient i ndërtuar me Node.js, i cili krijon një server TCP që lejon klientët të lidhen dhe të kryejnë veprime të ndryshme mbi skedarët, si lexim, shkrim, dhe ekzekutim, bazuar në privilegjet e përdoruesit. Përdoruesi mund të hyjë në sistem përmes komandës "login" dhe më pas, në bazë të emrit të përdoruesit që fut, i caktohen privilegje të ndryshme. 

##### Ky projekt përdor Node.js me modulin net për të krijuar lidhjen server-klient, fs për të menaxhuar skedarët, dhe child_process për ekzekutimin e komandave.


## Skedarët
##### server.js: Skedari kryesor që krijon serverin dhe përpunon kërkesat e klientit.
##### client.js: Skedari që lidhet me serverin dhe mundëson ndërveprimin e përdoruesit me serverin përmes komandave të tastierës.
##### readonly.txt: Një skedar që përdoret vetëm për lexim, ku përdoruesit me privilegje shkrimi mund të kenë qasje.
##### write.txt: Një skedar që përdoret vetëm për shkrim, ku përdoruesi me privilegje të shkrimit mund të shtojë përmbajtje.

## Përshkrimi i server.js
##### Serveri ofron një mekanizëm login, ku përdoruesit mund të futen me emrat elisa, dea, ose dion. Në varësi të përdoruesit u caktohen privilegje të ndryshme:
##### -Elisa: Ka qasje për të lexuar, shkruar, dhe ekzekutuar.
 ##### -Dea dhe Dion: Kanë vetëm privilegje leximi.

### Funksionet Kryesore
 ##### -Leximi i Skedarëve: Të gjithë përdoruesit mund të lexojnë skedarin readonly.txt duke shkruar komandën "read".
##### -Shkrimi në Skedar: Vetëm përdoruesi elisa ka privilegjin të shkruajë në skedarë të tjerë dhe të shtojë përmbajtje në skedarë të specifikuar.
##### -Ekzekutimi i Skedarëve: Vetëm përdoruesi elisa mund të ekzekutojë skedarë të tjerë në server duke përdorur komandën "execute".

##### Serveri është i konfiguruar për të pranuar deri në 10 lidhje të klientëve njëkohësisht
### Si Menaxhohen Lidhjet e Shumta
##### Kur një klient i ri lidhet me serverin:

##### -Serveri pranon lidhjen dhe krijon një sesion të veçantë për atë klient, duke i lejuar secilit klient të kryejë veprime të pavarura nga të tjerët.
##### -Në rast se arrin limitin prej 10 klientësh, serveri nuk do të pranojë lidhje të reja deri sa të mbyllet një lidhje ekzistuese.




## Pershkrimi i client.js:
##### Klienti lidhet me serverin dhe i lejon përdoruesit të fusë komanda për të kryer veprime të ndryshme. Pas lidhjes, klienti mund të fusë komandën "login" për të filluar sesionin e përdoruesit. Pas login, klienti i përgjigjet kërkesave të serverit bazuar në komandat dhe privilegjet e caktuara të përdoruesit.

### Hapat për Përdorim
 ##### -Filloni Serverin duke ekzekutuar node server.js.
 ##### -Lidheni Klientin duke ekzekutuar node client.js dhe shkruani komandën "login" për të nisur procesin e kyçjes.
##### Veprimet që mund të kryeni:
 ##### -Për elisa: Komandat "write", "execute", dhe "read" janë të disponueshme.
 ##### -Për dea dhe dion: Mund të përdorni vetëm komandën "read" për të lexuar readonly.txt..

 ###  Ky README përshkruan funksionalitetin e projektit, përbërësit dhe hapat e përdorimit.

## Kontribues ne kete projekt jane:
##### -[Elisa Berisha ](https://github.com/ElisaBerisha)
##### -[Dea Limoni ](https://github.com/DeaLimoni)
##### -[Dion Bogaj ](https://github.com/dioni5)




