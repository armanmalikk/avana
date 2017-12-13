console.log("hello world");
$('#feature-table tr td').each(function(){
    var me = $(this);
    me.html( me.text().replace('FindEvent'),'<strong>$1</strong>');
  });