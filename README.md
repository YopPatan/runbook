##Runbook

###Intalación Test

* Descargar e instalar Git
* Descargar e instalar Node.js
* Descargar e instalar SoapUI
* Descargar respositorio

`git clone git@github.com:YopPatan/runbook.git runbook`

* Configurar Json Mock
  * Abrir SoapUI => File => Import Project
  * Seleccionar archivo dentro del repositorio runbook-mock.xml
  * Se desplegara el proyecto
  * Seleccionar archivo runbook y poner Play

* Instalar dependencias

`npm install`

`npm install ionic-cli`

`npm install moment`

Nuevo 2018-07-06

`ionic cordova plugin add cordova-sqlite-storage`

`npm install --save @ionic/storage`

`ionic cordova plugin add call-number`

`npm install @ionic-native/call-number`

* Ejecutar aplicacion

`ionic serve`

La url donde se despliega el proyecto es:

http://localhost:8100/runbook
