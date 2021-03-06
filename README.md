### v.0.7.1

### English
- *Allow choice*
    - *Framework/Libs*
        - **AngularJS 1.5.5**
        - **jQuery 2.2.3**
        - **Polymer 1.0**
        - **React 15.0.2**
    
    ---

    - *Templates*
        - **https://github.com/ifedu/speedseed-multi-tic-tac-toe**
        - **https://github.com/ifedu/speedseed-todomvc**
    
    ---

- *Add*
    - *Automating tasks*
        - **Gulp**

    ---

    - *JS*
        - **BabelJs**

    ---

    - *Lints*
        - **Editorconfig**
        - **EsLint**

    ---

    - *Html*
        - **Jade**

    ---

    - *CSS*
        - **Stylus**

    ---
    
    - Files and folders start for _ no compile to deploy, perfect for includes properties
    - Files with .name.css .name.js .name.html precompile in app, perfect for includes files
    - Global properties for our jades with __global.js or a one file so name.jade _name.js
    - More than a simple seed, allow update the core of the project through npm run ss-update without affecting the development of the project

    ---

## Styleguide
- https://github.com/ifedu/styleguide-web Guide in spanish for Jade, JS(ES6) and Stylus

---

## Use
- *Once use in the Operating System*
    - Install libs in the Operating System
    - **npm install gulp -g**
    - **npm install yo -g**
    - **npm install generator-speedseed -g**

---

- *Once use in the project folder*
    - Launch generator and install dependencies
    - **yo speedseed**
    - **npm install**

---

- *In the project folder*
    - Compile project in -build
    - **npm run ss-compile**

    ---
    - Compile project in -build and launch project
    - **npm run ss-build**

    ---
    - Compile project minified in -dist and launch project
    - **npm run ss-dist**

    ---
    - Update generator, install dependencies and launch generator
    - **npm run ss-update**

    ---
    - Compile project in -reports and launch complexity code test plato
    - **npm run ss-reports**

    ---
    - Compile project in -build and launch unit test
    - **npm run ss-test**

    ---
    - Delete folders -build -dist -reports
    - **npm run ss-clean**

---

## Structure
- **.core** => *don't change this content folder, is updated with generator-speedseed next versions*
- **-build** => *code generated with gulp run, contain code of dev transpiled to html, css, es5. Folders and files _*are ignored*

---

- **app** => *development template*
    - **components** => *components*
    - **css** => *contain .styl files*
    - **js** => *contain .js files write with es6*
    - **views** => *contain .jade files*
    - **__global.js** => *properties inyects to all files .jade*
    - **_index.js** => *properties inyects to file index.jade*
    - **index.jade** => *index of the app*

---

- **.editorconfig** => *list of code rules for the IDE*
- **.eslintrc** => *list of code rules*
- **.gitignore** => *ignore files for git*
- **.yo-rc.json** => *created for yeoman for future updates*
- **gulpfile.js** => *call gulp tasks of -ss*
- **package.json** => *packages of npm and information of the project*



### Español
- *Permite elegir*
    - *Framework/Libs*
        - **AngularJS 1.5.5**
        - **jQuery 2.2.3**
        - **Polymer 1.0**
        - **React 15.0.2**
    
    ---

    - *Plantillas*
        - **https://github.com/ifedu/speedseed-multi-tic-tac-toe**
        - **https://github.com/ifedu/speedseed-todomvc**
    
    ---

- *Añade*
    - *Automatizar tareas*
        - **Gulp**

    ---

    - *JS*
        - **BabelJs**

    ---

    - *Lints*
        - **Editorconfig**
        - **EsLint**

    ---

    - *Html*
        - **Jade**

    ---

    - *CSS*
        - **Stylus**

    ---
    
    - Ficheros y carpetas que empiezan por _ no se compilan a build, perfecto para incluir propiedades
    - Ficheros con .name.css .name.js .name.html precompilan en app, perfecto para incluir ficheros
    - Mucho más que un simple seed, permite actualizar el núcleo del proyecto mediante npm run ss-update sin afectar al desarrollo del proyecto
    - Propiedades globales para nuestros jades con __global.js o a un fichero así nombre.jade _nombre.js

    ---

## Styleguide
- https://github.com/ifedu/styleguide-web Guiía en español para Jade, JS(ES6) y Stylus

---

## Uso
- *Usar una vez en el Sistema Operativo*
    - Instala librerías en el Sistema Operativo
    - **npm install gulp -g**
    - **npm install yo -g**
    - **npm install generator-speedseed -g**

---

- *Usar una vez en la carpeta del proyecto*
    - Lanza el generador e instalas las dependencias
    - **yo speedseed**
    - **npm install**

---

- *En la carpeta del proyecto*
    - Compila el proyecto en -build
    - **npm run ss-compile**

    ---
    - Compila el proyecto en -build y lo lanza
    - **npm run ss-deploy**

    ---
    - Compila el proyecto minificado en -dist y lo lanza
    - **npm run ss-dist**

    ---
    - Actualiza el generador, lo ejecuta e instala las dependencias
    - **npm run ss-update**

    ---
    - Compila el proyecto en -reports y lanza test de complejidad de código plato
    - **npm run ss-check**

    ---
    - Compila el proyecto en -build y lanza los test unitarios
    - **npm run ss-test**

    ---
    - Borra carpetas -build -dist -reports
    - **npm run ss-clean**
    
---

## Structure
- **.core** => *no cambiar el contenido de esta carpeta, es actualizado en futuras versiones de generator-speedseed*
- **-build** => *código generado con gulp run, contiene código de dev transpilado a html, css, es5. Carpetas y ficheros _* son ignorados*

---

- **app** => *plantilla de desarrollo*
    - **components** => *componentes*
    - **css** => *contiene  ficheros .styl*
    - **js** => *contiene ficheros .js escritos con es6*
    - **views** => *contiene ficheros .jade*
    - **__global.js** => *propiedades inyectadas a ficheros .jade*
    - **_index.js** => *propiedades inyectadas al fichero index.jade*
    - **index.jade** => *indice de la app*

---

- **.editorconfig** => *lista de reglas de código para el IDE*
- **.eslintrc** => *lista de reglas de código*
- **.gitignore** => *ignora ficheros para git*
- **.yo-rc.json** => *creado por yeoman para futuras actualizaciones*
- **gulpfile.js** => *llama a las tareas de gulp de -ss*
- **package.json** => *paquetes de npm e información del proyecto*