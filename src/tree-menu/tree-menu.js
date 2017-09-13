// import templateUrl from 'src/tree-menu/tree-menu.html'
import $ from 'jquery';
import  templateUrl from './template.html'
// import './style.scss'
// import '/src/tree-menu/style.scss'
export default {
    template: templateUrl,
    require: {api: '^apiApp'},
    controller: menuCtrl
}
function menuCtrl () {
    var $ctrl = this
    $ctrl.$onInit = () => {
        $ctrl.treeData = {
            name: "Root",
            children: [{
                name: "First Child",
                children: [{
                    name: "First Grandchild"
                }, {
                    name: "Second Grandchild"
                }]
                }, {
                name: "Second Child"
                }]
          };
        var count = 0;
        $(function () {
            $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
            $('.tree li.parent_li > span').on('click', function (e) {
                var children = $(this).parent('li.parent_li').find(' > ul > li');
                if (children.is(':visible')) {
                    children.hide('fast');
                    $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
                } else {
                    children.show('fast');
                    // $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
                }
                e.stopPropagation();
            });
        });
    }
}