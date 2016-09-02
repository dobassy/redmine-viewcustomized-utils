//
// Path pattern: 	/versions/[0-9]+$
//

/*
バージョンページで新規チケット作成時には引き継いでセットする
Path pattern: /versions/[0-9]+$
Type: JavaScript
*/

$(function(){
var href = window.location.href;
var reg = /versions\/([0-9]+)?/;
var version = href.match(reg)[1];

if (!version) {
    return;
}

// 対象バージョンがあればリンクにパラメータ追加
var new_issue_link = $('a.new-issue-sub').attr("href");
new_issue_link += '?issue%5Bfixed_version_id%5D=' + version;
$('a.new-issue-sub').attr("href", new_issue_link);
});
