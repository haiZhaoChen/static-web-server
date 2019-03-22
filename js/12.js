// JavaScript Document
$ ( function () {
if ( navigator . userAgent . toLowerCase (). indexOf ( "chrome" ) >= 0 ) {
$ ( window ). load ( function (){
$ ( 'ul input:not(input[type=submit])' ). each ( function (){
var outHtml = this . outerHTML ;
$ ( this ). append ( outHtml );
});
});
}
});