//
// Path pattern: 	/issues/[0-9]+$
//

/*
* 子チケット作成時に version を引き継ぎ
* Path pattern: /issues/[0-9]+$
* Type: JavaScript
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
