import  templateUrl from './template.html'

export default {
    template: templateUrl,
    require: {api: '^apiApp'},
    controller: articleCtrl,
    bindings : {
        art: '<'
    }
}
function articleCtrl () {
    var $ctrl = this
    $ctrl.$onInit = () => {
        console.log(this.api.getCurrentArticle())
    }
    $ctrl.$onChanges = (changeObj) => {
        console.log(changeObj,$ctrl.art)
    }
    $ctrl.$doCheck = () => {
        console.log($ctrl.art)
    }
}