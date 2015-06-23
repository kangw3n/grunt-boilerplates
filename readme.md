## This is a Grunt boilerplates for personal uses.

This repo will do all the stuff for scaffolding a fresh projects to be watch by Grunt Task Runner. Simply by installing a node grunt-cli packages.

######Install grunt-cli global
```
$ npm install grunt-cli -g
```
| Task           | Details    |
| :------------- | :------------- |
| grunt-contrib-sass      | SASS to CSS      |
| grunt-contrib-jshint     | JavaScript hinting     |
| grunt-contrib-uglify     | JavaScript Minification      |
| grunt-contrib-watch     | Watch task changed      |
| grunt-contrib-requirejs     | R.js task     |
| grunt-browser-sync     | Live Reload     |

######Just run "grunt" in Bash or Terminal
```
$ grunt
```

#####NOTE:This Repo DO NOT produce any build folder as deployment uses.



####Below is a script files need to be add inside tilter path for bash.
For a better work flow of development, it's nice to have a default running task to be declare in a function inside the bash profile.
######Open the bash profile file in atom
```
$ atom ~/.bash_profile
```

######Insert the code below
```sh
function gruntBoiler {
  args=("$@")

  # clone repo
  git clone https://github.com/kangw3n/grunt-boilerplates.git ${args[0]}

  cd ${args[0]}

  # remove git repo
  # rm -rf .git

  #git init
  # git init

  #npm install
  npm install

  #bower install
  # bower install

}

```
Now we can always clone a grunt boilerplates and run all the npm install command in a single steps.
######Clone and install all dependency in 1 code.
```
$ gruntBoiler NAMEOFTHEFOLDER
```





Copyright (c) 2015 Copyright kangw3n All Rights Reserved.
