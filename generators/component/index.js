'use strict'

const config = require('../_config.js')

module.exports = require('yeoman-generator').Base.extend({
  initializing() {
    this.argument('name', {
      required: true,
      desc: 'The name of your component',
      type: 'String'
    })

    this.log(`We will be creating the ${this['name']} component`)
  },

  writing() {
    const create = config.create.bind(this)

    create('component.js', `./app/components/${this['name']}/main.js`, {
      appName: this.config.get('appName'),
      componentName: this['name']
    })

    //TODO: This should depend on the templating system you pick (Jade, EJS, etc)

    create('_tpl.html', `./app/components/${this['name']}/_tpl.html`, {
      appName: this.config.get('appName'),
      componentName: this['name']
    })

    create('_main.scss', `./app/components/${this['name']}/_main.scss`, {
      componentName: this['name']
    })
    
  }
})
