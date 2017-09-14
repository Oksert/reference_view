var serv = require('./serverData.json')
var fs = require('fs');
// serv.forEach(function(article) {
//     console.log(article.fieldList.km_articleid)
//     var filepath = "./data/article_" + article.fieldList.km_articleid + ".html"
//     // fs.closeSync(fs.openSync(filepath, 'w'));
//     fs.writeFile(filepath, article.fieldList.description,{ flag: 'wx' }, function(err) {
//         if(err) {
//             return console.log(err);
//         }
    
//         console.log("The file was saved!");
//     }); 

// });
var list = serv.map((elem)=>{
    return {
        km_articleid:elem.fieldList.km_articleid,
        displayname:elem.fieldList.displayname,
        parent_article: elem.fieldList.parent_article
        
    }
})
fs.writeFile('./tree.json', JSON.stringify(list_to_tree(list)),{ flag: 'wx' }, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 

function list_to_tree(list) {
    var map = {}, node, roots = [], i;
    for (i = 0; i < list.length; i += 1) {
        map[list[i].km_articleid] = i; // initialize the map
        list[i].children = []; // initialize the children
    }
    for (i = 0; i < list.length; i += 1) {
        node = list[i];
        if (node.parent_article > 0) {
            // if you have dangling branches check that map[node.parentId] exists
            list[map[node.parent_article]].children.push(node);
        } else {
            roots.push(node);
        }
    }
    return roots;
}
