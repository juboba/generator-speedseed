angular
.module('<%= appName %>')
.component('<%= componentName %>', {
  template: ` include('app/components/<%= componentName %>', '_tpl', 'html') `,

  controller() {

    this.$onInit = () => {
    }

  }
})
