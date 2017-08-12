/*
Path pattern: /versions/[0-9]+$
Description: For child ticket creation from the /issues page, set the same version.
*/

$(function(){
    // 子チケットの追加リンクを取得
    var addLink = $('#issue_tree a[href*="/issues/new"]')[0];
    if (!addLink) {
        return;
    }

    // 対象バージョンがあれば子チケットの追加リンクにパラメータ追加
    var version = $('#issue_fixed_version_id').val();
    if (version) {
        addLink.href += '&issue%5Bfixed_version_id%5D=' + version;
    }
});
