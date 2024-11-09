# Rrjetat_Kompjuterike_Grupi14
##### Ky eshte nje projekt i punuar nga studente te vitit te trete te Universitetit "Hasan Prishtina"-Fakulteti i Inxhinieris Elektrike dhe Kompjuterike, ne Lenden "Rrjeta Kompjuterike"-Prof.Blerim Rexha dhe Asc.Mergim Hoti.


## Pershkrim i projektit
##### Ky projekt përbëhet nga dy skripta në JavaScript për një server dhe një klient që komunikojnë përmes një lidhjeje TCP duke përdorur modulet net dhe fs të Node.js. Projekti synon të simulojë një sistem login-i me privilegje të ndryshme për përdoruesit dhe qasje në file. Më poshtë është një përshkrim i shkurtër për secilin skedar dhe funksionet kryesore që ata kryejnë.


## Përshkrimi i server.js
##### -Server TCP: Dëgjon për lidhje nga klientët dhe printon IP dhe portin e tyre.
##### -Login dhe Privilegje:
#####       -Qasje të Plotë (read, write, execute) për perdouresin elisa.
#####       -Qasje e Kufizuar (read) për përdoruesit e tjerë.
##### -Veprime të File-ve: Leximi, shkrimi dhe ekzekutimi i file-ve në varësi të privilegjeve.

## Përshkrimi i client.js:
##### Klient TCP: Lidhet me serverin dhe dërgon/lexon mesazhe përmes terminalit.
##### Veprime: Dërgon komanda për login dhe ndërvepron me serverin për të lexuar, shkruar ose ekzekutuar file sipas privilegjeve.

## Rezultati:
##### Ky projekt lejon klientët të lidhen me një server TCP dhe të kryejnë veprime mbi file bazuar në privilegje: përdoruesit me qasje të plotë mund të lexojnë, shkruajnë dhe ekzekutojnë file, ndërsa të tjerët mund të lexojnë vetëm. Klientët komunikojnë me serverin përmes komandave në terminal. Serveri menaxhon privilegjet dhe përgjigjet sipas kërkesave të klientëve.

## Kontribues ne kete projekt jane:
##### -[Elisa Berisha ](https://github.com/ElisaBerisha)
##### -[Dea Limoni ](https://github.com/DeaLimoni)
##### -[Dion Bogaj ](https://github.com/dioni5)




