$('a[href]').each(function(){
    console.log(this.href, this);
});

// var $hover = $('<div>点点点</div>').css({
//     display: 'none',
//     position: 'absolute',
//     left: 0,
//     top: 0,
//     width: 40,
//     height: 40,
//     cursor: 'pointer'
// }).click(function(){
//     var link = $hover.data('link');
// }).appendTo('body');
//
// $('a[href]').hover(function(jEvent) {
//     // console.log('hover on the element', this);
//     $hover.offset({
//         left: jEvent.pageX,
//         top: jEvent.pageY
//     })
//     .show()
//     .data('link', this);
//
// }, function() {
//     // $hover.hide();
//     // console.log('hover out of the element', this);
// });
