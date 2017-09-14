// import angular from 'angular';
import uirouter from 'angular-ui-router';
// import sftree from 'sf.treeRepeat'
import menuComponent from './src/tree-menu/tree-menu'
var app = angular.module('reference',[uirouter,'sf.treeRepeat'])
app.component('treeMenu', menuComponent)
