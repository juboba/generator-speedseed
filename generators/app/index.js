'use strict'

const config = require('../_config.js')
const generators = require('yeoman-generator')

module.exports = generators.Base.extend({
    paths() {
        config.paths.call(this)
    },

    constructor: function() {
      generators.Base.apply(this, arguments)
        
      this.argument('appName', {
        required: false,
        defaults: this.appname,
        type: 'String'
      })

      this.option('skip-install', {
        desc: 'Use this to skip dependency installation',
        defaults: false,
        type: 'Boolean'
      })

      this.config.set('appName', this['appName'])
    },

    prompting() {
        const done = this.async()

        const prompts = {
            default: 0,
            message: 'Template?',
            name: 'template',
            type: 'list',

            choices: [{
                name: 'No',
                value: 'no'
            }, {
                name: 'Multi-Tic-Tac-Toe',
                value: 'multi-tic-tac-toe'
            }, {
                name: 'TodoMVC',
                value: 'todomvc'
            }]
        }

        this.prompt(prompts, (answers) => {
            this.config.set('core-version', 'generator-speedseed version 0.7.1')

            console.log(this.config.get('core-version'))

            for (let answer in answers) {
                this.config.set(answer, answers[answer])
            }

            done()
        })
    },

    writing() {
        const create = config.create.bind(this)
        // ROOTS
        create('seed/core', './.core', false)

        create('seed/babelrc', './.babelrc')
        create('seed/core-config.js', './.core-config.js')
        create('seed/editorconfig', './.editorconfig')
        create('seed/eslintrc', './.eslintrc')
        create('seed/gitignore', './.gitignore')

        create('seed/gulpfile.js', './gulpfile.js')
        create('seed/package.json', './package.json', {
          appName: this.appName,
          description: this.description || ''
        })
    },

    end() {
        this.composeWith('speedseed:test')

        if (this.config.get('template') !== 'no') {
            this.composeWith('speedseed:framework')
        }

      if(! this.options['skip-install']) {
        this.installDependencies({
          npm: true,
          bower: false
        })
      }

    }
})
