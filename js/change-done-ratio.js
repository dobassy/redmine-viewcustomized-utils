//
// Path pattern: 	/issues/[0-9]+$
//

// Path: /issues/[0-9]+$
$(function(){
  // ステータス変更後のajaxイベント終了後
  $(document).ajaxComplete(function(){
      // ステータスと進捗率の組み合わせ
      var statusMap = {
              '1' : '0',   /* 新規 */
              '5' : '100', /* 終了 */
              '6' : '100'  /* 却下 */
      };
      var status_id = $('#issue_status_id option:selected').val();
      var ratio = statusMap[status_id];
      if(ratio) {
          $('#issue_done_ratio').val(ratio);
      }

      var due_date = $('#issue_due_date').val();
      if (due_date === "") {
        if (status_id === '5' || status_id === '6') {
          var today = new Date();
          var year  = today.getFullYear();
          var month = today.getMonth()+1;
          month = ("0" + month).slice(-2)
          var day   = today.getDate();
          day = ("0" + day).slice(-2)

          var today_format = year + "-" + month + "-" + day;
          $('#issue_due_date').val(today_format);
        }
      }
  });
});
