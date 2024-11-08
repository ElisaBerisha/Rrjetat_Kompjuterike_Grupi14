# Rrjetat_Kompjuterike_Grupi14
##### Ky eshte nje projekt i punuar nga studente te vitit te dyte te Universitetit "Hasan Prishtina"-Fakulteti i Inxhinieris Elektrike dhe Kompjuterike, ne Lenden "Rrjeta Kompjuterike"-Prof.Blerim Rexha dhe Asc.Mergim Hoti.


## Pershkrim i projektit
##### Ky projekt përbëhet nga dy skripta në JavaScript për një server dhe një klient që komunikojnë përmes një lidhjeje TCP duke përdorur modulet net dhe fs të Node.js. Projekti synon të simulojë një sistem login-i me privilegje të ndryshme për përdoruesit dhe qasje në file. Më poshtë është një përshkrim i shkurtër për secilin skedar dhe funksionet kryesore që ata kryejnë.


## Përshkrimi i server.js
##### 1.Përcaktimi i Portit dhe Lidhjes: Serveri vendos portin e tij (58901) dhe pret lidhje nga klientët duke përdorur IP-në 0.0.0.0, që lejon akses nga çdo pajisje në rrjet.
##### 2.Lidhja e Klientëve: Për çdo klient që lidhet, serveri printon adresën e tij të IP-së dhe portin.
##### 3.Login dhe Privilegje të Ndryshme:
##### -Login-i: Kur klienti dërgon fjalën kyçe "login", serveri i kërkon përdoruesit emrin e përdoruesit dhe fjalëkalimin.
##### -Qasje të Plotë (read, write, execute): Nëse përdoruesi hyn me kredencialet vera veraLlugiqi, serveri i jep akses për të lexuar, shkruar dhe ekzekutuar file në server.
##### -Qasje të Kufizuar (read): Për përdorues të tjerë (p.sh., tringa tringaBaftiu, suhejla suhejlaHoxha), serveri lejon vetëm qasje për lexim të file readonly.txt.
#####4.Veprime të File-ve:
##### -Leximi i File-ve: Serveri lexon përmbajtjen e file-it readonly.txt dhe e dërgon te klienti me privilegjet përkatëse.
##### -Shkrimi në File: Klienti me qasje të plotë mund të krijojë dhe shtojë përmbajtje në një file specifik.
##### -Ekzekutimi i File-ve: Serveri ekzekuton një file të caktuar (nëse është i lejuar) për klientin me privilegje të plota.
##### 5.Mbyllja e Lidhjes: Kur klienti shkëputet, serveri shfaq një mesazh për mbylljen e lidhjes.


## Përshkrimi i client.js:













## Kontribues ne kete projekt jane:
##### -[Elisa Berisha ](https://github.com/ElisaBerisha)
##### -[Dea Limoni ](https://github.com/DeaLimoni)
##### -[Dion Bogaj ](https://github.com/dioni5)




