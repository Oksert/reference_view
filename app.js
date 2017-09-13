// import angular from 'angular';
import uirouter from 'angular-ui-router';
// import sftree from 'sf.treeRepeat'
import menuComponent from './src/tree-menu/tree-menu'
import articleComp from './src/article-comp/article-comp'
var app = angular.module('reference',[uirouter,'sf.treeRepeat'])
app.component('apiApp', {
    controller: controller,
    template:
    `<tree-menu></tree-menu>`
})
app.component('treeMenu', menuComponent)
app.component('articleComp', articleComp)
controller.$inject = ['$interval'];
function controller($interval){
    var $ctrl = this;
    $ctrl.currentArticle = '1'
    $ctrl.setCurrentArticle = (link_name) => {
        $ctrl.currentArticle = link_name
    }
    $ctrl.getCurrentArticle = () => {
        return  $ctrl.currentArticle
    }
    // $interval(()=>{
    //     console.log('$ctrl.currentArticle',$ctrl.currentArticle)
    // },1000)
    // $ctrl.$doCheck = () => {
    //     console.log('$ctrl.currentArticle',$ctrl.currentArticle)
    // }

}