// Generated from gram.txt by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');



var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002!\u0110\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004",
    "\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t",
    "\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0003\u0002\u0003\u0002\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\t\u0003\t\u0003",
    "\n\u0003\n\u0003\u000b\u0006\u000bb\n\u000b\r\u000b\u000e\u000bc\u0003",
    "\u000b\u0003\u000b\u0007\u000bh\n\u000b\f\u000b\u000e\u000bk\u000b\u000b",
    "\u0003\u000b\u0003\u000b\u0006\u000bo\n\u000b\r\u000b\u000e\u000bp\u0005",
    "\u000bs\n\u000b\u0003\u000b\u0003\u000b\u0005\u000bw\n\u000b\u0003\u000b",
    "\u0006\u000bz\n\u000b\r\u000b\u000e\u000b{\u0005\u000b~\n\u000b\u0003",
    "\u000b\u0005\u000b\u0081\n\u000b\u0003\u000b\u0006\u000b\u0084\n\u000b",
    "\r\u000b\u000e\u000b\u0085\u0003\u000b\u0003\u000b\u0005\u000b\u008a",
    "\n\u000b\u0003\u000b\u0006\u000b\u008d\n\u000b\r\u000b\u000e\u000b\u008e",
    "\u0005\u000b\u0091\n\u000b\u0003\f\u0005\f\u0094\n\f\u0003\f\u0006\f",
    "\u0097\n\f\r\f\u000e\f\u0098\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0003",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0005\u0010\u00af\n\u0010",
    "\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0013\u0003\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016\u0003\u0016",
    "\u0003\u0016\u0005\u0016\u00ca\n\u0016\u0003\u0017\u0003\u0017\u0003",
    "\u0017\u0003\u0017\u0007\u0017\u00d0\n\u0017\f\u0017\u000e\u0017\u00d3",
    "\u000b\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003\u0018\u0003\u0018",
    "\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003\u001a",
    "\u0003\u001a\u0003\u001a\u0003\u001b\u0003\u001b\u0003\u001b\u0003\u001b",
    "\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c\u0003\u001c",
    "\u0003\u001c\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d\u0003\u001d",
    "\u0003\u001d\u0003\u001e\u0006\u001e\u00fa\n\u001e\r\u001e\u000e\u001e",
    "\u00fb\u0003\u001f\u0006\u001f\u00ff\n\u001f\r\u001f\u000e\u001f\u0100",
    "\u0003\u001f\u0003\u001f\u0003 \u0003 \u0003 \u0003 \u0007 \u0109\n",
    " \f \u000e \u010c\u000b \u0003 \u0003 \u0003 \u0003\u010a\u0002!\u0003",
    "\u0003\u0005\u0004\u0007\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011",
    "\n\u0013\u000b\u0015\f\u0017\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f",
    "\u0011!\u0012#\u0013%\u0014\'\u0015)\u0016+\u0017-\u0018/\u00191\u001a",
    "3\u001b5\u001c7\u001d9\u001e;\u001f= ?!\u0003\u0002\n\u0003\u00022;",
    "\u0004\u0002GGgg\u0004\u0002--//\u0004\u0002>>@@\u0005\u0002\'\',,1",
    "1\u0003\u0002$$\u0005\u0002C\\aac|\u0005\u0002\u000b\f\u000f\u000f\"",
    "\"\u0002\u0128\u0002\u0003\u0003\u0002\u0002\u0002\u0002\u0005\u0003",
    "\u0002\u0002\u0002\u0002\u0007\u0003\u0002\u0002\u0002\u0002\t\u0003",
    "\u0002\u0002\u0002\u0002\u000b\u0003\u0002\u0002\u0002\u0002\r\u0003",
    "\u0002\u0002\u0002\u0002\u000f\u0003\u0002\u0002\u0002\u0002\u0011\u0003",
    "\u0002\u0002\u0002\u0002\u0013\u0003\u0002\u0002\u0002\u0002\u0015\u0003",
    "\u0002\u0002\u0002\u0002\u0017\u0003\u0002\u0002\u0002\u0002\u0019\u0003",
    "\u0002\u0002\u0002\u0002\u001b\u0003\u0002\u0002\u0002\u0002\u001d\u0003",
    "\u0002\u0002\u0002\u0002\u001f\u0003\u0002\u0002\u0002\u0002!\u0003",
    "\u0002\u0002\u0002\u0002#\u0003\u0002\u0002\u0002\u0002%\u0003\u0002",
    "\u0002\u0002\u0002\'\u0003\u0002\u0002\u0002\u0002)\u0003\u0002\u0002",
    "\u0002\u0002+\u0003\u0002\u0002\u0002\u0002-\u0003\u0002\u0002\u0002",
    "\u0002/\u0003\u0002\u0002\u0002\u00021\u0003\u0002\u0002\u0002\u0002",
    "3\u0003\u0002\u0002\u0002\u00025\u0003\u0002\u0002\u0002\u00027\u0003",
    "\u0002\u0002\u0002\u00029\u0003\u0002\u0002\u0002\u0002;\u0003\u0002",
    "\u0002\u0002\u0002=\u0003\u0002\u0002\u0002\u0002?\u0003\u0002\u0002",
    "\u0002\u0003A\u0003\u0002\u0002\u0002\u0005C\u0003\u0002\u0002\u0002",
    "\u0007I\u0003\u0002\u0002\u0002\tK\u0003\u0002\u0002\u0002\u000bM\u0003",
    "\u0002\u0002\u0002\rP\u0003\u0002\u0002\u0002\u000fU\u0003\u0002\u0002",
    "\u0002\u0011\\\u0003\u0002\u0002\u0002\u0013^\u0003\u0002\u0002\u0002",
    "\u0015\u0090\u0003\u0002\u0002\u0002\u0017\u0093\u0003\u0002\u0002\u0002",
    "\u0019\u009a\u0003\u0002\u0002\u0002\u001b\u009d\u0003\u0002\u0002\u0002",
    "\u001d\u00a1\u0003\u0002\u0002\u0002\u001f\u00ae\u0003\u0002\u0002\u0002",
    "!\u00b0\u0003\u0002\u0002\u0002#\u00b2\u0003\u0002\u0002\u0002%\u00b4",
    "\u0003\u0002\u0002\u0002\'\u00b6\u0003\u0002\u0002\u0002)\u00b8\u0003",
    "\u0002\u0002\u0002+\u00c9\u0003\u0002\u0002\u0002-\u00cb\u0003\u0002",
    "\u0002\u0002/\u00d6\u0003\u0002\u0002\u00021\u00dc\u0003\u0002\u0002",
    "\u00023\u00e2\u0003\u0002\u0002\u00025\u00e7\u0003\u0002\u0002\u0002",
    "7\u00ec\u0003\u0002\u0002\u00029\u00f2\u0003\u0002\u0002\u0002;\u00f9",
    "\u0003\u0002\u0002\u0002=\u00fe\u0003\u0002\u0002\u0002?\u0104\u0003",
    "\u0002\u0002\u0002AB\u0007=\u0002\u0002B\u0004\u0003\u0002\u0002\u0002",
    "CD\u0007y\u0002\u0002DE\u0007j\u0002\u0002EF\u0007k\u0002\u0002FG\u0007",
    "n\u0002\u0002GH\u0007g\u0002\u0002H\u0006\u0003\u0002\u0002\u0002IJ",
    "\u0007*\u0002\u0002J\b\u0003\u0002\u0002\u0002KL\u0007+\u0002\u0002",
    "L\n\u0003\u0002\u0002\u0002MN\u0007k\u0002\u0002NO\u0007h\u0002\u0002",
    "O\f\u0003\u0002\u0002\u0002PQ\u0007g\u0002\u0002QR\u0007n\u0002\u0002",
    "RS\u0007u\u0002\u0002ST\u0007g\u0002\u0002T\u000e\u0003\u0002\u0002",
    "\u0002UV\u0007t\u0002\u0002VW\u0007g\u0002\u0002WX\u0007v\u0002\u0002",
    "XY\u0007w\u0002\u0002YZ\u0007t\u0002\u0002Z[\u0007p\u0002\u0002[\u0010",
    "\u0003\u0002\u0002\u0002\\]\u0007}\u0002\u0002]\u0012\u0003\u0002\u0002",
    "\u0002^_\u0007\u007f\u0002\u0002_\u0014\u0003\u0002\u0002\u0002`b\t",
    "\u0002\u0002\u0002a`\u0003\u0002\u0002\u0002bc\u0003\u0002\u0002\u0002",
    "ca\u0003\u0002\u0002\u0002cd\u0003\u0002\u0002\u0002de\u0003\u0002\u0002",
    "\u0002ei\u00070\u0002\u0002fh\t\u0002\u0002\u0002gf\u0003\u0002\u0002",
    "\u0002hk\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002",
    "\u0002\u0002js\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002ln\u0007",
    "0\u0002\u0002mo\t\u0002\u0002\u0002nm\u0003\u0002\u0002\u0002op\u0003",
    "\u0002\u0002\u0002pn\u0003\u0002\u0002\u0002pq\u0003\u0002\u0002\u0002",
    "qs\u0003\u0002\u0002\u0002ra\u0003\u0002\u0002\u0002rl\u0003\u0002\u0002",
    "\u0002s}\u0003\u0002\u0002\u0002tv\t\u0003\u0002\u0002uw\t\u0004\u0002",
    "\u0002vu\u0003\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002wy\u0003\u0002",
    "\u0002\u0002xz\t\u0002\u0002\u0002yx\u0003\u0002\u0002\u0002z{\u0003",
    "\u0002\u0002\u0002{y\u0003\u0002\u0002\u0002{|\u0003\u0002\u0002\u0002",
    "|~\u0003\u0002\u0002\u0002}t\u0003\u0002\u0002\u0002}~\u0003\u0002\u0002",
    "\u0002~\u0091\u0003\u0002\u0002\u0002\u007f\u0081\u0007/\u0002\u0002",
    "\u0080\u007f\u0003\u0002\u0002\u0002\u0080\u0081\u0003\u0002\u0002\u0002",
    "\u0081\u0083\u0003\u0002\u0002\u0002\u0082\u0084\t\u0002\u0002\u0002",
    "\u0083\u0082\u0003\u0002\u0002\u0002\u0084\u0085\u0003\u0002\u0002\u0002",
    "\u0085\u0083\u0003\u0002\u0002\u0002\u0085\u0086\u0003\u0002\u0002\u0002",
    "\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0089\t\u0003\u0002\u0002",
    "\u0088\u008a\t\u0004\u0002\u0002\u0089\u0088\u0003\u0002\u0002\u0002",
    "\u0089\u008a\u0003\u0002\u0002\u0002\u008a\u008c\u0003\u0002\u0002\u0002",
    "\u008b\u008d\t\u0002\u0002\u0002\u008c\u008b\u0003\u0002\u0002\u0002",
    "\u008d\u008e\u0003\u0002\u0002\u0002\u008e\u008c\u0003\u0002\u0002\u0002",
    "\u008e\u008f\u0003\u0002\u0002\u0002\u008f\u0091\u0003\u0002\u0002\u0002",
    "\u0090r\u0003\u0002\u0002\u0002\u0090\u0080\u0003\u0002\u0002\u0002",
    "\u0091\u0016\u0003\u0002\u0002\u0002\u0092\u0094\u0007/\u0002\u0002",
    "\u0093\u0092\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002",
    "\u0094\u0096\u0003\u0002\u0002\u0002\u0095\u0097\t\u0002\u0002\u0002",
    "\u0096\u0095\u0003\u0002\u0002\u0002\u0097\u0098\u0003\u0002\u0002\u0002",
    "\u0098\u0096\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002",
    "\u0099\u0018\u0003\u0002\u0002\u0002\u009a\u009b\u0007q\u0002\u0002",
    "\u009b\u009c\u0007t\u0002\u0002\u009c\u001a\u0003\u0002\u0002\u0002",
    "\u009d\u009e\u0007c\u0002\u0002\u009e\u009f\u0007p\u0002\u0002\u009f",
    "\u00a0\u0007f\u0002\u0002\u00a0\u001c\u0003\u0002\u0002\u0002\u00a1",
    "\u00a2\u0007p\u0002\u0002\u00a2\u00a3\u0007q\u0002\u0002\u00a3\u00a4",
    "\u0007v\u0002\u0002\u00a4\u001e\u0003\u0002\u0002\u0002\u00a5\u00a6",
    "\u0007@\u0002\u0002\u00a6\u00af\u0007?\u0002\u0002\u00a7\u00a8\u0007",
    ">\u0002\u0002\u00a8\u00af\u0007?\u0002\u0002\u00a9\u00af\t\u0005\u0002",
    "\u0002\u00aa\u00ab\u0007#\u0002\u0002\u00ab\u00af\u0007?\u0002\u0002",
    "\u00ac\u00ad\u0007?\u0002\u0002\u00ad\u00af\u0007?\u0002\u0002\u00ae",
    "\u00a5\u0003\u0002\u0002\u0002\u00ae\u00a7\u0003\u0002\u0002\u0002\u00ae",
    "\u00a9\u0003\u0002\u0002\u0002\u00ae\u00aa\u0003\u0002\u0002\u0002\u00ae",
    "\u00ac\u0003\u0002\u0002\u0002\u00af \u0003\u0002\u0002\u0002\u00b0",
    "\u00b1\u0007?\u0002\u0002\u00b1\"\u0003\u0002\u0002\u0002\u00b2\u00b3",
    "\u0007-\u0002\u0002\u00b3$\u0003\u0002\u0002\u0002\u00b4\u00b5\t\u0006",
    "\u0002\u0002\u00b5&\u0003\u0002\u0002\u0002\u00b6\u00b7\u0007/\u0002",
    "\u0002\u00b7(\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007.\u0002\u0002",
    "\u00b9*\u0003\u0002\u0002\u0002\u00ba\u00bb\u0007k\u0002\u0002\u00bb",
    "\u00bc\u0007p\u0002\u0002\u00bc\u00ca\u0007v\u0002\u0002\u00bd\u00be",
    "\u0007u\u0002\u0002\u00be\u00bf\u0007v\u0002\u0002\u00bf\u00c0\u0007",
    "t\u0002\u0002\u00c0\u00c1\u0007k\u0002\u0002\u00c1\u00c2\u0007p\u0002",
    "\u0002\u00c2\u00ca\u0007i\u0002\u0002\u00c3\u00c4\u0007f\u0002\u0002",
    "\u00c4\u00c5\u0007q\u0002\u0002\u00c5\u00c6\u0007w\u0002\u0002\u00c6",
    "\u00c7\u0007d\u0002\u0002\u00c7\u00c8\u0007n\u0002\u0002\u00c8\u00ca",
    "\u0007g\u0002\u0002\u00c9\u00ba\u0003\u0002\u0002\u0002\u00c9\u00bd",
    "\u0003\u0002\u0002\u0002\u00c9\u00c3\u0003\u0002\u0002\u0002\u00ca,",
    "\u0003\u0002\u0002\u0002\u00cb\u00d1\u0007$\u0002\u0002\u00cc\u00cd",
    "\u0007^\u0002\u0002\u00cd\u00d0\u0007$\u0002\u0002\u00ce\u00d0\n\u0007",
    "\u0002\u0002\u00cf\u00cc\u0003\u0002\u0002\u0002\u00cf\u00ce\u0003\u0002",
    "\u0002\u0002\u00d0\u00d3\u0003\u0002\u0002\u0002\u00d1\u00cf\u0003\u0002",
    "\u0002\u0002\u00d1\u00d2\u0003\u0002\u0002\u0002\u00d2\u00d4\u0003\u0002",
    "\u0002\u0002\u00d3\u00d1\u0003\u0002\u0002\u0002\u00d4\u00d5\u0007$",
    "\u0002\u0002\u00d5.\u0003\u0002\u0002\u0002\u00d6\u00d7\u0007r\u0002",
    "\u0002\u00d7\u00d8\u0007t\u0002\u0002\u00d8\u00d9\u0007k\u0002\u0002",
    "\u00d9\u00da\u0007p\u0002\u0002\u00da\u00db\u0007v\u0002\u0002\u00db",
    "0\u0003\u0002\u0002\u0002\u00dc\u00dd\u0007k\u0002\u0002\u00dd\u00de",
    "\u0007p\u0002\u0002\u00de\u00df\u0007r\u0002\u0002\u00df\u00e0\u0007",
    "w\u0002\u0002\u00e0\u00e1\u0007v\u0002\u0002\u00e12\u0003\u0002\u0002",
    "\u0002\u00e2\u00e3\u0007q\u0002\u0002\u00e3\u00e4\u0007r\u0002\u0002",
    "\u00e4\u00e5\u0007g\u0002\u0002\u00e5\u00e6\u0007p\u0002\u0002\u00e6",
    "4\u0003\u0002\u0002\u0002\u00e7\u00e8\u0007t\u0002\u0002\u00e8\u00e9",
    "\u0007g\u0002\u0002\u00e9\u00ea\u0007c\u0002\u0002\u00ea\u00eb\u0007",
    "f\u0002\u0002\u00eb6\u0003\u0002\u0002\u0002\u00ec\u00ed\u0007y\u0002",
    "\u0002\u00ed\u00ee\u0007t\u0002\u0002\u00ee\u00ef\u0007k\u0002\u0002",
    "\u00ef\u00f0\u0007v\u0002\u0002\u00f0\u00f1\u0007g\u0002\u0002\u00f1",
    "8\u0003\u0002\u0002\u0002\u00f2\u00f3\u0007e\u0002\u0002\u00f3\u00f4",
    "\u0007n\u0002\u0002\u00f4\u00f5\u0007q\u0002\u0002\u00f5\u00f6\u0007",
    "u\u0002\u0002\u00f6\u00f7\u0007g\u0002\u0002\u00f7:\u0003\u0002\u0002",
    "\u0002\u00f8\u00fa\t\b\u0002\u0002\u00f9\u00f8\u0003\u0002\u0002\u0002",
    "\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fb\u00f9\u0003\u0002\u0002\u0002",
    "\u00fb\u00fc\u0003\u0002\u0002\u0002\u00fc<\u0003\u0002\u0002\u0002",
    "\u00fd\u00ff\t\t\u0002\u0002\u00fe\u00fd\u0003\u0002\u0002\u0002\u00ff",
    "\u0100\u0003\u0002\u0002\u0002\u0100\u00fe\u0003\u0002\u0002\u0002\u0100",
    "\u0101\u0003\u0002\u0002\u0002\u0101\u0102\u0003\u0002\u0002\u0002\u0102",
    "\u0103\b\u001f\u0002\u0002\u0103>\u0003\u0002\u0002\u0002\u0104\u0105",
    "\u00071\u0002\u0002\u0105\u0106\u0007,\u0002\u0002\u0106\u010a\u0003",
    "\u0002\u0002\u0002\u0107\u0109\u000b\u0002\u0002\u0002\u0108\u0107\u0003",
    "\u0002\u0002\u0002\u0109\u010c\u0003\u0002\u0002\u0002\u010a\u010b\u0003",
    "\u0002\u0002\u0002\u010a\u0108\u0003\u0002\u0002\u0002\u010b\u010d\u0003",
    "\u0002\u0002\u0002\u010c\u010a\u0003\u0002\u0002\u0002\u010d\u010e\u0007",
    ",\u0002\u0002\u010e\u010f\u00071\u0002\u0002\u010f@\u0003\u0002\u0002",
    "\u0002\u0018\u0002ciprv{}\u0080\u0085\u0089\u008e\u0090\u0093\u0098",
    "\u00ae\u00c9\u00cf\u00d1\u00fb\u0100\u010a\u0003\b\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function gramLexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

gramLexer.prototype = Object.create(antlr4.Lexer.prototype);
gramLexer.prototype.constructor = gramLexer;

Object.defineProperty(gramLexer.prototype, "atn", {
        get : function() {
                return atn;
        }
});

gramLexer.EOF = antlr4.Token.EOF;
gramLexer.SEMI = 1;
gramLexer.WHILE = 2;
gramLexer.LP = 3;
gramLexer.RP = 4;
gramLexer.IF = 5;
gramLexer.ELSE = 6;
gramLexer.RETURN = 7;
gramLexer.LBR = 8;
gramLexer.RBR = 9;
gramLexer.FPNUM = 10;
gramLexer.NUM = 11;
gramLexer.OR = 12;
gramLexer.AND = 13;
gramLexer.NOT = 14;
gramLexer.RELOP = 15;
gramLexer.EQ = 16;
gramLexer.PLUS = 17;
gramLexer.MULOP = 18;
gramLexer.MINUS = 19;
gramLexer.CMA = 20;
gramLexer.TYPE = 21;
gramLexer.STRINGCONST = 22;
gramLexer.PRINT = 23;
gramLexer.INPUT = 24;
gramLexer.OPEN = 25;
gramLexer.READ = 26;
gramLexer.WRITE = 27;
gramLexer.CLOSE = 28;
gramLexer.ID = 29;
gramLexer.WHITESPACE = 30;
gramLexer.COMMENT = 31;

gramLexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

gramLexer.prototype.modeNames = [ "DEFAULT_MODE" ];

gramLexer.prototype.literalNames = [ null, "';'", "'while'", "'('", "')'", 
                                     "'if'", "'else'", "'return'", "'{'", 
                                     "'}'", null, null, "'or'", "'and'", 
                                     "'not'", null, "'='", "'+'", null, 
                                     "'-'", "','", null, null, "'print'", 
                                     "'input'", "'open'", "'read'", "'write'", 
                                     "'close'" ];

gramLexer.prototype.symbolicNames = [ null, "SEMI", "WHILE", "LP", "RP", 
                                      "IF", "ELSE", "RETURN", "LBR", "RBR", 
                                      "FPNUM", "NUM", "OR", "AND", "NOT", 
                                      "RELOP", "EQ", "PLUS", "MULOP", "MINUS", 
                                      "CMA", "TYPE", "STRINGCONST", "PRINT", 
                                      "INPUT", "OPEN", "READ", "WRITE", 
                                      "CLOSE", "ID", "WHITESPACE", "COMMENT" ];

gramLexer.prototype.ruleNames = [ "SEMI", "WHILE", "LP", "RP", "IF", "ELSE", 
                                  "RETURN", "LBR", "RBR", "FPNUM", "NUM", 
                                  "OR", "AND", "NOT", "RELOP", "EQ", "PLUS", 
                                  "MULOP", "MINUS", "CMA", "TYPE", "STRINGCONST", 
                                  "PRINT", "INPUT", "OPEN", "READ", "WRITE", 
                                  "CLOSE", "ID", "WHITESPACE", "COMMENT" ];

gramLexer.prototype.grammarFileName = "gram.txt";


exports.gramLexer = gramLexer;

