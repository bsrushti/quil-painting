// Compiled by ClojureScript 1.10.520 {}
goog.provide('painting.core');
goog.require('cljs.core');
goog.require('quil.core');
goog.require('quil.middleware');
painting.core.setup = (function painting$core$setup(){
quil.core.background.call(null,(25));

quil.core.frame_rate.call(null,(30));

quil.core.color_mode.call(null,new cljs.core.Keyword(null,"hsb","hsb",-753472031));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rects","rects",1714526167),(50)], null);
});
painting.core.update_state = (function painting$core$update_state(state){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.mod.call(null,(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(state) + 0.7),(255)),new cljs.core.Keyword(null,"angle","angle",1622094254),(new cljs.core.Keyword(null,"angle","angle",1622094254).cljs$core$IFn$_invoke$arity$1(state) + 0.1)], null);
});
painting.core.draw_rect = (function painting$core$draw_rect(p__52411){
var map__52412 = p__52411;
var map__52412__$1 = (((((!((map__52412 == null))))?(((((map__52412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__52412):map__52412);
var x = cljs.core.get.call(null,map__52412__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__52412__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.call(null,map__52412__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__52412__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var fill = cljs.core.get.call(null,map__52412__$1,new cljs.core.Keyword(null,"fill","fill",883462889));
return quil.core.fill.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [fill,(255),(225)], null)).call(null,quil.core.rect.call(null,x,y,width,height));
});
painting.core.draw_state = (function painting$core$draw_state(rects){
var seq__52414_52418 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),(255),(10)));
var chunk__52415_52419 = null;
var count__52416_52420 = (0);
var i__52417_52421 = (0);
while(true){
if((i__52417_52421 < count__52416_52420)){
var x_52422 = cljs.core._nth.call(null,chunk__52415_52419,i__52417_52421);
quil.core.stroke.call(null,x_52422,(120),(255));

painting.core.draw_rect.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(x_52422 * (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(250),new cljs.core.Keyword(null,"height","height",1025178622),(750),new cljs.core.Keyword(null,"fill","fill",883462889),x_52422], null));


var G__52423 = seq__52414_52418;
var G__52424 = chunk__52415_52419;
var G__52425 = count__52416_52420;
var G__52426 = (i__52417_52421 + (1));
seq__52414_52418 = G__52423;
chunk__52415_52419 = G__52424;
count__52416_52420 = G__52425;
i__52417_52421 = G__52426;
continue;
} else {
var temp__5735__auto___52427 = cljs.core.seq.call(null,seq__52414_52418);
if(temp__5735__auto___52427){
var seq__52414_52428__$1 = temp__5735__auto___52427;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52414_52428__$1)){
var c__4550__auto___52429 = cljs.core.chunk_first.call(null,seq__52414_52428__$1);
var G__52430 = cljs.core.chunk_rest.call(null,seq__52414_52428__$1);
var G__52431 = c__4550__auto___52429;
var G__52432 = cljs.core.count.call(null,c__4550__auto___52429);
var G__52433 = (0);
seq__52414_52418 = G__52430;
chunk__52415_52419 = G__52431;
count__52416_52420 = G__52432;
i__52417_52421 = G__52433;
continue;
} else {
var x_52434 = cljs.core.first.call(null,seq__52414_52428__$1);
quil.core.stroke.call(null,x_52434,(120),(255));

painting.core.draw_rect.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"x","x",2099068185),(x_52434 * (3)),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(250),new cljs.core.Keyword(null,"height","height",1025178622),(750),new cljs.core.Keyword(null,"fill","fill",883462889),x_52434], null));


var G__52435 = cljs.core.next.call(null,seq__52414_52428__$1);
var G__52436 = null;
var G__52437 = (0);
var G__52438 = (0);
seq__52414_52418 = G__52435;
chunk__52415_52419 = G__52436;
count__52416_52420 = G__52437;
i__52417_52421 = G__52438;
continue;
}
} else {
}
}
break;
}

quil.core.fill.call(null,(255));

quil.core.stroke.call(null,(255));

quil.core.ellipse.call(null,(650),(80),(80),(80));

quil.core.ellipse.call(null,(540),(150),(30),(30));

quil.core.ellipse.call(null,(520),(250),(50),(50));

quil.core.ellipse.call(null,(400),(200),(100),(100));

quil.core.ellipse.call(null,(360),(250),(80),(80));

quil.core.ellipse.call(null,(320),(350),(60),(60));

quil.core.ellipse.call(null,(280),(300),(30),(30));

quil.core.ellipse.call(null,(220),(300),(60),(60));

quil.core.ellipse.call(null,(180),(450),(30),(30));

quil.core.ellipse.call(null,(150),(550),(30),(30));

quil.core.stroke.call(null,(5));

quil.core.fill.call(null,(5));

quil.core.begin_shape.call(null);

quil.core.vertex.call(null,(60),(560));

quil.core.vertex.call(null,(40),(650));

quil.core.vertex.call(null,(90),(650));

quil.core.end_shape.call(null);

quil.core.fill.call(null,(255));

quil.core.ellipse.call(null,(60),(570),(40),(40));

quil.core.fill.call(null,(5));

quil.core.stroke.call(null,(5));

quil.core.ellipse.call(null,(60),(550),(20),(20));

quil.core.ellipse.call(null,(50),(555),(20),(20));

quil.core.ellipse.call(null,(70),(555),(20),(20));

quil.core.fill.call(null,(255));

quil.core.ellipse.call(null,(62),(600),(12),(12));

quil.core.ellipse.call(null,(62),(620),(12),(12));

quil.core.ellipse.call(null,(62),(640),(12),(12));

quil.core.fill.call(null,(5));

quil.core.stroke.call(null,(5));

quil.core.rect.call(null,(50),(650),(3),(50));

quil.core.rect.call(null,(70),(650),(3),(50));

quil.core.ellipse.call(null,(45),(700),(20),(15));

quil.core.ellipse.call(null,(75),(700),(20),(15));

quil.core.stroke_weight.call(null,(5));

quil.core.line.call(null,(70),(610),(110),(570));

quil.core.line.call(null,(50),(610),(20),(570));

quil.core.fill.call(null,(5));

quil.core.stroke_weight.call(null,(3));

quil.core.ellipse.call(null,(54),(570),(2),(2));

quil.core.ellipse.call(null,(66),(570),(2),(2));

return quil.core.arc.call(null,(60),(578),(10),(10),(120),(40));
});
painting.core.run_sketch = (function painting$core$run_sketch(){
painting.core.painting = (function painting$core$run_sketch_$_painting(){
return quil.sketch.sketch.call(null,new cljs.core.Keyword(null,"host","host",-1558485167),"painting",new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(750),(750)], null),new cljs.core.Keyword(null,"setup","setup",1987730512),((cljs.core.fn_QMARK_.call(null,painting.core.setup))?(function() { 
var G__52439__delegate = function (args){
return cljs.core.apply.call(null,painting.core.setup,args);
};
var G__52439 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52440__i = 0, G__52440__a = new Array(arguments.length -  0);
while (G__52440__i < G__52440__a.length) {G__52440__a[G__52440__i] = arguments[G__52440__i + 0]; ++G__52440__i;}
  args = new cljs.core.IndexedSeq(G__52440__a,0,null);
} 
return G__52439__delegate.call(this,args);};
G__52439.cljs$lang$maxFixedArity = 0;
G__52439.cljs$lang$applyTo = (function (arglist__52441){
var args = cljs.core.seq(arglist__52441);
return G__52439__delegate(args);
});
G__52439.cljs$core$IFn$_invoke$arity$variadic = G__52439__delegate;
return G__52439;
})()
:painting.core.setup),new cljs.core.Keyword(null,"middleware","middleware",1462115504),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [quil.middleware.fun_mode], null),new cljs.core.Keyword(null,"draw","draw",1358331674),((cljs.core.fn_QMARK_.call(null,painting.core.draw_state))?(function() { 
var G__52442__delegate = function (args){
return cljs.core.apply.call(null,painting.core.draw_state,args);
};
var G__52442 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__52443__i = 0, G__52443__a = new Array(arguments.length -  0);
while (G__52443__i < G__52443__a.length) {G__52443__a[G__52443__i] = arguments[G__52443__i + 0]; ++G__52443__i;}
  args = new cljs.core.IndexedSeq(G__52443__a,0,null);
} 
return G__52442__delegate.call(this,args);};
G__52442.cljs$lang$maxFixedArity = 0;
G__52442.cljs$lang$applyTo = (function (arglist__52444){
var args = cljs.core.seq(arglist__52444);
return G__52442__delegate(args);
});
G__52442.cljs$core$IFn$_invoke$arity$variadic = G__52442__delegate;
return G__52442;
})()
:painting.core.draw_state));
});
goog.exportSymbol('painting.core.painting', painting.core.painting);

if(cljs.core.truth_(cljs.core.some.call(null,(function (p1__20916__20917__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"no-start","no-start",1381488856),p1__20916__20917__auto__);
}),null))){
return null;
} else {
return quil.sketch.add_sketch_to_init_list.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fn","fn",-1175266204),painting.core.painting,new cljs.core.Keyword(null,"host-id","host-id",742376279),"painting"], null));
}
});
goog.exportSymbol('painting.core.run_sketch', painting.core.run_sketch);

//# sourceMappingURL=core.js.map?rel=1585772865617
