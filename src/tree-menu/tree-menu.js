// import templateUrl from 'src/tree-menu/tree-menu.html'
import $ from 'jquery';
// const templateUrl = require('./tree-menu.html')
// import '/src/tree-menu/style.scss'
export default {
    template: `<div class="tree well">
    <h3>Справка</h3>
    <ul>
        <li>
            <span><i class="icon-folder-open"></i> Parent</span> 
            <ul>
                <li>
                    <span><i class="icon-minus-sign"></i> Child</span> 
                    <ul>
                        <li>
                            <span><i class="icon-leaf"></i> Grand Child</span> 
                        </li>
                    </ul>
                </li>
                <li>
                    <span><i class="icon-minus-sign"></i> Child</span> 
                    <ul>
                        <li>
                            <span><i class="icon-leaf"></i> Grand Child</span> 
                        </li>
                        <li>
                            <span><i class="icon-minus-sign"></i> Grand Child</span> 
                            <ul>
                                <li>
                                    <span><i class="icon-minus-sign"></i> Great Grand Child</span> 
                                    <ul>
                                        <li>
                                            <span><i class="icon-leaf"></i> Great great Grand Child</span> 
                                        </li>
                                        <li>
                                            <span><i class="icon-leaf"></i> Great great Grand Child</span> 
                                        </li>
                                     </ul>
                                </li>
                                <li>
                                    <span><i class="icon-leaf"></i> Great Grand Child</span> 
                                </li>
                                <li>
                                    <span><i class="icon-leaf"></i> Great Grand Child</span> 
                                </li>
                            </ul>
                        </li>
                        <li>
                            <span><i class="icon-leaf"></i> Grand Child</span> 
                        </li>
                    </ul>
                </li>
            </ul>
        </li>
        <li>
            <span><i class="icon-folder-open"></i> Parent2</span> 
            <ul>
                <li>
                    <span><i class="icon-leaf"></i> Child</span> 
                </li>
            </ul>
        </li>
    </ul>
</div>`,
    controller: menuCtrl
}
function menuCtrl () {
    var $ctrl = this
    $ctrl.$onInit = () => {
        $(function () {
            $('.tree li:has(ul)').addClass('parent_li').find(' > span').attr('title', 'Collapse this branch');
            $('.tree li.parent_li > span').on('click', function (e) {
                var children = $(this).parent('li.parent_li').find(' > ul > li');
                if (children.is(':visible')) {
                    children.hide('fast');
                    $(this).attr('title', 'Expand this branch').find(' > i').addClass('icon-plus-sign').removeClass('icon-minus-sign');
                } else {
                    children.show('fast');
                    $(this).attr('title', 'Collapse this branch').find(' > i').addClass('icon-minus-sign').removeClass('icon-plus-sign');
                }
                e.stopPropagation();
            });
        });
    }
}