import angular from 'angular';
import uirouter from 'angular-ui-router';
import menuComponent from './tree-menu/tree-menu'
var app = angular.module('reference',[uirouter])
app.component('treeMenu', menuComponent)