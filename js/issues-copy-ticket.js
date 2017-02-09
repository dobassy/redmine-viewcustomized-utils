//
// Path pattern: 	/issues/[0-9]+/copy$
//

/*
チケットコピー時のカスタマイズ
Path pattern: /issues/[0-9]+/copy$
Type: JavaScript
via: http://qiita.com/wfigo7/items/f13a89e1d3522f4a73b6
*/
$(function(){

    // ステータス　⇒　新規
    // val()ではうまくいかない。プルダウン変更時のイベントが関係している？
    $('#issue_status_id option').removeAttr('selected');
    $('#issue_status_id option[value=1]').attr('selected', true).trigger('change');

    // 開始日　⇒　今日
    //$('#issue_start_date').val(getToday());
    // 完了日
    //$('#issue_due_date').val('');
    // 進捗率
    $('#issue_done_ratio').val('0');

    // 添付ファイルをコピー　⇒　チェックを外す
    $('#copy_attachments').removeAttr('checked');
    // チケットのウォッチャー　⇒　true: すべてチェックを入れる / false: はずす
    $('#watchers_inputs input[type=checkbox]').attr('checked', false);

});

/* 当日文字列を習得　「YYYY-MM-DD」 */
function getToday() {

    var now = new Date();
    return yyyymmdd = now.getFullYear() + '-' +
        ( "0"+(now.getMonth() + 1)).slice(-2) + '-' +
        ( "0"+now.getDate() ).slice(-2);
}
